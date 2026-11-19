---
id: coding-maths
title: How is maths used in coding?
short: Maths in coding
subject: numbers
hook: Every time a video game character jumps and falls back down, a little piece of school maths is running dozens of times a second.
certainty: sure
surprising_fact: In 1843, Ada Lovelace wrote out a step-by-step method for a machine to calculate a sequence called Bernoulli numbers. It is often called the first computer program, though the machine was never built.
facts:
- "Computers store everything as: binary, 0s and 1s"
- "Scratch stage size: 480 by 360 steps, with (0, 0) in the middle"
- "Remainder operator: % in many languages, used for even and odd checks"
- "Boolean logic: true and false, named after George Boole (1815–1864)"
- "Ada Lovelace's notes on Babbage's engine: 1843"
links:
- to: programming
  type: deeper
  why: How do you tell a computer what to do?
- to: binary-code
  type: deeper
  why: How can just 0 and 1 write every number?
- to: coordinates
  type: deeper
  why: How can two numbers pin down any spot on Earth?
- to: algorithms
  type: surprise
  why: What is an algorithm, really?
- to: ada-lovelace
  type: evidence
  why: Who wrote a computer program before computers existed?
- to: video-game-history
  type: home
  why: What was the first video game?
- to: minecraft-coding
  type: home
  why: Can you learn to code by playing Minecraft?
- to: algebra
  type: deeper
  why: Why do maths books use letters instead of numbers?
sources:
- MIT Media Lab, Scratch programming language and documentation.
- Science Museum, London, Ada Lovelace and the Analytical Engine.
- Encyclopaedia Britannica, Boolean algebra.
interactive:
  t: predict
  prompt: In code, the remainder when a number is divided by 2 is used to check something. What?
  options:
  - t: Whether the number is even or odd
    ok: true
  - t: Whether the number is positive or negative
  - t: Whether the number is bigger than 100
  reveal: Any whole number divided by 2 leaves a remainder of 0 if it is even and 1 if it is odd. Programmers use this to colour every other row of a table, make a light blink or take turns in a game.
try_this: "Write a 'program' for a friend on paper. Use only the commands forward, turn left and turn right to guide them from one side of a room to a chair without bumping into anything. Then add a repeat command, like 'repeat 3 times: forward', and see how much shorter your program gets."
myth:
  myth: You need to be brilliant at maths to start coding.
  truth: Most beginner coding uses counting, simple arithmetic and logic. Coding often makes maths easier to understand, because you can see numbers move things on a screen. Harder maths matters for some jobs, like graphics, AI or security.
---

## The short answer

Code is a set of exact instructions, and computers can only follow instructions written in numbers and [logic](logic). So maths turns up everywhere in [programming](programming). Positions on a screen are coordinates. A score in a game is a variable, the same idea as x in algebra. Deciding whether to open a door uses logic: if the player has the key, then open.

You do not need advanced maths to start. Most beginner programs use counting, adding, comparing and repeating. But as programs get more ambitious, from 3D games to weather forecasts, the maths gets deeper too.

## Numbers under the hood

Inside a computer, everything is stored as [binary](binary-code), long strings of 0s and 1s. A letter, a photo, a song and a cat video are all numbers in the end. The letter A, for example, is stored as 65, which in binary is 1000001.

Each pixel on your screen has numbers for how much red, green and blue light to show. A photo from a phone has millions of [pixels](pixels), so even a simple filter, like making a picture brighter, means doing arithmetic millions of times in a blink.

## Moving things on a screen

In Scratch, the free coding tool made at MIT, the stage is a grid 480 steps wide and 360 high. The centre is (0, 0). Move right and x goes up. Move up and y goes up. This is the same [coordinate](coordinates) grid from maths class, with negative numbers for left and down.

To make a sprite walk, you add to its x. To make it jump, you add to its y, then subtract a bit more each moment to pull it back down. That is a simple model of gravity. Many game makers start exactly this way before learning the physics formulas behind real-looking motion.

{{story:algorithms}}

## Logic: if, and, or, not

Programs make decisions all the time. If the password is correct, open the home screen. If the ball touches the edge and the score is under ten, bounce. These rules use Boolean logic, named after George Boole, an English mathematician who worked in Ireland in the 1800s. In Boolean logic, every statement is either true or false, and words like and, or and not combine them.

Boole never saw a computer. But in the 1930s, an American engineer named Claude Shannon showed that electrical switches could do Boole's logic. Every chip in your phone is built from billions of tiny switches doing it.

## Remainders, loops and patterns

One small operation is surprisingly useful: the remainder. In many [coding languages](coding-languages) it is written with the % sign. Seven % 2 gives 1, because 7 divided by 2 leaves 1. If a number % 2 is 0, the number is even.

Programmers use remainders to make clocks wrap from 59 seconds back to 0, to colour every other row of a table and to share turns fairly between players. Loops, which repeat instructions, work hand in hand with them. A loop with a counter can draw a star, a spiral or a pattern of [tessellating](tessellations) tiles in a few lines.

## The first programmer

In 1843, Ada Lovelace, a young English mathematician, translated an article about [Charles Babbage](charles-babbage)'s planned Analytical Engine, a mechanical computer. She added long notes of her own, including a step-by-step method for the machine to calculate a tricky sequence of numbers. It is often called the first published computer program.

[Ada Lovelace](ada-lovelace) also guessed that such machines might one day make music or art, not just sums. She was right. Today, maths in code paints the animated films you watch and sorts the search results you see. Coding classes in schools from Bengaluru to Boston now use it to make maths feel like play.
