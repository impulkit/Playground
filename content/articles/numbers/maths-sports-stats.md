---
id: maths-sports-stats
title: How do sports use statistics?
short: Sports stats
subject: numbers
hook: In 2002, a baseball team with one of the smallest budgets in America used spreadsheets to pick cheap players, and won 20 games in a row.
certainty: sure
surprising_fact: Don Bradman's Test batting average of 99.94 is so far above everyone else's that statisticians call it one of the most extreme records in any sport.
facts:
- "Bradman's Test batting average: 99.94 (1928–1948)"
- "Oakland Athletics' winning streak: 20 games, 2002"
- "Duckworth–Lewis method: first used in international cricket in 1997"
- "Hawk-Eye ball tracking: first shown on TV cricket in 2001"
- "Most three-pointers in an NBA season: 402, Stephen Curry (2015–16)"
links:
- to: averages
  type: deeper
  why: Mean, median or mode, which average should you trust?
- to: cricket-stats
  type: home
  why: What do strike rate and economy rate really tell you?
- to: maths-cricket-dls
  type: home
  why: How does the DLS method decide rain-hit matches?
- to: probability
  type: deeper
  why: How do you work out the chances of something happening?
- to: data-science
  type: deeper
  why: How do computers find patterns in huge piles of numbers?
- to: baseball-curve
  type: surprise
  why: How does a pitcher make a baseball curve?
- to: sports-science
  type: surprise
  why: How does science make athletes faster?
- to: statistics-lies
  type: surprise
  why: How can numbers be used to fool you?
sources:
- Lewis M. (2003) Moneyball: The Art of Winning an Unfair Game. W. W. Norton.
- ESPNcricinfo, Test batting records.
- International Cricket Council (ICC), DLS method playing conditions.
interactive:
  t: predict
  prompt: A batter scores 80, 0, 0 and 120 in four innings, all out each time. What is their batting average?
  options:
  - t: "50"
    ok: true
  - t: "100"
  - t: "80"
  reveal: Add the runs (200) and divide by the number of times out (4). That's 50. The average hides how up and down the innings were, which is why analysts also look at other numbers, like how often a player scores 30 or more.
try_this: Keep stats for a week of games with friends, like carrom, football in the park or a board game. Record wins, points or goals for each player. Work out each person's average per game. Then argue about whether the average tells the whole story.
myth:
  myth: Statistics can predict exactly who will win a match.
  truth: Stats can estimate chances, but sport is full of luck, form, weather and surprises. A team with a 70% chance of winning still loses about three times in every ten.
---

## The short answer

Sport is full of numbers. Runs, wickets, goals, points, speeds and times are all recorded. Modern teams collect millions more, such as where every ball pitched, how far each player ran and how fast the ball came off the bat.

Teams use these statistics to pick players, plan tactics and spot weaknesses in opponents. Broadcasters use them to tell stories. Umpires use them in ball-tracking technology to make decisions. And fans use them to argue about who's the greatest.

## The spreadsheet team

In 2002, the Oakland Athletics, a baseball team in California, had much less money than rich teams like the New York Yankees. Their general manager, Billy Beane, couldn't afford star players. So he and his staff looked for numbers that other teams ignored.

They found that a player's ability to get on base, even by walking, mattered more than flashy stats. Such players were cheap. Oakland signed them, won 20 games in a row that season and reached the playoffs. The writer Michael Lewis told the story in the book *Moneyball* (2003), later made into a film. Today almost every major sports team employs data analysts.

## Cricket's number crunchers

Cricket has loved statistics for more than a century. A batting [average](averages) is total runs divided by the number of times out. Most great Test batters average around 50. Australia's Don Bradman averaged 99.94, needing just 4 runs in his last innings to reach 100. He was out for a duck. No other batter with a long Test career has averaged much above 60, so statisticians rank Bradman's record among the most extreme in any sport.

Strike rate shows how fast a batter scores: runs per 100 balls. Economy rate shows how many runs a bowler gives away per over. In T20 cricket, where every ball counts, teams like those in the IPL study match-ups, such as how a batter does against left-arm spin, before choosing a bowler.

{{story:maths-cricket-dls}}

## Rain, maths and fairness

When rain shortens a cricket match, how do you set a fair target? In 1997, two English statisticians, Frank Duckworth and Tony Lewis, introduced a method using the idea of "resources": overs left and wickets in hand. Later, the Australian Steven Stern updated it, and it became the [DLS method](maths-cricket-dls).

Hawk-Eye, first shown on TV cricket in 2001, uses several cameras to track the ball and predict its path. In the Decision Review System, it helps decide whether a ball would have hit the stumps.

## Shooting from far away

In basketball, statistics changed how the game is played. Analysts worked out that a shot from beyond the three-point line, though harder, is often worth more on average than a medium-range two-pointer. Expected points equal the chance of scoring times the points.

So teams started shooting far more three-pointers. Stephen Curry of the Golden State Warriors made 402 in the 2015–16 season, a record. In football, analysts use "expected goals", or xG, to measure how good a team's chances were, not just how many went in.

## Numbers can mislead

Stats can trick you too. A small number of games can make a player look brilliant or terrible by chance. A bowler's average can look great if they only bowl against weak teams. Good analysts always ask: how many games, against whom, and what's missing?

That's the same thinking used in medicine and science, where people learn how [statistics can lie](statistics-lies). It all rests on [probability](probability), the maths of chance, which says that even a brilliant team will sometimes lose to a weak one.
