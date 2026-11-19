---
id: minecraft-coding
title: How do people build computers inside games?
short: Computers in Minecraft
subject: tech
hook: Players have built working calculators, and even simple computers, inside Minecraft out of glowing dust, levers and torches, block by block.
certainty: sure
surprising_fact: In 2022 a player built a computer inside Minecraft that was powerful enough to run a very simple version of Minecraft itself.
facts:
- Building material: redstone, Minecraft's "wire"
- Basic parts: logic gates such as AND, OR and NOT
- Minecraft released: 2011 (full version)
- Copies sold: more than 300 million (2023)
- Speed: millions of times slower than a real chip
links:
- to: binary-code
  type: deeper
  why: How can just 0 and 1 store anything?
- to: chips-silicon
  type: deeper
  why: How do billions of switches fit on a chip?
- to: computers-how
  type: home
  why: How does a computer actually work?
- to: logic
  type: deeper
  why: What is logic, and how do we use it?
- to: video-games
  type: home
  why: How are video games made?
- to: alan-turing
  type: deeper
  why: What is a Turing machine?
- to: lego
  type: surprise
  why: How did a plastic brick take over the world?
- to: programming
  type: deeper
  why: How do people write instructions for computers?
sources:
- Minecraft Wiki and Mojang Studios, Redstone mechanics.
- Charles Petzold, Code: The Hidden Language of Computer Hardware and Software (2000).
- Encyclopaedia Britannica, Logic gate and Computer.
interactive:
  t: predict
  prompt: A Minecraft lamp is wired so it lights up only when BOTH of two levers are switched on. What kind of logic gate is that?
  options:
  - t: An AND gate
    ok: true
  - t: An OR gate
  - t: A NOT gate
  reveal: An AND gate gives "on" only when both inputs are on. An OR gate would light the lamp if either lever were on, and a NOT gate flips a single input, turning on into off. Real computer chips are built from billions of tiny gates like these.
try_this: Make an AND gate with people. Two friends are "inputs" who raise a hand for on. A third friend, the "output", stands up only if both hands are raised. Then change the rule to OR, where one hand is enough, and see how the output behaves differently.
myth:
  myth: You need special computer parts to build a computer.
  truth: Any system with reliable on-off switches that can control other switches can, in principle, be a computer. People have built adding machines from dominoes and marbles, and whole computers out of redstone, though they are very slow.
---

## The short answer

Every computer, from a phone to a supercomputer, is built from a huge number of tiny switches. Each switch is either on or off, and switches can control other switches. Group them the right way and you get parts that can add numbers, remember things and follow instructions.

Some video games give players switches too. In Minecraft, a material called redstone carries power like a wire, and torches, [levers](lever-lift) and repeaters act as switches. By connecting thousands of them, players have built working [calculators](calculators), memory and simple computers inside the game. They are slow and enormous, but they work on the same ideas as the chip in your phone.

## Switches that make decisions

The basic building blocks of a computer are logic gates. Each takes one or two on-off inputs and gives one output.

A NOT gate flips its input: on becomes off. An AND gate turns on only if both inputs are on. An OR gate turns on if either is. That's about all there is. Yet combine enough of these simple gates, and you can do any calculation a computer can do. Inside real chips, the switches are tiny [transistors](?transistor), billions of them packed onto a [silicon chip](chips-silicon) smaller than a fingernail.

## Counting in on and off

Computers count using [binary](binary-code), a number system with only two digits, 0 and 1. Off is 0, on is 1. [The number 5 in binary is 101](maths-binary-fingers).

To add two binary numbers, you need a circuit called an adder, made from a handful of logic gates. In Minecraft, players lay out redstone in neat rows to build adders, then chain many together to handle bigger numbers. A row of lamps at the end shows the answer as lit and unlit bulbs.

{{story:binary-code}}

## From gates to a computer

A full computer needs more than an adder. It needs memory to store numbers and a clock that ticks to keep everything in step. It also needs a control unit that reads instructions one after another and tells the other parts what to do.

Minecraft builders have made all of these. Their computers can stretch for hundreds of blocks in each direction, like a city of wires. Redstone signals move slowly, so a redstone computer might do a few simple steps every second, while your phone does billions.

In 2022 a player shared a huge redstone computer that could run a tiny, low-detail version of Minecraft, a game running inside a computer built inside the same game. It was so slow that the video had to be sped up enormously to show it working.

## The idea behind it

In 1936 the British mathematician [Alan Turing](alan-turing) described an imaginary machine that could carry out any calculation, given enough time and memory. Any system that can do what his machine does is called "Turing complete".

Minecraft's redstone is Turing complete. So is a simple grid game called the Game of Life, invented by the mathematician John Conway in 1970, where people have built computers out of patterns of dots. Even some card games have been shown to be Turing complete.

## Why people do it

Building a computer out of blocks is a slow, patient way to learn how real computers work, because you can walk around inside your machine and see every wire. Many engineers say games like this first got them interested in [programming](programming) and electronics.

Minecraft's education edition now includes coding lessons where students write programs to control the game. It has become one of the best-selling video games ever, and a surprising number of its players have quietly taught themselves computer science along the way.
