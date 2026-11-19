---
id: game-engines
title: What is a game engine?
short: Game engines
subject: tech
hook: The same software used to build a video game was used to create the glowing backgrounds of a Star Wars TV series, live on set as the actors performed.
certainty: sure
surprising_fact: To run at 60 frames per second, a game has about 16 thousandths of a second to work out physics, sounds and sights for every single frame.
facts:
- Job: draws graphics, runs physics, plays sound, reads controls
- Smooth play: 30 to 60 or more frames per second
- Early licensed engine: Doom engine, 1993
- Unreal Engine first released: 1998
- Unity first released: 2005
links:
- to: video-games
  type: home
  why: How are video games made?
- to: video-game-history
  type: deeper
  why: What were the first video games like?
- to: programming
  type: deeper
  why: How do people tell computers what to do?
- to: gravity-fall
  type: surprise
  why: Why do things fall at the same speed?
- to: special-effects
  type: surprise
  why: How do films make impossible things look real?
- to: minecraft-coding
  type: deeper
  why: Can you build a computer inside a game?
- to: open-source
  type: deeper
  why: Why do some people give their software away?
- to: pixels
  type: surprise
  why: How do tiny dots make a picture?
sources:
- Encyclopaedia Britannica, Electronic game and Video game.
- Epic Games, Unreal Engine documentation and history.
- Jason Gregory, Game Engine Architecture (CRC Press).
interactive:
  t: predict
  prompt: In many games, when a ball rolls off a table, how does the game decide where it goes?
  options:
  - t: The engine uses simplified physics maths to work out its path, frame by frame
    ok: true
  - t: An artist draws every possible fall by hand
  - t: The game copies a video of a real ball
  reveal: The physics part of the engine applies rules like gravity and bouncing many times a second. It doesn't copy real physics perfectly, just closely enough to look right, which keeps the game running fast.
try_this: Make a flip book. On the corner of 20 pages of a small notebook, draw a ball falling and bouncing, moving it a little on each page. Flick the pages quickly. A game engine does the same thing, but draws each picture fresh, 60 or more times a second.
myth:
  myth: Game makers write every part of every game from scratch.
  truth: Most games are built on an existing engine, either bought, free or made in-house and reused. That lets small teams focus on the story, art and rules instead of rebuilding basics like lighting and collisions.
---

## The short answer

A game engine is a big piece of software that does the basic jobs every video game needs. It draws the 3D world on screen, makes objects fall and bounce, plays sounds, and reacts when you press buttons. Game makers add their own art, characters, music and rules on top.

It's a bit like a kitchen. The engine provides the stove, the oven and the utensils. Each team cooks a different meal with them. Popular engines include Unreal, Unity and the free Godot, and many studios also build their own.

## The game loop

At the heart of every engine is a loop that repeats again and again, very fast. First it checks what the player is doing: which keys are pressed, where the controller is pointing. Then it updates the world: moves characters, applies [gravity](gravity-fall), checks if anything has crashed into anything else. Finally it draws a new picture of the world on screen.

Each new picture is called a frame. A smooth game draws 60 or more frames a second. That leaves about 16 thousandths of a second for the whole loop. If the engine falls behind, the game stutters.

## Drawing the world

The part of the engine that draws, called the renderer, turns 3D shapes into flat images made of [pixels](pixels). Objects are built from thousands or millions of tiny triangles. The renderer works out where each triangle appears, what colour it should be, and how light and shadow fall across it.

This is so much work that computers have a special chip just for it, the graphics processing unit, or GPU. It can do many small sums at the same time.

{{story:gravity-fall}}

## Physics that's good enough

Real physics is complicated. A game can't calculate every grain of sand. So engines use shortcuts. A character might be treated as a simple capsule shape when checking for collisions. Water might be a moving texture rather than real drops.

The goal is to look and feel right while staying fast. Sometimes the shortcuts go wrong, which is why characters occasionally get stuck in walls or fly into the sky. Players love sharing these glitches.

## Engines that others could use

In the early days, every game was built from scratch. In 1993 a company called id Software released *Doom*, and other studios paid to use its engine for their own games. That idea spread. Epic Games released Unreal Engine in 1998, and Unity followed in 2005, aiming to help small teams.

Today one engine might power thousands of games. Studios in Pune, Austin and everywhere in between use the same tools. A small Indian team in Pune made *Raji: An Ancient Epic*, a 2020 game set in a world drawn from Indian myths.

## Beyond games

Engines are now used far outside gaming. For the [Star Wars](star-wars-effect) series *The Mandalorian*, filmmakers surrounded actors with giant LED screens showing scenery drawn live by Unreal Engine. When the camera moved, the background shifted to match, which made [special effects](special-effects) part of the filming itself.

Architects use engines to let clients walk through buildings before they're built. Car makers test driving software in virtual cities. And many young people first learn [programming](programming) by making small games in free tools such as Scratch, which works like a simple engine for beginners.
