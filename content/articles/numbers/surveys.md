---
id: surveys
title: How can asking 1,000 people tell you what a whole country thinks?
short: Surveys
subject: numbers
hook: In 1936 a magazine asked over 2 million Americans who would win the election and got it badly wrong. A man who asked far fewer got it right.
certainty: sure
surprising_fact: A well-chosen sample of about 1,000 people gives roughly the same accuracy whether the country has 3 crore people or 140 crore.
facts:
- Survey: asking a sample of people instead of everyone
- Typical national poll: about 1,000–2,000 people
- Margin of error for 1,000 people: about 3 percentage points either way
- Famous failure: Literary Digest poll, USA, 1936
- Big Indian example: the National Family Health Survey
links:
- to: data-science
  type: deeper
  why: What happens to survey answers after they're collected?
- to: probability
  type: deeper
  why: Why does chance follow rules at all?
- to: elections-usa
  type: surprise
  why: How does America pick its president?
- to: vote-how
  type: home
  why: What actually happens when you cast a vote?
- to: census
  type: home
  why: Why count everyone when a sample works?
- to: news-media
  type: evidence
  why: How can you tell if a news poll is trustworthy?
sources:
- Pew Research Center, guides to survey methods and margin of error.
- Encyclopaedia Britannica, entries on public opinion polls and George Gallup.
- Government of India, Ministry of Health and Family Welfare, National Family Health Survey (NFHS).
interactive:
  t: predict
  prompt: A survey asks 1,000 fairly chosen people a question. If you asked 4,000 instead, how much smaller would the margin of error get?
  options:
  - t: About half as big
    ok: true
  - t: About a quarter as big
  - t: It would not change at all
  reveal: The margin of error shrinks with the square root of the sample size. Four times the people gives only twice the accuracy, which is why pollsters rarely bother asking huge numbers.
try_this: Ask everyone in your class to pick their favourite of three snacks and count the answers. Then put the names in a bowl, draw out just ten, and see what those ten chose. Compare the small sample with the whole class. Try the draw a few times and see how much the result jumps around.
myth:
  myth: A survey with more people in it is always more accurate.
  truth: Who you ask matters more than how many. A huge sample of the wrong people can be far worse than a small sample chosen fairly, as the 1936 Literary Digest poll showed.
---

## The short answer

A survey asks a small group of people some questions and uses their answers to estimate what a much larger group thinks or does. The small group is called a [sample](?sample).

The trick is choosing the sample fairly, so that every kind of person has a fair chance of being picked. If you do, the laws of [probability](probability) say the sample will usually look a lot like the whole population. A good poll of about 1,000 adults can estimate a national opinion to within about 3 percentage points, most of the time.

## Tasting the soup

Pollsters like a kitchen comparison. To check whether a big pot of dal needs salt, you don't eat the whole pot. You stir it well and taste one spoonful. That spoonful works for a small pot or a giant wedding pot, as long as it was stirred.

Choosing people at random is the stirring. That is why a sample of 1,000 works almost as well for India as for a small country. What matters is how well you mixed the pot, not how big the pot is.

## The poll that went wrong

In 1936, an American magazine called the Literary Digest mailed out millions of ballots. More than 2 million came back, and they predicted that Alf Landon would beat President Franklin Roosevelt easily. Roosevelt won by a landslide.

The magazine had found names in telephone books and car registration lists. In the middle of the [Great Depression](great-depression), people with phones and cars were richer than average, and the people who chose to reply were not typical either. Meanwhile a young pollster named George Gallup used a much smaller, carefully chosen sample and correctly called Roosevelt the winner. Polling changed for good.

{{story:elections-usa}}

## The wording matters

Even a perfect sample can be spoiled by a bad question. "Do you agree that our wonderful school needs a longer lunch break?" pushes people towards yes. Researchers call this a leading question.

Order matters too, and so does who asks. People may give the answer they think sounds good to a stranger, rather than the true one. Careful surveys test their questions first on small groups and keep the wording plain and neutral.

## Surveys in India and the USA

India runs some of the biggest surveys in the world. The National Family Health Survey visits hundreds of thousands of households and asks about health, children and nutrition. Its results help governments decide where to send doctors and food programmes. The [census](census) is different: it tries to count everyone, but only once every ten years.

In the USA, groups such as Gallup and the Pew Research Center publish regular polls on what Americans think. Around [elections](polls-elections) in both countries, news channels report opinion polls and exit polls (questions asked to voters as they leave the polling booth). These are useful, but they have missed results before, so smart readers check the sample size and the [percentages](percentages) carefully.

## Reading a poll like an expert

When you see a poll in the news, look for three details: how many people were asked, how they were chosen, and the margin of error. If two candidates are 2 points apart and the margin of error is 3 points, the race is too close to call. That small line at the bottom of the chart often matters more than the big headline.
