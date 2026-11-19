---
id: sudoku
title: What is the maths behind Sudoku?
short: Sudoku
subject: numbers
hook: Sudoku has a Japanese name, but the puzzle was first published by a retired architect in the United States in 1979.
certainty: sure
surprising_fact: There are about 6.67 thousand billion billion possible completed Sudoku grids, yet a puzzle needs at least 17 clues to have only one answer.
facts:
- Grid: 9 rows, 9 columns, 9 boxes of 3 by 3
- First published: 1979, in an American puzzle magazine
- Named Sudoku: Japan, 1980s
- Possible completed grids: 6,670,903,752,021,072,936,960
- Fewest clues for a single answer: 17 (proved in 2012)
links:
- to: magic-squares
  type: deeper
  why: What are magic squares?
- to: puzzles-logic
  type: home
  why: How do logic puzzles work?
- to: board-games
  type: surprise
  why: What are the oldest board games ever found?
- to: news-media
  type: surprise
  why: How does news get to you?
- to: big-numbers
  type: home
  why: How big is a really big number?
- to: manga-anime
  type: surprise
  why: How did Japanese comics take over the world?
sources:
- "Felgenhauer B. and Jarvis F. (2006) Mathematics of Sudoku I. Mathematical Spectrum 39."
- "McGuire G., Tugemann B. and Civario G. (2014) There is no 16-clue Sudoku: solving the Sudoku minimum number of clues problem. Experimental Mathematics 23."
interactive:
  t: predict
  prompt: Do you need to be good at adding up to solve Sudoku?
  options:
  - t: Yes, every row has to add up to 45
  - t: No, the numbers could be swapped for letters or colours
    ok: true
  - t: Only for the hardest puzzles
  reveal: Sudoku never asks you to add, subtract or multiply. The digits are just nine different symbols. You could play it with nine colours or nine letters, and the puzzle would work exactly the same way. It's a puzzle of logic, not arithmetic.
try_this: Draw a small 4 by 4 grid split into four 2 by 2 boxes. Fill it with the numbers 1 to 4 so that no number repeats in any row, column or box. Then rub out most of the numbers, leaving a few clues, and give it to a friend to solve.
myth:
  myth: Sudoku was invented in Japan.
  truth: The modern puzzle was created by Howard Garns in the United States and first printed in 1979 as "Number Place". A Japanese company gave it the name Sudoku in the 1980s and made it popular there, and it spread worldwide in 2004 and 2005.
---

## The short answer

A Sudoku puzzle is a 9 by 9 grid, split into nine boxes of 3 by 3. Some squares already have numbers. Your job is to fill in the rest so that every row, every column and every box contains the digits 1 to 9 exactly once.

There is no adding involved. The digits are just labels. What makes Sudoku work is [logic](logic). Each clue rules out some possibilities, and every new number you place rules out more. A well-made puzzle has only one correct answer, and you can reach it by reasoning alone, without guessing.

## A puzzle with a long family tree

Sudoku grew out of something mathematicians call a Latin square, a cousin of the [magic square](magic-squares). It is a grid where each symbol appears once in every row and every column. The Swiss mathematician [Leonhard Euler](puzzle-konigsberg) studied these in the 1700s. He was curious about arranging 36 army officers of six ranks and six regiments in a 6 by 6 square so that no rank or regiment repeated in any row or column. He suspected it couldn't be done, and in 1900 another mathematician proved him right.

The modern puzzle added the 3 by 3 boxes. It was created by Howard Garns, a retired architect from Indiana in the United States. It first appeared in 1979 in *Dell Pencil Puzzles and Word Games* magazine, under the name "Number Place".

## How it got its name

In 1984, the Japanese puzzle company Nikoli began printing the puzzle. It called it *Sūji wa dokushin ni kagiru*, which roughly means "the digits must be single". That was soon shortened to Sudoku.

The puzzle became popular in Japan, but stayed little known elsewhere. Then Wayne Gould, a retired judge from [New Zealand](new-zealand) who had worked in Hong Kong, wrote a computer program to make Sudoku puzzles. In 2004 he persuaded *The Times* newspaper in London to print them. Within a year, Sudoku was in [newspapers](newspapers) across Britain, the United States, India and dozens of other countries, often next to [the crossword](crosswords).

{{story:board-games}}

## Counting every grid

In 2005, two mathematicians, Bertram Felgenhauer and Frazer Jarvis, used a computer to count every possible completed Sudoku grid. The answer is 6,670,903,752,021,072,936,960, about 6.67 thousand billion billion. That's a [big number](big-numbers): far more grids than there are grains of sand on all of Earth's beaches, by most estimates.

Many of those grids are really the same puzzle in disguise. You could swap every 1 for a 2, or flip the grid over. If you count those as the same, there are still about 5.5 billion really different grids.

## The 17-clue mystery

Puzzle makers wanted to know the smallest number of clues that still leaves only one solution. For years, people found puzzles with 17 clues but never 16.

In 2012, a team led by Gary McGuire at University College Dublin settled it. They wrote a clever program and ran it on powerful computers for about a year, checking every possible case. No 16-clue Sudoku has a single solution. Seventeen is the minimum.

## Thinking like a solver

Most Sudoku solving uses a few simple ideas. If a row already has eight digits, the last square must be the missing one. If a 7 can only fit in one square of a box, it goes there. Harder puzzles need longer chains of [logic](puzzles-logic), where you follow what would happen if a square held one number or another.

Computers can solve any Sudoku in a fraction of a second by trying possibilities in order and backing up when they get stuck. Many people prefer the slower way.
