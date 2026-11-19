---
id: logic
title: What is logic?
short: Logic
subject: numbers
hook: Every phone and computer on Earth runs on three tiny ideas, AND, OR and NOT, that a former schoolteacher wrote about in 1854.
certainty: sure
surprising_fact: A favourite example in ancient Indian logic goes like this. There is smoke on the hill, and wherever there is smoke there is fire, as in a kitchen. So there is fire on the hill.
facts:
- "Logic: the study of what follows from what"
- "Aristotle: wrote about the syllogism, about 2,350 years ago"
- "Nyaya: an ancient Indian school of logic and debate"
- "George Boole: The Laws of Thought, 1854"
- "Claude Shannon: linked Boole's logic to electric circuits, 1937"
links:
- to: computers-how
  type: surprise
  why: How does a computer actually think?
- to: puzzles-logic
  type: deeper
  why: Can you solve the puzzle of the truth-teller and the liar?
- to: ancient-greece
  type: surprise
  why: What did the ancient Greeks give the world?
- to: binary-code
  type: deeper
  why: How can just 0 and 1 store a whole song?
- to: paradoxes
  type: deeper
  why: Can a sentence be both true and false?
- to: fake-news
  type: surprise
  why: How can you spot a story that isn't true?
- to: sets-venn
  type: deeper
  why: What are sets and Venn diagrams?
- to: programming
  type: surprise
  why: How do people talk to computers?
sources:
- Encyclopaedia Britannica, Logic; Nyaya; Syllogism.
- George Boole (1854), An Investigation of the Laws of Thought.
- Stanford Encyclopedia of Philosophy, Aristotle's Logic.
interactive:
  t: predict
  prompt: "If it rains, the road gets wet. The road is wet. Does that prove it rained?"
  options:
  - t: No, something else could have made it wet
    ok: true
  - t: Yes, it must have rained
  - t: Only if it is the monsoon
  reveal: A water tanker, a burst pipe or someone washing a car could also wet the road. The rule only works forwards, from rain to wet road. Running it backwards is one of the most common mistakes in reasoning.
try_this: Play "AND, OR, NOT" with a friend. One person says a rule, such as "stand up if you are wearing blue AND you have a sister", or "stand up if you are NOT wearing shoes". Everyone works out whether to stand. Then try mixing them, like "blue OR red, AND NOT socks".
myth:
  myth: Being logical means not having any feelings.
  truth: Logic is a set of tools for checking whether a conclusion follows from its reasons. People use it alongside feelings, not instead of them. Even very emotional decisions can be checked with logic.
---

## The short answer

Logic is the study of good reasoning. It asks a simple question: if these things are true, what else must be true? A logical argument starts from statements, called premises, and moves step by step to a conclusion.

Here is a famous example. All humans are mortal. [Socrates](socrates) is a human. So Socrates is mortal. If the first two statements are true, the third cannot be false. Logic helps us spot when an argument works like that, and when it only seems to. It is used by mathematicians, lawyers, scientists, detectives and, above all, by [computers](computers-how).

## Greece and India

In [ancient Greece](ancient-greece), about 2,350 years ago, the philosopher Aristotle studied arguments like the one about Socrates. He called them syllogisms and sorted them into patterns that always work and patterns that do not. His ideas were taught in Europe and the Middle East for nearly 2,000 years.

In India, a school of thought called Nyaya developed its own rules of reasoning and debate. They were written down in the *Nyaya Sutras* roughly 2,000 years ago, though scholars argue about the exact date. A Nyaya argument has five steps. Its favourite example: the hill has fire, because it has smoke, and wherever there is smoke there is fire, as in a kitchen. Nyaya thinkers also listed the mistakes people make in arguments, much as modern books on critical thinking do.

## Traps in reasoning

Some arguments sound right but are broken. "If it rains, the road is wet. The road is wet, so it rained." That does not follow, because the road could be wet for other reasons. Another trap is assuming that because one thing happened after another, the first caused the second. You wore your lucky socks and your team won, but the socks probably had nothing to do with it.

A third trap is the false choice: "Either you love cricket or you hate sport." Plenty of people fall somewhere in between, or love football instead. Arguments like this hide all the other possibilities.

Spotting these traps is a useful skill when reading the news or scrolling online. Many false stories rely on arguments that only look logical, which is one reason people who study [fake news](fake-news) teach logic.

{{story:computers-how}}

## Boole's algebra of thinking

In 1854, an English schoolteacher turned professor named George Boole published *The Laws of Thought*. He showed that reasoning could be written like [algebra](algebra), using just two values: true and false. He used three main operations: AND, OR and NOT.

"AND" is true only if both parts are true. "OR" is true if at least one part is. "NOT" flips true to false and false to true. Boole thought he was describing how the mind works. He had no idea he was writing the instruction manual for machines that did not exist yet.

## Logic inside your phone

In 1937, a young American student named Claude Shannon noticed that electric switches behave like Boole's logic. A switch is on or off, just like true or false. Two switches in a row act like AND, because current flows only if both are on. Two side by side act like OR.

Every computer chip today contains billions of tiny switches called [logic gates](minecraft-coding), wired to follow Boole's rules. They work with 1 for true and 0 for false, the language of [binary code](binary-code). When you search [the internet](internet-how), send a message or play a game, millions of AND, OR and NOT decisions are happening every second.
