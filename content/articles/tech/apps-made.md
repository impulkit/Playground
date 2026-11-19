---
id: apps-made
title: How are apps made?
short: Making apps
subject: tech
hook: The app you tap in one second may have taken a team of dozens months or years to design, build, test and fix.
certainty: sure
surprising_fact: Many popular apps are rebuilt and updated every week or two. The version on your phone today is probably not the one you downloaded.
facts:
- Big app stores opened: 2008 (Apple App Store and Android Market)
- Apps on the big stores: millions
- Main stages: idea, design, code, test, launch, update
- People involved: designers, programmers, testers, product managers
- Free tool for beginners: MIT App Inventor
links:
- to: programming
  type: deeper
  why: What is coding, really?
- to: smartphones
  type: deeper
  why: What's inside the phone that runs your apps?
- to: algorithms
  type: deeper
  why: What step-by-step plans make an app work?
- to: cloud-computing
  type: home
  why: Where are your photos stored when they're "in the cloud"?
- to: upi-payments
  type: home
  why: How did India start paying by phone?
- to: design-everyday
  type: surprise
  why: Why are some things so easy to use and others so confusing?
- to: money-banks
  type: surprise
  why: How do banks make money?
- to: screen-design
  type: deeper
  why: Why do apps look the way they do?
sources:
- Apple Developer, App Store Review Guidelines.
- MIT App Inventor, Massachusetts Institute of Technology.
interactive:
  t: predict
  prompt: Many apps are free to download. How do most free apps earn money?
  options:
  - t: Through adverts, paid extras inside the app, or subscriptions
    ok: true
  - t: The government pays for them
  - t: They don't, and the makers lose money for ever
  reveal: Building and running an app costs money for programmers, designers and servers. Free apps often show adverts, sell extra features or levels, or offer a paid version. Some use information about how people use the app to target adverts.
try_this: Design your own app on paper. Fold an A4 sheet into four phone-sized screens. Draw a home screen, then what appears when you tap each button. Give it to a friend, and as they "tap" with a finger, swap the drawings. Watch where they get confused and redraw. Designers call this a paper prototype.
myth:
  myth: Free apps cost nothing to make.
  truth: Even simple apps take many hours of design, coding and testing, and popular apps pay for servers and staff every day. Free apps usually earn money in other ways, such as adverts or paid upgrades.
---

## The short answer

Apps are programs, so they are made from code. But code is only one part. Most apps go through a series of stages.

It begins with an idea: a problem someone wants to solve, like ordering food, learning words or paying a friend. Designers sketch how the app should look and work. Programmers write the code. Testers try to break it. Then it is sent to an app store, checked, and released. After that, the work carries on, with updates to fix problems and add features.

A simple app might be built by one person in weeks. A big app like a bank's or a game may need hundreds of people and years.

## From idea to sketch

Before writing code, app makers try to understand the people who will use their app. What do they need? What confuses them? A product manager often decides what the app should do first and what can wait.

Designers then draw the screens, first as rough boxes called wireframes, then as detailed pictures. Good [design](design-everyday) makes an app feel obvious: buttons where your thumb expects them, words that are clear, colours that guide your eye. Designers often test paper or clickable prototypes with real people and change them many times.

{{story:design-everyday}}

## Writing the code

An app usually has two halves. The front end is what you see and touch on your [phone](smartphones): the screens, buttons and animations. It is often written in languages like Swift for iPhones or Kotlin for Android phones.

The back end runs on computers called [servers](?server), far away in [data centres](data-centres). It stores accounts, messages and photos, and does heavy work your phone can't. Much of this now runs in [the cloud](cloud-computing), on servers rented from big companies. The two halves talk to each other over the [internet](internet-how).

Programmers use ready-made building blocks for common jobs, such as maps, logins and payments, so they don't have to write everything from scratch.

## Testing and fixing

Every app has bugs at first. Testers try it on old phones and new ones, on slow internet and fast, in different languages and with unusual inputs. Some companies give early versions to volunteers, called beta testers, before the public sees them.

Programmers also write automatic tests: small programs that check the main program still works each time someone changes it. A popular app might run thousands of these tests a day.

## Into the app store

Apple's App Store and Google's store for Android, then called Android Market, both opened in 2008. Today they hold millions of apps. Before an app goes live, the store checks it against rules about safety, [privacy](privacy) and content.

Apps also need permission to use things like your camera, microphone or location. Those pop-up questions on your phone exist so you can decide what each app can access. It is worth reading them.

## Apps that changed India

Some apps have changed daily life. India's [UPI payment system](upi-payments), launched in 2016, lets people pay with apps by scanning a QR code, and it now handles billions of payments a month, from big shops to tea stalls. [Government apps such as DigiLocker](digital-india) let people keep official documents on their phones.

You don't need to be a professional to start. Free tools like MIT App Inventor let beginners build simple Android apps by snapping blocks together. Many developers who now work on famous apps began by building something small for themselves.
