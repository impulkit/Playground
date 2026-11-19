---
id: search-engines
title: How does a search engine find things?
short: Search engines
subject: tech
hook: Type a question and, in under a second, a search engine sorts through hundreds of billions of web pages. It doesn't search the web when you ask. It already has.
certainty: sure
surprising_fact: The name Google comes from "googol", a word for the number 1 followed by 100 zeros. The founders chose it to suggest a huge amount of information.
facts:
- Main steps: crawl, index, rank
- Early search tool: Archie, 1990
- Google founded: 1998
- Google's early ranking idea: PageRank, links as votes
- A googol: 1 followed by 100 zeros
links:
- to: algorithms
  type: deeper
  why: What is an algorithm, really?
- to: web-invented
  type: deeper
  why: Who invented the web in the first place?
- to: fake-news
  type: home
  why: How can you tell if something online is true?
- to: data-storage
  type: home
  why: Where is all that information actually stored?
- to: big-numbers
  type: surprise
  why: How big is a googol, compared with a crore?
- to: libraries
  type: surprise
  why: How do libraries help you find the right book?
- to: dictionaries
  type: surprise
  why: Who decides which words go in the dictionary?
- to: numbers-names
  type: surprise
  why: Why is Google named after a giant number?
sources:
- Google, How Search Works.
- Brin S. and Page L. (1998) The anatomy of a large-scale hypertextual Web search engine. Computer Networks and ISDN Systems 30.
interactive:
  t: predict
  prompt: When you type a search, what does the search engine actually look through?
  options:
  - t: Its own giant index, built in advance, like the index at the back of a book
    ok: true
  - t: Every website on the internet, visited at that moment
  - t: Only websites that have paid to be included
  reveal: Searching the live web for every question would take far too long. Instead, search engines constantly visit pages ahead of time and build a huge index listing which words appear on which pages. Your search looks up that index, which is why it's so fast.
try_this: Pick a thick non-fiction book with an index at the back. Ask a friend to choose a topic, then race. One of you flips through the pages looking for it, the other uses the index. The index wins almost every time. Search engines work the same way, just with billions of pages.
myth:
  myth: The first result in a search is the most true or reliable one.
  truth: Search engines rank pages by many signals, such as how relevant and popular they seem, but they can't check whether everything on a page is true. Some top results are adverts. It's worth checking who wrote a page and comparing several sources.
---

## The short answer

A search engine works in three main steps. First, programs called crawlers visit web pages, read them and follow their links to find more pages, day and night. Second, everything they find is stored in an index, a giant list of which words appear on which pages, kept on thousands of computers. Third, when you type a search, the engine looks up your words in the index and ranks the matching pages, putting the ones it thinks are most useful at the top.

All the hard work happens before you search. That's why results appear almost instantly.

## Crawling the web

Crawlers, sometimes called [spiders](spiders-silk), are programs that act like tireless readers. They start with a list of known pages, download them, and note every link. Then they visit those links, and the links on those pages, and so on, spreading across the [web](web-invented).

They return to popular pages often, to spot changes, and to quieter ones less often. Website owners can leave instructions telling crawlers which pages to skip. Even so, crawlers can't reach everything: pages behind logins, for example, stay hidden.

## Building the index

After crawling, the search engine processes each page. It notes the words, where they appear, what language they're in, what the page is about, and much more. All this goes into the index.

The index works like the one at the back of a book. Instead of reading every page to find "cheetah", you look up "cheetah" and get a list of page numbers. A search engine's index holds hundreds of billions of pages and is far larger than any library. It is stored in huge buildings called [data centres](data-centres), packed with computers.

{{story:dictionaries}}

## Ranking the results

Finding pages that match is only the start. A search for "tiger" might match millions of pages. Which come first?

In 1996, two students at Stanford University in California, Larry Page and Sergey Brin, had an idea. A page that many other pages link to is probably useful, especially if those linking pages are themselves important. They treated links like votes. This method, called PageRank, helped make their search engine, Google, better than its rivals when it launched in 1998.

Today's ranking uses many more signals, set by complex [algorithms](algorithms). It considers how well a page matches your words, how trustworthy the site seems, whether it works well on phones, what language you speak and roughly where you are.

## Before Google

The first search tool, Archie, was made in 1990 at McGill University in Canada. It searched lists of files, not web pages. In the mid-1990s, Yahoo began as a directory of websites sorted by hand, a bit like a library catalogue, and AltaVista let people search the text of millions of pages.

The name Google is a play on "[googol](large-numbers-names)", 1 followed by 100 zeros, a number far bigger than the number of atoms in the known universe.

## Thinking about results

Search engines are powerful, but they're not perfect judges of truth. Some results at the top are adverts, labelled as sponsored. Some websites are designed to rank highly without being reliable. And results can differ from person to person, depending on location and language.

Librarians have long taught people to ask who wrote something, when, and why. Those questions, also used in [libraries](libraries), are just as useful online. Checking more than one good source is the best defence against [false information](fake-news).
