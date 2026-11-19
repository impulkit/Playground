---
id: puzzle-tower-hanoi
title: What is the Tower of Hanoi puzzle?
short: Tower of Hanoi
subject: numbers
hook: A legend says priests in a temple are moving 64 golden discs, and when they finish, the world will end. The maths says we can relax.
certainty: sure
surprising_fact: Moving 64 discs at one move a second, with no mistakes, would take about 585 billion years, roughly 42 times the age of the universe.
facts:
- "Invented: 1883, by French mathematician Édouard Lucas"
- "Fewest moves for 3 discs: 7"
- "Rule for any number of discs: 2 to the power of discs, minus 1"
- "Moves for 64 discs: 18,446,744,073,709,551,615"
- "Time for 64 discs at one move a second: about 585 billion years"
links:
- to: exponents
  type: deeper
  why: How do numbers grow so fast when you keep doubling?
- to: puzzle-chessboard-rice
  type: surprise
  why: Why couldn't a king pay for rice on a chessboard?
- to: algorithms
  type: deeper
  why: What is an algorithm, really?
- to: binary-code
  type: surprise
  why: How do computers count with just 0 and 1?
- to: varanasi
  type: home
  why: Why is Varanasi called one of the oldest living cities?
- to: programming
  type: deeper
  why: How do people tell computers what to do?
- to: puzzles-logic
  type: deeper
  why: Can you solve a puzzle using only logic?
sources:
- Encyclopaedia Britannica, Tower of Hanoi.
- Martin Gardner, Mathematical Puzzles and Diversions (1959).
interactive:
  t: predict
  prompt: Three discs take 7 moves. How many moves does it take to move 6 discs?
  options:
  - t: "63"
    ok: true
  - t: "14"
  - t: "42"
  reveal: Each extra disc roughly doubles the work. The rule is 2 multiplied by itself once per disc, minus 1. For 6 discs that's 64 minus 1, which is 63.
try_this: Make your own tower with three coins of different sizes, such as a ₹10, ₹5 and ₹1 coin, or a quarter, nickel and dime. Draw three circles on paper. Move the stack from the first circle to the last, one coin at a time, never putting a bigger coin on a smaller one. Can you do it in 7 moves? Then add a fourth coin and try for 15.
myth:
  myth: The Tower of Hanoi is an ancient puzzle from Vietnam or India.
  truth: It was invented in France in 1883 by Édouard Lucas. He made up the legend of the temple and the golden discs to sell his puzzle, and the name Hanoi was chosen to sound far away.
---

## The short answer

The Tower of Hanoi is a puzzle with three pegs and a stack of discs, each smaller than the one below it. Your job is to move the whole stack from one peg to another. You may move only one disc at a time, and you may never put a bigger disc on top of a smaller one.

With three discs, the best you can do is 7 moves. Add a disc and the moves more than double, to 15. Ten discs need 1,023 moves. The pattern is simple to write down: multiply 2 by itself once for each disc, then subtract 1. Mathematicians write it as 2ⁿ − 1, and it grows astonishingly fast.

## A puzzle with a made-up legend

The puzzle was invented in 1883 by Édouard Lucas, a French mathematician who loved games. He sold it as a toy, under the playful fake name "Professor N. Claus of Siam", which is a jumble of the letters in "Lucas d'Amiens".

To make it exciting, the box told a story. In a great temple at Benares, today's [Varanasi](varanasi), priests were moving 64 golden discs between three diamond needles, following the same rules. When they finished, the world would crumble to dust. The temple never existed, but the story stuck.

## The trick: solve a smaller puzzle first

Say you want to move four discs. Here's the secret. First, move the top three discs out of the way to the spare peg. Then move the big bottom disc to the target peg. Finally, move the three discs back on top of it.

But how do you move three? The same way: move two out of the way, shift the big one, move the two back. Each puzzle contains a smaller copy of itself. Computer scientists call this recursion, and the Tower of Hanoi is one of the first examples taught in [programming](programming) classes, because the whole solution fits in a few lines of code.

{{story:algorithms}}

## Why the priests will never finish

Every extra disc doubles the moves and adds one. That's the power of [exponents](exponents). For 64 discs, the total is 18,446,744,073,709,551,615 moves, more than 18 quintillion.

Suppose the priests never sleep, never slip and move one disc every second. They'd need about 585 billion years. The universe is about 13.8 billion years old, so they'd need roughly 42 universe-lifetimes. Even a computer making a billion moves a second would take more than 580 years.

## Count them yourself

You can check the doubling yourself. One disc takes 1 move. Two discs take 3. Three take 7, four take 15 and five take 31. Each answer is double the one before, plus one. That's because moving a stack means moving the smaller stack on top of it twice, once out of the way and once back, with one big move in between.

By ten discs you've passed a thousand moves. By twenty, you're past a million.

## Hidden patterns

The puzzle is full of surprises. In the fastest solution, the smallest disc moves on every other turn, always going around the pegs in the same direction. And if you number the moves 1, 2, 3 and so on, you can predict each one by writing its number in [binary](binary-code), the 0-and-1 code used by computers. Count the zeros at the end: no zeros means the smallest disc moves, one zero means the next smallest, and so on.

Psychologists also use the puzzle to study how people plan ahead. And the strangest part? The same doubling that makes the priests' job impossible also ruined a king in an old tale, when he agreed to pay a reward in [rice grains on a chessboard](puzzle-chessboard-rice).
