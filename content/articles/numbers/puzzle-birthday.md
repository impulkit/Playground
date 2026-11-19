---
id: puzzle-birthday
title: How likely is it that two classmates share a birthday?
short: Birthday puzzle
subject: numbers
hook: In a class of just 23 students, it's more likely than not that two share a birthday. With 70, it's almost certain.
certainty: sure
surprising_fact: At the 2014 football World Cup, each team had 23 players. Exactly half of the 32 squads had at least one pair of players sharing a birthday, just as the maths predicts.
facts:
- "People needed for a better-than-even chance: 23 (about 50.7%)"
- "With 30 people: about 70%"
- "With 50 people: about 97%"
- "With 70 people: about 99.9%"
- "Pairs in a group of 23: 253"
- "People needed to be completely certain: 367"
links:
- to: probability
  type: deeper
  why: How do you put a number on chance?
- to: puzzle-monty-hall
  type: surprise
  why: Should you switch doors on a game show?
- to: fifa-world-cup
  type: home
  why: How did football's biggest tournament begin?
- to: leap-years
  type: deeper
  why: Why do we add a day every four years?
- to: life-birthdays-world
  type: surprise
  why: How do people celebrate birthdays around the world?
- to: cryptography-maths
  type: surprise
  why: How does maths keep your passwords safe?
- to: paradoxes
  type: deeper
  why: Why do some true things sound impossible?
sources:
- Encyclopaedia Britannica, Birthday problem.
- BBC News (2014), World Cup: Why so many footballers share birthdays.
- Feller, W. An Introduction to Probability Theory and Its Applications (1950).
interactive:
  t: predict
  prompt: How many people do you need in a room for a better-than-even chance that two share a birthday?
  options:
  - t: 23
    ok: true
  - t: 183
  - t: 365
  reveal: Just 23 people is enough to pass 50 per cent. That's because you aren't looking for someone with your birthday, but any matching pair, and 23 people can make 253 different pairs.
try_this: In your class or with a group of at least 23 people, ask everyone to say their birthday, day and month, one by one. Keep a list and see if any two match. Try it in a few classes. About half the time you should find at least one match.
myth:
  myth: You need about 183 people, half of 365, to have an even chance of a shared birthday.
  truth: That would be the number for someone to share your particular birthday, which needs about 253 people. For any two people to share any birthday, only 23 are needed.
---

## The short answer

In a group of 23 people, there's a slightly better than 50 per cent chance that at least two share a birthday. With 30 people, the chance rises to about 70 per cent. With 70 people, it's about 99.9 per cent, almost certain.

That surprises most people, because 23 seems tiny compared with 365 days. The trick is that you aren't asking whether anyone shares your birthday. You're asking whether any two people share any birthday at all. And the number of possible pairs grows very fast.

## Pairs, not people

In a group of 23, how many different pairs can you make? The first person can pair with 22 others. The second can pair with 21 new people, and so on. Add them up and you get 253 pairs.

Each pair has a small chance of matching, about 1 in 365. But with 253 chances, those small odds add up. It's like buying 253 lottery tickets instead of one.

Now compare that with asking whether someone in the room shares your own birthday. Then only 22 pairs include you, and the chance is only about 6 per cent.

## Counting the other way

Mathematicians find the answer by flipping the question. What's the chance that nobody shares a birthday?

The first person can have any birthday. The second must avoid that day, so has 364 out of 365 options. The third must avoid two days: 363 out of 365. Keep going for all 23 people and multiply those chances together.

The answer comes to about 49.3 per cent. So the chance that at least two do share is about 50.7 per cent. Do the same for 70 people and the "nobody shares" chance shrinks to about 0.1 per cent.

{{story:life-birthdays-world}}

## Tested at the World Cup

In 2014, the BBC checked the squads at the football World Cup in Brazil. Each team had 23 players, the magic number.

Of the 32 squads, 16 had at least one pair of players with the same birthday. Exactly half, as [probability](probability) predicts. Some squads even had two pairs.

You can test it in an Indian school too, where a class of 40 is common. With 40 students, the chance of a shared birthday is about 89 per cent.

## Real birthdays aren't even

The maths assumes every day is equally likely. In real life, they aren't. In the USA, more babies are born in September than in other months, and fewer around big holidays. Doctors often avoid scheduling planned births on holidays.

The 29th of February comes only in [leap years](leap-years), so it's rare. Uneven birthdays actually make shared birthdays slightly more likely than the simple maths says.

To be completely sure two people share a birthday, you need 367 people, one more than the number of possible days, including 29 February. This idea is called the pigeonhole principle: if you have more pigeons than holes, at least two must share.

## Why computer experts care

The birthday puzzle isn't just a party trick. In computing, files and passwords are often turned into short codes called hashes. Two different things might accidentally get the same code, a bit like two people sharing a birthday.

Because of the birthday effect, these clashes happen sooner than you'd guess. Security experts use the maths to decide how long codes must be, so hackers can't find matches easily. Birthday maths is quietly built into the [maths of secret codes](cryptography-maths).

## Our brains and big numbers

People get this puzzle wrong for the same reason they struggle with the [Monty Hall puzzle](puzzle-monty-hall). We think about ourselves, not about all the possible pairs. And we're bad at feeling how fast numbers grow when things combine.

At the next big party you go to, count the guests. If there are more than 23, it's more likely than not that two of them share a birthday, and they probably have no idea.
