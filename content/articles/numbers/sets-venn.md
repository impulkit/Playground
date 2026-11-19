---
id: sets-venn
title: What are sets and Venn diagrams?
short: Sets and Venn diagrams
subject: numbers
hook: The man who made overlapping circles famous also built a cricket-bowling machine, and has a stained-glass window in his honour.
certainty: sure
surprising_fact: John Venn, of Venn diagram fame, built a machine for bowling cricket balls. It was tried out against visiting Australian cricketers in 1909.
facts:
- "Set: a collection of things, called members or elements"
- "Venn diagrams: introduced by John Venn in 1880"
- "Earlier circle diagrams: used by Leonhard Euler in the 1760s"
- "Set theory: developed by Georg Cantor from the 1870s"
- "Symbols: ∪ for union (either), ∩ for intersection (both)"
links:
- to: logic
  type: deeper
  why: How do AND, OR and NOT run every computer?
- to: search-engines
  type: surprise
  why: How does a search engine find one page among billions?
- to: cricket-history
  type: surprise
  why: How did cricket spread from English villages to the world?
- to: infinity
  type: deeper
  why: Can one infinity be bigger than another?
- to: probability
  type: deeper
  why: How likely is it, really?
- to: data-science
  type: surprise
  why: How do people find patterns in huge piles of data?
- to: mango-tree
  type: surprise
  why: Why are there over a thousand kinds of mango?
- to: puzzle-konigsberg
  type: surprise
  why: How did Euler prove that a Sunday walk over seven bridges was impossible?
sources:
- Encyclopaedia Britannica, Set theory; Venn diagram.
- Gonville and Caius College, University of Cambridge, John Venn.
- Venn J. (1880), On the Diagrammatic and Mechanical Representation of Propositions and Reasonings. Philosophical Magazine.
interactive:
  t: predict
  prompt: In a class of 30, 18 children like mangoes and 15 like chocolate. Every child likes at least one. How many like both?
  options:
  - t: "3"
    ok: true
  - t: "0"
  - t: "33"
  reveal: 18 + 15 = 33, but there are only 30 children. The 3 extra must have been counted twice, once in each circle, so 3 children sit in the overlap and like both.
try_this: Draw two big overlapping circles on paper, or make them on the floor with two loops of string. Label them "has a pet" and "has a sibling". Ask your family or friends and write each name in the right place. Who ends up in the middle, and who stands outside both circles?
myth:
  myth: Any diagram with overlapping circles is a Venn diagram.
  truth: In a true Venn diagram, every possible overlap is drawn, even if some are empty. Diagrams that only show the overlaps that really exist are more properly called Euler diagrams, after the mathematician who used them first.
---

## The short answer

A set is simply a collection of things. The things can be anything: numbers, animals, cities, or the children in your class. The colours of the Indian flag form a set: [saffron](saffron), white, green and navy blue. The even numbers form a set too, an endless one.

A Venn diagram is a picture of sets. Each set is drawn as a circle. Where [circles](circles) overlap, you put the things that belong to both sets. Things outside all the circles belong to none. It is a simple idea, but it helps people sort information, solve puzzles and even design search engines.

## Thinking in groups

Mathematicians have special words for combining sets. The union of two sets is everything in either one. The intersection is only what they share. If one set is "children who play cricket" and another is "children who play the flute", the intersection is the children who do both.

There is also the empty set, which has nothing in it at all, like the set of elephants in your pencil box. It sounds silly, but the empty set matters in maths in much the way [zero](zero-invent) matters in counting.

Sets can sit inside other sets too. Every dog is a mammal, so the set of dogs is a subset of the set of mammals. In a diagram, the dog circle sits completely inside the mammal circle. Biologists sort living things this way, in sets within sets, from kingdoms right down to species.

## The man behind the circles

John Venn was an English mathematician and priest who taught at Gonville and Caius College, Cambridge. In 1880 he published a paper showing how overlapping circles could make logical arguments easier to see. The diagrams soon took his name.

He was not the first to draw circles this way. More than a century earlier, the Swiss mathematician Leonhard Euler had used them in letters teaching logic to a German princess. Venn's idea was to always draw every possible overlap, even the empty ones, so nothing could be missed.

Venn also liked building machines. He made one that bowled cricket balls, and in 1909 it was tested against the touring Australian team. According to his college, it bowled out one of their leading batsmen more than once. Today the college dining hall has a stained-glass window showing a Venn diagram in his memory.

{{story:search-engines}}

## Sets in your search bar

When you search online, a [search engine](search-engines) is often working with sets. Search for "tigers India" and it looks for pages in the set containing "tigers" and the set containing "India", then shows you the overlap. Librarians call this AND searching. OR searching gives the union instead, and NOT removes a set.

The same thinking is used in databases, shopping websites and [data science](data-science). When a website filters shoes by "red" and "size 5", it is finding the intersection of two sets.

## Sets that never end

In the 1870s, a German mathematician named Georg Cantor began studying sets seriously, including infinite ones. He reached a startling conclusion. Some infinite sets are bigger than others.

The set of counting numbers, 1, 2, 3 and so on, never ends. But Cantor proved that the set of all decimal numbers is even bigger, so big that it can never be listed, even with forever to do it. Many mathematicians at the time found this hard to accept. Today, Cantor's set theory is part of the foundations of modern maths, and his ideas about [infinity](infinity) still surprise people meeting them for the first time.
