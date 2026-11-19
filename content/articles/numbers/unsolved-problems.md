---
id: unsolved-problems
title: What maths problems are still unsolved?
short: Unsolved maths
subject: numbers
hook: There is a puzzle simple enough for a ten-year-old to try with a pencil, and no mathematician on Earth has been able to solve it since 1937.
certainty: sure
surprising_fact: The Russian mathematician Grigori Perelman solved one of the hardest problems in maths, then turned down a million-dollar prize for it.
facts:
- Millennium Prize Problems: 7, announced in 2000
- Prize for each: 1 million US dollars
- Solved so far: 1 (the Poincaré conjecture, by Grigori Perelman)
- Goldbach's conjecture: unsolved since 1742
- Fermat's Last Theorem: took about 350 years to prove (1994)
links:
- to: prime-numbers
  type: deeper
  why: Why do primes hold so many secrets?
- to: ramanujan
  type: home
  why: How did a clerk from Madras amaze Cambridge?
- to: supercomputers
  type: surprise
  why: How fast is the fastest computer?
- to: computers-how
  type: surprise
  why: What actually happens inside a computer?
- to: number-patterns
  type: deeper
  why: How do mathematicians spot a pattern?
- to: infinity
  type: deeper
  why: How can anything go on forever?
- to: knots-maths
  type: surprise
  why: Can maths tell two tangled knots apart?
sources:
- Clay Mathematics Institute, the Millennium Prize Problems.
- Simon Singh, Fermat's Last Theorem (1997).
- Encyclopaedia Britannica, entries on Goldbach's conjecture and the Poincaré conjecture.
interactive:
  t: predict
  prompt: In the Collatz puzzle, you halve even numbers and turn odd numbers into 3 × n + 1. Start at 6. Where do you end up?
  options:
  - t: Stuck in a loop of 4, 2, 1
    ok: true
  - t: The numbers keep growing forever
  - t: You reach zero
  reveal: "6 goes to 3, then 10, 5, 16, 8, 4, 2, 1, and then 4, 2, 1 again forever. Every number ever tested ends in that loop, but nobody has proved that all numbers must."
try_this: Pick any whole number and play the Collatz game. If it's even, halve it. If it's odd, multiply by 3 and add 1. Keep going until you reach 1, counting the steps. Try 7 and then 27, which takes 111 steps and climbs as high as 9,232 on the way.
myth:
  myth: By now, mathematicians have worked everything out, so maths is finished.
  truth: Maths has more open questions than ever. Every solved problem tends to raise new ones, and thousands of new results are published every year.
---

## The short answer

Plenty of maths problems have never been solved, and some are very easy to state. An unsolved problem is one where nobody has managed to prove the answer, even if they strongly suspect what it is.

Checking examples isn't enough in maths. A computer might test a rule on billions of numbers, but a proof must show the rule works for every number, forever. In 2000, the Clay Mathematics Institute in the USA picked seven of the hardest open questions and offered 1 million dollars for each. As of 2026, only one has been solved.

## The 3n + 1 puzzle

Take any whole number. If it's even, halve it. If it's odd, triple it and add 1. Repeat. Start with 7 and you go 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1.

The German mathematician Lothar Collatz suggested in 1937 that every starting number eventually reaches 1. [Computers](computers-how) have checked every starting number into the hundreds of billions of billions, and every single one gets there. That's the sort of question a machine can test quickly but never settle. Yet nobody can prove it must always happen. Some numbers soar high before falling, like 27, which climbs past 9,000.

## Adding primes

In 1742, Christian Goldbach wrote a letter to the great mathematician [Leonhard Euler](puzzle-konigsberg) with a guess. Every even number bigger than 2, he suggested, is the sum of two [prime numbers](prime-numbers). So 8 = 3 + 5, 20 = 7 + 13, and 100 = 47 + 53.

Computers have checked this for every even number up to about 4 followed by 18 zeros. It has never failed. But nearly three centuries later, there is still no proof.

A cousin of this puzzle asks whether there are endless twin primes, pairs only 2 apart like 11 and 13. In 2013, Yitang Zhang, a little-known lecturer in the USA, proved that prime pairs never stop appearing within some fixed gap. It was a huge step, though the gap he could prove was 70 million, not 2.

{{story:supercomputers}}

## A million dollars, refused

One of the Clay problems, the Poincaré conjecture, was about the possible shapes of three-dimensional space. In 2002 and 2003, the Russian mathematician Grigori Perelman posted his solution online. Experts spent years checking it and agreed he was right.

He was offered the Fields Medal, often called the top prize in maths, and later the million dollars. He declined both and largely withdrew from public life. He said he was not interested in money or fame.

## Solved after centuries

Old problems do fall. Around 1637, Pierre de Fermat scribbled a note in the margin of a book. He claimed a marvellous proof of a statement about powers of numbers, but said the margin was too small to hold it. Nobody found a proof for about 350 years. In 1994, the British mathematician Andrew Wiles finally completed one, after working on it mostly in secret for seven years.

[Srinivasa Ramanujan](ramanujan) left notebooks full of formulas without proofs. Mathematicians spent decades proving them, and some led to whole new fields. Others are still waiting. The Riemann hypothesis, a question about how the primes are spread out, was posed in 1859 and is one of the six Clay problems that remain open.
