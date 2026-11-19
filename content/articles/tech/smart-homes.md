---
id: smart-homes
title: What is a smart home?
short: Smart homes
subject: tech
hook: Ask a smart speaker to switch off the fan, and your words may travel to a computer hundreds of kilometres away and back in about a second.
certainty: sure
surprising_fact: In 2016, a piece of malicious software called Mirai took control of hundreds of thousands of poorly protected home gadgets, such as cameras and routers, and used them together to jam some of the internet's busiest websites.
facts:
- "What makes a device smart: it connects to a network and can be controlled remotely or automatically"
- "Common devices: speakers, bulbs, plugs, cameras, locks, thermostats, robot vacuums"
- "Amazon Echo with Alexa launched: 2014"
- "Matter, a shared standard so brands work together: launched 2022"
- "Biggest worries: privacy and security"
links:
- to: internet-of-things
  type: deeper
  why: What happens when everyday objects join the internet?
- to: voice-assistants
  type: deeper
  why: How does a speaker understand what you say?
- to: privacy
  type: evidence
  why: Why does privacy matter if you have nothing to hide?
- to: remote-control
  type: surprise
  why: How does a TV remote send messages you can't see?
- to: smoke-alarms
  type: surprise
  why: How does a smoke alarm smell smoke?
- to: passwords
  type: home
  why: What makes a password hard to crack?
sources:
- Connectivity Standards Alliance, Matter standard (2022).
- U.S. Cybersecurity and Infrastructure Security Agency (CISA), Securing the Internet of Things.
- Encyclopaedia Britannica, Smart home.
interactive:
  t: predict
  prompt: A smart speaker is waiting for its wake word, like "Alexa". What is it doing with the sound in the room?
  options:
  - t: Listening on the device itself and throwing the sound away until it hears the wake word
    ok: true
  - t: Sending every word to the company's computers all the time
  - t: Recording everything onto a memory card
  reveal: The speaker runs a small program that only listens for its wake word. When it thinks it hears it, it starts sending audio to the company's servers. It sometimes wakes by mistake on similar-sounding words, which is one reason people worry about privacy.
try_this: Make a list of every device in your home that runs on electricity. Mark which ones connect to the internet or an app. Then, with an adult, check whether the router and any cameras still use the password they came with. Changing default passwords is one of the simplest ways to keep a home safer.
myth:
  myth: Smart speakers record everything you say, all day long.
  truth: They listen locally for their wake word and only start sending audio when they think they hear it. But they do sometimes wake by accident, and companies have used recorded clips to improve their systems, so privacy settings are worth checking.
---

## The short answer

A smart home is a home where everyday devices are connected to a network, usually Wi-Fi, so they can be controlled from a phone, by voice or automatically. Lights can switch on when you walk in. An air conditioner can cool a room before you get home. A doorbell camera can show who's at the gate while you're at school.

Each smart device has [sensors](?sensor), a tiny computer and a radio to talk to the network. Many also connect to the company's computers far away, called [servers](?server), which do the heavy thinking. Smart homes can save effort and energy and help people who find switches hard to reach. They also raise real questions about privacy and safety.

## An old dream

People have imagined automatic homes for a long time. World fairs in the 1930s and 1950s showed "homes of tomorrow" with push-button kitchens. In the 1970s, a system called X10 let people switch lamps on and off by sending signals through a house's electrical wiring.

The modern smart home took off in the 2010s. Cheap chips, fast [Wi-Fi](wifi) and smartphones arrived together. In 2011, a thermostat that learned a family's habits went on sale in the USA. In 2014, Amazon launched the Echo speaker with its voice assistant, Alexa. Soon there were smart bulbs, plugs, locks, cameras, fridges and robot vacuum cleaners. All of them belong to a bigger trend called the [Internet of Things](internet-of-things).

## How it all connects

Most smart devices follow a simple pattern: sense, decide, act. A motion sensor notices someone in the hallway. A rule, set up in an app, says "if motion after sunset, turn on the light". The bulb switches on.

[Voice assistants](voice-assistants) add speech. When you say "Alexa, turn off the fan", the speaker records the request and sends it to a server. Software there turns the sound into words, works out what you mean and sends a command back to the fan's smart plug. It all happens in a second or two.

{{story:voice-assistants}}

For years, devices from different companies often refused to work together. In 2022, many big tech firms launched Matter, a shared standard meant to let a bulb from one brand obey a speaker from another.

## Who it helps

For someone who uses a wheelchair, or an older person with shaky hands, being able to say "lock the door" or "switch on the lights" can make daily life much easier. Smart [smoke alarms](smoke-alarms) can send a warning to a phone, even if nobody is at home.

In India, smart plugs are popular for turning on water heaters before a bath and for scheduling air conditioners. Voice assistants now understand Hindi and several other Indian languages, so you don't need to speak English to use them.

## The worries

A home full of microphones and cameras collects a lot of information. Companies may store recordings and data about when you come and go. That makes [privacy](privacy) a big issue, and it's worth checking what each device records.

Security is the other worry. In 2016, a malicious program called Mirai searched the internet for cameras and routers still using factory passwords like "admin". It took over hundreds of thousands of them and used them together to flood websites with traffic, knocking popular services offline for hours.

There's also the question of what happens when a company gives up. In 2022, a US smart-home firm called Insteon shut its servers down with almost no warning, and many customers' lights and switches stopped working through the app overnight. A smart home, it turns out, is only as reliable as the company and the network behind it.
