---
name: alva-growth
description: >-
  Alva internal growth team skill. Use when working on growth content
  production (social posts, case studies, product narratives, launch copy),
  growth data analysis (user funnels, playbook metrics, engagement),
  product capability mapping, growth engineering, KOL/influencer outreach,
  community operations (Discord bot, Telegram push), or distribution
  channel strategy.
  Trigger keywords: growth, content, marketing, launch, funnel, engagement,
  onboarding, retention, activation, playbook metrics, user journey, KOL,
  influencer, Discord, community, distribution.
metadata:
  author: bruce
  version: v0.2.0
---

# Alva Growth

Internal skill for Alva's growth team. Covers six domains: **product
capabilities**, **content production**, **growth data analysis**, **growth
engineering**, **KOL/influencer strategy**, and **community & distribution
channels**.

---

## 1. Product Capabilities Reference

This is the canonical source of truth for what Alva can do. Use it when
writing copy, answering product questions, or scoping growth experiments.

### Core Platform

| Capability | Description | Key Detail |
| --- | --- | --- |
| **250+ Financial Data SDKs** | Unified API across crypto, equities, ETFs, macro, on-chain, social | Spot/futures OHLCV, funding rates, fundamentals, insider/senator trades, earnings, CPI, GDP, Treasury, DeFi, news, social |
| **Cloud JS Runtime** | Sandboxed V8 isolate on Alva Cloud | No local compute, no dependencies, no infra to manage |
| **Agentic Playbooks** | Data pipelines + trading strategies + scheduled automations | Runs continuously on Alva Cloud, shareable at `alva.ai/u/{user}/playbooks/{name}` |
| **Altra Backtesting** | Event-driven backtesting engine | Historical backtest + continuous live paper trading, custom indicators, portfolio simulation |
| **Feed SDK** | Persistent data pipelines with time series storage | Incremental updates, KV state, dedup, queryable via `@last/@range/@count` |
| **ADK (Agent Dev Kit)** | LLM-powered agents inside the runtime | Research synthesis, classification, summarization over real data |
| **Content Search** | Cross-platform search: Twitter/X, news, Reddit, YouTube, podcasts, web | Sentiment, narratives, analyst commentary, community reactions |
| **Remix** | Fork any published playbook, customize, deploy as your own | Preserves lineage, lowers creation barrier |
| **Push Notifications** | Signal feeds push to Telegram followers | Actionable alerts on crossover/breakout/anomaly |
| **Secret Manager** | Encrypted storage for third-party API keys | Runtime access via `require("secret-manager")` |
| **Design System** | Consistent playbook UI: tokens, typography, widgets, components | Dark theme, Delight font, ECharts integration |

### SDK Partition Map

Use this when explaining data coverage in content or scoping what's possible.

| Partition | What It Covers |
| --- | --- |
| `spot_market_price_and_volume` | Spot OHLCV for crypto + equities |
| `crypto_futures_data` | Perpetual futures: OHLCV, funding rates, OI, long/short |
| `crypto_technical_metrics` | On-chain: MVRV, SOPR, NUPL, whale ratio, MA, RSI, MACD, Bollinger (20 modules) |
| `crypto_exchange_flow` | Exchange inflow/outflow |
| `crypto_fundamentals` | Circulating supply, max supply, market dominance |
| `crypto_screener` | Screen crypto by technical metrics |
| `company_crypto_holdings` | Public companies' crypto holdings (e.g. MicroStrategy BTC) |
| `equity_fundamentals` | Income, balance sheet, cash flow, PE, PB, ROE, EPS, market cap (31 modules) |
| `equity_estimates_and_targets` | Analyst price targets, consensus estimates, earnings guidance |
| `equity_events_calendar` | Dividend + stock split calendar |
| `equity_ownership_and_flow` | Institutional holdings, insider trades, senator trading |
| `stock_screener` | Screen by sector, industry, financials, technicals (9 modules) |
| `stock_technical_metrics` | Beta, volatility, Bollinger, EMA, MA, MACD, RSI, VWAP |
| `etf_fundamentals` | ETF holdings breakdown |
| `macro_and_economics_data` | CPI, GDP, unemployment, fed funds, Treasury, VIX, nonfarm payroll (20 modules) |
| `technical_indicator_calculation_helpers` | 50+ pure calculation helpers: RSI, MACD, ATR, VWAP, Ichimoku, etc. |
| `feed_widgets` | Social & news subscription: Twitter/X, YouTube, Reddit, podcasts |

### User Journey (for funnel/activation context)

