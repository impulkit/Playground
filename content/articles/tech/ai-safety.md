---
id: ai-safety
title: How do we make AI safe and fair?
short: AI safety
subject: tech
hook: A computer program can't hold an opinion, yet it can still treat people unfairly if it learned from unfair examples.
certainty: debate
certainty_note: Experts agree that today's AI can be biased and can make confident mistakes. They disagree strongly about how dangerous future AI might become and how fast, and about how much governments should regulate it.
surprising_fact: In a 2018 study, some face-analysis programs got women with darker skin wrong about a third of the time, while making almost no mistakes with lighter-skinned men.
facts:
- Main worries today: bias, mistakes, privacy, misuse
- Gender Shades study: 2018, MIT Media Lab
- Worst error rate in that study: about 35%, for darker-skinned women
- Chatbot errors: confident made-up answers, called hallucinations
- European Union AI law passed: 2024
links:
- to: ai-what
  type: deeper
  why: How does a computer learn without being told every rule?
- to: chatbots
  type: home
  why: How does a chatbot decide what to say next?
- to: face-recognition
  type: evidence
  why: Why do some cameras recognise some faces better than others?
- to: alan-turing
  type: surprise
  why: Who first asked whether machines could think?
- to: laws-made
  type: deeper
  why: How does an idea become a law?
- to: fake-news
  type: home
  why: How can you tell when a story online is false?
- to: human-rights
  type: surprise
  why: What rights does every person have, everywhere?
sources:
- Buolamwini J. and Gebru T. (2018) Gender Shades. Proceedings of Machine Learning Research, vol. 81.
- European Union, Artificial Intelligence Act, 2024.
interactive:
  t: predict
  prompt: A program learns to pick good job applicants from ten years of a company's past hiring. Most people hired before were men. What is likely to happen?
  options:
  - t: The program may learn to favour men, even if nobody told it to
    ok: true
  - t: The program will be perfectly fair, because computers have no opinions
  - t: The program will refuse to work until it gets better data
  reveal: An AI copies the patterns in its examples. If past decisions were lopsided, it can learn the lopsidedness as if it were a rule. That's why teams test programs on many different groups before using them.
try_this: Collect 20 pictures of "a doctor" from old magazines or newspapers. Count how many show men, women, older and younger people, and people of different backgrounds. If a computer learned only from your pile, what might it wrongly think a doctor looks like?
myth:
  myth: Computers are always fair, because a machine has no feelings or opinions.
  truth: A machine has no opinions, but it learns from data made by people. If the data is unbalanced or reflects old unfairness, the program can repeat that unfairness at huge speed.
---

## The short answer

Making AI safe and fair means checking that it works well for everyone, doesn't make dangerous mistakes, and can't easily be used to cause harm. It is less like fixing a single bug and more like the safety work done on cars or medicines: careful testing, rules, and people watching what happens once it's in use.

The problems are real today. Some programs work better for some groups of people than others. [Chatbots](chatbots) sometimes state made-up facts with total confidence. And tools that create realistic pictures and voices can be used to trick people. Researchers, companies and governments are all working on fixes, and they don't always agree on the best ones.

## How a fair-looking machine becomes unfair

Most modern [AI](ai-what) learns from examples. Show it enough photos labelled "cat" and it learns what cats look like. The same goes for faces, voices, loan applications or exam answers.

The trouble is that examples carry the habits of the past. In 2018, two researchers, Joy Buolamwini and Timnit Gebru, tested face-analysis programs from big tech companies. The programs rarely got the gender of lighter-skinned men wrong. For darker-skinned women, one program was wrong about 35% of the time. The programs had mostly been trained and tested on lighter faces.

After the study was published, several companies improved their systems. It showed something useful: you can only fix what you measure. Today, careful teams check how well a program works for people of different ages, skin colours, accents and languages before releasing it. In a country with as many languages as India, that list of checks gets long.

{{story:alan-turing}}

## When the machine is confidently wrong

Chatbots predict which words are likely to come next, based on huge amounts of text. That makes them fluent, but fluency is not the same as truth. Sometimes they invent a book title, a quote or a historical date that never existed. Researchers call this a hallucination.

For homework help, that's annoying. For medical or legal advice, it could be serious. So developers train chatbots to say "I'm not sure", connect them to trusted sources, and test them with thousands of tricky questions. Some teams hire people to attack their own systems on purpose, looking for weak spots before anyone else finds them. This is called red-teaming.

## Rules and laws

In 2024, the European Union passed a law that sorts AI uses by risk. Programs that score job applicants or help run power grids face strict checks. A few uses, such as scoring citizens on their behaviour, are banned. The US has taken a lighter approach so far, with some guidance from the government and laws in individual states. India has launched a national AI mission and published guidelines, and is still deciding how strict its rules should be.

Writing these [laws](laws-made) is hard, because the technology changes faster than parliaments meet. Too few rules might let harm spread. Too many might slow down useful inventions, such as tools that spot disease in X-rays.

## The bigger argument

Some well-known scientists worry that much more powerful AI could one day be hard to control, and say we should prepare now. Others think those fears are exaggerated and that attention should stay on today's problems: bias, [fake news](fake-news), [privacy](privacy) and [jobs](future-jobs-ai). Many researchers work on both.

What nearly everyone agrees on is a simple principle. A person, not a machine, should stay responsible for important decisions about people's lives, and anyone affected should be able to ask why.
