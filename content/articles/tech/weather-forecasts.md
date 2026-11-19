---
id: weather-forecasts
title: How do computers forecast the weather?
short: Weather forecasts
subject: tech
hook: In 1922, a scientist dreamed of a giant hall where 64,000 people with pencils would calculate tomorrow's weather. Today one supercomputer does far more, in minutes.
certainty: sure
surprising_fact: When Cyclone Phailin hit Odisha in 2013, accurate forecasts helped officials move around a million people to safety. Far fewer people died than in a similar cyclone in 1999.
facts:
- India Meteorological Department founded: 1875
- First computer forecast: ENIAC, USA, 1950
- Weather balloons: launched twice a day from hundreds of sites worldwide
- Useful forecasts: up to about 10 days ahead
- Rough rule: forecasts gain about one extra day of accuracy every decade
links:
- to: chance-weather
  type: deeper
  why: What does "40 percent chance of rain" really mean?
- to: monsoon
  type: home
  why: What makes the monsoon arrive each year?
- to: hurricanes
  type: deeper
  why: How do cyclones and hurricanes form?
- to: clouds-rain
  type: deeper
  why: How do clouds make rain?
- to: satellites-help
  type: surprise
  why: How do satellites help you every day?
- to: computers-how
  type: home
  why: What actually happens inside a computer?
- to: ai-what
  type: surprise
  why: Can artificial intelligence predict the weather?
- to: smart-farming
  type: surprise
  why: How do farmers use forecasts and sensors?
sources:
- India Meteorological Department, history and services.
- NOAA National Weather Service, how forecasts are made.
- European Centre for Medium-Range Weather Forecasts (ECMWF), numerical weather prediction.
interactive:
  t: predict
  prompt: The forecast says "40 percent chance of rain" for your town tomorrow. What does that mean?
  options:
  - t: There's a 4 in 10 chance it will rain at any given spot in town
    ok: true
  - t: It will rain for 40 percent of the day
  - t: 40 percent of the town will get wet
  reveal: It means that on days with weather like this, rain falls at a given spot about 4 times out of 10. So it might rain, it might not. Many forecasts come from running the computer model dozens of times and counting how many runs show rain.
try_this: Keep a weather diary for two weeks. Each morning, write down the forecast for the day, including whether it will rain and the expected high temperature. Each evening, write down what actually happened. At the end, count how often the forecast was right. Was it better at predicting temperature or rain?
myth:
  myth: A "40 percent chance of rain" means it will rain for 40 percent of the day, or over 40 percent of the area.
  truth: It means there is about a 4 in 10 chance that measurable rain will fall at any particular place in the forecast area during that time.
---

## The short answer

Weather forecasting starts with measurements. Every day, thousands of weather stations, [weather balloons](weather-balloons), ships, aircraft, radars and satellites record temperature, air pressure, humidity and wind all over the planet. These readings are fed into some of the most powerful computers on Earth.

The computers then split the atmosphere into millions of imaginary boxes, stacked in layers from the ground up into the sky. Using the laws of physics, they calculate how the air in each box will change: warming, cooling, moving, rising, dropping rain. They step forward a few minutes at a time, again and again, until they reach days ahead. Forecasters study the results and turn them into the forecast you see.

## A factory of human calculators

The idea came long before computers. During the [First World War](world-war-one), a British scientist named Lewis Fry Richardson worked as an ambulance driver in France. In his spare time, he tried to forecast the weather using the laws of physics and a lot of arithmetic. He spent weeks calculating a forecast for just six hours ahead. The answer was badly wrong, mainly because of problems with his starting data.

In 1922 he published his method and described a dream. In a vast hall, about 64,000 people with pencils would each calculate one small patch of the atmosphere, guided by a conductor in the centre. It was never built. But his method was right.

## The first computer forecasts

In 1950, a team in the United States used ENIAC, one of the first electronic [computers](computers-how), to make a 24-hour forecast. It took about 24 hours to calculate, so it only just kept pace with the weather. Still, it worked better than many expected.

Since then, computers have become millions of times faster. India's weather [supercomputers](supercomputers), such as Pratyush at the Indian Institute of Tropical Meteorology in Pune, run detailed models of the [monsoon](monsoon) and cyclones. [The India Meteorological Department](imd), founded in 1875, issues forecasts and warnings across the country.

{{story:chance-weather}}

## Why forecasts are never perfect

The atmosphere is chaotic. Tiny differences at the start can grow into big differences days later. In the 1960s, the American meteorologist Edward Lorenz discovered this when a small rounding of numbers in his computer model produced completely different weather later in the run. This became known as the butterfly effect, from his famous question about whether a butterfly flapping its wings in Brazil could set off a tornado in Texas.

To deal with this, forecasters run their models many times, each starting with slightly different numbers. If most runs agree, they are confident. If the runs spread out, the forecast is uncertain. Counting how many runs show rain gives you a percentage, like "70 percent chance of rain". Beyond about ten days, the runs usually disagree too much to be useful for daily weather.

## Forecasts that save lives

Better forecasts matter most when danger is coming. In October 1999, a [super cyclone](cyclones-india) struck [Odisha](odisha), and around 10,000 people died. In October 2013, Cyclone Phailin, nearly as strong, hit the same coast. This time, the India Meteorological Department tracked it days in advance, and officials moved around a million people into shelters. The death toll was a small fraction of 1999's.

In the United States, forecasts of [hurricanes](hurricanes) give coastal towns days of warning. New tools are arriving too. In recent years, artificial intelligence models trained on decades of past weather have started making forecasts that rival traditional ones, in a fraction of the time.
