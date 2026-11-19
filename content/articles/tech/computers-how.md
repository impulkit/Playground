---
id: computers-how
title: How does a computer think?
short: How computers work
subject: tech
hook: A computer only understands two things, on and off. Yet with billions of tiny switches, it can play chess, show films and land rockets.
certainty: sure
surprising_fact: A modern phone chip can carry out billions of simple steps every second, and each step is just switches turning on and off.
facts:
- Basic language: binary, 0s and 1s
- Basic part: the transistor, a tiny switch
- Transistors in a modern phone chip: billions
- Speed of a typical processor: a few billion ticks a second
- India's first supercomputer: PARAM 8000, 1991
links:
- to: binary-code
  type: deeper
  why: How can you write any number with just 0 and 1?
- to: chips-silicon
  type: deeper
  why: How do you fit billions of switches on a chip?
- to: programming
  type: deeper
  why: How do people give a computer instructions?
- to: data-storage
  type: home
  why: Where does a computer keep your photos when it's switched off?
- to: first-computers
  type: home
  why: What did the first computers look like?
- to: brain-works
  type: surprise
  why: Is your brain anything like a computer?
- to: ai-what
  type: surprise
  why: Can a computer ever really think?
- to: dino-speed
  type: surprise
  why: How can a computer work out how fast T. rex could run?
sources:
- Encyclopaedia Britannica, Computer.
- Petzold C. (1999) Code - The Hidden Language of Computer Hardware and Software. Microsoft Press.
interactive:
  t: predict
  prompt: In binary, using only 0 and 1, how would you write the number 5?
  options:
  - t: "101"
    ok: true
  - t: "11111"
  - t: "5"
  reveal: In binary, each place is worth double the one to its right, so the places are worth 4, 2 and 1. Five is one 4, no 2 and one 1, so it is written 101. Computers store every number, letter and colour this way.
try_this: Make five cards and draw 1, 2, 4, 8 and 16 dots on them. Lay them in a row, biggest on the left. Turn cards face up or face down to make any number from 0 to 31, writing 1 for face up and 0 for face down. You are counting in binary, just like a computer.
myth:
  myth: Computers understand what they are doing, like a very clever brain.
  truth: A computer follows instructions exactly, very fast, without knowing what they mean. Even programs that seem clever are built from simple steps that switch tiny electrical signals on and off.
---

## The short answer

A computer doesn't think the way you do. It follows instructions, very precisely and very fast.

Deep inside are billions of tiny switches called [transistors](?transistor). Each switch can be on or off, which the computer treats as 1 or 0. Everything it handles, whether numbers, letters, music or photos, is stored as long patterns of 1s and 0s, called [binary](binary-code).

The computer's processor takes in these patterns, follows instructions to combine and compare them, and produces new patterns. It does this billions of times a second. Out of all those simple steps come [video games](video-games), maps and messages.

## Switches all the way down

Think of a [light switch](light-switch). On or off. Now connect two switches so that a bulb lights only if both are on. That's a simple [logic](logic) gate, called AND. Wire them so the bulb lights if either is on, and you've made an OR gate.

Join a few of these gates and you can add two [binary numbers](maths-binary-fingers). Join thousands and you can multiply. Join billions and you have a processor. Modern [computer chips](chips-silicon) pack billions of transistors onto a sliver of silicon smaller than a postage stamp, each switch far too small to see.

## Fetch, decode, do

The processor, or CPU, works in a loop. It fetches an instruction from memory. It decodes it to work out what to do, such as "add these two numbers" or "jump to another instruction". Then it carries it out. Then it fetches the next one.

A clock inside the computer keeps this loop in step, ticking billions of times a second. A processor running at 3 gigahertz ticks 3 billion times every second. Each instruction is tiny, but at that speed even a long task takes only a moment.

Those instructions are written by people as [programs](programming), then translated into binary the processor can follow.

{{story:binary-code}}

## Memory and storage

A computer needs a place to keep what it's working on. Its working memory, called RAM, is fast but forgets everything when the power goes off. It's like the top of your desk while you're doing homework.

For things it must keep, like your photos, songs and apps, it uses storage: a flash chip in phones, or a hard disk or solid-state drive in many computers. This is more like a cupboard. It is slower to reach, but it keeps things safe when switched off. Our article on [data storage](data-storage) goes deeper.

## In, out and around

Computers also need ways to take in information and show results. A keyboard, mouse, touchscreen, microphone or camera brings information in. A screen, speaker or printer sends it out. Wires and radio signals connect computers to each other and to the [internet](internet-how).

The same basic design runs in a laptop in Bengaluru, a [games console](tech-game-consoles) in Texas and the chip in a [washing machine](washing-machines). India built its first supercomputer, PARAM 8000, in 1991 at C-DAC in [Pune](pune), joining together many processors to work at once.

## Fast but not clever

A computer is far faster than any person at arithmetic. It doesn't get bored or tired. But it does exactly what it's told, even when the instructions are wrong. A single mistake in a program can make it crash.

That is very different from [your brain](brain-works), which is slower at sums but brilliant at recognising faces, understanding jokes and learning from just a few examples. Your brain's 86 billion [nerve cells](nervous-system) work all at once, in a messy, flexible way. Even the cleverest artificial intelligence today runs on the same simple on-and-off switches as every other computer.
