---
id: blockchain
title: What is a blockchain?
short: Blockchain
subject: tech
hook: In 2010 a programmer in Florida paid 10,000 bitcoins for two pizzas. By late 2024, those coins were worth more than a billion dollars.
certainty: mixed
certainty_note: How blockchains work is well understood. Experts strongly disagree about how useful they are beyond digital money, and about whether their energy use and risks are worth it.
surprising_fact: Nobody knows for certain who invented Bitcoin. Its creator used the name Satoshi Nakamoto and stopped posting online in 2011.
facts:
- Bitcoin paper published: 2008, by "Satoshi Nakamoto"
- First Bitcoin block: 3 January 2009
- Bitcoin Pizza Day: 22 May 2010
- Ethereum cut its energy use by over 99%: September 2022
- Key idea: a shared record that is very hard to change secretly
links:
- to: encryption
  type: deeper
  why: How do computers keep secrets with maths?
- to: cryptography-maths
  type: deeper
  why: What maths keeps codes unbreakable?
- to: money-banks
  type: home
  why: What does a bank actually do with your money?
- to: pizza
  type: surprise
  why: How did pizza conquer the world?
- to: data-centres
  type: surprise
  why: Why do computers need giant buildings?
- to: upi-payments
  type: deeper
  why: How does India send money with a phone scan?
- to: online-safety
  type: evidence
  why: How can you spot an online scam?
- to: money-worth
  type: surprise
  why: Why is a piece of paper money worth anything?
sources:
- Satoshi Nakamoto, Bitcoin: A Peer-to-Peer Electronic Cash System (2008).
- U.S. National Institute of Standards and Technology (NIST), Blockchain Technology Overview (NISTIR 8202, 2018).
- Cambridge Centre for Alternative Finance, Cambridge Bitcoin Electricity Consumption Index.
interactive:
  t: predict
  prompt: Someone secretly edits one old entry in a blockchain to give themselves extra coins. What happens?
  options:
  - t: Nobody can ever tell
  - t: The change breaks the links to every later block, and other computers reject it
    ok: true
  - t: The whole blockchain is deleted
  reveal: Each block carries a digital fingerprint of the block before it. Change one entry and its fingerprint changes, so it no longer matches the next block. Thousands of other copies disagree, and the network ignores the faked version.
try_this: Start a class "chain" notebook. Each page records one small trade, like "Asha gives Ravi 2 marbles", and at the bottom you write the first letter of every word on the page before. Give everyone a photocopy each day. Try secretly changing an old page and see how fast someone spots it.
myth:
  myth: Blockchain and Bitcoin are the same thing.
  truth: Bitcoin is one use of a blockchain. A blockchain is the record-keeping method underneath, and it can store other kinds of information too, such as who owns a shipment or a certificate.
---

## The short answer

A blockchain is a shared record book kept on many computers at once. Every few minutes, a new page of entries, called a block, is added to the end. Each block is linked to the one before it with a kind of maths fingerprint, so the blocks form a chain.

Because thousands of people hold identical copies, nobody can quietly change an old entry. Anyone who tried would have to change it on most of the copies at the same time. That makes blockchains useful when people who don't know or trust each other need to agree on a single record. The best-known example is Bitcoin, a kind of digital money.

## A notebook everyone can check

Picture your class keeping a notebook of who lent whom what. If one person holds it, they could cheat. Now suppose every student keeps an identical copy, and every new entry is read out loud and written in all of them. To cheat, you would have to change most of the notebooks without anyone noticing.

That is the basic idea. Normally a [bank](money-banks) keeps the record of your money and everyone trusts it. A blockchain spreads the record out so no single company is in charge.

## The maths fingerprint

The fingerprint is called a hash. A hash takes any piece of data, such as a list of payments, and turns it into a short string of letters and numbers. Change even one comma and the hash comes out completely different.

Each block stores the hash of the block before it. If someone alters an old block, its hash changes, and it no longer matches the next block. The chain visibly breaks. This clever use of [cryptography](cryptography-maths), the maths of [secret codes](cipher-codes), is what makes blockchains hard to tamper with.

{{story:cryptography-maths}}

## Mystery inventor, famous pizzas

In 2008 someone calling themselves Satoshi Nakamoto published a nine-page paper describing Bitcoin. The first block was created on 3 January 2009. Satoshi stopped posting online in 2011, and nobody has proved who they are.

Early on, bitcoins were worth almost nothing. On 22 May 2010 a programmer named Laszlo Hanyecz paid 10,000 of them for two pizzas delivered in Florida. It was one of the first times bitcoins bought real goods. Fans still celebrate Bitcoin Pizza Day each year.

## The energy problem

To add a new Bitcoin block, computers race to solve a hard maths puzzle. The winner earns new coins. This race, called mining, uses huge amounts of electricity in giant [data centres](data-centres). Researchers at Cambridge University estimate that Bitcoin uses about as much electricity in a year as some whole countries.

Other blockchains choose who adds the next block in different ways. In September 2022, Ethereum, the second-biggest, switched methods and cut its energy use by more than 99%.

## Useful tool or hype?

Supporters say blockchains can track food from farm to shop, prove who owns a piece of digital art, or let people send money across borders without a bank. Critics say most of these jobs can be done more cheaply with ordinary databases, and that [cryptocurrency prices swing wildly](oddity-tulip-mania).

Scams are common too. People have lost savings to fake coins and dishonest websites. In India, payments run mostly through [UPI](upi-payments), which does not use a blockchain at all. Anyone thinking about cryptocurrency should talk it through with a trusted adult first.
