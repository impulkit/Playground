---
id: internet-how
title: How does a message cross the world in under a second?
short: The internet
subject: how
hook: Most of it travels under the sea, as flashes of light.
icon: cable
certainty: sure
surprising_fact: Undersea internet cables are often no thicker than a garden hose, and sharks have been filmed biting them!
facts:
- Traffic between continents carried by undersea cables: almost all of it
- Undersea cables in use: more than 500
- Speed of light in glass fibre: about 2 lakh km a second
- First telegraph cable across the Atlantic: 1858
- Main causes of cable damage: ships' anchors and fishing nets
links:
- to: binary-code
  type: deeper
  why: How everything becomes 0s and 1s
- to: cipher-codes
  type: deeper
  why: Keeping messages secret
- to: light-years
  type: surprise
  why: How fast light really is
- to: ocean-deepest
  type: surprise
  why: Where the cables lie
- to: mars-rovers
  type: surprise
  why: "How do robots drive on Mars?"
- to: internet-history
  type: home
  why: Who invented the internet?
- to: wifi
  type: deeper
  why: How does Wi-Fi send data through the air?
- to: telegraph
  type: evidence
  why: How did the first messages cross oceans by wire?
sources:
- TeleGeography, Submarine Cable Map and FAQ.
- "Kurose J. & Ross K. Computer Networking: A Top-Down Approach."
- International Cable Protection Committee, about submarine cables.
interactive:
  t: story
  frames:
  - bg: lab
    g:
    - - phone
      - 200
      - 130
      - 100
    cap: You send a photo. Your phone chops it into thousands of tiny pieces called packets.
  - bg: sea
    g:
    - - cable
      - 200
      - 200
      - 180
    - - fish
      - 100
      - 120
      - 50
    cap: The packets become flashes of light racing through glass threads, in cables lying on the sea floor.
  - bg: shore
    g:
    - - building
      - 300
      - 130
      - 90
    - - cable
      - 120
      - 210
      - 120
    cap: Cables come ashore at stations in places like Mumbai and Chennai.
  - bg: lab
    g:
    - - phone
      - 200
      - 130
      - 100
    - - star
      - 300
      - 60
      - 40
    cap: At the other end, the pieces are put back together in the right order. Photo received!
quiz:
  t: predict
  prompt: You video-call a cousin in the USA from India. How does most of that data cross the ocean?
  options:
  - t: Through cables on the sea floor
    ok: true
  - t: Bounced off satellites in space
  - t: Through radio towers on islands
  reveal: Through undersea cables. Satellites carry only a small share of traffic between continents. Glass fibre cables can carry far more data, far more cheaply, and with less delay.
try_this: Play the packet game. Write a short sentence on a strip of paper, cut it into single words and number each piece. Hand the pieces to different friends, who walk them by different routes to a "receiver" on the other side of the room. The receiver uses the numbers to put the sentence back in order.
myth:
  myth: Most of the internet travels through satellites in space.
  truth: Almost all data between continents travels through cables on the sea floor. Satellites help reach remote places, ships and planes, but they carry only a small share of the world's traffic.
---

## The short answer

Almost all internet traffic between countries travels through [undersea cables](undersea-internet), not satellites.

Inside, light zooms through glass fibres thinner than a hair. The data is written as rapid flashes of [laser](lasers) light, on and off, standing for the 0s and 1s of [binary code](binary-code). Light in glass travels about 2 lakh kilometres every second, so it can cross an ocean in a small fraction of a second.

Messages are split into packets that may take different paths, and are joined back together at the end.

## Chopped into packets

When you send a photo, your phone doesn't send it in one piece. It chops it into thousands of small packets. Each one carries a label with where it's going and where it fits in the order, like numbered pages of a letter posted in separate envelopes.

Machines called routers pass the packets along, choosing a free path for each one. If one route is busy or broken, packets go another way. At the other end, the receiving device puts them back in order and asks again for any that went missing. This system was designed in the 1970s by Vint Cerf and Bob Kahn in the USA.

## Cables on the sea floor

More than 500 cables now lie along the [ocean floor](ocean-deepest), joining every continent except Antarctica. In deep water they're about as thick as a garden hose. Near the shore, where they need more protection, they're wrapped in steel and buried under the seabed.

Special ships lay them, unrolling cable as they sail for weeks across the ocean. Cables come ashore at landing stations in places like Mumbai and Chennai, and from there the data runs over land to cities.

[Sharks](sharks-myths) have been filmed biting cables, but they cause very few problems. Most damage comes from ships dragging anchors and from fishing nets. Repair ships fix well over a hundred breaks around the world every year.

{{story:telegraph}}

## The idea is old

Sending messages under the sea isn't new. The first cable across the Atlantic was laid in 1858 for the [telegraph](telegraph), [sending messages in Morse code](morse-to-whatsapp). It worked for only a few weeks before failing, but better cables followed. By the 1870s, a telegraph line linked Britain with India.

Today's cables carry far more. One modern cable can carry enough data for millions of video calls at once. Inside, each glass fibre carries many colours of laser light at the same time, and each colour carries its own stream of data, like separate lanes on one road.

## The last few metres

Once the data reaches your town, it travels through fibre or copper cables, or through mobile towers, to your home. The final hop is often [Wi-Fi](wifi), a radio signal from your router to your phone. So a single message might travel as light, as electricity and as [radio waves](radio-waves), all in less than a second.

The delay is still real. A signal going from India to the USA and back takes a noticeable fraction of a second, which is why video calls sometimes have a tiny lag.

## Far beyond Earth

The internet doesn't reach space in the same way. Signals to [Mars rovers](mars-rovers) travel by radio and take between about 3 and 22 minutes each way, depending on where the planets are. Even at the speed of light, as you can read in [light-years](light-years), space is big.
