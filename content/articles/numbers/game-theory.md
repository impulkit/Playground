---
id: game-theory
title: What is game theory?
short: Game theory
subject: numbers
hook: The best way to win at rock-paper-scissors, according to mathematics, is to stop trying to be clever and choose at random.
certainty: sure
surprising_fact: In a famous 1980 computer tournament, the winning strategy for a repeated game was one of the simplest entered. Called "tit for tat", it just copied whatever the other player did last time.
facts:
- "Game theory: the maths of decisions when the outcome depends on others too"
- "Founding book: von Neumann and Morgenstern, 1944"
- "Nash equilibrium: described by John Nash in 1950"
- "Nobel Prize in Economics for game theory: 1994 (Nash, Harsanyi, Selten)"
- "Famous puzzle: the prisoner's dilemma, from about 1950"
links:
- to: cold-war
  type: surprise
  why: How did two superpowers fight without a real war?
- to: probability
  type: deeper
  why: How likely is it, really?
- to: fifa-world-cup
  type: surprise
  why: How did the World Cup become the biggest show on Earth?
- to: chess-champions
  type: surprise
  why: Who were the greatest chess players ever?
- to: puzzles-logic
  type: deeper
  why: Can you solve the puzzle of the truth-teller and the liar?
- to: ai-what
  type: surprise
  why: What is artificial intelligence, really?
- to: trade-world
  type: surprise
  why: Why do countries buy and sell with each other?
sources:
- Encyclopaedia Britannica, Game theory; Prisoner's dilemma; John Nash.
- The Nobel Prize, The Sveriges Riksbank Prize in Economic Sciences 1994.
- Robert Axelrod (1984), The Evolution of Cooperation. Basic Books.
interactive:
  t: predict
  prompt: Two friends must share the last piece of cake. Which rule usually leaves both happiest?
  options:
  - t: One person cuts, the other chooses first
    ok: true
  - t: The older one decides how to split it
  - t: Whoever grabs it first keeps it
  reveal: If you cut, you know the other person will take the bigger piece, so your best move is to cut as fairly as you can. Neither person can do better by complaining. It is a tiny example of game theory designing a fair rule.
try_this: Play 20 rounds of rock-paper-scissors with a friend and secretly write down what they throw each time. Do they have habits, like repeating a winning move or switching after losing? Then try playing with a dice to choose randomly (1–2 rock, 3–4 paper, 5–6 scissors) and see if they can still beat you.
myth:
  myth: Game theory is only about board games and sports.
  truth: The "games" can be any situation where people's choices affect each other. Game theory is used in economics, politics, biology, computer science and even in designing auctions for mobile phone spectrum.
---

## The short answer

Game theory is the maths of decision-making when other people's choices matter too. In a "game", each player picks a strategy, and the result depends on what everyone picks. It could be rock-paper-scissors, a cricket captain choosing whether to bat first, or two shops deciding their prices.

Game theorists ask questions like: what is the smartest choice if the other side is also being smart? When should you cooperate, and when should you compete? These questions turn up in economics, politics, sport, biology and computer science.

## Von Neumann and Nash

The subject was launched by a book published in 1944, *Theory of Games and Economic Behavior*, by the mathematician John von Neumann and the economist Oskar Morgenstern. They showed that strategy in games such as poker could be studied with careful maths.

In 1950, a young American mathematician named John Nash added a key idea, now called a Nash equilibrium. It is a situation where no player can do better by changing their own choice alone, as long as everyone else sticks to theirs. Nash shared the Nobel Prize in Economics in 1994. His life, including his long struggle with mental illness, was told in the 2001 film *A Beautiful Mind*.

## The prisoner's dilemma

The most famous puzzle in game theory goes like this. Two suspects are questioned in separate rooms. If both stay silent, both get a short sentence. If one blames the other, the blamer goes free and the other gets a long sentence. If both blame each other, both get a medium sentence.

Each prisoner thinks: whatever the other does, I'm better off blaming them. So both blame, and both end up worse off than if they had trusted each other. The puzzle shows why cooperation can be hard even when it helps everyone, from countries cutting pollution to teammates sharing work.

{{story:cold-war}}

## Copy your partner

What if the game is played again and again? In 1980, the political scientist Robert Axelrod ran a tournament where computer programs played repeated prisoner's dilemmas against each other. The winner was a short program called "tit for tat", sent in by Anatol Rapoport. It cooperated in the first round, then simply copied its opponent's last move.

Tit for tat was nice, because it never cheated first. It hit back when cheated, but forgave as soon as the other player cooperated again. Axelrod argued that strategies like this help explain how cooperation can grow, even among animals.

## Penalty kicks and random choices

In some games, being predictable is fatal. In rock-paper-scissors, if you always throw rock, a smart opponent always throws paper. The best plan, mathematically, is to choose each option one-third of the time, at random. Then no opponent can find a pattern.

Football penalties, from school matches to the [World Cup](fifa-world-cup), work in a similar way. A kicker who always shoots to the same side is easy to save. Researchers who studied thousands of professional penalties found that kickers and goalkeepers mix up their choices in ways quite close to what game theory predicts.

During the [Cold War](cold-war), American and Soviet planners used game theory to think about nuclear weapons, where each side's safety depended on what the other believed it might do. Today, game theory helps design auctions and traffic systems. It also guided the [AI](ai-what) programs that, from 2017, began beating top professional poker players, a game full of bluffing and hidden cards.
