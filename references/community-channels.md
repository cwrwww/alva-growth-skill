# Community & Distribution Channels

## Discord Bot（已实现）

团队已构建 Discord GM Bot，每日自动发布市场信号摘要：

**功能：**
- 每日定时（默认 UTC 8:00）扫描市场数据，发布 GM 消息到 Discord 频道
- 数据来源：Alva SDK — 加密 screener（1D 涨跌幅 Top 5）、美股大盘（AAPL/MSFT/NVDA/AMZN/META/TSLA/GOOGL/JPM/LLY/AVGO）、三大指数（SPY/QQQ/DIA）、实时新闻
- ADK (LLM) 从所有信号中选出当天最爆炸的一个，生成一句话点评
- 支持 `/gm` 斜杠命令手动触发

**技术栈：** Node.js + discord.js + node-cron + Alva API (`/api/v1/run`)

**GM 消息格式：**
```
GM Alva fam  Today's market vibe: {一句话点评}

 Today's hottest signal ({Crypto/Stock/Macro}): {ticker}

Indices: SPY +0.5%  QQQ +0.8%  DIA -0.1%
US Stocks: NVDA +3.2%  TSLA +2.1%  AAPL -0.5%
Crypto: BTC +4.1%  SOL +6.3%  ETH -1.2%

What's your strategy today?
```

**关键实现细节（构建类似 bot 时参考）：**
- Alva 股票 API (`getStockKline`) 返回 oldest-first 顺序
- 日涨跌幅必须用 close-to-close（前一日收盘 → 当日收盘），不是 open-to-close
- 需要请求 3 天数据才能正确计算 close-to-close
- ADK 调用即使不用 tools 也必须传 `tools: []`
- Alva `/api/v1/run` 的输出在 `logs` 字段（不是 `stdout`）
- Serper 搜索正确模块名：`@arrays/data/search/serper-search:v1.0.0`

**Alva Cloud 脚本** — 见 [scripts/discord-gm-bot.js](../scripts/discord-gm-bot.js)

## Distribution Channel Map

| 渠道 | 用途 | 当前状态 | 频率 |
| --- | --- | --- | --- |
| **Discord** | 社区互动、日常市场信号、用户支持 | GM Bot 已实现 | 每日 |
| **Telegram** | Playbook push 通知、信号推送 | 平台原生支持 | 事件驱动 |
| **Twitter/X** | 产品发布、数据洞察、KOL 互动 | 内容生产中 | 每日 1-3 条 |
| **YouTube** | 深度产品 demo、教程、策略回测 | 规划中 | 每周 1-2 条 |
| **播客** | 嘉宾访谈、深度讨论 | KOL 联系中 | 月度 |
| **Playbook 本身** | 可分享 URL、remix 传播 | 已上线 | 持续 |

## Community Growth Playbook

1. **Daily touchpoint** — Discord GM Bot 每日触达，保持社区活跃
2. **Weekly insight** — 用 Alva 跑一个当周市场回顾 playbook，发 Twitter thread
3. **Monthly deep dive** — 找一个真实策略做完整回测，写 case study，发 YouTube/播客
4. **Evergreen templates** — 构建高质量 remix 模板（BTC 仪表盘、宏观监控、Earnings tracker），降低新用户门槛
5. **Signal loop** — Playbook → Push notification → 用户回来看 → Remix → 新 playbook → 更多 followers
