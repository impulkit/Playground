---
id: data-science
title: What is data science?
short: Data science
subject: numbers
hook: In 1854 a London doctor stopped a deadly outbreak by putting dots on a map. That was data science before it had a name.
certainty: sure
surprising_fact: Florence Nightingale, famous as a nurse, was also a skilled statistician who drew her own charts to persuade the British government to clean up army hospitals.
facts:
- Main tools: statistics, computers and careful questions
- An early example: John Snow's cholera map, London, 1854
- India's pioneer: P. C. Mahalanobis, who founded the Indian Statistical Institute in 1931
- Job title "data scientist": became common around 2008–2012
- Used in: weather, medicine, sport, shopping, traffic
links:
- to: statistics-lies
  type: deeper
  why: How can true numbers still fool you?
- to: weather-forecasts
  type: surprise
  why: How do computers guess tomorrow's rain?
- to: ai-what
  type: deeper
  why: Is AI just data science with a bigger brain?
- to: public-health
  type: evidence
  why: How do doctors spot an outbreak early?
- to: cricket-stats
  type: home
  why: What do cricket numbers really tell you?
- to: census
  type: home
  why: How do you count more than a billion people?
- to: polls-elections
  type: deeper
  why: How do pollsters forecast who will win an election?
sources:
- Encyclopaedia Britannica, entries on statistics and on John Snow.
- Indian Statistical Institute, history of the institute and P. C. Mahalanobis.
- UK Science Museum Group, Florence Nightingale and her statistical diagrams.
interactive:
  t: predict
  prompt: In 1854, John Snow marked cholera deaths on a map of a London neighbourhood. What did the dots crowd around?
  options:
  - t: A single water pump on Broad Street
    ok: true
  - t: The busiest market in the area
  - t: A large rubbish dump by the river
  reveal: The deaths clustered around one public water pump. Snow persuaded local officials to remove the pump's handle, and his map became one of the most famous pieces of evidence that cholera spreads through dirty water.
try_this: Keep a simple weather diary for two weeks. Each day, write down whether it was sunny, cloudy or rainy, and how many classmates were absent. At the end, draw a chart and look for a pattern. Then ask yourself whether one thing really caused the other, or whether they just happened together.
myth:
  myth: If you have enough data, the answer will appear by itself.
  truth: Data only answers the questions you ask of it, and it can mislead if it was collected badly. A good data scientist spends a lot of time checking where the numbers came from before trusting them.
---

## The short answer

Data science is the job of turning a big pile of numbers and facts into answers. A data scientist collects information, cleans out the mistakes, looks for patterns, and then explains what those patterns mean.

It mixes three things: maths (especially [statistics](statistics-lies)), computer skills for handling millions of records, and plain good sense about which questions are worth asking. Weather forecasts, film suggestions on streaming apps and the route your maps app picks all come from people and programs doing data science.

## Dots on a map

In 1854, cholera swept through Soho in London and killed hundreds of people in a few days. Most doctors then believed the disease spread through bad air. A doctor named John Snow had a different idea.

He walked the streets, asked families where they got their water, and marked each death on a map. The marks bunched up around one public pump on Broad Street. Snow convinced local officials to remove the pump's handle. The outbreak was already fading by then, but his map became famous evidence that cholera travels through dirty water.

That is the heart of data science: collect carefully, look for a pattern, then test it.

## Charts that changed minds

A few years later, Florence Nightingale returned from nursing soldiers in the Crimean War. She had kept careful records and found that far more soldiers died of disease in dirty hospitals than of their wounds. To make busy officials pay attention, she drew a new kind of round chart, now often called a rose diagram. It showed the problem at a glance, and it helped push the army to improve hospital hygiene.

Good [graphs and charts](graphs-charts) are still one of a data scientist's strongest tools. A table of numbers can hide a story. A picture can make it obvious.

{{story:weather-forecasts}}

## India's numbers man

In 1931, the scientist Prasanta Chandra Mahalanobis founded the Indian Statistical Institute in Kolkata. He worked out how to learn about a whole country by carefully questioning a fair sample of people, instead of everyone. His methods helped set up India's National Sample Survey in 1950, which still measures things like what families spend and how many people have jobs. His birthday, 29 June, is now celebrated as National Statistics Day in India.

The same idea powers modern [surveys](surveys): ask the right few thousand people, and you can say something sensible about crores.

## What data scientists do now

Today the piles of data are enormous. Every tap on a phone, every UPI payment and every ball bowled in the IPL can be recorded. Data scientists write programs, often called [algorithms](algorithms), that sift through these records far faster than any person could.

Hospitals use data to spot which patients may need extra care. Cricket and baseball teams use it to choose where fielders should stand. Farmers use rainfall data to decide when to sow. Much of modern [artificial intelligence](ai-what) is built by training computer programs on huge collections of data.

## Careful with conclusions

Data can fool people too. If ice-cream sales and drowning cases both rise in summer, it does not mean ice cream causes drowning. Hot weather drives both. Data scientists call this the difference between correlation (two things moving together) and causation (one thing making the other happen).

Bad data causes trouble as well. If a survey only asks people who own smartphones, it misses everyone who doesn't. Much of the real work is checking, cleaning and doubting the numbers before believing what they seem to say.