```
Sign up → Get API key → Connect in IDE/CLI → Ask a question or build a playbook
→ Deploy feed (cronjob) → Release playbook → Share URL → Others remix
```

Key activation moments:
1. **First data query** — user sees real financial data returned instantly
2. **First playbook release** — user has a shareable URL
3. **First remix** — user forks someone else's work, lowers creation barrier
4. **First push notification** — user gets a Telegram alert from their own signal

---

## 2. Content Production

### Supported Content Types

| Type | Purpose | Typical Length |
| --- | --- | --- |
| **Social post** (Twitter/X, LinkedIn) | Product awareness, feature launches, use cases | 1-3 paragraphs or thread |
| **Case study** | Show real playbook builds, data insights, backtesting results | 500-1500 words |
| **Product narrative** | Explain a capability or workflow end-to-end | 300-800 words |
| **Launch copy** | New feature announcements | Headline + 2-3 paragraphs |
| **Onboarding guide** | Help new users reach activation | Step-by-step with code |
| **Playbook showcase** | Highlight a specific published playbook | Screenshot + analysis |
| **Changelog entry** | What shipped, why it matters | 1-2 paragraphs per item |

### Content Production Rules

1. **Data-driven, not hype.** Every claim must be backed by a real capability or
   real data. "250+ financial data SDKs" is a fact. "Revolutionary AI platform"
   is fluff. Lead with what the user can actually do.

2. **Show, don't tell.** Prefer code snippets, screenshots, playbook URLs, and
   concrete examples over abstract descriptions. A 5-line code block that fetches
   BTC funding rates is more compelling than a paragraph about "seamless data
   access."

3. **User voice when possible.** If referencing a real playbook build or
   backtesting result, use the actual data. For example, the senator trading
   alpha test showed median alpha of -10.2% — that's an honest, interesting
   finding worth sharing (data disproved the thesis, which is the story).

4. **Platform URLs are the CTA.** Always include the playbook URL
   (`alva.ai/u/{user}/playbooks/{name}`) so readers can see, interact, and remix.

5. **Avoid**: "revolutionary", "cutting-edge", "game-changing", "unlock the
   power of". Use direct language: "build", "deploy", "backtest", "share".

### Content Workflow

```
1. Identify the hook (what's interesting? a result, a new feature, a use case)
2. Pull real data or reference real playbooks
3. Draft content with the appropriate type template
4. Include at least one concrete artifact (URL, screenshot, code snippet, data point)
5. Review for accuracy — every data claim must be verifiable
```

### Using Alva APIs for Content

When creating content that references live data or playbooks, use the Alva API
to pull real information:

```bash
# Get user's playbooks
curl -s -H "X-Alva-Api-Key: $ALVA_API_KEY" \
  "${ALVA_ENDPOINT:-https://api-llm.prd.alva.ai}/api/v1/fs/readdir?path=~/playbooks"

# Screenshot a playbook for social media
curl -s -H "X-Alva-Api-Key: $ALVA_API_KEY" \
  "${ALVA_ENDPOINT:-https://api-llm.prd.alva.ai}/api/v1/screenshot?url=https://alva.ai/u/{user}/playbooks/{name}"

# Get latest feed data for a case study
curl -s "${ALVA_ENDPOINT:-https://api-llm.prd.alva.ai}/api/v1/fs/read?path=/alva/home/{user}/feeds/{feed}/v1/data/{group}/{output}/@last/10"
```

---

## 3. Growth Data Analysis

### Key Metrics Framework

| Metric Category | What to Measure | How |
| --- | --- | --- |
| **Activation** | First data query, first playbook release, first remix | Track user journey milestones |
| **Engagement** | Playbook views, feed execution count, API call volume | ALFS + cronjob stats |
| **Retention** | Weekly/monthly active builders, returning users | User activity over time |
| **Virality** | Remix count per playbook, shares, playbook follower count | Remix lineage, push subscribers |
| **Content** | Playbook count, feed count, SDK usage distribution | ALFS directory listings |

### Analysis Patterns

**Playbook ecosystem health** — List all public playbooks, check freshness
(latest feed data timestamp vs now), count remix chains, identify top creators.

