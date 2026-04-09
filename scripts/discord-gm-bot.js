// Discord GM Bot — Alva Cloud market vibe script
// Runs on Alva Cloud via /api/v1/run, scans crypto + US stocks + indices + news,
// picks the single hottest signal, generates a punchy one-liner via LLM.
//
// Usage: POST /api/v1/run with this as inline code, or upload to ALFS and use entry_path.
// The output (in `logs` field) is JSON: {signal, market, vibe, cryptoMovers, usMovers, indices}

(async () => {
  const { getCryptoByMetricTimeRange } = require("@arrays/crypto/metrics-time-range-screener:v1.0.0");
  const { getStockKline } = require("@arrays/data/stock/spot/ohlcv:v1.0.0");
  const { getSerperSearch } = require("@arrays/data/search/serper-search:v1.0.0");
  const adk = require("@alva/adk");

  const nowMs = Date.now();
  const nowSec = Math.floor(nowMs / 1000);
  const threeDaysAgoSec = nowSec - 3 * 86400;
  const twoDaysAgoMs = nowMs - 172800000;

  // 1. Crypto top movers
  const cryptoScreen = getCryptoByMetricTimeRange({
    start_time: twoDaysAgoMs, end_time: nowMs, metric: "PRICE_CHANGE_1D"
  });
  const cryptoMovers = cryptoScreen.response.data
    .slice().sort((a, b) => Math.abs(b.value) - Math.abs(a.value)).slice(0, 5)
    .map(d => ({ ticker: d.ticker.replace("USDT",""), change: Number(d.value.toFixed(2)) }));

  // 2. US mega-cap movers (close-to-close change)
  const usTickers = ["AAPL","MSFT","NVDA","AMZN","META","TSLA","GOOGL","JPM","LLY","AVGO"];
  const usMovers = [];
  for (const ticker of usTickers) {
    try {
      const bars = getStockKline({ ticker, start_time: threeDaysAgoSec, end_time: nowSec, interval: "1d" }).response.data;
      if (bars && bars.length >= 2) {
        const prev = bars[bars.length - 2], curr = bars[bars.length - 1];
        usMovers.push({ ticker, change: Number(((curr.close - prev.close) / prev.close * 100).toFixed(2)) });
      }
    } catch (_) {}
  }

  // 3. Major indices
  const indices = {};
  for (const sym of ["SPY","QQQ","DIA"]) {
    try {
      const bars = getStockKline({ ticker: sym, start_time: threeDaysAgoSec, end_time: nowSec, interval: "1d" }).response.data;
      if (bars && bars.length >= 2) {
        const prev = bars[bars.length - 2], curr = bars[bars.length - 1];
        indices[sym] = { change: Number(((curr.close - prev.close) / prev.close * 100).toFixed(2)) };
      }
    } catch (_) {}
  }

  // 4. News headlines
  const news = getSerperSearch({ q: "crypto stock market today", type: "news", tbs: "qdr:d", num: 6 });
  const headlines = (news.response.data || []).slice(0, 6).map(n => n.title);

  // 5. LLM picks hottest signal
  const result = await adk.agent({
    system: `You are a witty market commentator. Given movers and headlines, pick the ONE most explosive signal and write a punchy one-liner (max 20 words). Output JSON: {"signal":"<ticker>","market":"crypto|stock|macro","vibe":"<one sentence>"}`,
    prompt: JSON.stringify({ cryptoMovers: cryptoMovers.slice(0,3), usMovers: usMovers.slice(0,3), indices, headlines }),
    tools: [],
    maxTurns: 1,
  });

  console.log(result.content.trim());
})();
