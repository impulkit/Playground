---
id: puzzles-logic
title: How do logic puzzles work?
short: Logic puzzles
subject: numbers
hook: A farmer must cross a river with a wolf, a goat and a cabbage. That puzzle has been teasing people for more than 1,200 years.
certainty: sure
surprising_fact: The Tower of Hanoi puzzle comes with a legend that the world will end when monks finish moving 64 discs. At one move a second, that would take about 585 billion years.
facts:
- River-crossing puzzle: in a collection linked to Alcuin of York, about 800 CE
- Tower of Hanoi: invented by Édouard Lucas, 1883
- Moves for 64 discs: 18,446,744,073,709,551,615
- Knights and knaves puzzles: made famous by Raymond Smullyan
- Main tools: deduction and elimination
links:
- to: sudoku
  type: deeper
  why: What is the maths behind Sudoku?
- to: magic-squares
  type: deeper
  why: What are magic squares?
- to: board-games
  type: surprise
  why: What are the oldest board games ever found?
- to: magic-tricks
  type: surprise
  why: How do magicians fool your brain?
- to: algorithms
  type: surprise
  why: What is an algorithm, really?
- to: chess-india
  type: home
  why: How did chess begin in India?
- to: game-theory
  type: surprise
  why: Can maths decide where to kick a penalty?
- to: maths-olympiad
  type: surprise
  why: What kinds of puzzles do maths olympiad students solve?
sources:
- Raymond Smullyan (1978) What Is the Name of This Book? Prentice-Hall.
- Martin Gardner (1959) The Scientific American Book of Mathematical Puzzles and Diversions. Simon and Schuster.
interactive:
  t: predict
  prompt: "On an island, knights always tell the truth and knaves always lie. You meet someone who says: \"I am a knave.\" What is going on?"
  options:
  - t: They are a knight
  - t: They are a knave
  - t: Nobody on the island could say that
    ok: true
  reveal: A knight can't say it, because it would be a lie. A knave can't say it either, because it would be true. So nobody on the island could ever say "I am a knave". Puzzles like this train you to test each possibility in turn.
try_this: Make a Tower of Hanoi with three coins of different sizes and three spots on a table. Stack the coins biggest at the bottom on the first spot. Move the whole stack to the third spot, one coin at a time, never putting a bigger coin on a smaller one. It takes at least 7 moves. Try four coins next, which needs 15.
myth:
  myth: Albert Einstein wrote the famous "zebra puzzle" and said only 2% of people could solve it.
  truth: There's no evidence Einstein had anything to do with it. The puzzle first appeared in a magazine in 1962, years after his death. The "2%" claim seems to have been added later to make it sound harder.
---

## The short answer

A [logic](logic) puzzle gives you a few facts and asks you to work out something that follows from them. You don't need special knowledge, just careful thinking.

Most logic puzzles rely on two tools. **Deduction** means reasoning from what you know: if all cats have tails, and Kitty is a cat, Kitty has a tail. **Elimination** means crossing out possibilities that can't be true, until only one is left. Detectives in stories work this way, and so do people solving [Sudoku](sudoku).

Good puzzles feel impossible at first, then obvious once you see the trick.

## A puzzle older than most castles

One of the oldest puzzle collections in Europe is linked to Alcuin of York. He was an English scholar who taught at the court of the emperor Charlemagne around 800 CE. It was made to sharpen the minds of young students.

It contains the river-crossing puzzle. A farmer has a wolf, a goat and a cabbage, and a boat that carries only him and one of them. Left alone, the wolf will eat the goat, and the goat will eat the cabbage. How does he get them all across?

The trick is that the farmer may take something back the way he came. He takes the goat over first, then comes back for the wolf, but brings the goat back with him. Leaving the goat, he takes the cabbage across, and finally returns for the goat.

## Knights and knaves

The American mathematician Raymond Smullyan was also a magician and a pianist. He wrote whole books of puzzles about an island of knights, who always tell the truth, and knaves, who always lie.

Suppose two people stand at a fork in the road. One is a knight and one is a knave, but you don't know which. Only one road leads to the village. You may ask one question. The famous trick is to ask: "If I asked the other person which way is the village, what would they say?" Then go the other way. Whether you asked a knight or a knave, the answer you hear is always wrong.

{{story:magic-tricks}}

## The Tower of Hanoi

In 1883, the French mathematician Édouard Lucas [sold a puzzle with three pegs](puzzle-tower-hanoi) and a stack of discs of different sizes. You must move the stack to another peg, one disc at a time, never putting a bigger disc on a smaller one.

Three discs take at least 7 moves. Four take 15. Each extra disc doubles the moves and adds one. Lucas sold the puzzle with a story about temple priests moving 64 golden discs, with the world ending when they finished. That would take 2⁶⁴ − 1 moves, more than 18 billion billion. At one move per second, that's about 585 billion years, far longer than the universe has existed.

Computer science students still study the puzzle, because its neat step-by-step solution is a good example of an [algorithm](algorithms).

## Grid puzzles

Many magazine logic puzzles give you a set of clues about people, pets and houses, and a grid to fill in. "The person with the dog lives next to the red house." You tick what's true and cross out what can't be.

The most famous is the "zebra puzzle", which asks who owns the zebra. It is often said to have been written by [Einstein](einstein). It actually first appeared in a magazine called *Life International* in 1962, seven years after he died.

## Why puzzles matter

Logic puzzles train the same thinking used in maths proofs, computer programs and [chess](chess-india). Programmers use logical rules to make computers check every possibility. Scientists use elimination to rule out wrong explanations. And sometimes people just like the click of an answer falling into place.
