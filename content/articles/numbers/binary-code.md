---
id: binary-code
title: How do computers count with only 0 and 1?
short: Binary
subject: numbers
hook: Your phone stores games, songs and photos using just two numbers.
icon: binary
certainty: sure
surprising_fact: With just 8 switches, you can make every number from 0 to 255.
facts:
- Bit: one 0 or 1
- Byte: 8 bits
- Numbers in one byte: 0 to 255
- Capital A in computer code: 65, or 01000001
- Leibniz's paper on binary: 1703
links:
- to: cipher-codes
  type: deeper
  why: Codes that keep secrets
- to: internet-how
  type: deeper
  why: How those 1s and 0s travel
- to: zero-invent
  type: deeper
  why: Where zero came from
- to: fibonacci-nature
  type: surprise
  why: Ancient Indian poets and binary patterns
- to: chess-india
  type: surprise
  why: "Did chess begin in India?"
- to: dna
  type: surprise
  why: "What is DNA?"
- to: pixels
  type: home
  why: How does a screen turn numbers into a picture?
- to: zero-to-computers
  type: deeper
  why: How did the idea of zero end up inside every computer?
sources:
- Leibniz G.W. (1703) Explication de l'Arithmétique Binaire.
- "Petzold C. (1999) Code: The Hidden Language of Computer Hardware and Software."
- Shannon C.E. (1938) A Symbolic Analysis of Relay and Switching Circuits. Transactions of the AIEE 57.
interactive:
  t: experiment
  kind: binary
quiz:
  t: predict
  prompt: In binary, each place is worth double the one to its right (4, 2, 1). What normal number is 101?
  options:
  - t: "5"
    ok: true
  - t: "101"
  - t: "3"
  reveal: "Read it as switches worth 4, 2 and 1. The 4 is on, the 2 is off and the 1 is on, so 4 + 1 = 5."
try_this: Make five cards and draw 1, 2, 4, 8 and 16 dots on them. Lay them in a row, biggest on the left. Turn cards face down (off) or face up (on) to show any number from 0 to 31. Ask a friend to pick a number and race to show it.
myth:
  myth: Somewhere inside a computer there are tiny written 0s and 1s.
  truth: There are no written digits anywhere. 0 and 1 are just names for two states, such as low or high voltage in a chip, or the two ways a speck of a hard disk can be magnetised.
---

## The short answer

Computers are made of billions of tiny switches that are either on (1) or off (0).

In binary, each switch is worth double the one to its right: 1, 2, 4, 8, 16, and so on. Add up the "on" switches to get the number. So 1011 means 8 + 0 + 2 + 1, which is 11.

Letters, colours and sounds are all turned into numbers, and the numbers into 1s and 0s. A computer is very good at one thing: flipping huge numbers of switches extremely fast, millions of times in the blink of an eye.

## Why only two?

We count in tens, probably because we have [ten fingers](maths-binary-fingers). A computer has no fingers, only [electricity](electricity-made). Telling ten different levels of electricity apart would be tricky, because wires pick up small wobbles and noise. Telling two apart is easy: is the current there or not?

That simple choice makes computers reliable. A slightly weak "on" is still clearly on. In 1938, a young American engineer named Claude Shannon showed that circuits of on-off switches could do [logic](logic) and arithmetic. His idea is inside every chip made since.

## Letters as numbers

Each letter has a number code. Capital A is 65, which in binary is 01000001. Small a is 97. Every message on your phone is stored this way, one byte (eight bits) at a time for simple English letters. Hindi, Tamil and emoji need longer codes, but the idea is the same.

Pictures work like this too. A screen is a grid of tiny dots called [pixels](pixels), and each one stores how much red, green and blue to show, all as binary numbers. A three-minute song saved on a phone can take about 3 million bytes. That is roughly 24 million switches set just so.

{{story:pixels}}

## An ancient idea

Around 2,000 years ago, the Indian scholar Pingala described poetry rhythms using patterns of [short and long beats](maths-music-rhythm), an early binary-like system. Each line of a poem became a string of two kinds of sounds, like dots and dashes. He even worked out how many patterns of a given length were possible. [More from Pingala](fibonacci-nature).

In 1703, the German mathematician Gottfried Leibniz published a paper on binary counting. He was delighted to learn that patterns in the *I Ching*, an old Chinese book, could be read as binary too.

## Counting on your fingers, computer style

You can count past ten on your fingers by using binary. Let each finger stand for a place: your thumb is 1, the next finger 2, then 4, 8 and 16. A finger up means on, and a finger down means off.

With one hand, you can show every number from 0 to 31. With both hands, you can reach 1,023. Try showing 7, then 20, then 31. With practice, you can count to over a thousand without taking your shoes off.

## From numbers to the whole internet

Today, binary connects everything. When you send a photo, your phone breaks it into long strings of 1s and 0s. The [internet](internet-how) carries them as flashes of light in glass cables or as [radio waves](radio-waves), and another device rebuilds the picture.

Even secrets travel in binary. To keep a message private, computers scramble its 1s and 0s using maths, as you can see in [secret codes](cipher-codes). The switches never know what they are holding. They only know on and off, and that turns out to be enough.
