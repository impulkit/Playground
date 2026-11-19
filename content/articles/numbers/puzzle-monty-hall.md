---
id: puzzle-monty-hall
title: What is the Monty Hall puzzle?
short: Monty Hall puzzle
subject: numbers
hook: Three doors, one car, two goats. The right answer is so strange that thousands of readers, many with maths degrees, wrote in to say it was wrong.
certainty: sure
surprising_fact: In one experiment, pigeons learned to win the Monty Hall game more often than university students did.
facts:
- "Named after: Monty Hall, host of the US game show Let's Make a Deal"
- "Chance of winning if you stick: 1 in 3"
- "Chance of winning if you switch: 2 in 3"
- "Made famous: Marilyn vos Savant's magazine column, 1990"
- "First published as a puzzle: 1975, by statistician Steve Selvin"
links:
- to: probability
  type: deeper
  why: How do you measure how likely something is?
- to: puzzle-birthday
  type: surprise
  why: Why do two classmates so often share a birthday?
- to: tv-quiz-shows
  type: home
  why: How do TV quiz shows keep us hooked?
- to: brain-works
  type: surprise
  why: Why does your brain get chances wrong?
- to: paradoxes
  type: deeper
  why: How can something true feel impossible?
- to: maths-lottery-odds
  type: surprise
  why: What are your real chances of winning a lottery?
- to: game-theory
  type: deeper
  why: How do maths experts play games to win?
sources:
- Selvin, S. (1975), A problem in probability, letter to The American Statistician.
- vos Savant, M. "Ask Marilyn", Parade magazine, 1990–1991.
- Herbranson, W. and Schroeder, J. (2010), Are birds smarter than mathematicians? Journal of Comparative Psychology.
interactive:
  t: predict
  prompt: You pick door 1. The host, who knows where the car is, opens door 3 to show a goat. Should you switch to door 2?
  options:
  - t: Yes, switching wins 2 times out of 3
    ok: true
  - t: It makes no difference, it's 50–50
  - t: No, sticking is safer
  reveal: Your first pick had a 1 in 3 chance. The host's choice gives you no new information about your door, but it does tell you about the others. So the 2 in 3 chance that the car was behind "one of the other doors" now rests on the single door left.
try_this: Play it with a friend using three cups and a coin. Your friend hides the coin and, after you pick, lifts an empty cup you didn't choose. Play 30 rounds where you always stick and 30 where you always switch, and count your wins. Switching should win about twice as often.
myth:
  myth: Once two doors are left, each has an equal 50–50 chance.
  truth: That would be true if the host opened a door at random. But the host knows where the car is and always shows a goat. That knowledge is what makes switching better.
---

## The short answer

You're on a game show. There are three closed doors. Behind one is a car, and behind the other two are goats. You choose a door, say door 1. The host, who knows what is behind each door, opens one of the other doors, say door 3, to show a goat. Then he asks: do you want to switch to door 2?

You should switch. Sticking wins the car only 1 time in 3. Switching wins 2 times in 3. Almost everyone's gut says it's 50–50, and almost everyone's gut is wrong.

## Why switching works

When you first pick, you have a 1 in 3 chance of being right. That means there is a 2 in 3 chance the car is behind one of the other two doors.

Now the host steps in. He will always open a door with a goat, never the car, and never your door. So he isn't guessing. He is using what he knows to remove a loser from the other two.

The 2 in 3 chance that belonged to "the other doors" doesn't vanish. It all moves onto the one door he left shut.

## The 100-door trick

Still not convinced? Most people aren't. Try making it bigger.

Picture 100 doors, with one car. You pick door 1. The host, who knows where the car is, opens 98 other doors, all with goats. Only your door and door 74 are left.

Do you really think your first blind guess, out of 100, was right? Or did the host just carefully avoid one particular door? Switching now wins 99 times out of 100. The three-door game is the same idea, only smaller.

{{story:tv-quiz-shows}}

## The column that caused an uproar

The puzzle is named after Monty Hall, host of the American TV show *Let's Make a Deal*, which began in 1963. A statistician named Steve Selvin first wrote it up as a puzzle in 1975.

In 1990, a reader sent it to Marilyn vos Savant, who wrote a popular question-and-answer column in *Parade* magazine. She said to switch. Thousands of letters poured in saying she was wrong. Many came from people with maths doctorates. Some were rude.

She was right. Teachers across the USA ran the game in classrooms, and the results kept matching her answer. One of the 20th century's greatest mathematicians, Paul Erdős, is said to have stayed unconvinced until he saw a computer simulation.

## Pigeons beat people

In 2010, two American psychologists tested pigeons on a version of the game, using lit-up keys instead of doors and food instead of a car.

At first the birds chose randomly. But over many rounds, they learned that switching paid off, and they switched almost every time. University students playing the same game kept sticking far more often. The pigeons didn't think about it. They just counted what worked, which is something our clever human brains struggle to do, as you'll see in why your [brain gets chances wrong](brain-works).

## Why our gut misleads us

Our brains like simple stories. Two doors left? Must be half and half. We also hate the feeling of switching away from the right answer, more than we hate sticking with a wrong one.

Those habits are useful in everyday life, but [probability](probability) often rewards cold counting over instinct. The puzzle is now a favourite in maths lessons and computer science courses around the world.

## The fine print

The trick only works if the rules are fixed: the host knows where the car is, always opens a goat door, and always offers the switch. If he opens a door at random and happens to show a goat, the chances really do become 50–50.

That is a big lesson hiding in a small game. In [probability](probability), knowing why something happened matters as much as what happened. And if this puzzle bends your brain, wait until you meet the [birthday puzzle](puzzle-birthday), where a class of just 23 children is more likely than not to have a shared birthday.
