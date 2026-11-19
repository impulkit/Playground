---
id: chatbots
title: How do chatbots write answers?
short: Chatbots
subject: tech
hook: A modern chatbot writes its answer one small piece at a time, each time picking a likely next word, a bit like the world's most well-read game of guess-what-comes-next.
certainty: mixed
certainty_note: How chatbots are built and trained is well documented. Scientists still disagree about what, if anything, they "understand", and how close they are to human-like thinking.
surprising_fact: In the 1960s, people chatting with a very simple program called ELIZA became so attached that its creator's own secretary asked him to leave the room so she could talk to it privately.
facts:
- First famous chatbot: ELIZA, MIT, 1966
- Modern type: large language model (LLM)
- Trained on: huge amounts of text, then improved with human feedback
- ChatGPT released: November 2022
- Known weakness: can state wrong facts confidently
links:
- to: ai-what
  type: home
  why: What is artificial intelligence, really?
- to: alan-turing
  type: deeper
  why: Can a machine fool you into thinking it's human?
- to: probability
  type: surprise
  why: How do we measure how likely something is?
- to: brain-works
  type: surprise
  why: How does your own brain come up with words?
- to: fake-news
  type: evidence
  why: How can you tell if something online is true?
- to: ai-safety
  type: deeper
  why: How do people try to keep AI safe and helpful?
- to: translation-apps
  type: deeper
  why: How do apps translate between languages?
- to: dictionaries
  type: surprise
  why: Who decides what words mean?
sources:
- Joseph Weizenbaum, Computer Power and Human Reason (1976).
- Encyclopaedia Britannica, Chatbot and Large language model.
- U.S. National Institute of Standards and Technology (NIST), AI Risk Management Framework (2023).
interactive:
  t: predict
  prompt: A chatbot is asked about a book that does not exist. What might it do?
  options:
  - t: Always say it has never heard of the book
  - t: Sometimes invent a believable summary and author
    ok: true
  - t: Search every library in the world first
  reveal: Chatbots produce words that fit patterns, so they can make up convincing details. People call this "hallucinating". Newer systems are better at saying "I don't know", but it is always worth checking important facts in a trusted source.
try_this: Play "next word" with friends. One person starts a sentence with one word, and each person adds the single word they think most likely comes next. Then play again choosing surprising words. Notice how the "most likely" story is sensible but dull, and the surprising one goes strange fast.
myth:
  myth: A chatbot looks up its answers in a giant database of facts.
  truth: Most chatbots generate answers from patterns learned in training, not by looking them up. Some are connected to search tools, but the words themselves are still produced one piece at a time, which is why they can sound right and still be wrong.
---

## The short answer

A chatbot is a computer program you can talk to in ordinary language. Today's best chatbots are built on [large language models](large-language-models), programs that have studied an enormous amount of text: books, websites, articles and more.

From all that reading, the model learns patterns in how words follow each other. When you ask a question, it writes an answer one small chunk at a time, called a token, each time choosing a likely next piece based on everything before it. Because it has seen so many examples, the result can be clear, helpful and surprisingly human-sounding. But it can also be confidently wrong.

## ELIZA, the first famous chatbot

In 1966 Joseph Weizenbaum, a computer scientist at the Massachusetts Institute of Technology, wrote a program called ELIZA. It pretended to be a therapist. If you typed "I am sad about my mother", it might reply, "Tell me more about your family."

ELIZA understood nothing. It spotted key words and turned your sentences into questions using simple rules. Yet people poured out their feelings to it. Weizenbaum was alarmed by how easily people trusted a machine, and spent much of his later career warning about it.

## Guessing the next word

Modern chatbots work very differently. Picture a phone keyboard that suggests the next word as you type, but vastly more powerful. A large language model has billions of adjustable numbers inside, called parameters. During training it reads text, tries to predict each next word, checks the real answer, and nudges its numbers to do better next time. It repeats this trillions of times.

Along the way it picks up [grammar](grammar-why), facts, styles of writing, and even some reasoning patterns, because all of those help predict text. The maths behind its choices is [probability](probability), the study of how likely things are.

{{story:probability}}

## Teaching it manners

A model trained only on internet text might repeat rude, false or harmful things it has read. So companies add a second stage. People rate the model's answers, and the model is trained to give the kinds of answers people judged helpful, honest and safe.

This is part of a wider field called [AI safety](ai-safety), which tries to make sure these systems do what people actually want, and refuse requests that could cause harm.

## When chatbots get it wrong

Because a chatbot produces words that sound right, it can sometimes invent facts, quotes or sources that do not exist. People call this hallucinating. It may also give out-of-date information, or reflect unfair ideas found in its training text.

That makes chatbots useful helpers but poor final judges. For homework, health or news, it is wise to check against a trusted book, website or person, the same skills that help you spot [fake news](fake-news).

## Do they understand?

This is a real argument among scientists. Some say chatbots only shuffle patterns and understand nothing. Others point out that they can solve new problems, explain jokes and write working computer code, and argue that some kind of understanding is happening, even if it is very unlike ours.

[Alan Turing](alan-turing) suggested in 1950 that if a machine could chat so well that you couldn't tell it from a person, we should take its thinking seriously. Modern chatbots can pass short versions of his test, but people still disagree about what that proves.

ChatGPT, released in November 2022, made chatbots famous almost overnight. Today they are built into search engines, phones and school tools, and talking to a computer has become an everyday thing.
