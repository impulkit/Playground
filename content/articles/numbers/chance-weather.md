---
id: chance-weather
title: What does ‘70% chance of rain’ actually mean?
short: Chance of rain
subject: numbers
hook: Will it rain or not? Weather forecasters answer with a number.
icon: umbrella
certainty: sure
surprising_fact: A 70% rain forecast can be spot on even when it stays dry. On about 3 out of every 10 such days, it should.
facts:
- 0%: no chance at all
- 100%: certain
- 70% chance of rain: rain on about 7 of 10 days like this one
- India Meteorological Department founded: 1875
- Useful forecasts: up to about a week, much less certain beyond two weeks
links:
- to: monsoon
  type: deeper
  why: What brings India's rain
- to: clouds-rain
  type: deeper
  why: How rain forms
- to: big-numbers
  type: deeper
  why: More fun with numbers
- to: tornadoes
  type: surprise
  why: "How does a tornado start spinning?"
- to: weather-forecasts
  type: deeper
  why: How do computers forecast the weather?
- to: probability
  type: home
  why: What are the chances?
- to: weather-balloons
  type: evidence
  why: How do weather balloons collect the numbers forecasters need?
- to: maths-cricket-dls
  type: surprise
  why: How does maths set a fair target when rain cuts a cricket match short?
sources:
- "Joslyn S. & Savelli S. (2010) Communicating forecast uncertainty: public perception of weather forecast uncertainty. Meteorological Applications 17."
- India Meteorological Department, forecast products.
- US National Weather Service, explanation of probability of precipitation.
interactive:
  t: predict
  g: umbrella
  prompt: A forecast says ‘70% chance of rain’. What does that mean?
  options:
  - t: It will rain for 70% of the day
    g: clock
  - t: Rain on 7 out of 10 days like this
    g: umbrella
    ok: true
  - t: 70% of the city will get wet
    g: map
  reveal: Forecasters look at many days with conditions like today's. If it rained on about 7 out of 10 of those days, they say 70%. So it'll probably rain, but not certainly!
  nudge: A very common guess! But the number is about how likely rain is, not how long.
try_this: Keep a rain diary for a month. Each morning, write down the chance of rain from a weather app or the newspaper, then note at bedtime whether it rained. At the end, look at all the days that said 60% or more. Did it rain on most of them?
myth:
  myth: If it doesn't rain on a "70% chance" day, the forecast was wrong.
  truth: A 70% forecast expects dry weather about 3 times in 10. You can only judge a forecaster over many days, by checking whether their 70% days really are wet about 70% of the time.
---

## The short answer

Probability is the maths of how likely something is. 0% means impossible, 100% means certain, and everything in between is a maybe.

A "70% chance of rain" means that on days with weather like today's, it rains at your spot about 7 times out of 10. It doesn't tell you how long it will rain or how hard. A 70% day might bring a ten-minute shower. A 40% day might bring a downpour, if it rains at all.

Weather forecasts use [computer models](coding-maths) and lots of past weather to work out these chances.

## Running the future many times

Forecasters don't run their computer model of the atmosphere just once. Tiny errors in today's measurements can grow into big differences a few days later. So they run the model dozens of times, each with slightly different starting numbers.

If 35 out of 50 runs show rain over your town tomorrow, that is 70%. If almost every run agrees, the forecast is confident. If the runs scatter in all directions, the chance stays close to the middle.

In the 1960s, an American meteorologist named Edward Lorenz found that the atmosphere is so sensitive that forecasts lose their grip after about two weeks. That is why nobody can promise sunshine for a wedding next month.

## Confidence times area

The US National Weather Service explains its number with a small sum: how sure forecasters are that rain will form, times how much of the area it will cover.

Say they are 50% sure that showers will develop, and if they do, they will reach 80% of the area. Then 0.5 × 0.8 = 0.4, a 40% chance of rain at any one spot. Two quite different skies can end up with the same number.

{{story:monsoon}}

## Forecasting rain for a billion people

India's Meteorological Department, set up in 1875, makes forecasts that help farmers decide when to sow seeds before the [monsoon](monsoon). It predicts when the rains will reach Kerala, usually around the start of June, and how much rain the season will bring.

Those forecasts are probabilities too. A prediction of a "normal" monsoon really means it is the most likely outcome, not a promise. Rain itself starts high above, when tiny droplets in [clouds](clouds-rain) join and grow heavy enough to fall.

## Chances in everyday life

Probability is everywhere once you look. A cricket captain calling heads at the toss has a 50% chance of winning it, however lucky the coin feels. A [board game](maths-games) dice lands on six about once in every six throws, over many throws, though it can easily miss six times in a row.

Weather is harder, because the sky is not a coin. The atmosphere is a huge, swirling mixture of air, heat and water, and nobody can measure every part of it. A forecast number is an honest way of saying how much we know, and how much we don't.

## Are forecasters honest?

A good forecaster is "well calibrated". On all the days they said 30%, it should rain about 30% of the time. Big weather services check this constantly and are usually close.

Some US television weather presenters have been found to forecast rain a little more often than it happens. People grumble more about a surprise soaking than a surprise sunny day. Studies also show that many people misread the number, as the quiz above shows. Learning a little about [probability](probability) means you can read a forecast the way a forecaster does, and pack your umbrella on a 30% day anyway.
