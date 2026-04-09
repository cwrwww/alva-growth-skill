# Product Capabilities Reference

This is the canonical source of truth for what Alva can do. Use it when
writing copy, answering product questions, or scoping growth experiments.

## Core Platform

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

## SDK Partition Map

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

## User Journey (for funnel/activation context)

```
Sign up → Get API key → Connect in IDE/CLI → Ask a question or build a playbook
→ Deploy feed (cronjob) → Release playbook → Share URL → Others remix
```

Key activation moments:
1. **First data query** — user sees real financial data returned instantly
2. **First playbook release** — user has a shareable URL
3. **First remix** — user forks someone else's work, lowers creation barrier
4. **First push notification** — user gets a Telegram alert from their own signal

## Alva API Quick Reference

```bash
# Authenticate
curl -s -H "X-Alva-Api-Key: $ALVA_API_KEY" "${ALVA_ENDPOINT:-https://api-llm.prd.alva.ai}/api/v1/me"

# List playbooks
curl -s -H "X-Alva-Api-Key: $ALVA_API_KEY" "${ALVA_ENDPOINT:-https://api-llm.prd.alva.ai}/api/v1/fs/readdir?path=~/playbooks"

# Screenshot a playbook
curl -s -H "X-Alva-Api-Key: $ALVA_API_KEY" "${ALVA_ENDPOINT:-https://api-llm.prd.alva.ai}/api/v1/screenshot?url=https://alva.ai/u/{user}/playbooks/{name}"

# Read feed data
curl -s "${ALVA_ENDPOINT:-https://api-llm.prd.alva.ai}/api/v1/fs/read?path=/alva/home/{user}/feeds/{feed}/v1/data/{group}/{output}/@last/10"

# Run analysis on Alva Cloud
curl -s -H "X-Alva-Api-Key: $ALVA_API_KEY" -H "Content-Type: application/json" \
  "${ALVA_ENDPOINT:-https://api-llm.prd.alva.ai}/api/v1/run" -d '{"code":"/* code */"}'
```

## Filesystem Convention

| Path | Purpose |
| --- | --- |
| `~/feeds/{name}/v1/src/` | Feed script source |
| `~/feeds/{name}/v1/data/` | Feed data (auto-managed) |
| `~/playbooks/{name}/` | Playbook web app assets |
| `~/tasks/{name}/src/` | One-off analysis scripts |
