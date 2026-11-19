---
id: email
title: How does an email travel?
short: Email
subject: tech
hook: Email is older than the World Wide Web. The first network email was sent in 1971, and its sender can't even remember what it said.
certainty: sure
surprising_fact: Ray Tomlinson, who sent the first network email in 1971, picked the @ sign because it was rarely used and clearly meant "at".
facts:
- First network email: 1971, by Ray Tomlinson
- Network used: ARPANET, an early form of the internet
- Symbol chosen: "@, meaning at"
- First mass junk email: 1978
- Internet open to the public in India: 15 August 1995
links:
- to: internet-history
  type: deeper
  why: How did the internet begin?
- to: internet-how
  type: deeper
  why: How does data find its way around the world?
- to: web-invented
  type: home
  why: Who invented the World Wide Web?
- to: telegraph
  type: home
  why: How did people send messages by wire 150 years ago?
- to: online-safety
  type: home
  why: How can you spot a trick email?
- to: codes-morse
  type: surprise
  why: How did dots and dashes carry messages?
- to: writing-tools
  type: surprise
  why: What did people write with before pens?
sources:
- Internet Society, A Brief History of the Internet.
- Encyclopaedia Britannica, E-mail.
interactive:
  t: predict
  prompt: When you send a long email with a photo, how does it travel across the internet?
  options:
  - t: Split into many small packets that may take different routes
    ok: true
  - t: As one big piece along a single wire
  - t: By satellite, straight to the other computer
  reveal: Your email is broken into small chunks called packets. Each finds its own way through the internet's network of computers and cables. At the other end, they are put back together in the right order, often in less than a second.
try_this: Play "packet post". Write a short message on a sheet of paper, cut it into five strips and number them. Give the strips to five friends, who walk to a "receiver" by different routes around the room or playground. The receiver puts the message back together using the numbers.
myth:
  myth: Email was invented after the World Wide Web.
  truth: Email came first. Network email began in 1971, while the World Wide Web was invented almost 20 years later, in 1989 to 1991. Email runs on the internet, but it doesn't need the web at all.
---

## The short answer

When you press send, your email goes first to a mail [server](?server), a computer run by your email provider. That server reads the address after the @ sign, such as "example.com", and looks up which server handles mail for that address.

Your server then passes the email across the internet to the other server. On the way, the message is split into small packets that travel through cables and routers, then are put back together. The receiving server stores the email in your friend's mailbox. When your friend opens their email app, it downloads the message from that server.

The whole trip usually takes a few seconds, even across the world.

## Ray Tomlinson and the @ sign

In 1971, Ray Tomlinson was an engineer at a company called BBN in the USA. He was working on ARPANET, an early computer network that would grow into [the internet](internet-history). People could already leave messages for others using the same computer. Tomlinson wanted to send messages between different computers.

He needed a way to show a person's name and the computer they used. He chose the @ symbol, because it was on the keyboard, hardly anyone used it, and it read naturally: "person at computer". He later said his first test message was probably something forgettable like "QWERTYUIOP".

## Addresses and post offices

An email address has two parts. The bit before the @ is the mailbox name. The bit after is the domain, which tells the internet which organisation handles that mail.

Email works a lot like post. Your mail server is like your [local post office](post-office). It finds the right destination using a kind of internet address book, then hands your message on. The receiving server is the post office at the other end, which keeps letters until they are collected.

Servers speak to each other using shared rules, so a message from one company's email can reach another's. That's why anyone can email anyone, whatever service they use.

{{story:internet-how}}

## Packets on the move

The internet doesn't send big messages in one piece. It breaks them into packets, each carrying part of the message, plus labels saying where it's going and where it fits. Routers along the way pass each packet towards its destination, choosing whichever path is free.

Packets might go through several countries and under the sea. At the end, they're put back in order.

## The long history of fast messages

People have long wanted to send messages faster than a person can carry them. In the 1800s, the [telegraph](telegraph) sent messages along wires as electric pulses, often in [Morse code](morse-to-whatsapp). Operators then wrote them out, and messenger boys delivered them.

Email made this instant and almost free. In India, [public internet access](internet-india), including email, arrived on 15 August 1995, when the state company VSNL launched its service. For many offices, email soon replaced letters, telegrams and faxes.

## Junk and tricks

In 1978, a marketer sent an advert to a few hundred ARPANET users at once. People complained, and the idea of junk email, later called [spam](tech-spam-email), was born. Today, a large share of all emails sent are spam, though filters catch most of them before you see them.

Some emails try to trick people, pretending to come from a bank or a friend and asking for [passwords](passwords) or money. This is called phishing. Our guide to [staying safe online](online-safety) explains how to spot it. Billions of real emails are still sent every day, for work, school and family, along the same path Tomlinson first tested in 1971.
