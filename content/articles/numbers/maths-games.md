---
id: maths-games
title: What games use maths?
short: Maths in games
subject: numbers
hook: There is a simple matchstick game where, if you know one trick with the number 4, you will win almost every time.
certainty: sure
surprising_fact: When you roll two dice, a total of 7 comes up about twice as often as a total of 4, and six times as often as a total of 2.
facts:
- "Most likely total with two dice: 7 (6 ways out of 36)"
- "Snakes and ladders: grew from the old Indian game gyan chaupar"
- "Sudoku: first published in the USA in 1979 as Number Place"
- "Possible chess games: more than the atoms in the visible universe, by most estimates"
- "Nim: a game with a complete winning strategy, worked out in 1901"
links:
- to: probability
  type: deeper
  why: How do you measure how likely something is?
- to: snakes-ladders
  type: home
  why: Was snakes and ladders a lesson about good and evil?
- to: chess-india
  type: home
  why: Was chess really born in India?
- to: sudoku
  type: deeper
  why: Why does every sudoku have only one answer?
- to: game-theory
  type: deeper
  why: Can maths tell you how to win a negotiation?
- to: board-games
  type: surprise
  why: What is the oldest board game ever found?
- to: video-games
  type: surprise
  why: How does a video game know where you are?
- to: rubiks-cube
  type: surprise
  why: How many ways can a Rubik's Cube be mixed up?
sources:
- Charles L. Bouton (1901), "Nim, a game with a complete mathematical theory", Annals of Mathematics.
- Victoria and Albert Museum, London, on gyan chaupar and snakes and ladders.
- Martin Gardner, Mathematical Puzzles and Diversions, Simon and Schuster, 1959.
interactive:
  t: predict
  prompt: You roll two ordinary dice and add them. Which total is most likely?
  options:
  - t: "7"
    ok: true
  - t: "12"
  - t: Every total is equally likely
  reveal: There are 36 ways two dice can land. Six of them add up to 7 (1+6, 2+5, 3+4 and the reverse of each). Only one way, 6+6, makes 12. That is why so many board games are built around 7.
try_this: "Play 21 with a friend. Start at 0 and take turns adding 1, 2 or 3 to the running total. Whoever says 21 wins. Play a few rounds, then try to spot the secret: if you can always say 1, 5, 9, 13 and 17, your friend cannot stop you."
myth:
  myth: Games of luck have nothing to do with maths.
  truth: Even pure luck follows patterns. Probability tells you which dice totals come up most, how often a card will appear and whether a bet is fair. Casinos are built on that maths.
---

## The short answer

Nearly every game uses maths somewhere. Dice games run on [probability](probability), the maths of chance. Card games need counting and memory. Strategy games like chess and noughts and crosses are puzzles about planning ahead, which mathematicians study as [game theory](game-theory). Sudoku is pure logic with numbers as symbols.

Some games hide the maths so well that you never notice it. Others, like Nim and 21, can be solved completely: once you know the trick, you can win every time.

## Matchsticks and the magic number 4

In one version of Nim, you put 21 matchsticks on a table. Two players take turns removing 1, 2 or 3 sticks. Whoever takes the last stick loses.

The secret lies in the number 4. If you always leave your opponent a number of sticks that is one more than a multiple of 4 (17, 13, 9, 5, and finally 1), they are trapped. Whatever they take, you take enough to make the pair add up to 4. In 1901, an American mathematician named Charles Bouton published the full winning method for the bigger version of Nim with several piles. It uses the [binary](?binary) number system, the same 0s and 1s that computers use.

## Dice, cards and luck

Roll two dice and the total is not equally likely to be anything. There are 36 ways the dice can land, and 6 of them make 7. Only 1 makes 2, and only 1 makes 12. Board game designers use this. In the game Catan, the number 7 triggers a robber, because it comes up so often.

Cards work the same way. A pack has 52 cards, so the chance of drawing an ace is 4 in 52, or 1 in 13. Card players who remember what has been played are really updating fractions in their heads.

{{story:probability}}

## Chess and the explosion of choices

[Chess](chess-india), which grew from the Indian game chaturanga, looks simple. Yet after just three moves each, the board can be in millions of different positions. The number of possible complete games is so large that it beats the number of atoms in the observable universe, by most estimates.

That is why nobody, human or computer, can "solve" chess by checking every game. Players learn patterns instead. Computers search millions of positions a second and use clever shortcuts to ignore bad moves.

## Snakes, ladders and good deeds

[Snakes and ladders](snakes-ladders) grew out of gyan chaupar, an old Indian game played with dice or cowrie shells. Ladders stood for virtues like generosity, and snakes for faults like anger. British families took it home in the 1800s, and Americans later sold a version called Chutes and Ladders.

It is a game of pure luck, since players make no choices. But mathematicians have still studied it. Using probability, they can work out how many turns a game lasts on average on a particular board, and which squares players land on most often.

## Sudoku and number grids

Sudoku asks you to fill a 9 by 9 grid so that each row, column and box has the digits 1 to 9 once. No adding is needed. It is a logic puzzle. An American, Howard Garns, published it in 1979 as Number Place. A Japanese puzzle company renamed it sudoku in the 1980s, and it swept the world in 2005.

Tic-tac-toe, or noughts and crosses, is a solved game too. If both players never make a mistake, it always ends in a draw. Once a child works this out, the game usually stops being much fun. That moment of seeing through a game is also a kind of maths.
