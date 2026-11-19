---
id: navic
title: What is India's NavIC navigation system?
short: NavIC
subject: tech
hook: India built its own version of GPS so it would never have to depend on another country's satellites to know where it is.
certainty: sure
surprising_fact: In Hindi and several other Indian languages, "navik" means sailor or navigator, so NavIC's name is a small pun.
facts:
- "Full name: Navigation with Indian Constellation"
- "First satellite launched: IRNSS-1A, July 2013"
- "Area covered: India and about 1,500 km beyond its borders"
- "Satellites needed for a position fix: at least 4"
- "Working satellites: 3 (July 2026), so only timing service runs on its own; NVS-03 launched October 2026"
links:
- to: gps-how
  type: deeper
  why: How does your phone know where you are?
- to: satellites-india
  type: home
  why: What are India's satellites doing up there?
- to: isro-launch
  type: deeper
  why: How does ISRO launch a rocket?
- to: maps-digital
  type: surprise
  why: How do map apps find the fastest route?
- to: coordinates
  type: surprise
  why: How can two numbers pin down any spot on Earth?
- to: fishing-boats
  type: home
  why: How do fishermen find their way at sea?
- to: time-zones
  type: surprise
  why: Why do clocks show different times around the world?
sources:
- Indian Space Research Organisation (ISRO), Satellite Navigation Programme.
- Encyclopaedia Britannica, Global Positioning System.
- Ministry of Science and Technology answer in the Lok Sabha on the NavIC constellation, July 2026.
interactive:
  t: predict
  prompt: Why does a navigation receiver need signals from at least four satellites, not three?
  options:
  - t: The fourth signal lets it correct its own clock
    ok: true
  - t: One satellite is always switched off as a backup
  - t: Each satellite only works for one compass direction
  reveal: Three distances are enough to pin down a spot in space, but only if the receiver's clock is perfect. Phone clocks are not, so a fourth signal is used to work out the timing error too.
try_this: Stand three friends in a playground and give each a piece of string of a different length. Hold the free ends together and find the only spot where all three strings reach without slack. That is trilateration, the geometry that satellite navigation uses.
myth:
  myth: NavIC and GPS are the same thing with different names.
  truth: GPS belongs to the USA and covers the whole planet. NavIC is India's own regional system, covering India and the area around it. Many phones can listen to both, plus Russia's, Europe's and China's systems.
---

## The short answer

NavIC is India's own satellite navigation system. Like the American GPS, it uses satellites that send out precise time signals. A receiver on the ground, in a phone, ship or truck, picks up those signals and works out where it is.

The difference is size. GPS covers the whole Earth with about 30 satellites. NavIC was designed to cover only India and a zone around 1,500 km beyond its borders, using a planned seven satellites. That smaller job means fewer satellites, placed very high above the Indian Ocean so they always stay in view. The system was built by [ISRO](isro-launch), and the Indian government controls it, so it cannot be switched off by anyone else.

## Why India wanted its own

Satellite navigation became part of everyday life in the 1990s and 2000s. Ships, planes, banks, power grids and armies all came to rely on it. Yet the best-known systems belonged to the USA and Russia.

A story often told in India is that during the Kargil conflict in 1999, India asked for detailed GPS data and did not get it. Whatever the exact details, the lesson was clear to planners: a country that leans on someone else's satellites can be left in the dark. India approved its own regional system in 2006.

## How it works

Every NavIC satellite carries atomic clocks, which keep time to within a few billionths of a second. Each satellite keeps broadcasting the exact time and its own position.

A receiver on the ground hears these signals a tiny moment after they were sent. Radio travels at the speed of light, so a delay of one millionth of a second means the satellite is 300 metres further away. Measuring the delay from several satellites tells the receiver how far it is from each one. With four, it can work out its position, height and the exact time. The maths is the same as with [GPS](gps-how), only with different satellites.

{{story:gps-how}}

## Who uses it

Indian fishing boats can carry NavIC receivers that show their position and receive messages about storms and sea borders, useful far from mobile phone towers. Trucks, buses and trains use it for tracking. Since 2020, several phone chips can pick up NavIC signals alongside GPS, and the Indian government has pushed phone makers to support it.

Banks, telecom networks and power grids also use its precise timing to keep their computers in step.

## A rocky road

NavIC has had real trouble. Its first satellite went up in July 2013. Soon after, atomic clocks on several satellites began to fail, and one launch in 2017 failed when the rocket's nose cone did not open. A new generation began with NVS-01 in 2023, which carried an atomic clock made in India.

In January 2025, ISRO's 100th launch from Sriharikota carried NVS-02, but a valve problem left it stuck in the wrong [orbit](?orbit). By July 2026, the government told Parliament that only three satellites were working. That is one short of the four needed for a position fix, so NavIC could provide accurate timing but not standalone positioning. On 30 October 2026, a GSLV rocket carried a new satellite, NVS-03, into orbit. Once it is tested and in place, it should bring the count back to four, with more launches planned. For now, phones in India mostly mix NavIC with GPS and other systems, and users hardly notice.

## A crowd of systems

Several countries now run their own navigation satellites. Russia has GLONASS, Europe has Galileo and China has BeiDou. Japan, like India, has a regional system. A modern phone may listen to dozens of satellites from four or five systems at once, picking whichever give the cleanest signals. That is one reason a [map app](maps-digital) can find you on a narrow lane in Old Delhi or a Chicago street lined with skyscrapers.
