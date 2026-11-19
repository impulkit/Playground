---
id: large-language-models
title: How do AI chatbots learn language?
short: Language models
subject: tech
hook: An AI chatbot learns language by playing one game billions of times, guessing the next word in a sentence.
certainty: sure
surprising_fact: Chatbots don't read words the way you do. They split text into small chunks called tokens, and a long word like "unbelievable" may be broken into two or three pieces.
facts:
- "Name: large language model, or LLM"
- "Main training task: predicting the next token (word piece)"
- "Key design: the transformer, described in 2017"
- "Public chatbot that made them famous: ChatGPT, November 2022"
- "Size: billions to more than a trillion adjustable numbers (2025)"
links:
- to: neural-networks
  type: deeper
  why: What is a neural network?
- to: chatbots
  type: home
  why: How did chatbots start?
- to: ai-safety
  type: deeper
  why: How do we make AI safe and fair?
- to: alan-turing
  type: surprise
  why: Who first asked whether machines can think?
- to: data-centres
  type: surprise
  why: Where do giant AI computers live?
- to: translation
  type: surprise
  why: Why is translating between languages so hard?
- to: fake-news
  type: deeper
  why: How can you tell if something online is true?
- to: languages-india
  type: surprise
  why: How many languages are spoken in India?
- to: ai-many-languages
  type: deeper
  why: Why do AI chatbots find some languages harder than others?
sources:
- Vaswani A. and others (2017), Attention Is All You Need, Advances in Neural Information Processing Systems.
- Britannica, Large language model.
- Stanford University, Institute for Human-Centered Artificial Intelligence, AI Index Report.
interactive:
  t: predict
  prompt: A chatbot is asked about a very obscure book it never saw in training. What might it do?
  options:
  - t: Make up a confident answer that sounds right but is false
    ok: true
  - t: Always say "I don't know"
  - t: Look inside the book automatically
  reveal: Because a language model is built to produce likely-sounding text, it can invent facts, names or quotes when it doesn't know. Researchers call this hallucination. Newer systems try to admit uncertainty or search for sources, but it is always worth checking important answers.
try_this: Play the next-word game with a friend or family member. One person says the start of a sentence, like "On a rainy day I like to", and everyone writes down the word they think comes next. Compare answers. You'll find some words are very likely and others are surprising, which is exactly what a language model has to judge.
myth:
  myth: An AI chatbot looks up its answers in a giant database of facts.
  truth: A basic language model doesn't store a list of facts. It produces text one piece at a time, based on patterns it learned during training. That is why it can write smoothly yet still get facts wrong, unless it is connected to a search tool or trusted documents.
---

## The short answer

AI chatbots are built on large language models, or LLMs. A language model is a huge [neural network](neural-networks) trained on enormous amounts of text: books, websites, articles and code. During training, it plays one simple game over and over. It sees part of a sentence and tries to guess what comes next.

Each time it guesses wrong, its inner numbers are nudged slightly so that next time it does a little better. After trillions of guesses, it gets good at continuing text in a way that sounds natural. Along the way, it picks up grammar, facts, styles of writing and even some ability to follow instructions, without anyone teaching those things one by one.

## Words into numbers

Computers work with numbers, not words. So first, text is chopped into tokens: whole words, parts of words or punctuation. "Playground" might be one token, or "play" and "ground". Each token gets a number, and then a long list of numbers that describes how it relates to other tokens.

In that list, words used in similar ways end up close together. "Cat" and "dog" sit near each other. So do "Delhi" and "Mumbai". The model doesn't know what a cat feels like, but it knows "cat" often appears near "purr" and "whiskers".

## The guessing game

During training, the model reads a passage with the next token hidden. "The batsman hit the ball over the..." Is the next word "boundary", "fence" or "moon"? The model gives each option a probability. Then it sees the real answer and adjusts.

The design that made this work so well is called the transformer, described by researchers at Google in 2017. It lets the model look back across a whole passage and decide which earlier words matter most for the next guess. In "The girl who lost her dog was sad because she missed it", the model learns to link "it" back to "dog", not "girl".

{{story:alan-turing}}

## From word-guesser to helper

A model trained only to guess the next word will happily continue any text, including rude or false text. So companies train it further. People write example conversations showing helpful answers. Then human reviewers compare pairs of answers and pick the better one, and the model is trained to prefer answers like those.

This step turns a raw text predictor into something that answers questions, explains ideas and declines harmful requests. ChatGPT, released in November 2022, made this kind of chatbot famous. Many companies and research groups now build their own, including groups in India working on models for Hindi, Tamil, Bengali and other [Indian languages](languages-india).

## What they get wrong

Language models are good at sounding sure, even when they are wrong. They can invent book titles, quotes or facts. This is called hallucination. They may also repeat unfair ideas found in their training text.

They also don't understand the world the way people do. They have never tasted mango or felt rain. Their knowledge stops at the date their training data was collected, unless they are connected to search. That is why it matters to check important answers with trusted sources, and to think about [fake news](fake-news) online.

## Big machines, big questions

Training a large model takes thousands of powerful chips running for weeks in huge [data centres](data-centres), using a lot of electricity and water for cooling. People are debating who should own these systems, how they use writers' and artists' work, and how to keep them safe.

Used well, they can explain a maths problem in five different ways, help a farmer read a government form in their own language or help a programmer find a bug. Used carelessly, they can spread errors quickly. The tool is only as good as the questions people ask and the checks they make.
