---
id: nfc-tap
title: How does tap-to-pay work?
short: Tap to pay
subject: tech
hook: The card in your parent's wallet has no battery, yet when it touches a machine it wakes up, does a secret calculation and goes back to sleep.
certainty: sure
surprising_fact: A contactless card is powered by the payment machine itself. Its magnetic field makes a tiny current flow in a coil of wire hidden inside the card.
facts:
- Technology: near-field communication (NFC)
- Working distance: about 4 cm or less
- Radio frequency: 13.56 megahertz
- Battery in card: none
- India's no-PIN limit: up to ₹5,000 (since 2021)
links:
- to: magnets-how
  type: deeper
  why: How do magnets push and pull without touching?
- to: upi-payments
  type: home
  why: How did India start paying with QR codes?
- to: qr-codes
  type: home
  why: How does a QR code hold so much information?
- to: money-banks
  type: deeper
  why: Where does the money in a bank actually go?
- to: metro-trains
  type: surprise
  why: How do metro trains run so close together?
- to: cybersecurity
  type: deeper
  why: How do people protect computers from hackers?
sources:
- NFC Forum, About the technology.
- Reserve Bank of India, Enhancement of limit for contactless card transactions (December 2020).
interactive:
  t: predict
  prompt: A contactless card has no battery. Where does it get its power?
  options:
  - t: From the card reader's magnetic field
    ok: true
  - t: From the warmth of your hand
  - t: From a tiny solar cell on the back
  reveal: The reader makes a changing magnetic field. When the card's hidden coil comes close, the field makes a small electric current flow in it, enough to run the chip for a moment.
try_this: Hold a contactless card up to a bright light or a torch and look closely. In some cards you can see the faint outline of a coil of wire running around the edge. Ask an adult to show you the wave-shaped contactless symbol on cards, phones and shop machines, and count how many you spot in a week.
myth:
  myth: Anyone walking past with a scanner can easily steal money from the card in your pocket.
  truth: Cards only work within a few centimetres, and each payment creates a one-time code that is useless if copied. Taking money also needs a registered merchant account that banks can trace. Fraud does happen, but this kind is rare and hard to pull off.
---

## The short answer

Tap-to-pay uses a short-range radio system called near-field communication, or NFC. Inside a contactless card is a small chip connected to a coil of wire that runs around the card's edge. The shop's card reader makes a changing magnetic field. Hold the card within a few centimetres, and that field powers the chip.

For a split second, the chip and the reader talk. The card proves it is real by sending a special one-time code, the reader passes it to the bank, and the bank says yes or no. The whole thing usually takes less than half a second.

## Power from thin air

The card's trick is called [induction](induction-stoves). When a [magnetic](magnets-how) field changes near a coil of wire, it pushes electricity through the wire. Electric [toothbrushes](toothbrush) and some [phone chargers](chargers) use the same idea.

{{story:magnets-how}}

The reader's field is weak and fades very quickly with distance. That's deliberate. At about 4 cm, the card gets enough power to wake up. A few steps away, it gets nothing at all. This short range is what makes NFC different from [Bluetooth](bluetooth) or Wi-Fi, which are meant to reach across a room.

## A secret code for every tap

Old magnetic-stripe cards carried the same information every time, which made them easy to copy. A contactless chip is smarter. It holds a secret key that never leaves the chip. Each time you tap, it mixes that key with details of the payment and a counter to make a code used only once. This is a kind of [encryption](?encryption).

If a thief recorded that code, it would be useless for the next payment. This is one reason banks allow small payments without a PIN. In India, the Reserve Bank raised that no-PIN limit from ₹2,000 to ₹5,000 in January 2021. Above it, you still need to type a PIN.

## When your phone becomes the card

Phones and [smartwatches](smartwatches) have NFC chips too. When you add a card to a phone wallet, the phone doesn't store the real card number. It stores a stand-in number called a token. If a shop's computer were hacked, the token would be useless anywhere else.

The phone also asks for [a fingerprint, a face scan or a code](biometrics) before it pays. So a lost phone is harder to spend with than a lost card.

## Trains, doors and stickers

Contactless tickets came before contactless shopping in many cities. London's Oyster card started in 2003. In India, the National Common Mobility Card, launched in 2019, aims to let one card pay for [metro rides](metro-trains), buses and shops across the country.

NFC hides in other places too. Office ID badges, hotel key cards and library books often carry NFC tags. Some posters and museum labels have tiny stickers you can tap with a phone to open a web page.

## India's other way to tap

In India, many people skip cards altogether and pay with [UPI](upi-payments) by scanning a [QR code](qr-codes) with their phone camera. It needs no special reader, so a vegetable seller only has to print a code and stick it on a cart. In the United States, card tapping is more common, and its use jumped during the COVID-19 pandemic, when people wanted to avoid touching shared keypads. Both countries are moving towards the same goal: paying without handing anything over.
