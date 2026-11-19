---
id: maps-digital
title: How do digital maps know about traffic?
short: Digital maps
subject: tech
hook: In 2020, an artist in Berlin pulled a little cart full of 99 phones slowly down an empty street. The map on everyone's screens turned the road red for a traffic jam.
certainty: sure
surprising_fact: GPS satellites have no idea where you are. They only send out signals. Your phone listens and works out its own position.
facts:
- Main traffic clue: speed of phones moving along each road
- Live traffic on Google Maps: since 2007
- GPS satellites: about 30, run by the United States
- India's own system: NavIC, run by ISRO
- Fake jam experiment: 99 phones in a handcart, Berlin, 2020
links:
- to: gps-how
  type: deeper
  why: How does your phone know where you are?
- to: maps-history
  type: surprise
  why: How did people make maps before satellites?
- to: coordinates
  type: deeper
  why: How can two numbers pin down any spot on Earth?
- to: traffic-lights
  type: surprise
  why: Who decides how long a red light lasts?
- to: self-driving
  type: home
  why: How do self-driving cars see the road?
- to: algorithms
  type: deeper
  why: How does a computer pick the fastest route?
- to: satellites-india
  type: home
  why: How did India build its first satellites?
- to: maps-grids
  type: deeper
  why: How do grids help us find places on a map?
sources:
- Google, How AI helps predict traffic and determine routes (Google Maps blog, 2020).
- GPS.gov, US government information about the Global Positioning System.
- Indian Space Research Organisation (ISRO), NavIC.
interactive:
  t: predict
  prompt: How does a map app know that a road is jammed right now?
  options:
  - t: Phones on that road report that they are moving slowly
    ok: true
  - t: A satellite takes a photo of the road every minute
  - t: Traffic police phone the map company
  reveal: When people allow it, their phones send anonymous updates on their position and speed. If lots of phones on one road are crawling, the map colours it red. Satellite photos used in map apps are usually months or years old, not live.
try_this: Be a traffic detective. On a regular trip, such as to school, note with an adult what the map app says the travel time will be, then time the real trip. Do it for a week. Is the app usually right, too hopeful or too gloomy? Notice whether rain, festivals or exam days change things.
myth:
  myth: GPS satellites track where your phone is.
  truth: GPS satellites only broadcast signals, like lighthouses in space. Your phone receives them and calculates its own position. Traffic data comes from your phone separately sending its location over the mobile network, which you can switch off in settings.
---

## The short answer

Digital maps learn about traffic mostly from phones. When people allow it, their phones quietly send small, anonymous updates about where they are and how fast they're moving. If hundreds of phones on one road are moving at walking pace, the map knows there is a jam and paints that road red. If they're zipping along, it turns green.

The map company also mixes in other clues. Some cities have road sensors, drivers report accidents, and there are years of records about how busy each road usually gets at that hour. A computer combines all this to guess your travel time and pick the fastest route.

## Where am I?

Before a map can say anything about traffic, your phone must know where it is. It listens to signals from [satellites](satellites-help) orbiting about 20,000 km above Earth. The best-known system is [GPS](gps-how), run by the United States, with about 30 satellites.

Each satellite constantly broadcasts the exact time and its position. Your phone compares signals from at least four satellites. Because the signals take slightly different times to arrive, the phone can work out its distance from each one and pinpoint its own spot, often to within a few metres. That spot is described by two numbers, latitude and longitude, called [coordinates](coordinates).

India has its own regional system, [NavIC](navic), run by ISRO, with satellites that cover India and the area around it. Many phones sold in India can now use it alongside GPS.

## Thousands of tiny reports

Speed is the key traffic clue. A single phone crawling along could just be someone walking, or a bus stopping. But if many phones on the same stretch of road all slow down, something is going on.

Map apps also learn the rhythm of a city. They can learn that a big road in [Bengaluru](bengaluru) clogs around 9 a.m. on weekdays, or that roads near a stadium fill up after a cricket match. By mixing live reports with patterns from the past, they predict how traffic will look by the time you reach each road.

Some apps, like Waze, also ask drivers to report things directly: a crash, a pothole, a car stopped on the shoulder.

{{story:coordinates}}

## The fake traffic jam

In February 2020, a Berlin artist named Simon Weckert put 99 second-hand phones, all running Google Maps, into a small red handcart. He walked slowly up and down quiet streets. On the map, the empty roads turned red, and some drivers were told to avoid them.

His project showed how much the map trusts phones. Real traffic data is far messier than one cart, and map companies mix many sources to catch mistakes. Still, it was a playful reminder that maps are clever guesses, not perfect pictures.

## Choosing your route

Once the map knows the traffic, it must pick a route. A city has millions of possible paths between two points. The app uses [algorithms](algorithms), step-by-step methods, to search them efficiently, adding up the expected time on each road segment.

It also keeps updating as you drive. If a jam builds ahead, it may suggest a new route. Delivery companies, taxi apps and ambulances all depend on this. Even [self-driving cars](self-driving) use detailed digital maps, though for steering they rely on their own sensors more than on traffic reports.
