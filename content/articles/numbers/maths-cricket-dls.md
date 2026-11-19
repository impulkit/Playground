---
id: maths-cricket-dls
title: How does the Duckworth-Lewis method work?
short: Duckworth-Lewis
subject: numbers
hook: In a 1992 World Cup semi-final, rain changed South Africa's target from 22 runs off 13 balls to 22 runs off one ball. Two statisticians decided to fix cricket.
certainty: sure
surprising_fact: Cricket's rain rule was invented by two statisticians, not by cricketers, and today a computer runs their maths during every rain break.
facts:
- "Invented by: Frank Duckworth and Tony Lewis, English statisticians"
- "First used in international cricket: January 1997"
- "Adopted as the ICC's standard method: 2001"
- "Renamed Duckworth-Lewis-Stern (DLS): 2014, after updates by Steven Stern"
- "Key idea: a team's resources are its overs left plus its wickets in hand"
- "An Indian alternative: the VJD method by V. Jayadevan of Kerala"
links:
- to: cricket-rules
  type: deeper
  why: What do all those cricket rules actually mean?
- to: cricket-world-cups
  type: home
  why: Which team has won the most Cricket World Cups?
- to: percentages
  type: deeper
  why: How do percentages work?
- to: graphs-charts
  type: deeper
  why: How can a curve on a graph tell a story?
- to: chance-weather
  type: surprise
  why: What does a 70% chance of rain really mean?
- to: cricket-stats
  type: home
  why: What is a strike rate?
- to: monsoon
  type: surprise
  why: Why does the monsoon arrive when it does?
sources:
- International Cricket Council, playing conditions on the Duckworth-Lewis-Stern method.
- Duckworth F. and Lewis A. (1998), A fair method for resetting the target in interrupted one-day cricket matches, Journal of the Operational Research Society.
- ESPNcricinfo, the 1992 World Cup semi-final, South Africa v England.
interactive:
  t: predict
  prompt: In DLS, which loss hurts a batting team's chances more?
  options:
  - t: Losing wickets, because each wicket lost cuts its resources
    ok: true
  - t: Losing overs, because overs are all that count
  - t: Neither, because DLS only looks at the run rate
  reveal: DLS treats overs and wickets together as resources. A team with 20 overs left and 9 wickets in hand can attack freely. A team with 20 overs and 2 wickets can't, so it has far fewer resources even with the same overs.
try_this: Play "rain stopped play" with a friend using dice. Each roll is one ball, and the number is the runs scored (count a 6 as a wicket). Bat for 12 balls each, but stop one innings at 8 balls. Work out a fair new target using a simple rule, like "8 out of 12 balls is two-thirds", and argue about whether wickets should count too.
myth:
  myth: DLS just divides the target by the overs lost, so it is the same as the run rate.
  truth: DLS also counts wickets. Teams usually score faster near the end, and a team with many wickets left can attack. So two teams with the same overs left can get different targets depending on how many wickets they still have.
---

## The short answer

When rain shortens a one-day or T20 cricket match, someone has to decide a fair new target. The Duckworth-Lewis method, now called Duckworth-Lewis-Stern or DLS, does this with maths.

Its big idea is that a batting team has two kinds of resources: the overs it has left and the wickets it still has in hand. At the start of an innings, a team has 100% of its resources. Every over bowled and every wicket lost uses some up. If rain takes some resources away, DLS works out what percentage remains and scales the target to match.

## The match that broke the old rule

Before DLS, [cricket's rules](cricket-rules) for rain were much simpler, and some gave silly results. The most famous came in the 1992 World Cup semi-final in Sydney. South Africa needed 22 runs from 13 balls to beat England. Then it rained.

Under the rule used then, overs lost were simply taken away, starting with England's least productive overs. When play resumed, the scoreboard showed South Africa needing 22 runs from just one ball, which was impossible. Fans booed. The match is often said to have pushed two English statisticians, Frank Duckworth and Tony Lewis, to design something fairer.

## Overs plus wickets

Duckworth and Lewis studied hundreds of past matches. They noticed that runs come in a pattern. Teams start carefully, build up and then hit hard at the end, if they still have wickets. Losing early wickets makes teams slow down.

They turned this into a table. Look up the overs left and wickets in hand, and the table gives the percentage of resources still available. For example, a team with all 10 wickets and 50 overs left has 100%. A team with 25 overs left but only 3 wickets has far less than half, because it can't take risks.

To set a target, DLS compares the resources each team had. If the team batting second gets fewer resources because of rain, its target is cut by the same [percentage](percentages). If the first team was cut short instead, the second team may have to score more than the first team made.

{{story:chance-weather}}

## From 1997 to Stern

DLS was first used in an international match on New Year's Day 1997, in Harare, Zimbabwe, when the home team beat England. The International Cricket Council made it the standard method in 2001.

Modern cricket got faster, especially after T20 arrived and teams began scoring 300 runs in an ODI regularly. The Australian statistician Steven Stern updated the tables, and in 2014 the method was renamed Duckworth-Lewis-Stern. Today the umpires and scorers use computer software to run it, and a "par score" shows on the screen during rain breaks.

## India's rival method

In Kerala, an engineer named V. Jayadevan built a different method, called VJD. It uses its own curves for how teams score and was used in some Indian domestic matches. Supporters say it handles big hitting at the end better. The ICC has stuck with DLS, but the debate shows that there is more than one fair way to split a game.

Cricket fans everywhere still grumble when DLS goes against their team. But a rain rule will never be perfect, because nobody knows what would have happened if the sky had stayed clear. All DLS can do is make a good guess, the same way a forecaster turns cloud patterns into a [chance of rain](chance-weather).
