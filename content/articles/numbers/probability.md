---
id: probability
title: What are the chances?
short: Probability
subject: numbers
hook: Put just 23 people in a room, and it's more likely than not that two of them share a birthday.
certainty: sure
surprising_fact: In 1913, at a casino in Monte Carlo, the roulette ball landed on black 26 times in a row. Many gamblers lost fortunes betting that red was "due".
facts:
- Chance of heads on a fair coin: 1 in 2
- Chance of a six on one dice: 1 in 6
- Most likely total with two dice: 7
- People needed for a better-than-even shared birthday: 23
- Probability maths began: letters between Pascal and Fermat, 1654
links:
- to: chance-weather
  type: deeper
  why: What does "70% chance of rain" really mean?
- to: snakes-ladders
  type: surprise
  why: Where did Snakes and Ladders come from?
- to: board-games
  type: surprise
  why: What are the oldest board games ever found?
- to: cards-games
  type: surprise
  why: Why does a pack of cards have 52 cards?
- to: statistics-lies
  type: deeper
  why: Can numbers lie?
- to: averages
  type: home
  why: What does average mean?
- to: game-theory
  type: deeper
  why: How can maths tell you the smartest move in a game?
- to: maths-lottery-odds
  type: surprise
  why: Why is winning a lottery harder than tossing 28 heads in a row?
sources:
- Encyclopaedia Britannica, Probability theory.
- Encyclopaedia Britannica, Blaise Pascal.
interactive:
  t: predict
  prompt: A fair coin has landed heads five times in a row. What is the chance it lands heads next time?
  options:
  - t: Less than half, because tails is due
  - t: More than half, because it's on a streak
  - t: Exactly half
    ok: true
  reveal: A coin has no memory. Each flip is a fresh start with a 1 in 2 chance of heads. Believing that tails is "due" is such a common mistake that it has a name, the gambler's fallacy.
try_this: Roll two dice 50 times and keep a tally of each total from 2 to 12. Which total comes up most? Then list every way two dice can land, like 1 and 6, 2 and 5, and so on. You should find that 7 can be made in more ways than any other total.
myth:
  myth: After a long run of one result, the other result becomes more likely.
  truth: For coins, dice and roulette wheels, past results don't change future chances. Each throw is independent. Over thousands of throws things even out because the long run swamps the streak, not because the coin corrects itself.
---

## The short answer

Probability is the maths of how likely something is. It gives every possible event a number between 0 and 1. Zero means it can never happen. One means it is certain. A half means it is as likely to happen as not.

For simple cases, you count. A dice has six faces, and one of them shows a six. So the chance of rolling a six is 1 in 6. A [pack of cards](cards-games) has 52 cards, and 4 of them are aces, so the chance of drawing an ace is 4 in 52, or 1 in 13.

Probability can't tell you what will happen next. It tells you what will happen over and over again, in the long run.

## Two gamblers and two mathematicians

Probability began with a gambling puzzle. In 1654, a French gambler asked the mathematician Blaise Pascal how to fairly split the money if [a game of dice](maths-games) was stopped halfway. Pascal wrote letters about it to another mathematician, Pierre de Fermat.

Between them, they worked out a way to count every possible way the game could have finished, and share the money according to each player's chances. Their letters laid the foundations of probability. Today the same ideas are used by weather forecasters, doctors, [insurance companies](insurance) and scientists.

## Why seven is lucky

Roll two dice and add them up. The totals run from 2 to 12, but they aren't equally likely. There is only one way to make 2: a one and a one. There is only one way to make 12.

Seven can be made in six ways: 1 and 6, 2 and 5, 3 and 4, and each of those the other way round. Out of 36 possible pairs, six make seven, so it comes up one time in six. That is why seven turns up so often in games played with two dice. Many board games, including most versions of [Snakes and Ladders](snakes-ladders), use a single dice instead, where every number from 1 to 6 is equally likely.

{{story:snakes-ladders}}

## The birthday surprise

Most people guess that you'd need around 180 people in a room before two of them probably [share a birthday](puzzle-birthday), about half of 365. The real answer is just 23.

The trick is that you aren't looking for someone who shares *your* birthday. Any two people will do. With 23 people there are 253 different pairs, and each pair is a small chance of a match. All those small chances add up quickly. With 70 people, a shared birthday is almost certain.

Try it in a class. A typical school class of 30 or more has a good chance of containing two people with the same birthday.

## The night black kept winning

On 18 August 1913, at the casino in Monte Carlo, the roulette ball landed on black again and again. As the streak grew, people rushed to bet huge sums on red, sure that it must be due. Black came up 26 times in a row.

A roulette wheel, like a coin, has no memory. Each spin is a fresh start. The mistake of thinking otherwise is now called the gambler's fallacy, or sometimes the Monte Carlo fallacy.

## Living with chance

When a forecaster says there is a 70% chance of rain, it means that on days like this one, it rains about 7 times out of 10. [Weather chances](chance-weather) come from computer models run many times with slightly different starting conditions.

Probability also explains why rare things still happen. A one-in-a-million event is unlikely for you today. But in a country of 140 crore people, it may happen to over a thousand of them.
