---
id: gps-how
title: How does GPS know where you are?
short: GPS
subject: space
hook: Your phone finds your place on Earth by timing radio signals from satellites 20,000 km away, to within billionths of a second.
certainty: sure
surprising_fact: GPS satellite clocks run about 38 millionths of a second fast each day because of Einstein's relativity. Without correcting for it, GPS positions would drift by about 10 km a day.
facts:
- Run by: the US Space Force
- Satellites: about 31 working
- Height: about 20,200 km
- Satellites needed for a fix: at least 4
- India's own system: NavIC, designed for 7 satellites (only 3 working in 2026)
links:
- to: time-in-space
  type: deeper
  why: Does time really pass differently in space?
- to: einstein
  type: surprise
  why: Who was Albert Einstein, and what did he change?
- to: clocks
  type: deeper
  why: How do clocks keep time?
- to: coordinates
  type: home
  why: What are latitude and longitude?
- to: maps-digital
  type: home
  why: How do maps on phones work?
- to: satellites-help
  type: home
  why: What else do satellites do for us?
- to: speed-distance
  type: surprise
  why: How are speed, distance and time linked?
- to: inventions-india-modern
  type: home
  why: What else has India invented recently, besides its own navigation satellites?
sources:
- GPS.gov (United States government), GPS overview and space segment.
- ISRO, NavIC (Navigation with Indian Constellation).
interactive:
  t: predict
  prompt: What is the smallest number of satellites your phone needs to work out where you are?
  options:
  - t: "4"
    ok: true
  - t: "1"
  - t: "24"
  reveal: Three satellites are enough to pin down a spot in space, if your clock is perfect. Your phone's clock isn't, so it uses a fourth satellite to work out its own clock error. More satellites make the answer more accurate.
try_this: Hide a small toy in the playground or a big room. Three friends stand in different spots and each measures, with a long string or by counting steps, how far they are from the toy. Then everyone else has to find it using only those three distances. That is how GPS works.
myth:
  myth: GPS satellites track your phone and know where you are.
  truth: GPS only goes one way. The satellites send out signals, and your phone listens and does the maths itself. The satellites have no idea who is listening. Apps on the phone may share your location, but that is through the internet, not GPS.
---

## The short answer

GPS, the Global Positioning System, is a set of about 31 satellites circling Earth about 20,200 km up. Each one carries extremely accurate atomic clocks. It constantly broadcasts a radio message saying, in effect, "I am this satellite, I am here, and the time is now exactly this."

Your phone listens for these messages. [Radio waves](radio-waves) travel at the speed of light, so by comparing when each message was sent with when it arrived, the phone works out how far away each satellite is. With distances to at least four satellites, it can calculate where on Earth it must be, often to within a few metres.

## Circles that cross

The trick is called trilateration. Suppose you know you are exactly 10 km from Satellite A. You could be anywhere on a giant sphere around it. Add a second satellite, and the two spheres overlap along a circle. A third narrows it to two points, and one is usually far out in space, so you know which is right.

Your phone's clock is cheap compared with a satellite's atomic clock. Light travels about 30 cm in one billionth of a second, so a tiny clock error makes a big distance error. A fourth satellite lets the phone correct its clock. Most of the time your phone can hear eight or more, which makes the answer even better.

## Einstein in your pocket

GPS has to allow for [Albert Einstein](einstein)'s theories of relativity. Clocks moving fast tick slightly slower, and clocks in weaker gravity tick slightly faster. GPS satellites are moving at about 14,000 km/h, but they are also far from Earth's gravity.

{{story:einstein}}

Add the two effects together, and the satellites' clocks gain about 38 millionths of a second every day compared with clocks on the ground. That sounds like nothing. But light travels about 11 km in that time. If engineers didn't adjust the satellite clocks, GPS would drift by about 10 km a day.

## From military secret to everyone's phone

The United States [military](military) began building GPS in the 1970s, launching the first satellite in 1978. It was meant for guiding troops, ships and planes. In 1983, a Korean passenger plane strayed off course into Soviet airspace and was shot down. Afterwards, the US announced that GPS would be made available for civilian use once it was ready.

At first, the signal for civilians was deliberately made less accurate. In May 2000, the US switched that off, and accuracy improved from about 100 m to about 10 m almost overnight. Car navigation, ride-hailing apps and [maps on phones](maps-digital) took off.

## India's NavIC

Other countries have built their own systems so they don't depend on one country. Russia has GLONASS, Europe has Galileo and China has BeiDou. India has NavIC, Navigation with Indian Constellation, designed to use seven satellites. By mid-2026, failures had left only three of them working, so NavIC could still send time signals but could not work out positions on its own until new satellites are launched.

NavIC covers India and the region up to about 1,500 km around it. Three of its satellites are geostationary, sitting over the same spot all the time, and the others loop north and south over India. Many newer phones sold in India can use NavIC signals as well as GPS. Fishing boats have used it to find their way and receive warnings about storms.

## Beyond maps

GPS does much more than help you find your way. Its time signals keep [mobile networks](mobile-networks), banks and power grids in step. Farmers use it to steer tractors in straight lines. Scientists use it to measure how much the ground moves before and after [earthquakes](earthquakes), down to millimetres.

When you see a blue dot on a map, your phone has quietly done a [distance and speed](speed-distance) calculation against clocks in space, using [latitude and longitude](coordinates) to show the answer.
