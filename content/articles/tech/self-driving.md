---
id: self-driving
title: How do self-driving cars see the road?
short: Self-driving cars
subject: tech
hook: In 2004, not one robot car could finish a desert race. Today driverless taxis carry paying passengers through American cities.
certainty: mixed
certainty_note: The technology is real and already in use in some cities. Experts disagree about how quickly it will spread, how safe it is compared with human drivers, and whether it can cope with very crowded, unpredictable roads.
surprising_fact: In the first big robot car race in 2004, the best car managed only about 12 km of the 240 km course before getting stuck.
facts:
- Main sensors: cameras, radar and lidar
- Lidar: spins and fires laser pulses to measure distance
- Driving levels: 0 (no help) to 5 (no driver ever needed)
- First big robot car race: DARPA Grand Challenge, 2004
- Driverless taxis: running in several US cities since the 2020s
links:
- to: lasers
  type: deeper
  why: How can light be used to measure distance?
- to: gps-how
  type: deeper
  why: How does your phone know where you are?
- to: ai-what
  type: deeper
  why: How does a computer learn to recognise a cat?
- to: traffic-lights
  type: surprise
  why: Who decides how long a red light lasts?
- to: robots
  type: home
  why: What makes a machine a robot?
- to: maps-digital
  type: home
  why: How do maps know about traffic jams?
- to: cars-history
  type: surprise
  why: What did the very first car look like?
- to: future-transport
  type: deeper
  why: How might we travel in 2050?
sources:
- SAE International, J3016 Levels of Driving Automation.
- US National Highway Traffic Safety Administration, Automated Vehicles for Safety.
- DARPA, The Grand Challenge (history of the 2004 and 2005 races).
interactive:
  t: predict
  prompt: A self-driving car has cameras. Why do many also carry lidar, which fires laser pulses?
  options:
  - t: Lidar measures exactly how far away things are, even in the dark
    ok: true
  - t: Lidar lets the car see through walls and buildings
  - t: Lidar is used to warn other drivers, like a flashing light
  reveal: A camera sees colours and shapes but can be fooled about distance, and it struggles at night. Lidar times how long each laser pulse takes to bounce back, so the car knows how far away every object is, light or dark.
try_this: Sit by a window or on a walk with an adult and become a "sensor". For one minute, call out everything a car would need to notice, such as a cyclist, a dog, a parked car with its door opening or a ball rolling into the road. Count how many things you spotted. A self-driving car must track all of them, many times a second.
myth:
  myth: Cars sold today with "autopilot" features can drive themselves completely.
  truth: Most driver-assist systems on cars people buy still need a human watching the road with hands ready on the wheel. Only a few taxi services in chosen areas run with nobody in the driver's seat.
---

## The short answer

A self-driving car "sees" with several kinds of sensors at once. [Cameras](cameras-how) read lane lines, signs and traffic lights. Radar bounces [radio waves](radio-waves) off other cars to tell how fast they are moving, even in fog. Many cars also carry lidar, a spinning sensor that fires [laser](lasers) pulses and times their [echoes](echoes) to build a 3D picture of everything nearby.

A powerful computer in the car combines all this into one picture. It labels each object (car, cyclist, kerb), guesses what each will do next, and then plans how to steer, speed up or brake. It repeats this many times every second.

## A desert race that went wrong

In 2004, the US military research agency DARPA set a challenge. It offered a million dollars to any robot car that could cross about 240 km (150 miles) of the Mojave Desert. Not one finished. The best car got only about 12 km before it got stuck on a rock.

A year later, in a second race, five cars made it to the end. The winner, a modified car from Stanford University called Stanley, crossed the line in under seven hours. Many of the engineers from those races went on to build today's self-driving cars.

Those early cars were covered in sensors and packed with computers that filled the boot. Today the computers are much smaller, but the basic recipe is the same: see, place yourself, predict, then plan.

## Knowing where it is

Seeing is half the job. A car must also know exactly where it is. [GPS](gps-how) can be off by a few metres, which is the difference between your lane and the wrong side of the road.

So many self-driving cars carry detailed maps made in advance, showing every lane, kerb and traffic light. As the car drives, it compares what its sensors see with the map, like you checking street signs against directions. That way it can place itself to within a few centimetres.

{{story:gps-how}}

## Guessing what people will do

The hardest part is not spotting a pedestrian. It is predicting what that person will do. Will the child on the pavement chase the ball? Will the cyclist swerve around a pothole?

To learn this, companies use [artificial intelligence](ai-what) trained on millions of kilometres of real driving. The computer studies how people, cars and bikes usually behave, and it plans for the most likely moves and the dangerous ones too.

## From Phoenix to Bengaluru

Driverless taxis already run in some US cities, including Phoenix and San Francisco, where wide roads, clear markings and steady weather help. Riders call one with an app, and no one sits behind the wheel.

Indian roads are a much harder test. A single street in Bengaluru might hold autorickshaws, scooters weaving between buses, a cow resting in the middle and a wedding procession. Lane markings may be faded, and drivers talk with their horns. Engineers say a car that can drive well there will be able to drive almost anywhere. Nobody yet knows when that will be.

Engineers sort driving help into levels from 0 to 5. Level 5 means a car that needs no human anywhere, in any weather. No such car exists yet. Most cars with driver-assist features today sit at level 2, where the car can steer and brake on a highway but a person must keep watching. The driverless taxis are level 4: no driver, but only inside areas their companies have mapped and tested carefully.
