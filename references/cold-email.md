# Cold Email Automation

自动化 KOL outreach 邮件流程：读取 KOL 主页内容 → 填充邮件模板 → 通过 Gmail 发送。

## Prerequisites

1. **Gmail MCP 授权** — 首次使用时调用 `mcp__claude_ai_Gmail__authenticate`
   完成 OAuth 授权。授权后 Gmail 工具（搜索、发送、草稿等）自动可用。
2. **KOL 数据** — 提供 KOL 的 Twitter/X URL 或其他公开主页链接。

## 标准流程

当用户说 "给 XX 发 cold email" 或 "email this KOL" 时，执行以下步骤：

```
Step 1: 确认 Gmail 已授权
  → 如未授权，调用 mcp__claude_ai_Gmail__authenticate 完成 OAuth

Step 2: 调研 KOL
  → WebSearch "{KOL name/handle} {platform}" 获取：
    - 真实姓名（用于称呼）
    - 最近的项目/内容/推文主题
    - 他们在做什么（构建工具？分享框架？推荐产品？）
    - 公开邮箱（bio / website / newsletter signup）
  → 如果用户提供了 URL，用 WebFetch 抓取页面内容
  → 如果找不到邮箱，告知用户并建议 DM 替代

Step 3: 匹配 Alva 产品能力
  → 基于 KOL 的内容，从 product-capabilities.md 中选择
    最相关的 1-2 个能力作为 hook
  → 从 kol-strategy.md 中匹配合作形式：
    Product Migration / Framework Automation / Amplification /
    Viral Demo / Tool Consolidation

Step 4: 填充邮件模板
  → 用下方模板，根据 KOL 调研结果填充变量
  → 展示完整邮件给用户审阅

Step 5: 用户确认后发送
  → 用 Gmail MCP 的 send_email 工具发送
  → 绝不自动发送，必须用户确认
```

## 邮件模板

### Template A: Builder（已在构建类似工具的人）

```
Subject: {their_project} → Alva: same thing, zero infra

Hi {first_name},

Saw your {project_description} — {specific_compliment_about_their_work}.

I'm on the team at Alva (alva.ai). We built a platform that does
what your {their_tool} does, but cloud-native with 250+ financial
data SDKs built in — equities, crypto, macro, on-chain, the works.

Specifically:
- {alva_capability_1_matched_to_their_pain}
- {alva_capability_2_matched_to_their_pain}

Would love to rebuild your {project_name} on Alva together — takes
about {time_estimate} and you'd get a shareable playbook URL at
alva.ai/u/you/playbooks/{name} that anyone can remix.

Happy to jump on a quick call or just share an API key so you can
try it yourself. What works?

Best,
{sender_name}
Alva — alva.ai
```

### Template B: Process-Sharer（分享投资框架/流程的人）

```
Subject: Your {framework_name}, automated on any stock

Hi {first_name},

Your {framework_description} is one of the best breakdowns I've
seen — {specific_detail_from_their_content}.

I built it as a live Alva playbook: you input a ticker and it
auto-populates using real data from 250+ financial SDKs (fundamentals,
price, estimates, insider trades, macro — all built in).

Here's what it looks like: {playbook_url_if_built}

Would love to get your take on it. If you're open to it, we could
co-publish it under your name on Alva — your framework, automated,
shareable, and remixable by your audience.

No strings attached — just think your framework deserves to be more
than a static post.

Best,
{sender_name}
Alva — alva.ai
```

### Template C: Amplifier（大受众转发/推荐者）

```
Subject: re: your {topic_they_shared} post

Hi {first_name},

Your post about {what_they_shared} resonated with exactly the
audience we're building for at Alva.

Quick pitch: Alva is a finance platform where you build playbooks
(data pipelines + dashboards + trading strategies) with AI, deploy
them to cloud, and share as a URL anyone can remix. 250+ built-in
data SDKs, backtesting engine, push alerts — the full stack.

{specific_angle}: {one_sentence_on_why_their_audience_would_care}

Would you be open to trying it? I can set you up with an API key
and walk you through a 5-min build. If you like it, share it
however feels authentic to you. If not, no worries at all.

Best,
{sender_name}
Alva — alva.ai
```

### Template D: Tool-Seeker（正在评估工具的人）

```
Subject: For your {tool_category} search — Alva

Hi {first_name},

Saw you're evaluating {tools_they_mentioned}. Wanted to throw Alva
into the mix — it's different from the others because it's not just
a {tracker/screener/app}, it's a platform where you build your own.

What that means:
- 250+ financial data SDKs (crypto, equities, macro, on-chain)
- Write a strategy → backtest it → deploy it → get push alerts
- Everything lives at a shareable URL others can fork and customize

{specific_pain_point_they_mentioned} — Alva handles this with
{specific_alva_feature}.

Happy to give you an API key to test drive. Takes 5 minutes to see
if it fits what you're looking for.

Best,
{sender_name}
Alva — alva.ai
```

## 模板变量说明

| 变量 | 来源 | 说明 |
| --- | --- | --- |
| `{first_name}` | WebSearch / profile | KOL 的名（不是 handle） |
| `{their_project}` | Tweet / profile | 他们构建的项目名 |
| `{project_description}` | Tweet content | 1 句话描述他们做了什么 |
| `{specific_compliment}` | Tweet content | 具体夸他们做得好的地方（不能泛泛） |
| `{alva_capability_N}` | product-capabilities.md | 匹配的 Alva 功能，用他们能理解的语言 |
| `{framework_name}` | Tweet content | 他们分享的框架/流程名称 |
| `{playbook_url_if_built}` | Alva | 如果已经构建了对应 playbook，附 URL |
| `{sender_name}` | 用户提供 | 发件人姓名 |
| `{time_estimate}` | 根据复杂度 | 预估重建时间（通常 "15-30 minutes"） |

## 邮件发送规则

1. **绝不自动发送** — 必须展示完整邮件内容让用户审阅确认后才发送
2. **找不到邮箱时** — 明确告知用户，建议改用 Twitter DM
3. **每封邮件必须个性化** — 禁止群发相同内容，每封必须包含该 KOL 特有的细节
4. **Subject line** — 简短、具体、不像营销邮件。引用他们的项目/内容名
5. **正文 < 150 words** — 忙人不读长邮件
6. **一个明确 CTA** — "想试试吗？我给你 API key" 或 "要不要一起 rebuild"
7. **不用花哨 HTML** — 纯文本，像朋友之间的邮件
8. **Follow-up** — 如果用户要求 follow up，等至少 5 天，内容更短，附一个新的 hook

## 批量 Outreach 流程

当用户说 "给这批 KOL 发邮件" 或提供一个 CSV/列表时：

```
1. 逐个调研每个 KOL（可并行用 Agent）
2. 为每人选择合适的模板（A/B/C/D）
3. 填充个性化内容
4. 汇总所有邮件给用户一次性审阅
5. 用户逐封确认或批量确认后，依次发送
6. 记录发送状态（已发/待发/跳过/无邮箱）
```
