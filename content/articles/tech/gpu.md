---
id: gpu
title: What is a GPU, and why does AI need so many?
short: GPU
subject: tech
hook: A GPU was invented to draw video games faster. Today, tens of thousands of them working together teach AI to write, talk and see.
certainty: sure
surprising_fact: One of Nvidia's AI chips announced in 2024, called Blackwell, packs 208 billion tiny switches. That is about 25 for every person on Earth.
facts:
- "GPU stands for: graphics processing unit"
- "CPU stands for: central processing unit, the main brain of a computer"
- "Marketed as the first GPU: Nvidia's GeForce 256, 1999"
- "Turning point for AI: 2012, when a program trained on Nvidia GPUs won a big picture-recognition contest"
- "Switches on Nvidia's Blackwell AI chip (2024): 208 billion transistors"
- "GPUs in India's shared AI computers: about 38,000 by February 2026"
links:
- to: chips-silicon
  type: home
  why: How are computer chips made?
- to: neural-networks
  type: deeper
  why: How do neural networks learn?
- to: supercomputers
  type: deeper
  why: What makes a supercomputer so powerful?
- to: video-games
  type: evidence
  why: How are video games made?
- to: pixels
  type: deeper
  why: What is a pixel?
- to: market-value
  type: surprise
  why: How can a company lose a trillion dollars in a week?
sources:
- Nvidia blog, 'Game-Changer: How the World's First GPU Leveled Up Gaming and Ignited the AI Era', 11 October 2024.
- Nvidia, Blackwell platform announcement, March 2024.
- Encyclopaedia Britannica, graphics processing unit.
- Business Today, 'India to add 20,000 GPUs in a week, beyond pre-existing 38,000 base, says Vaishnaw', 18 February 2026.
- Free Press Journal, 'Nvidia's Jensen Huang controversy: how India's AI ambitions will get affected', 10 November 2026.
interactive:
  t: predict
  prompt: You must colour in a million tiny squares on a giant sheet. Which team finishes first?
  options:
  - t: Thousands of children, each with a crayon, colouring different squares at the same time
    ok: true
  - t: Ten brilliant artists, each working very fast
  - t: One expert, who never makes a mistake
  reveal: Many hands win when the job splits into lots of small, simple pieces. That is the idea behind a GPU. A CPU has a few very clever cores. A GPU has thousands of simpler ones, all working at once.
try_this: Time yourself writing the 5 times table up to 5 x 20, alone. Then split it with four friends or family members, each writing four lines at the same time, and time it again. Which was faster? You have just worked like a GPU.
myth:
  myth: GPUs are only for gaming.
  truth: GPUs were built for games, but today they also train AI, forecast weather, design medicines and help scientists study space. The biggest buyers of GPUs now are companies running giant AI data centres.
---

## The short answer

A GPU, or graphics processing unit, is a computer chip that does thousands of small sums at the same time. It was first made to draw pictures on a screen, quickly enough for smooth video games.

AI needs GPUs because teaching an AI is mostly a mountain of simple multiplications. A GPU can do huge numbers of them at once, so it learns in weeks instead of years. The biggest AI systems use tens of thousands of GPUs joined together.

## A kitchen with many cooks

Every computer has a CPU, its main brain. A CPU has a few powerful cores, each able to handle tricky jobs one after another, like a head chef.

A GPU is more like a giant wedding kitchen with thousands of helpers. Each helper can only do one simple job, such as rolling a roti. But a thousand helpers rolling at once beat any single chef. Working side by side like this is called [parallel](?parallel) computing.

Pictures need exactly this. A screen is made of millions of [pixels](pixels), tiny dots of colour. In a game, the colour of every [pixel](?pixel) must be worked out again many times a second. Each pixel is a small sum, and they can all be done at once. Inside, a GPU holds billions of [transistors](?transistor), the tiny switches that [computer chips](chips-silicon) are made of.

A GPU does not replace the CPU. The two work as a team. The CPU runs the computer, decides what needs doing and hands the big, repetitive jobs to the GPU. In a phone or laptop, both often sit side by side on the same chip.

## From games to AI

In 1999, Nvidia, a company in California's [Silicon Valley](silicon-valley), launched the GeForce 256 and sold it as the world's first GPU. It took the job of drawing 3D scenes away from the CPU, so [video games](video-games) looked far better.

Scientists soon noticed that a GPU's thousands of helpers could do other maths too. In 2006, Nvidia introduced software called CUDA that let programmers use GPUs for any kind of number crunching.

The big moment came in 2012. A team at the University of Toronto trained an AI program on Nvidia GPUs to recognise objects in photos. It beat every other entry in a famous contest by a wide margin. Soon, AI researchers everywhere wanted GPUs.

{{story:neural-networks}}

## Why AI is hungry for GPUs

A [neural network](neural-networks) is made of millions or billions of numbers, joined in layers. To learn, it looks at an example, makes a guess, checks how wrong it was, and nudges all its numbers a little. Then it does it again, billions of times. Each step follows the same [algorithm](?algorithm), and each step is mostly multiplying long lists of numbers, the perfect job for a GPU.

[Large language models](large-language-models), the kind behind chatbots, learn from huge amounts of text. Training one can keep thousands of GPUs busy for months, inside buildings called [data centres](data-centres). These use lots of electricity and need powerful cooling, because busy chips get hot. Joined together, they work like a [supercomputer](supercomputers).

## India's GPUs

GPUs are expensive, so most students and small companies cannot buy many. In 2024, India started the IndiaAI Mission to share them. The government pays part of the cost so researchers and startups can rent time on powerful machines cheaply. By February 2026, about 38,000 GPUs were part of it, and the minister said 20,000 more were being added. Reports say Nvidia chips make up more than 85% of these shared machines.

Because so much of the AI world runs on one company's chips, news about Nvidia is watched closely, as the story of [how a company can lose a trillion dollars in a week](market-value) shows.
