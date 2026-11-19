---
id: calculators
title: How does a calculator do sums?
short: Calculators
subject: tech
hook: A pocket calculator can't really multiply. It adds and shifts numbers very fast, in a language with only two digits.
certainty: sure
surprising_fact: The first microprocessor sold to the public, Intel's 4004 in 1971, was originally designed for a Japanese desktop calculator.
facts:
- Ancient helper: the abacus, used for thousands of years
- First mechanical calculator sold: Blaise Pascal's Pascaline, 1640s
- First microprocessor: Intel 4004, made for a calculator, 1971
- Inside: numbers stored as 0s and 1s
- "Human computer": Shakuntala Devi multiplied two 13-digit numbers in 28 seconds, 1980
links:
- to: abacus
  type: deeper
  why: How does an abacus help you count so fast?
- to: binary-code
  type: deeper
  why: How can every number be written with only 0 and 1?
- to: charles-babbage
  type: deeper
  why: Who designed a computer powered by steam?
- to: chips-silicon
  type: home
  why: How are computer chips made?
- to: vedic-maths
  type: surprise
  why: Are there really shortcuts for big sums?
- to: algorithms
  type: home
  why: What is an algorithm, really?
- to: computers-how
  type: home
  why: What happens inside a computer?
- to: mental-maths
  type: surprise
  why: How do some people do huge sums in their heads?
sources:
- Science Museum Group (London), Babbage's Difference Engine No. 2.
- Computer History Museum, Intel 4004 and the Busicom calculator.
- Guinness World Records, fastest human computation (Shakuntala Devi, 1980).
interactive:
  t: predict
  prompt: You type 2 + 3 × 4 = into a simple shop calculator. What answer does it usually show?
  options:
  - t: "20"
    ok: true
  - t: "14"
  - t: "24"
  reveal: Many simple calculators work out each step as you type, so they do 2 + 3 = 5 first, then 5 × 4 = 20. Scientific calculators follow the rule that multiplication comes before addition, so they give 14. Both are doing exactly what they were built to do.
try_this: Multiply like a calculator. Work out 13 × 5 using only adding and doubling. Double 13 to get 26, double again to get 52 (that is 13 × 4), then add one more 13 to get 65. Calculators break hard sums into steps like these, only in binary and millions of times faster.
myth:
  myth: A calculator's answer is always exactly right.
  truth: Calculators follow their own rules and limits. Simple and scientific calculators can give different answers for the same keys, and because they store only a limited number of digits, answers like 1 ÷ 3 × 3 may come out as 0.9999999 instead of 1.
---

## The short answer

A calculator turns every number you type into [binary](binary-code), a code that uses only 0s and 1s. Inside is a tiny chip containing thousands of electronic switches arranged into circuits called [logic](logic) gates. Some circuits are wired to add two binary numbers. Everything else is built from that.

To subtract, the calculator uses a clever trick that turns subtraction into a kind of addition. To multiply, it adds and shifts numbers along, the way you multiply on paper by writing rows and adding them. To divide, it repeatedly subtracts. For [square roots](square-roots) and trickier functions, it follows step-by-step recipes, called [algorithms](algorithms), that home in on the answer. When it's done, it turns the binary back into ordinary digits on the screen.

## Beads, wheels and gears

People have used tools to help with sums for thousands of years. The [abacus](abacus), with beads on rods, was used in ancient [Mesopotamia](mesopotamia), China, Rome and India, and skilled users can still beat a calculator on some sums.

In the 1640s, a French teenager named Blaise Pascal built a machine of [gears and wheels](gears) to help his father, a tax official, add long columns of numbers. Turning one wheel a full circle nudged the next wheel along by one, just like carrying a digit. Only a small number of Pascalines were ever made, because each was hard to build and costly. A few decades later, the German mathematician Gottfried Leibniz built a machine that could also multiply.

In the 1820s, Charles Babbage designed huge calculating engines made of thousands of brass parts. He never finished them. In 1991, the Science Museum in London built his Difference Engine No. 2 from his drawings, and it worked perfectly.

## Shrinking into your pocket

For over a century after Babbage, mechanical calculators clattered in offices, and they were heavy and noisy. The first electronic calculators in the 1960s were the size of a typewriter. Then engineers learned to fit many circuits onto one [silicon chip](chips-silicon).

In 1969, the Japanese company Busicom asked a young American firm called Intel to design chips for a new desktop calculator. Intel's engineers came up with a single general-purpose chip that could be programmed to do many jobs. It became the Intel 4004, released in 1971, the first microprocessor sold commercially. The same idea now powers every phone and computer.

By the late 1970s, pocket calculators had become cheap enough to turn up in schoolbags around the world.

{{story:abacus}}

## Adding with switches

How can switches add? In binary, 0 + 0 = 0, 0 + 1 = 1 and 1 + 1 = 10, which means "write 0, carry 1". A small circuit of logic gates can be built to follow exactly these rules for one column. Line up many such circuits, each passing its carry to the next, and you can add long numbers.

Multiplying 13 by 5 might be done by adding 13 to itself in clever steps, using doubling, which in binary simply means shifting every digit one place to the left. The chip does this so fast that the answer seems to appear the instant you press "=".

## The human calculator

Some people can do sums at astonishing speed. In 1980, at Imperial College London, the Indian mathematician [Shakuntala Devi](shakuntala-devi) was given two 13-digit numbers chosen by a computer. She multiplied them in her head in 28 seconds, a feat recorded by [Guinness World Records](world-records).

Methods like [Vedic maths](vedic-maths) also teach [shortcuts for mental arithmetic](maths-shortcuts-indian). But for most of us, the little machine of switches is faster, as long as we remember to check that its answer makes sense.
