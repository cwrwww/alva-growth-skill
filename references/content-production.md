# Content Production

## Supported Content Types

| Type | Purpose | Typical Length |
| --- | --- | --- |
| **Social post** (Twitter/X, LinkedIn) | Product awareness, feature launches, use cases | 1-3 paragraphs or thread |
| **Case study** | Show real playbook builds, data insights, backtesting results | 500-1500 words |
| **Product narrative** | Explain a capability or workflow end-to-end | 300-800 words |
| **Launch copy** | New feature announcements | Headline + 2-3 paragraphs |
| **Onboarding guide** | Help new users reach activation | Step-by-step with code |
| **Playbook showcase** | Highlight a specific published playbook | Screenshot + analysis |
| **Changelog entry** | What shipped, why it matters | 1-2 paragraphs per item |

## Content Production Rules

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

## Content Workflow

```
1. Identify the hook (what's interesting? a result, a new feature, a use case)
2. Pull real data or reference real playbooks
3. Draft content with the appropriate type template
4. Include at least one concrete artifact (URL, screenshot, code snippet, data point)
5. Review for accuracy — every data claim must be verifiable
```

## Growth Data Analysis

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

## Growth Engineering Patterns

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
