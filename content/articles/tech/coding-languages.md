---
id: coding-languages
title: Why are there so many coding languages?
short: Coding languages
subject: tech
hook: People have invented thousands of programming languages, yet every one of them ends up as the same thing inside a computer, long strings of 0s and 1s.
certainty: sure
surprising_fact: JavaScript, which runs on almost every website today, was first written in about ten days in 1995.
facts:
- "Languages invented: thousands, though only a few dozen are widely used"
- "FORTRAN, one of the first popular languages: 1957"
- "C: 1972, still used in operating systems"
- "Python: first released 1991"
- "JavaScript: 1995"
- "Scratch, for children: 2007"
links:
- to: programming
  type: deeper
  why: What does coding actually mean?
- to: python-scratch
  type: home
  why: Which languages are best for beginners?
- to: binary-code
  type: surprise
  why: How can a computer count with only 0 and 1?
- to: grace-hopper
  type: deeper
  why: Who taught computers to understand words?
- to: languages-world
  type: surprise
  why: How many human languages are spoken on Earth?
- to: ada-lovelace
  type: evidence
  why: Who wrote a program before computers existed?
- to: algorithms
  type: deeper
  why: What is an algorithm?
sources:
- Computer History Museum (California), timeline of computer history and programming languages.
- Encyclopaedia Britannica, computer programming language.
- Python Software Foundation, history of Python.
interactive:
  t: predict
  prompt: A computer chip only understands patterns of 0s and 1s. How does it run a program written in Python or C?
  options:
  - t: Another program translates the code into 0s and 1s
    ok: true
  - t: The chip learns Python by reading lots of examples
  - t: Programmers type everything in 0s and 1s and just call it Python
  reveal: Special programs called compilers and interpreters translate code written by people into machine code, the 0s and 1s a chip can follow. Each language needs its own translator.
try_this: Write instructions for making a jam sandwich, or a sandwich with any filling, in two "languages". First, in very short commands like OPEN JAR, SPREAD, CLOSE. Then as a friendly paragraph for a younger child. Ask someone to follow each version exactly. Which one was easier to follow, and which was easier to write?
myth:
  myth: There is one best programming language that everyone should use.
  truth: Each language is good at some jobs and worse at others. Programmers often learn several and pick the one that suits the task, the same way a carpenter picks a saw or a hammer.
---

## The short answer

A programming language is a way for people to give instructions to a computer. There are so many because people want computers to do very different jobs, and no single language is best at all of them. Some are built for speed, some for safety, some for beginners and some for one special task, like building websites or crunching scientific data.

There are also many for historical reasons. Once a language is used to build important programs, like banking systems or phone software, those programs keep running for decades. So old languages stay alive, even as new ones keep being invented.

## Talking to a chip

Deep down, a computer chip only follows very simple instructions written in [binary](binary-code), patterns of 0s and 1s. Early programmers in the 1940s had to work almost at that level, setting switches or punching holes in cards. It was slow, and a single mistake could ruin a day's work.

In the early 1950s, Grace Hopper and others began building programs called compilers. A compiler takes instructions written in something closer to human language and translates them into machine code. Once that idea worked, anyone could design a new language, as long as they also built a translator for it.

## A language for every job

In 1957, IBM released FORTRAN, short for "formula translation", for scientists and engineers doing big calculations. Two years later came COBOL, designed for business records like salaries and bills. Some banks and governments still run COBOL programs written decades ago. Programmers who know it are now rare, so they can be in great demand.

In 1972, Dennis Ritchie at Bell Labs in the USA created C. It was fast and gave programmers close control of the machine, so it was used to write operating systems. Much of the software inside phones, cars and washing machines still uses C or its relatives.

Later languages made different trade-offs. Python, first released by the Dutch programmer Guido van Rossum in 1991, is famous for being easy to read. JavaScript, from 1995, runs inside web browsers and makes web pages interactive. Swift, released by Apple in 2014, is used to make iPhone apps.

{{story:binary-code}}

## Fast or friendly?

Choosing a language is often a trade between speed and ease. Languages like C and C++ run very quickly but make it easy to make mistakes that crash a program. Languages like Python are slower but quicker to write and easier to fix.

Video games and spacecraft software often use fast languages. Data scientists and students often use Python. And for very young coders, there are block languages like [Scratch](python-scratch), where you snap commands together instead of typing them. Many children start there and move on to Python a few years later.

## Fashions and fun

Programmers are people, and people like trying new things. Companies sometimes create languages to solve their own problems. Students write them for projects. Some languages are even made as jokes, with commands that look like recipes or Shakespeare plays.

In 2025, Python topped several popularity rankings of programming languages, while JavaScript ran on almost every website. But rankings change. A language popular today may fade, and one invented by a student this year could be everywhere in ten years.

## Just like human languages

There are about 7,000 [human languages](languages-world), shaped by history and need. Programming languages grew in a similar way, borrowing words and ideas from each other. Once you learn one, the next is much easier, because the big ideas are shared: giving step-by-step instructions, repeating things, and making decisions. Those ideas are called [algorithms](algorithms), and they work the same in every language.
