---
id: bluetooth
title: How does Bluetooth work, and why is it called that?
short: Bluetooth
subject: tech
hook: Your wireless earphones are named after a Viking king who died more than a thousand years ago.
certainty: sure
surprising_fact: The Bluetooth logo is two ancient runes, the first letters of King Harald Bluetooth's name, joined together.
facts:
- Named after: Harald "Bluetooth" Gormsson, a 10th-century Danish king
- Developed at: Ericsson in Sweden, from 1994
- Radio band: around 2.4 gigahertz
- Channel hops: up to 1,600 a second (classic Bluetooth)
- Typical range: about 10 metres for most earphones and phones
links:
- to: radio-waves
  type: deeper
  why: How do invisible waves carry sound and pictures?
- to: vikings
  type: surprise
  why: Were the Vikings only raiders?
- to: wifi
  type: home
  why: How does Wi-Fi reach every room?
- to: hearing-aids
  type: surprise
  why: How do hearing aids help people hear?
- to: alphabet-history
  type: surprise
  why: Where did our letters come from?
- to: smartwatches
  type: home
  why: How does a watch know how far you walked?
sources:
- Bluetooth Special Interest Group, Origin of the Bluetooth name.
- National Museum of Denmark, The Jelling stones.
interactive:
  t: predict
  prompt: Bluetooth shares its radio band with Wi-Fi and microwave ovens. How does it avoid getting jammed?
  options:
  - t: It jumps between many channels, hundreds of times a second
    ok: true
  - t: It only works when the microwave is switched off
  - t: It uses sound waves instead of radio
  reveal: Classic Bluetooth hops between 79 narrow channels up to 1,600 times a second, in an order both devices agree on. If one channel is noisy, the next hop is likely to be clear.
try_this: Play music on Bluetooth earphones or a speaker, then slowly walk away from the phone, counting your steps until the sound breaks up. Try again with a wall or a closed door in between, and see how much shorter the range gets.
myth:
  myth: Leaving Bluetooth switched on drains your phone battery fast.
  truth: Modern Bluetooth was redesigned to sip power. When nothing is connected, it uses very little, and tests on recent phones find the difference is small. Older phones from the early 2000s did use more.
---

## The short answer

Bluetooth is a way for gadgets close to each other to talk by radio. Your phone sends music to [earphones](how-headphones), a keyboard sends letters to a tablet, and a watch sends your step count to an app, all without wires.

It uses low-power [radio waves](radio-waves) in a band around 2.4 gigahertz, the same band used by many Wi-Fi routers and [microwave ovens](microwave). To avoid getting drowned out, it jumps between many narrow channels again and again each second. Most devices work within about 10 metres, roughly the length of a school bus.

## A king's nickname

In the 1990s, engineers at the Swedish company Ericsson were working on a short-range radio to replace cables. A Dutch engineer there, Jaap Haartsen, designed much of the system from 1994. Other companies, including Intel and Nokia, joined in, and they needed a name.

An Intel engineer, Jim Kardach, had been reading about [Vikings](vikings). He suggested Harald Gormsson, a king of Denmark in the 10th century, nicknamed "Bluetooth", who helped unite Denmark and part of Norway. The new radio would unite phones and computers in the same way. It was meant as a temporary code name, but it stuck.

The logo joins two runes, letters of the old Norse alphabet: ᚼ for H and ᛒ for B. Harald's own story is carved on a huge runestone at Jelling in Denmark, raised around the year 965.

{{story:vikings}}

## Hopping to stay clear

The 2.4 gigahertz band is crowded. Classic Bluetooth splits it into 79 narrow channels. Two connected devices agree on a secret hopping pattern and leap from channel to channel up to 1,600 times every second.

If a microwave or a Wi-Fi router is noisy on one channel, the next hop is probably fine. Any lost scrap of data is simply sent again. Newer versions also learn which channels are busy and skip them.

## Pairing up

Before two devices can talk, they "pair". One device advertises that it is available, the other finds it, and they swap a secret key. That's why you sometimes see a six-digit number on both screens and have to confirm they match. After that, data between them is scrambled with [encryption](?encryption), so a stranger's phone nearby can't easily listen in.

Once paired, devices remember each other. That's why your earphones connect by themselves when you take them out of the case.

## Low energy, tiny gadgets

In 2010 a new version called Bluetooth Low Energy arrived. It sends short bursts of data and sleeps in between, so a fitness band or a [smartwatch](smartwatches) can run for days. Some small trackers run for a year or more on one coin battery.

This made all sorts of things possible: heart-rate straps, smart door locks, and [hearing aids](hearing-aids) that stream phone calls straight into the ear. In shops and museums, small beacons use Bluetooth Low Energy to tell your phone which room you are in.

## Bluetooth and Wi-Fi

Bluetooth and [Wi-Fi](wifi) share the same radio band but do different jobs. Wi-Fi is built to carry lots of data around a whole house and out to the internet. Bluetooth is built for small amounts of data between gadgets right next to each other, using as little battery as possible. Your phone often runs both at once, streaming a video over Wi-Fi while sending the sound to your earphones over Bluetooth. Not bad for a technology named after a king who never saw a battery.
