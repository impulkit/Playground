---
id: puzzle-konigsberg
title: How did a puzzle about seven bridges start a branch of maths?
short: Seven bridges puzzle
subject: numbers
hook: People in an old German city liked to try a Sunday walk crossing each of their seven bridges exactly once. Nobody ever managed it, and in 1736 a mathematician proved why.
certainty: sure
surprising_fact: After bombing in the Second World War and later rebuilding, the city's bridges changed, and the walk that was impossible in 1736 can now be done.
facts:
- "City: Königsberg, Prussia, now Kaliningrad, Russia"
- "Bridges in Euler's time: 7"
- "Solved by: Leonhard Euler, 1736"
- "Branch of maths it started: graph theory"
- "Rule: a route works only if 0 or 2 places have an odd number of bridges"
links:
- to: bridges
  type: deeper
  why: How do bridges hold up so much weight?
- to: maps-digital
  type: surprise
  why: How does a phone map find the fastest way home?
- to: logic
  type: deeper
  why: How can you prove something is impossible?
- to: russia
  type: home
  why: How big is Russia, really?
- to: puzzle-tower-hanoi
  type: surprise
  why: Why will the Tower of Hanoi legend never come true?
- to: internet-how
  type: surprise
  why: How does a message find its way across the internet?
- to: world-war-two
  type: deeper
  why: How did the Second World War change the world?
sources:
- Encyclopaedia Britannica, Königsberg bridge problem and Leonhard Euler.
- Mathematical Association of America, Euler's paper on the Königsberg bridges (1736, published 1741).
interactive:
  t: predict
  prompt: In Königsberg, each of the four land areas had an odd number of bridges. What did Euler prove about a walk crossing every bridge exactly once?
  options:
  - t: It was impossible, however you tried
    ok: true
  - t: It was possible, but only starting on the island
  - t: It was possible, but only at night when bridges were empty
  reveal: Every time you walk through a place, you use one bridge in and one bridge out. So any place you pass through needs an even number of bridges. Only your start and finish can have odd numbers. Königsberg had four odd places, so no route could work.
try_this: Try to draw the "house" shape, a square with a triangle roof and an X across the square, without lifting your pencil or going over a line twice. Count how many lines meet at each corner first. Euler's rule says you must start at a corner with an odd number of lines. Try it both ways and see.
myth:
  myth: You can only prove something is impossible by trying every possible route.
  truth: Euler didn't test a single walk. He found a simple reason, counting bridges at each place, that rules out every route at once. That's the power of a mathematical proof.
---

## The short answer

In the 1700s, the city of Königsberg in Prussia sat on both banks of the River Pregel, with two islands in the middle. Seven bridges joined the four pieces of land. Locals wondered whether you could walk through the city crossing every bridge exactly once. People tried. Nobody could.

In 1736 the Swiss mathematician Leonhard Euler proved it was impossible. His clever idea was to forget the streets, houses and distances, and draw each piece of land as a dot and each bridge as a line. That simple picture launched a whole new branch of maths, now called graph theory. It's the maths behind delivery routes, phone maps and the internet.

## The puzzle of the Sunday walk

Königsberg was a busy trading city on the Baltic Sea. The Pregel river split around an island called Kneiphof, with a second island just downstream. Over the centuries, the townspeople built seven [bridges](bridges) linking the islands and the two riverbanks.

The challenge became a local game. Start anywhere, finish anywhere, but cross each bridge exactly once. No swimming, no boats, no doubling back over a bridge. It sounds like it should be possible with enough patience.

## Euler's dots and lines

Euler worked in St Petersburg and heard about the puzzle in letters. He noticed something important: the shape of the land didn't matter. Only the connections did. So he imagined each land area as a point and each bridge as a line between points.

Then he thought about any walk. Each time you enter a piece of land by one bridge, you must leave it by another. So every place you pass through uses up bridges in pairs and needs an even number of them. Only the starting place and the finishing place can have an odd number.

In Königsberg, one area had five bridges and the other three had three each. All four were odd. A walk could have at most two odd places, its start and its end, so the walk was impossible. Not difficult. Impossible. That kind of certainty is what [logic](logic) and proof can give you.

{{story:maps-digital}}

## A new kind of maths

Euler's dots-and-lines drawing is called a graph. It isn't the same as the bar charts you draw in school. Here a graph means a network: points, called nodes, joined by lines, called edges.

Graphs turn up everywhere. Cities and roads form one. So do friends on social media, airports and flights, and computers linked by cables. When a phone [map app](maps-digital) finds you the quickest route, it searches a giant graph of roads. Messages crossing the [internet](internet-how) hop between nodes too.

Euler went on to write more maths than almost anyone in history. He kept working even after losing most of his sight, doing huge sums in his head.

## The famous postman problem

In the early 1960s a Chinese mathematician named Kwan Mei-Ko asked a related question. A postman must walk down every street at least once and return home. If he can't avoid repeating some streets, which ones should he repeat to walk the least? It's now called the Chinese postman problem, and councils use versions of it to plan routes for rubbish lorries, snowploughs and street sweepers.

## What happened to the bridges

Königsberg was heavily bombed in 1944, near the end of the [Second World War](world-war-two). Afterwards, the city became part of the Soviet Union and was renamed Kaliningrad. Today it belongs to Russia. Some of Euler's bridges were destroyed and never rebuilt, and others were replaced.

The new layout changed the maths. With the bridges as they are now, only two land areas have an odd number of crossings. So Euler's walk can finally be done, starting at one odd area and ending at the other. And the strangest part? Another famous puzzle uses the same habit of breaking a big problem into simpler pieces, the legendary [Tower of Hanoi](puzzle-tower-hanoi).
