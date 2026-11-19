---
id: algorithms
title: What is an algorithm?
short: Algorithms
subject: tech
hook: You follow algorithms every day, from brushing your teeth to finding a word in a dictionary. Computers just follow them faster.
certainty: sure
surprising_fact: The word "algorithm" comes from the name of al-Khwarizmi, a mathematician who worked in Baghdad about 1,200 years ago.
facts:
- Meaning: a step-by-step method for solving a problem
- Word comes from: al-Khwarizmi, 9th-century Baghdad
- One of the oldest known: Euclid's algorithm, about 2,300 years old
- Guesses to find a number from 1 to 100 by halving: at most 7
- Used in: search engines, maps, video recommendations
links:
- to: programming
  type: deeper
  why: How do you turn an algorithm into code?
- to: search-engines
  type: deeper
  why: How does a search engine choose what to show first?
- to: lunchbox-dabbawala
  type: surprise
  why: How do Mumbai's dabbawalas deliver lunches without computers?
- to: euclid
  type: evidence
  why: Who wrote a maths book used for 2,000 years?
- to: aryabhata
  type: evidence
  why: What did India's great astronomer work out in 499 CE?
- to: youtube
  type: surprise
  why: How does YouTube decide what to show you next?
- to: puzzles-logic
  type: surprise
  why: What's the secret to solving logic puzzles?
- to: coding-maths
  type: deeper
  why: How is maths used in coding?
sources:
- Encyclopaedia Britannica, Algorithm.
- Cormen T.H., Leiserson C.E., Rivest R.L. and Stein C. Introduction to Algorithms. MIT Press.
interactive:
  t: predict
  prompt: A friend picks a secret number from 1 to 100. After each guess they say "higher" or "lower". With the smartest method, what is the most guesses you'll ever need?
  options:
  - t: "7"
    ok: true
  - t: "25"
  - t: "50"
  reveal: Always guess the middle of what's left. The first guess, 50, cuts the possibilities in half. So does every guess after. Halving 100 seven times gets you down to one number. Computers use this trick, called binary search, to find things in huge lists.
try_this: Shuffle ten playing cards and lay them in a row face down. Your job is to sort them from lowest to highest, but you may only swap two neighbouring cards at a time after peeking at them. Write down your method as numbered steps, then give the steps to a friend and see if they work for them too.
myth:
  myth: Algorithms are something only computers use.
  truth: An algorithm is any clear set of steps for solving a problem. Recipes, long division and the rules for tying a shoelace are algorithms. People used them for thousands of years before computers existed.
---

## The short answer

An algorithm is a clear, step-by-step method for solving a problem or doing a task. If you follow the steps exactly, you get the right result every time.

A recipe for dal is a kind of algorithm. So is the way you learned to do long division, or the steps for getting dressed. Computers need algorithms because they can't work anything out for themselves. They need every step spelled out.

Programmers design algorithms, then write them as code. A good algorithm is correct, but it's also efficient: it gets to the answer without wasting steps.

## A name from Baghdad

About 1,200 years ago, a scholar named Muhammad ibn Musa al-Khwarizmi worked at the House of Wisdom in Baghdad, a great centre of learning. He wrote a book explaining how to calculate using the [Hindu numerals](indian-numerals) from India, the digits 0 to 9 we use today.

When his book was translated into Latin, his name came out as "Algoritmi". Over time, "algorism" came to mean calculating with these numerals, and later "algorithm" came to mean any step-by-step method. Another of his books gave us the word "[algebra](algebra)".

## Ancient algorithms

Some algorithms are much older than the word. Around 300 BCE, the Greek mathematician [Euclid](euclid) described a method for finding the biggest number that divides two others exactly. It is still taught and used in computers today.

In India, the astronomer [Aryabhata](aryabhata) described a method in 499 CE, later called *kuttaka*, meaning "pulveriser", for solving certain kinds of [equations](equations) by breaking them down step by step. Indian mathematicians used it for astronomy and [calendars](calendars).

## Searching and sorting

Two of the most common jobs for algorithms are searching and sorting. Suppose you're looking for "mango" in a dictionary. You wouldn't start at page one. You'd open it near the middle, see whether "mango" comes before or after, and keep halving. That halving method is called [binary](binary-code) search, and it can find one word among a million in about 20 steps.

Sorting has many algorithms. One compares neighbours and swaps them, over and over. It's simple but slow for big lists. Others split the list into small piles, sort each, and merge them back. For a million items, the clever methods can be thousands of times faster.

{{story:lunchbox-dabbawala}}

## Algorithms that choose for you

Some of today's most powerful algorithms decide what you see. When you search online, [search engines](search-engines) use algorithms to rank billions of pages. When a video ends on [YouTube](youtube), an algorithm picks what to suggest next, based on what you and people like you have watched. Map apps use algorithms to find the fastest route through traffic.

These systems learn from huge amounts of data. That makes them useful, but they can also pick up unfair patterns from that data, or push people towards things that grab attention rather than things that are good for them. Engineers and governments are debating how to [make them fairer and more open](ai-safety).

## People as algorithms

Algorithms don't need computers. Mumbai's [dabbawalas](lunchbox-dabbawala) sort tens of thousands of lunchboxes a day using a simple code painted on each lid and a set of steps every worker knows. A cricket umpire follows a fixed process for deciding whether a batter is out leg before wicket.

Solving a [Rubik's cube](rubiks-cube) quickly is mostly about learning algorithms: fixed sequences of turns that move certain pieces without disturbing others. Speedcubers can solve one in a few seconds. Whether it's a cube, a dictionary or a lunchbox, a good algorithm turns a messy problem into a list of small, clear steps.
