---
id: tech-video-calls
title: How do video calls work?
short: Video calls
subject: tech
hook: Your face on a video call is chopped into thousands of tiny packets, raced around the planet, and rebuilt on another screen in a fraction of a second.
certainty: sure
surprising_fact: Video calls squeeze the picture so hard that the data sent can be hundreds of times smaller than the raw video from the camera.
facts:
- "Pictures sent: often about 30 frames a second"
- "Delay that starts to feel awkward: more than about a quarter of a second"
- "First public video phone: AT&T Picturephone, 1964 World's Fair"
- "Zoom daily meeting participants: about 10 million (Dec 2019) to 300 million (April 2020)"
- "Speed needed for a basic HD call: roughly 1–3 megabits a second"
links:
- to: internet-how
  type: deeper
  why: How does a message find its way across the internet?
- to: pixels
  type: deeper
  why: How do tiny coloured dots make a whole picture?
- to: undersea-internet
  type: surprise
  why: Why does your call to America travel along the seabed?
- to: sound-travel
  type: surprise
  why: Why does sound take time to reach you, even in a room?
- to: microphones
  type: deeper
  why: How does a microphone turn your voice into electricity?
- to: radio-waves
  type: home
  why: How does Wi-Fi carry your face through thin air?
sources:
- Encyclopaedia Britannica, videoconferencing; data compression.
- Smithsonian National Museum of American History, AT&T Picturephone.
interactive:
  t: predict
  prompt: A video call needs about 2 megabits a second. Roughly how much data would the raw, unsqueezed HD video from your camera need?
  options:
  - t: About 3 megabits a second
  - t: About 60 megabits a second
  - t: About 650 megabits a second
    ok: true
  reveal: Raw HD video at 30 frames a second is roughly 650 megabits a second. Clever compression throws away what your eyes won't miss and sends only what changes, shrinking it hundreds of times.
try_this: On your next video call with a relative, ask both people to clap at exactly the same moment while counting down together. Notice the tiny gap before you see and hear the other clap. That gap is the time your picture and voice spend travelling.
myth:
  myth: On a video call, your camera sends a full new picture of you about 30 times every second.
  truth: Most frames are not full pictures. Usually only the changes are sent, such as your mouth moving or a hand waving, and a full picture is sent now and then. The wall behind you is hardly sent at all.
---

## The short answer

A video call does five jobs at once, over and over, very fast. Your camera takes about 30 pictures a second and your [microphone](microphones) turns your voice into electrical signals. Software squeezes these into a much smaller bundle of data. The internet carries the bundle to the other person in small packets. Their device unpacks it, rebuilds the picture and plays your voice.

All this has to happen in well under half a second. If it takes longer, people start talking over each other, and the call begins to feel like a walkie-talkie.

## Turning a face into numbers

A camera picture is a grid of tiny coloured dots called [pixels](pixels). A normal HD frame has about 920,000 of them. Each pixel is stored as three numbers for red, green and blue.

Do the maths for 30 frames a second and raw HD video comes to roughly 650 megabits every second. That would choke a typical home internet line many times over. So video calls can never send raw video. They have to shrink it.

## The art of throwing things away

The shrinking is done by a codec, short for coder-decoder. It uses two big tricks. First, it drops detail your eyes are bad at noticing, like tiny shades of colour. Second, it sends only what changes from one frame to the next.

If you sit still in front of a plain wall, the wall barely needs sending at all. Your blinking eyes and moving lips get most of the data. That is why the picture turns blocky when you wave your arms or walk around. Suddenly everything is changing, and the codec can't keep up.

A typical HD call ends up using about 1–3 megabits a second, hundreds of times less than the raw video.

## A trip around the world in packets

The squeezed data is chopped into packets and sent across the [internet](internet-how). A call from Bengaluru to a cousin in Chicago may travel through Wi-Fi, mobile towers and data centres, then along [cables on the ocean floor](undersea-internet). Light in those glass fibres covers that distance in roughly a tenth of a second.

Packets sometimes arrive late, out of order, or not at all. For a video call, waiting for a lost packet is worse than skipping it. So the app guesses the missing bit and moves on. A frozen face or a robot-sounding word is often a lost packet being covered up.

{{story:undersea-internet}}

## The echo problem

Your speaker plays the other person's voice, and your microphone could pick it straight back up. They would hear their own voice return a moment later, which is maddening. So apps run echo cancellation. Software knows exactly what sound it just played and subtracts it from what the microphone hears.

Since [sound travels](sound-travel) at about 343 metres a second, even a small room creates echoes that the software has to tidy away.

## From World's Fair dream to every pocket

The US phone company AT&T showed off a Picturephone at the 1964 New York World's Fair. Visitors could chat with strangers in California, on a small black-and-white screen. It cost a fortune to use and flopped. Public booths opened in 1964, but three minutes between New York and Chicago cost about $27, a huge sum then.

Ordinary internet video calls took off in the 2000s with apps like Skype. Then came 2020. When schools and offices closed during the COVID-19 lockdowns, Zoom said its daily meeting participants jumped from about 10 million in December 2019 to about 300 million in April 2020. Children in India and the USA suddenly went to class through a screen. Their Wi-Fi carried them there on invisible [radio waves](radio-waves).
