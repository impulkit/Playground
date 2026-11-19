---
id: fastag-tolls
title: How does a toll booth know your car has paid?
short: FASTag tolls
subject: how
hook: The FASTag sticker on an Indian windscreen has no battery. It wakes up only when a toll booth's radio beam hits it.
certainty: sure
surprising_fact: A FASTag can be read from several metres away in a fraction of a second, but a metallic tinted windscreen can block it completely.
facts:
- "Technology: RFID, radio frequency identification"
- "FASTag compulsory for Indian cars and trucks on national highways: February 2021"
- "Power source in the tag: none, it uses the reader's radio waves"
- "FASTag annual pass: up to 200 trips, launched 15 August 2025 at ₹3,000 (₹3,075 from April 2026)"
- "First big US electronic toll tags: Dallas, 1989"
links:
- to: radio-waves
  type: deeper
  why: How do invisible waves carry sound and pictures?
- to: barcodes
  type: surprise
  why: How does a shop scanner read stripes?
- to: nfc-tap
  type: deeper
  why: How does tapping a card pay for things?
- to: upi-payments
  type: home
  why: How did India start paying with phones?
- to: roads-built
  type: surprise
  why: What is under the surface of a highway?
- to: money-banks
  type: surprise
  why: Where does your money go when you put it in a bank?
- to: gps-how
  type: surprise
  why: How does your phone know where you are?
- to: how-traffic-cameras
  type: deeper
  why: How do speed cameras catch fast cars?
- to: toll-roads
  type: deeper
  why: Why do we pay to use some roads?
sources:
- National Highways Authority of India and Indian Highways Management Company Ltd, FASTag information.
- Ministry of Road Transport and Highways, Government of India, FASTag annual pass announcement (2025).
interactive:
  t: predict
  prompt: A FASTag sticker has no battery and no plug. Where does it get the energy to send its number?
  options:
  - t: From the radio waves sent by the toll booth's reader
    ok: true
  - t: From sunlight through the windscreen
  - t: From the car's battery through the glass
  reveal: The reader's antenna sends out radio waves. The tag's tiny antenna catches a little of that energy, enough to power its chip for an instant and reflect back its ID number. The same idea runs many shop security tags and library book tags.
try_this: Look at a car windscreen (with the owner's permission) and find the FASTag or toll sticker. Hold it up to light, if it's a spare, or look closely at a shop security tag. You may see a thin coiled or zigzag line of metal. That is the antenna that talks to the reader.
myth:
  myth: A FASTag tracks your car everywhere using GPS.
  truth: A FASTag has no GPS and no battery. It can only be read when it passes close to a reader, like those at toll plazas and some car parks. Satellite tolling is being tested in India, but that uses separate equipment.
---

## The short answer

In India, most cars and trucks carry a FASTag, a small sticker on the inside of the windscreen. Hidden inside is a tiny chip and a thin metal antenna. As a vehicle rolls into a toll lane, a reader mounted above the road sends out radio waves.

Those waves power the chip for a moment, and it sends back a unique number. A computer matches that number to a bank account or wallet, takes the toll, and tells the barrier to lift. A text message pings the owner's phone, showing the amount and the name of the toll plaza. The whole exchange takes a fraction of a second. This technology is called RFID, short for radio frequency identification.

## A sticker with no battery

The tag is "passive", meaning it has no power of its own. Its antenna is a flat coil or zigzag of metal. When the reader's [radio waves](radio-waves) hit it, they make a tiny electric current in the metal.

That's enough to wake the chip, which changes how the antenna reflects the waves. The pattern of reflections spells out the tag's ID number. It works a little like a mirror flashing a code back at a torch. Because there is no battery to run out, a tag can last for years. The same kind of passive tag is stitched into some clothes in shops and stuck inside library books.

{{story:nfc-tap}}

## From cash lanes to tags

For decades, Indian highway tolls meant stopping at a booth, finding change and waiting for a paper receipt. Queues on busy days could stretch for kilometres. FASTag was tested on the Mumbai–Ahmedabad highway in 2014 and spread across the country over the next few years.

In February 2021 it became compulsory for vehicles on national highways. Drivers without a tag had to pay double in cash. Within months, nearly all toll payments on national highways were electronic. Stopping, paying and waiting for change could take minutes at a busy plaza. With a working tag, most cars now roll through in well under a minute, and drivers burn less fuel idling in queues. The tag is linked to a bank account, and payments can be topped up through apps that use [UPI](upi-payments).

## Passes and rules

In August 2025, the government launched a FASTag annual pass for private cars. For ₹3,000, a driver gets up to 200 toll crossings on national highways in a year. Lakhs of drivers signed up in the first few days, and more than 77 lakh passes had been issued by June 2026. The price rose to ₹3,075 in April 2026.

There are rules too. Since 2024, each vehicle can have only one working FASTag, to stop people sharing tags between cars. Tags can stop working if a windscreen has a tinted film with metal in it, because metal blocks the radio signal. In that case drivers can fix the tag to the headlamp area instead.

## Tolls in America and the future

The USA started using electronic toll tags earlier. The Dallas North Tollway in Texas introduced its TollTag in 1989, and E-ZPass began in New York in 1993. E-ZPass now works across many states. Some American roads have no booths at all. Overhead gantries read tags, and cameras photograph number plates and post a bill to cars without one.

India is testing similar barrier-free lanes, with cameras that read number plates at speed. It is also exploring tolls worked out by satellite, using [GPS](gps-how)-style tracking to charge drivers for the exact distance they travel. If that happens, the toll booth itself may slowly disappear from India's highways, as it already has from some roads in the USA.