**SDK usage distribution** — Which data partitions are most used? Where are
gaps? This informs both content strategy (write about what's popular) and
product prioritization (improve what's underserved).

**Activation funnel** — Where do users drop off? Sign up → API key → first
query → first playbook → first release. Each step is measurable.

**Content performance** — Which playbooks get the most views/remixes? What
topics resonate? Use this to guide content production priorities.

### Running Analysis on Alva Cloud

You can run analysis scripts directly on Alva's runtime:

```bash
# Execute an analysis script
curl -s -H "X-Alva-Api-Key: $ALVA_API_KEY" \
  -H "Content-Type: application/json" \
  "${ALVA_ENDPOINT:-https://api-llm.prd.alva.ai}/api/v1/run" \
  -d '{"code":"/* analysis code here */"}'
```

---

## 4. Growth Engineering

### Growth Experiments via Playbooks

Playbooks themselves are growth tools. Each published playbook is:
- A shareable URL that demonstrates platform value
- A remixable template that lowers the barrier for new users
- A content piece that can be distributed on social channels

### Growth Engineering Patterns

**Template playbooks** — Build high-quality playbooks covering popular use
cases (BTC dashboard, earnings tracker, macro monitor, portfolio analyzer).
These serve as both product demos and remix templates.

**Onboarding playbooks** — Create step-by-step tutorial playbooks that guide
new users through their first build. Progressive complexity: data query →
simple feed → full playbook.

**Showcase playbooks** — Build playbooks around trending topics or timely
events (earnings season, FOMC meetings, crypto narratives) to drive organic
discovery.

**Signal playbooks with push** — Playbooks with Telegram push notifications
create daily touchpoints that keep users engaged and demonstrate ongoing value.

### Key Existing Playbooks (Bruce's)

| Playbook | URL | Status | Key Finding |
| --- | --- | --- | --- |
| smart-money | `alva.ai/u/bruce/playbooks/smart-money` | Active | Insider filing clusters + price overlay |
| insider-hold-alpha | `alva.ai/u/bruce/playbooks/insider-hold-alpha` | Active | Senator purchases generate NO alpha (median -10.2%, hit rate 33%) |

The insider-hold-alpha result is a strong content piece: "We backtested 334
senator purchases across 234 stocks over 2 years. The result? No alpha." This
kind of honest, data-driven storytelling is exactly what builds credibility.

### Filesystem Convention

All growth-related assets follow Alva's standard layout:

| Path | Purpose |
| --- | --- |
| `~/feeds/{name}/v1/src/` | Feed script source |
| `~/feeds/{name}/v1/data/` | Feed data (auto-managed) |
| `~/playbooks/{name}/` | Playbook web app assets |
| `~/tasks/{name}/src/` | One-off analysis scripts |

---

## 5. Quick Reference: Common Growth Tasks

| Task | Action |
| --- | --- |
| "Write a tweet about feature X" | Use Content Production rules, include playbook URL or code snippet |
| "Analyze which playbooks are most popular" | Use Growth Data Analysis, list public playbooks + remix counts |
| "Build a template playbook for new users" | Use Growth Engineering template pattern, deploy + release |
| "What data does Alva support?" | Reference the SDK Partition Map above |
| "Create a case study from a backtest" | Pull real Altra results, write up with Content Production rules |
| "Help with onboarding copy" | Reference the User Journey, focus on activation moments |
| "Screenshot a playbook for social" | Use Screenshot API with the playbook URL |

---

## 6. KOL / Influencer Strategy

Alva 的增长依赖 organic influencer outreach。目标市场：**海外英文用户**。
产品定位：**quantamental playbook AI agent（美股 + 加密货币）**。
合作方式：**Organic 为主（早期不直接付费）**。

### KOL 分类体系（8 类，112 人）

团队已建立经过验证的 KOL 数据库，覆盖以下 8 个垂直领域：

| 类别 | 代表人物 | 受众特征 | 与 Alva 契合度 |
| --- | --- | --- | --- |
| **Quant / 系统化投资** | Meb Faber (137K), Cliff Asness (167K), Charlie Bilello (740K), Corey Hoffstein (81K), Jim O'Shaughnessy (190K), Wes Gray (48K), Rob Carver (20K) | 因子投资、系统化策略、数据驱动 | 最高 — 核心用户画像完全重合 |
| **宏观 / 全球市场** | Raoul Pal (1.3M), Lyn Alden (850K), MacroAlf (463K), Luke Gromen (395K), Jim Bianco (561K), FedGuy (195K) | TradFi + 宏观交易者 | 高 — 数据密集型分析需求 |
| **美股投资** | Josh Brown (700K), Morgan Housel (500K), Cathie Wood (1.5M), Eric Balchunas (200K), Aswath Damodaran (825K YT) | 主动投资者、ETF 投资者 | 中高 — playbook 模板需求 |
| **加密货币研究** | Arthur Hayes (790K), Benjamin Cowen (1.1M), PlanB (2.1M), Coin Bureau (2.7M YT), LookOnChain (687K), ZachXBT (600K) | 链上分析、周期研究、DeFi | 高 — Alva 加密数据覆盖广 |
| **期权 / 衍生品** | SpotGamma (100K), tastytrade (100K), SMB Capital (500K YT), InTheMoney (400K YT) | 期权交易者 | 中 — 需要更多衍生品 SDK |
| **YouTube 金融教育** | Patrick Boyle (1.05M), Ben Felix (427K), Andrei Jikh (2.8M), Money & Macro (615K) | 长内容消费者、学习导向 | 高 — playbook 教程天然契合 |
| **财经播客** | Invest Like the Best, Meb Faber Show, We Study Billionaires (500K), Real Vision, Flirting with Models | 机构 + 高端散户 | 高 — 深度产品 demo 机会 |
| **AI + Trading 早期采用者** | PyQuant News (145K), The GPT Portfolio (130K), AIXBT (472K), Austin Starks/NexusTrade, Jake Nesler (Claude Code 交易系列) | 正在用 AI 做交易的人 | **最高** — 他们手动做的事 Alva 已自动化 |

### 优先级矩阵

| 优先级 | KOL | 理由 |
| --- | --- | --- |
| ⭐⭐⭐ 最高 | Meb Faber, Patrick Boyle, Corey Hoffstein, Ben Felix, Charlie Bilello, Benjamin Cowen | Quantamental 高度契合，受众精准，最易 organic 合作 |
| ⭐⭐ 高 | Jim O'Shaughnessy, Lyn Alden, MacroAlf, Arthur Hayes, Rekt Capital, PyQuant News, The GPT Portfolio | 影响力大，数据驱动，受众重合度高 |
| ⭐ 中 | PlanB, Coin Bureau, Andrei Jikh, Cathie Wood, AIXBT | 受众量大但需更多铺垫才能做 organic |

### AI + Trading 早期采用者（重点关注）

这类 KOL 正在用手工方式做 Alva 已经自动化的事情，organic 合作转化率最高：

| KOL | 受众 | AI 使用场景 | Alva 切入点 |
| --- | --- | --- | --- |
| **PyQuant News** (@pyquantnews, 145K) | 高盛/JPM/DRW 的 quant，3.3 万 newsletter | LLM + 量化研究工作流 | Alva SDK 替代手工 Python 管道 |
| **The GPT Portfolio** (@chat_gpttrader, 130K) | 对 AI 投资好奇的主动投资者 | ChatGPT 管理真实组合（>1300 万美元） | Alva playbook 做更可靠的 AI 投资 |
| **AIXBT** (@aixbt_agent, 472K) | 加密原生 + AI 工具友好 | LLM agent 监控 400+ 账号的叙事分析 | Alva 加密 SDK + ADK 替代自建管道 |
| **Austin Starks / NexusTrade** (24K 用户) | 开发者 + AI 交易者 | Claude Opus/GPT-4 生成交易策略 | 产品逻辑与 Alva 高度重合，直接采用 |
| **Jake Nesler** (病毒传播) | Claude Code 用户 | Claude Code 构建开源 AI 交易 agent | Alva skill 直接替代手工搭建 |
| **tradermonty** (小众精准) | 开发者 | Claude + 股票研究 skills (CANSLIM/VCP) | 正在手工做 Alva 已经做好的事 |
| **Lily Francus** (@nope_its_lily, 50K) | 散户 quant + 期权交易者 | ML 信号研究、NOPE 指标 | Alva SDK + Altra 回测 |
| **Quant Science** (@quantscience_, 37K) | 想用 ML 做交易的独立投资者 | ML 策略、Python 自动化 | Alva 替代本地 Python 环境 |

### Outreach 原则

1. **Organic first** — 先用 Alva 为 KOL 构建有价值的 playbook（复现他们的策略/数据），
   再联系他们。让产品说话，不是推销。
2. **从工具使用者入手** — AI + Trading 早期采用者是最短转化路径。他们已经在做类似的事，
   只需要展示 Alva 做得更好。
3. **内容合作 > 付费推广** — 为 KOL 提供独家数据/分析（用 Alva SDK 跑的结果），
   让他们用自己的方式讲述。
4. **双平台策略** — Twitter/X 做日常触达，YouTube/播客做深度产品 demo。

---

## 7. Community & Distribution Channels

### Discord Bot（已实现）

团队已构建 Discord GM Bot，每日自动发布市场信号摘要：

**功能：**
- 每日定时（默认 UTC 8:00）扫描市场数据，发布 GM 消息到 Discord 频道
- 数据来源：Alva SDK — 加密 screener（1D 涨跌幅 Top 5）、美股大盘（AAPL/MSFT/NVDA/AMZN/META/TSLA/GOOGL/JPM/LLY/AVGO）、三大指数（SPY/QQQ/DIA）、实时新闻
- ADK (LLM) 从所有信号中选出当天最爆炸的一个，生成一句话点评
- 支持 `/gm` 斜杠命令手动触发

**技术栈：** Node.js + discord.js + node-cron + Alva API (`/api/v1/run`)

**GM 消息格式：**
```
GM Alva fam 🌅 Today's market vibe: {一句话点评}

🔥 Today's hottest signal ({Crypto/Stock/Macro}): {ticker}

Indices: 📈 SPY +0.5%  📈 QQQ +0.8%  📉 DIA -0.1%
US Stocks: 📈 NVDA +3.2%  📈 TSLA +2.1%  📉 AAPL -0.5%
Crypto: 📈 BTC +4.1%  📈 SOL +6.3%  📉 ETH -1.2%

What's your strategy today?
```

**关键实现细节（构建类似 bot 时参考）：**
- Alva 股票 API (`getStockKline`) 返回 oldest-first 顺序
- 日涨跌幅必须用 close-to-close（前一日收盘 → 当日收盘），不是 open-to-close
- 需要请求 3 天数据才能正确计算 close-to-close
- ADK 调用即使不用 tools 也必须传 `tools: []`
- Alva `/api/v1/run` 的输出在 `logs` 字段（不是 `stdout`）
- Serper 搜索正确模块名：`@arrays/data/search/serper-search:v1.0.0`

**构建新 Bot 的 Alva Cloud 脚本模板：**

```javascript
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

  // 2. US mega-cap movers
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
```

### Distribution Channel Map

| 渠道 | 用途 | 当前状态 | 频率 |
| --- | --- | --- | --- |
| **Discord** | 社区互动、日常市场信号、用户支持 | GM Bot 已实现 | 每日 |
| **Telegram** | Playbook push 通知、信号推送 | 平台原生支持 | 事件驱动 |
| **Twitter/X** | 产品发布、数据洞察、KOL 互动 | 内容生产中 | 每日 1-3 条 |
| **YouTube** | 深度产品 demo、教程、策略回测 | 规划中 | 每周 1-2 条 |
| **播客** | 嘉宾访谈、深度讨论 | KOL 联系中 | 月度 |
| **Playbook 本身** | 可分享 URL、remix 传播 | 已上线 | 持续 |

### Community Growth Playbook

1. **Daily touchpoint** — Discord GM Bot 每日触达，保持社区活跃
2. **Weekly insight** — 用 Alva 跑一个当周市场回顾 playbook，发 Twitter thread
3. **Monthly deep dive** — 找一个真实策略做完整回测，写 case study，发 YouTube/播客
4. **Evergreen templates** — 构建高质量 remix 模板（BTC 仪表盘、宏观监控、Earnings tracker），降低新用户门槛
5. **Signal loop** — Playbook → Push notification → 用户回来看 → Remix → 新 playbook → 更多 followers

---

## 8. Quick Reference: Common Growth Tasks

| Task | Action |
| --- | --- |
| "写一条关于某功能的推文" | 用 Content Production 规则，附 playbook URL 或代码片段 |
| "分析哪些 playbook 最受欢迎" | 用 Growth Data Analysis，列出公开 playbook + remix 数 |
| "给新用户构建模板 playbook" | 用 Growth Engineering 模板模式，deploy + release |
| "Alva 支持什么数据？" | 引用 SDK Partition Map |
| "从一个回测结果写 case study" | 拉真实 Altra 结果，用 Content Production 规则写 |
| "帮写 onboarding 文案" | 引用 User Journey，聚焦激活节点 |
| "截图一个 playbook 发社交媒体" | 用 Screenshot API + playbook URL |
| "找适合联系的 KOL" | 引用 KOL 分类体系，按优先级矩阵筛选 |
| "构建 Discord/Telegram bot" | 参考 Community 章节的 Alva Cloud 脚本模板 |
| "规划一周的内容日历" | 结合 Distribution Channel Map 和 Content Types |

---

## Environment

| Variable | Required | Description |
| --- | --- | --- |
| `ALVA_API_KEY` | yes | Alva API key |
| `ALVA_ENDPOINT` | no | API base URL (default: `https://api-llm.prd.alva.ai`) |
