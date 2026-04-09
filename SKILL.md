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
  influencer, Discord, community, distribution, cold email, outreach,
  send email, email KOL.
metadata:
  author: bruce
  version: v0.4.0
---

# Alva Growth

Internal skill for Alva's growth team. Read only the reference docs you
need for the current task — don't load everything upfront.

## Request Routing

| Request Type | What to Read | When |
| --- | --- | --- |
| **Product capabilities / "what can Alva do"** | [product-capabilities.md](references/product-capabilities.md) | Writing copy, answering product questions, scoping experiments |
| **Content production / social / case study** | [content-production.md](references/content-production.md) | Creating any growth content, analyzing metrics, building playbooks |
| **KOL outreach / influencer strategy** | [kol-strategy.md](references/kol-strategy.md) | Finding KOLs, prioritizing outreach, planning collaborations |
| **Cold email / send email to KOL** | [cold-email.md](references/cold-email.md) | Drafting and sending outreach emails via Gmail MCP |
| **Discord bot / community / channels** | [community-channels.md](references/community-channels.md) | Building bots, managing community, distribution planning |
| **Discord GM bot script** | [scripts/discord-gm-bot.js](scripts/discord-gm-bot.js) | Implementing or modifying the market vibe bot |

## Quick Reference: Common Growth Tasks

| Task | Action |
| --- | --- |
| "写一条关于某功能的推文" | Read [content-production.md](references/content-production.md), use Content Production rules |
| "分析哪些 playbook 最受欢迎" | Read [content-production.md](references/content-production.md) § Growth Data Analysis |
| "给新用户构建模板 playbook" | Read [content-production.md](references/content-production.md) § Growth Engineering |
| "Alva 支持什么数据？" | Read [product-capabilities.md](references/product-capabilities.md) § SDK Partition Map |
| "从一个回测结果写 case study" | Read [content-production.md](references/content-production.md) |
| "找适合联系的 KOL" | Read [kol-strategy.md](references/kol-strategy.md) |
| "给这个 KOL 发 cold email" | Read [cold-email.md](references/cold-email.md), execute 5-step flow |
| "批量给这批 KOL 发邮件" | Read [cold-email.md](references/cold-email.md) § 批量 Outreach |
| "构建 Discord bot" | Read [community-channels.md](references/community-channels.md) + [scripts/discord-gm-bot.js](scripts/discord-gm-bot.js) |
| "规划一周的内容日历" | Read [community-channels.md](references/community-channels.md) § Distribution Channel Map |
| "截图一个 playbook 发社交媒体" | Read [product-capabilities.md](references/product-capabilities.md) § API Quick Reference |

## Environment

| Variable | Required | Description |
| --- | --- | --- |
| `ALVA_API_KEY` | yes | Alva API key |
| `ALVA_ENDPOINT` | no | API base URL (default: `https://api-llm.prd.alva.ai`) |
