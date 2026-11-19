---
id: chargers
title: How does a phone charger work?
short: Chargers
subject: how
hook: The socket on your wall pushes electricity back and forth 50 or 60 times a second. Your phone battery needs a gentle one-way trickle. The little charger brick is the translator.
certainty: sure
surprising_fact: A modern fast charger switches its electricity on and off tens of thousands of times every second. Doing that lets it use a far smaller transformer, which is why chargers shrank from heavy blocks to pocket-sized cubes.
facts:
- "Wall supply: about 230 volts in India, about 120 volts in the USA, alternating current"
- "Phone battery: lithium-ion, about 4 volts, direct current"
- "Basic USB output: 5 volts; fast chargers can go up to 20 volts or more"
- "Common charger rule: USB-C required for new phones in the EU from late 2024"
- "Power drawn by a modern charger with nothing plugged in: usually well under 1 watt"
links:
- to: batteries-phones
  type: deeper
  why: Why do phone batteries get worse as they get older?
- to: electricity-home
  type: home
  why: How does electricity reach the sockets in your walls?
- to: light-switch
  type: home
  why: What happens when you flip a switch?
- to: magnets-how
  type: deeper
  why: How can a magnet push something without touching it?
- to: e-waste
  type: evidence
  why: What happens to old phones and chargers when we throw them away?
- to: induction-stoves
  type: surprise
  why: How can a stove cook food without getting hot itself?
sources:
- European Commission, Common charger for electronic devices (Directive (EU) 2022/2380).
- USB Implementers Forum, USB Power Delivery specification overview.
- Battery University, Charging lithium-ion batteries.
interactive:
  t: predict
  prompt: What is the main job of a phone charger?
  options:
  - t: Turning high-voltage, back-and-forth wall electricity into low-voltage, one-way electricity
    ok: true
  - t: Storing electricity so the phone can use it later
  - t: Making extra electricity from the heat in the room
  reveal: The charger doesn't store anything. It takes mains electricity and changes it into the steady, low-voltage direct current a lithium-ion battery needs. A chip inside the phone then decides how fast the battery actually fills.
try_this: Look at the small print on any charger in your home. Find the "Input" line, which shows the wall voltage it accepts, and the "Output" line, which shows what it gives the phone. Compare two different chargers and see which one can deliver more watts.
myth:
  myth: Leaving your phone on charge overnight will overcharge it and wreck the battery.
  truth: Phones have a control chip that stops charging when the battery is full. Heat, and sitting at 100% for very long periods, can age a battery slowly, which is why many phones now pause charging around 80% overnight and finish just before you wake up.
---

## The short answer

The electricity in your wall socket is strong and restless. In India it pushes at about 230 volts and flips direction 50 times a second. In the USA it's about 120 volts, flipping 60 times a second. This is called alternating current.

A phone's [battery](batteries-phones) wants something very different: about 4 volts, flowing steadily in one direction, known as direct current. A charger is the go-between. It lowers the voltage, straightens the back-and-forth flow into a one-way stream, smooths it out and keeps it steady. Then a small chip inside the phone decides how fast to fill the battery, so it doesn't overheat.

## The old, heavy way

Older chargers, the kind that felt like a brick, used a simple transformer. Inside were two coils of copper wire wrapped around an iron core.

[Mains electricity](electricity-home) flowing through the first coil makes a changing magnetic field. That field passes through the iron and creates a smaller voltage in the second coil, which has fewer turns of wire. It's [magnets](magnets-how) doing the work. Then a set of one-way electronic valves called diodes turned the alternating current into direct current.

These chargers were reliable, but they had to be heavy. At 50 or 60 flips a second, a transformer needs a lot of iron and copper to do its job, and it wastes energy as heat.

## The small, clever way

Today's chargers use a trick. First they turn the wall supply straight into high-voltage direct current. Then tiny electronic switches called [transistors](?transistor) chop that current on and off tens of thousands of times a second.

At such high speed, a transformer can be tiny and still pass the energy through. After it, the current is turned back into smooth, low-voltage direct current. The newest fast chargers use switches made from a material called gallium nitride, which wastes even less energy and lets the charger shrink further.

{{story:batteries-phones}}

## Phone and charger talk

When you plug in a modern phone, it and the charger hold a quick conversation through the cable. The phone says how much power it can take. The charger replies with what it can offer. Basic USB gives 5 volts. Fast-charging systems such as USB Power Delivery can step up to 9, 15 or 20 volts, so more energy flows without needing a thicker wire.

Charging usually goes fastest at first. Once the battery reaches about 80%, the phone slows down to protect it, a bit like filling a glass quickly and then pouring gently near the top.

Wireless chargers use the same magnetic idea as the old transformer, but with one coil in the pad and the other in the phone. They're handy but waste more energy as heat, which is why they feel warm. The phone also has to sit in just the right spot, because the two coils must line up closely for the magnetic field to pass between them.

## One plug for all

For years, every brand seemed to have its own plug. People ended up with drawers full of cables that fit nothing. The European Union decided that, from the end of 2024, new phones sold there must use USB-C. India announced plans to follow, and other countries are moving the same way. The aim is to cut costs and reduce [e-waste](e-waste), the mountains of old gadgets thrown away every year.

A good charger left in the socket with no phone attached draws only a tiny amount of power. Cheap, badly made chargers are another matter. They can overheat or give shocks, so it's safest to use ones with proper safety marks and never to charge a phone under a pillow.
