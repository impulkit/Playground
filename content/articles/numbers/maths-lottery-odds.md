---
id: maths-lottery-odds
title: Why is it so hard to win a lottery?
short: Lottery odds
subject: numbers
hook: Your chance of winning the US Powerball jackpot is about 1 in 292 million, harder than flipping a coin and getting heads 28 times in a row.
certainty: sure
surprising_fact: If you bought one Powerball ticket every week, you would expect to wait more than 5 million years for a jackpot.
facts:
- "Powerball jackpot odds: 1 in 292,201,338"
- "Mega Millions jackpot odds: 1 in 290,472,336 (since April 2025)"
- "Ways to choose 5 balls from 69: 11,238,513"
- "28 heads in a row: about 1 in 268 million"
- "Biggest Powerball jackpot: about $2.04 billion (2022)"
links:
- to: probability
  type: deeper
  why: How do mathematicians measure luck?
- to: big-numbers
  type: deeper
  why: How big is a million, really?
- to: puzzle-monty-hall
  type: surprise
  why: Why does switching doors win more often?
- to: lightning
  type: surprise
  why: What are the real chances of being struck by lightning?
- to: kerala
  type: home
  why: Why is Kerala famous for its lottery tickets?
- to: puzzle-chessboard-rice
  type: home
  why: How did a few grains of rice break a king's treasury?
sources:
- Multi-State Lottery Association, Powerball prizes and odds.
- Mega Millions, game rules and odds (2025).
- Encyclopaedia Britannica, Probability theory.
interactive:
  t: predict
  prompt: In a lottery, the numbers 1, 2, 3, 4, 5 and 6 come up. How likely was that compared with any other set of six numbers?
  options:
  - t: Exactly as likely as any other set
    ok: true
  - t: Much less likely, because it is a pattern
  - t: Impossible, the machine prevents it
  reveal: The balls don't know they are in a pattern. Every set of numbers has the same tiny chance. Patterns only feel special because our brains notice them.
try_this: Flip a coin and count how many heads you get in a row before the first tails. Try it ten times and write down your best streak. Then work out what a 28-head streak would mean, by doubling 1 twenty-eight times on a calculator.
myth:
  myth: Numbers that haven't come up for a long time are "due" to appear soon.
  truth: Every draw starts fresh. The machine has no memory, so a number that hasn't appeared in months has exactly the same chance as one that came up last week. This mistake is called the gambler's fallacy.
---

## The short answer

A lottery is hard to win because there are a staggering number of possible tickets, and only one is the jackpot winner. In the US Powerball game, you choose 5 numbers from 1 to 69 and then a special red ball from 1 to 26. There are 292,201,338 different ways to fill in that ticket.

Buy one ticket and your chance of the jackpot is 1 in 292,201,338. That is about the same as flipping a coin and getting heads 28 times in a row. Most people flipping a coin never get past eight or nine heads in a row.

Lotteries work because millions of people play. Almost all of them lose a little, so that one person can win a lot.

## Counting the tickets

Here is how mathematicians count. For the first white ball there are 69 choices. Then 68 are left, then 67, then 66, then 65. Multiply them and you get 1,348,621,560.

But order doesn't matter in Powerball. Drawing 7 then 12 is the same as 12 then 7. Any group of five balls can be arranged in 5 × 4 × 3 × 2 × 1 = 120 orders. So divide by 120 and you get 11,238,513 different groups of five.

Now the red Powerball. There are 26 of those, so multiply by 26: 11,238,513 × 26 = 292,201,338. That is where the famous number comes from. The same method works for any lottery: count the choices, then divide out the orders that don't matter. It is a counting trick at the heart of [probability](probability).

## Feeling a big number

Numbers this size are hard to feel, which is why [big numbers](big-numbers) trick us. So try these.

If you bought one Powerball ticket every week, you would expect to wait about 5.6 million years for a jackpot. That is longer than humans have existed.

Lay 292 million lottery tickets end to end, about 10 cm each, and the line would stretch more than 29,000 km. That is roughly three-quarters of the way around the Earth. Only one ticket in that line is the winner.

The US weather service puts the chance of being struck by lightning in a single year at roughly 1 in a million. A jackpot is hundreds of times less likely.

{{story:lightning}}

## Where the money goes

Lotteries take in far more money than they pay out. In most big US lotteries, only about half of the money from ticket sales comes back as prizes. The rest goes to running costs and to the state, which often spends it on schools or other services.

In India, lotteries are banned in many states and run by the government in others. [Kerala](kerala) started its state lottery in 1967 and it is now hugely popular there. The maths is the same everywhere: on average, players lose money.

The biggest single Powerball prize so far was about $2.04 billion, won by one ticket in California in 2022.

## Tricks that don't work

People have all kinds of lottery strategies. Some pick birthdays. Some avoid numbers that won recently. None of this changes the odds. Every ticket has exactly the same chance.

Birthdays can make one thing worse, though. Lots of people pick numbers from 1 to 31. If those numbers win, the prize is more likely to be split among many winners. Random picks avoid that, but they won't make you more likely to win. And buying ten tickets instead of one? Your chance goes from 1 in 292 million to about 1 in 29 million. Still tiny.

And the strangest part? Some probability puzzles fool even professional mathematicians, like the game-show riddle in [the Monty Hall problem](puzzle-monty-hall).
