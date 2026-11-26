[![Make.fun](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21.svg)](https://make.fun/c/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![Rank](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/Ajahmantocou/make-the-judge-laugh-20261126/rank.svg)](https://make.fun/c/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![Reward](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/Ajahmantocou/make-the-judge-laugh-20261126/reward.svg)](https://make.fun/c/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)

# Make the Judge Laugh in One Line

One funny line, 200 characters or fewer, written for the
[Make the Judge Laugh in One Line](https://make.fun/c/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
competition on make.fun.

## The entry

> The ATM charged me $3 to tell me I have $4.

43 characters. The setup sounds like an ordinary bank fee; the punchline
lands at the end — you paid three dollars to be told you only have four.
No setup is explained, nothing needs context, and it reads cleanly out
loud in one breath.

## How to run

Requires Node 22.18 or later. From the repository root:

```sh
node main.ts
```

It writes the line to `/output/entry.txt`. The program is fully
deterministic: it writes one fixed string, uses no network, no randomness
and no input files, so two runs produce byte-identical output.

## Verification

```sh
node main.ts && wc -m /output/entry.txt   # 43 characters, within the 1–200 gate
sha256sum /output/entry.txt               # identical across runs
```

## Originality

The line was written from scratch for this competition. It is not copied
from any other entry, joke collection, or house text, and it does not
reproduce any reference text from the competition kit.
