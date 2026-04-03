---
name: alva-growth
description: >-
  Alva internal growth team skill. Use when working on growth content
  production (social posts, case studies, product narratives, launch copy),
  growth data analysis (user funnels, playbook metrics, engagement),
  product capability mapping, or growth engineering tasks.
  Trigger keywords: growth, content, marketing, launch, funnel, engagement,
  onboarding, retention, activation, playbook metrics, user journey.
metadata:
  author: bruce
  version: v0.1.0
---

# Alva Growth

Internal skill for Alva's growth team. Covers four domains: **content
production**, **data analysis**, **product capabilities**, and **growth
engineering**.

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

## Environment

| Variable | Required | Description |
| --- | --- | --- |
| `ALVA_API_KEY` | yes | Alva API key |
| `ALVA_ENDPOINT` | no | API base URL (default: `https://api-llm.prd.alva.ai`) |
