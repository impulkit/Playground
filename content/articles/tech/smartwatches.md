---
id: smartwatches
title: How does a smartwatch count your steps?
short: Smartwatches
subject: tech
hook: A chip smaller than a grain of rice feels every jolt of your arm, and a few lines of maths decide which jolts were steps.
certainty: sure
surprising_fact: The famous goal of 10,000 steps a day began as part of the name of a Japanese pedometer sold in the 1960s, not as a number from a medical study.
facts:
- Main step sensor: an accelerometer
- Sensor size: a few millimetres across
- Heart-rate light: usually green LEDs
- 10,000-step goal: from a 1960s Japanese pedometer
- Fitbit's first tracker: 2009, a clip-on
links:
- to: heartbeat-exercise
  type: deeper
  why: Why does your heart race when you run?
- to: algorithms
  type: deeper
  why: How does a list of rules make a decision?
- to: gps-how
  type: surprise
  why: How do satellites know where your watch is?
- to: exercise
  type: home
  why: What actually happens to your body when you exercise?
- to: smartphones
  type: home
  why: Why does a phone have so many sensors inside?
- to: batteries-phones
  type: surprise
  why: Why do watch batteries need charging every day or two?
sources:
- Encyclopaedia Britannica, pedometer and accelerometer.
- Paluch A.E. et al. (2022) Daily steps and all-cause mortality. The Lancet Public Health.
interactive:
  t: predict
  prompt: You sit in a bumpy autorickshaw ride for twenty minutes with your watch on. What might happen to your step count?
  options:
  - t: It might go up, even though you didn't walk
    ok: true
  - t: It stays exactly the same, because the watch knows you are sitting
  - t: It goes down, because the watch subtracts the bumps
  reveal: Bumps can look a lot like the rhythmic jolts of walking. Good watches filter out most of them, but some sneak through as extra steps. Pushing a pram or a shopping trolley can do the opposite, because your arm stays still.
try_this: Wear a watch or carry a phone with a step counter. Walk exactly 50 steps, counting out loud, and check what the device says. Then try 50 steps while holding a bag in that hand, and compare the two results.
myth:
  myth: Scientists worked out that 10,000 steps a day is the right amount for health.
  truth: The number came from the name of a Japanese pedometer called manpo-kei, which means "10,000-step meter". Large studies since then suggest the benefits start to level off somewhere between about 6,000 and 10,000 steps a day, depending on age.
---

## The short answer

Inside a smartwatch is a tiny [sensor](?sensor) called an accelerometer. It measures how fast the watch speeds up or slows down, in three directions at once: up and down, side to side, and forwards and back. Every time your foot hits the ground, your whole body jolts, and your wrist jolts with it.

When you walk, those jolts come in a steady rhythm, about one or two every second. The watch runs a small set of rules, an [algorithm](algorithms), that looks for that rhythm. If a jolt is strong enough and arrives at about the right moment after the last one, the watch counts a step. Random shakes, like waving at a friend, mostly get ignored.

## A weight on a spring, shrunk to a chip

The accelerometer works like a tiny weight held by [springs](springs). When the watch moves, the weight lags behind for a moment, the way your body tips back when a bus pulls away. The chip measures how far the weight shifts and turns that into a number.

All of this is carved into silicon only a few millimetres across, using the same methods that make [computer chips](chips-silicon). Many watches add a gyroscope, which senses twisting, so the watch can tell a step from a turn of the wrist. Some also carry [GPS](gps-how) to measure how far you went outdoors.

## Telling steps from everything else

The hard part is not sensing movement. It's deciding which movements are steps. Engineers record thousands of people walking, running, climbing stairs and doing other things, then tune the rules until the count matches what really happened.

Even so, no watch is perfect. Pushing a pram or a shopping trolley keeps your wrist still, so steps get missed. A bumpy ride or clapping along to music can add a few that never happened. Tests usually find good watches land within a few per cent of the real count when you walk normally, and drift further off during odd activities.

{{story:heartbeat-exercise}}

## The green light underneath

Turn many smartwatches over and you'll see small green lights flashing. Blood absorbs green light well. Each time [your heart beats](heart-health), a little more blood pushes into the tiny vessels in your wrist, and a little less light bounces back to a sensor beside the LEDs.

By timing those dips, the watch estimates your heart rate. It's a neat trick, but it struggles when the strap is loose, when you're moving very fast, or in cold weather when less blood flows to the skin. That's why the numbers can jump around during a sprint.

## Where 10,000 came from

In 1965, a Japanese company sold a pedometer called manpo-kei, which means "10,000-step meter". The round number was catchy, and it stuck for decades.

Researchers have since tested it. A large review of studies, published in 2022, found that people who walk more do tend to live longer. But the extra benefit starts to flatten out somewhere between about 6,000 and 10,000 steps a day. Older adults reached that point sooner than younger ones. For a [healthy body](exercise), the exact number matters less than moving often.

Fitbit's first tracker, which clipped onto [clothing](future-clothes), went on sale in 2009. Today the same idea sits on millions of wrists, and inside most [smartphones](smartphones) too, quietly counting while you get on with your day.
