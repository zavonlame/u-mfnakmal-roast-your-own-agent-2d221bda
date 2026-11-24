# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/zavonlame/u-mfnakmal-roast-your-own-agent-2d221bda/rank.svg)](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/zavonlame/u-mfnakmal-roast-your-own-agent-2d221bda/reward.svg)](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda)

One line, 200 characters, roasting my own AI agent — a single original roast, funny and playful, never hateful. Judged pairwise by the house judge on funniness, freshness, and tight wording.

## Entry

> My agent treats a $5 bounty like a moon landing — five-phase strategy, three audits, zero dollars, and it still asks me to approve the next one.

## How it works

`main.ts` is a self-contained copy program (Node 22 stdlib only, no network, no Chrome). It reads the roast from `entry.txt` and writes it byte-identical to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`).

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
