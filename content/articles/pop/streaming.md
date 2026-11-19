---
id: streaming
title: How does music streaming work?
short: Music streaming
subject: pop
hook: When you tap play, your phone doesn't download the whole song first. It grabs the first few seconds and starts singing while the rest is still on its way.
certainty: sure
surprising_fact: To make music files small, computers throw away parts of the sound that most human ears would not notice anyway.
facts:
- A 3-minute song at normal quality: about 3 MB
- MP3 developed: late 1980s and 1990s, Germany
- Spotify launched: 2008, Sweden
- Big Indian services: JioSaavn, Gaana, YouTube Music
- Songs available on big services: around 100 million
links:
- to: internet-how
  type: deeper
  why: How does information cross the world in a blink?
- to: binary-code
  type: deeper
  why: How can a song be turned into ones and zeros?
- to: algorithms
  type: surprise
  why: How does an app guess what you'll like next?
- to: cloud-computing
  type: deeper
  why: Where is "the cloud", really?
- to: record-music
  type: home
  why: How did people record music before phones?
- to: music-charts
  type: home
  why: How does a song become a hit?
- to: ears-hear
  type: evidence
  why: Which sounds can your ears actually hear?
- to: indie-music-india
  type: evidence
  why: How did streaming help India's indie bands find fans?
sources:
- Fraunhofer Institute for Integrated Circuits, history of MP3.
- Britannica, Streaming (computing).
- IFPI, Global Music Report.
interactive:
  t: predict
  prompt: A song plays smoothly even when your internet slows down for a moment. Why?
  options:
  - t: Your phone keeps the next few seconds ready in a buffer
    ok: true
  - t: The singer slows down to match your internet
  - t: The song is stored inside the phone's speaker
  reveal: Apps load a little ahead of what you are hearing and keep it in a short-term store called a buffer. If the connection drops briefly, the music plays from the buffer. If the gap lasts longer, the song stops and waits.
try_this: Play a song you know on the lowest and highest quality setting your music app allows, using headphones if you can. Listen carefully to cymbals and the singer's breath. Can you hear a difference, or does your brain fill in the gaps?
myth:
  myth: When you stream a song, it is stored on your phone forever.
  truth: Normally the pieces are kept only briefly and then thrown away. Downloads for offline listening are saved in locked files that usually stop working if you stop paying.
---

## The short answer

Music streaming means playing songs over the internet instead of from a file you own. The songs are kept on huge computers, called [servers](?server), in [data centres](data-centres) around the world. When you press play, the server sends the song to your phone in small chunks, and your phone plays each chunk as it arrives.

To make this fast, songs are squeezed into small files. A three-minute song at normal quality is about 3 megabytes, small enough to start almost instantly on a mobile network. Apps such as Spotify, JioSaavn, Gaana and YouTube Music hold around 100 million songs this way.

## Turning sound into numbers

Sound is a wave of vibrating air. A microphone turns that wave into an electrical signal, and a computer measures the signal tens of thousands of times every second. Each measurement is stored as a number, in [binary code](binary-code), the ones and zeros computers use.

CD-quality sound takes 44,100 measurements a second for each ear. That makes a lot of numbers: a three-minute song comes to about 30 megabytes. Sending that much data to millions of phones at once would be slow and expensive, so engineers found a way to shrink it.

## Throwing away what you can't hear

In the late 1980s and 1990s, engineers at the Fraunhofer Institute in Germany developed the MP3 format. They used what scientists know about [hearing](ears-hear). Very quiet sounds next to loud ones get masked, so we barely notice them. Very high sounds are hard for many adults to hear at all.

MP3 and later formats remove much of this hidden information. The file becomes around ten times smaller, and most listeners can't tell the difference on everyday [headphones](sound-recording). Streaming services use similar methods and switch to lower quality automatically when your connection is weak.

{{story:binary-code}}

## Chunks, buffers and the cloud

When you tap a song, your app asks a server for it. The song is split into small pieces that travel across the [internet](internet-how), sometimes by different routes, and are put back in order on your phone.

The app always loads a little ahead, keeping a few seconds in a buffer. That's why a song can keep playing through a short tunnel on a train. Popular songs are copied onto servers in many cities, so a listener in Chennai and one in Chicago are each served from somewhere nearby.

## How apps choose your next song

Streaming apps track what you play, skip, repeat and save. Computer programs, or [algorithms](algorithms), compare your habits with millions of other listeners. If people who like the same songs as you also love a new song, the app may suggest it.

Some services also analyse the sound itself, such as its speed, its instruments and how energetic it is. This is how a playlist can move from one song to a similar one without anyone choosing each track by hand.

## Who gets paid?

Listeners pay a monthly fee, or listen free with adverts. The service keeps part of the money and shares the rest with record companies, songwriters and singers, based roughly on how many times each song is played.

Each play earns only a tiny fraction of a rupee. Many musicians say this is too little unless a song is played millions of times. Streaming services say it brings music to far more people than CDs ever did. The argument is still going on, and the rules keep changing.
