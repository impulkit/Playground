---
id: fingerprint-sensors
title: How does a fingerprint sensor know it's you?
short: Fingerprint sensors
subject: tech
hook: Your phone doesn't keep a picture of your fingerprint. It keeps a secret map of the tiny places where your skin's ridges split and stop.
certainty: sure
surprising_fact: Identical twins share the same DNA, but their fingerprints are different, because the patterns form in the womb and are shaped by tiny differences in pressure and position.
facts:
- Main types: optical, capacitive and ultrasonic
- What's stored: a coded "template" of key points, not a photo
- Key points used: ridge endings and splits (minutiae)
- Popular on phones from: about 2013
- Aadhaar records: all ten fingerprints, both irises and a photo
links:
- to: fingerprints
  type: deeper
  why: Why does everyone have different fingerprints?
- to: twins
  type: surprise
  why: How can two people be born with the same DNA?
- to: aadhaar
  type: home
  why: How did over a billion people get an ID number?
- to: face-recognition
  type: deeper
  why: How does a phone recognise your face?
- to: passwords
  type: home
  why: What makes a password hard to crack?
- to: sound-travel
  type: surprise
  why: How does sound travel through solids?
sources:
- Unique Identification Authority of India, Aadhaar enrolment.
- Encyclopaedia Britannica, Fingerprint.
interactive:
  t: predict
  prompt: Most phone fingerprint sensors don't take a photo of your finger. What do capacitive sensors measure instead?
  options:
  - t: Tiny differences in electric charge where ridges touch and valleys don't
    ok: true
  - t: The heat coming from your blood
  - t: The smell of your skin
  reveal: A capacitive sensor is a grid of thousands of tiny electrical cells. Ridges of skin touch the surface and change the charge in the cells below them, while the valleys between ridges leave small air gaps. The pattern of changes draws your print.
try_this: Rub a soft pencil on paper until you have a dark patch, press a fingertip on it, then press the finger onto clear sticky tape and stick the tape on white paper. Use a magnifying glass to find places where a ridge stops or splits in two. Compare prints from different family members.
myth:
  myth: Your phone stores a photo of your fingerprint that hackers could steal and print.
  truth: Most phones turn the scan into a coded list of key points and keep it locked in a separate secure part of the chip. The original image isn't kept, and the template can't easily be turned back into a picture.
---

## The short answer

A fingerprint sensor reads the pattern of ridges on your fingertip and checks it against one you saved earlier. It doesn't look at the whole swirl the way you would. It hunts for small details called minutiae: the places where a ridge ends, or splits into two like a fork in a road.

When you first set up the phone, it records the positions of these points over many touches and saves them as a coded template. Each later touch is compared with that template. If enough points line up, the phone opens. All of this happens in a fraction of a second.

## Three ways to read a ridge

**Optical sensors** take a picture. A light shines on your finger and a tiny camera captures the bright and dark lines. Many phones with sensors under the screen use this kind, lighting the finger with the display itself.

**Capacitive sensors** are a grid of thousands of tiny electrical cells. Your skin conducts a little [electricity](electricity-made). Where a ridge touches the surface, it changes the charge in the cell beneath it. Where there's a valley, a thin layer of air sits in between. The sensor turns these differences into a map.

**Ultrasonic sensors** send out pulses of very high-pitched [sound](sound-travel) that people can't hear. The [echoes](echoes) bounce back differently from ridges and valleys, building a 3D picture, even through a layer of glass.

{{story:fingerprints}}

## Why fingerprints work as keys

[Fingerprints](fingerprints) form [before birth](baby-development) and stay the same all your life, growing larger but keeping the same pattern. Even [identical twins](twins), who share the same genes, have different prints, because the ridges are shaped by tiny differences in how each baby grew and pressed against its surroundings in the womb.

Police have used fingerprints to identify people for more than a hundred years. In the 1890s in Bengal, two Indian police officers, Azizul Haque and Hem Chandra Bose, helped develop a way of sorting prints into groups so they could be found quickly. It became known as the Henry system, after their British boss.

## Keeping the template safe

Phones keep the fingerprint template in a walled-off part of the processor, often called a secure enclave. Apps can't read it. They only get a "yes" or "no" answer. The template also never needs to leave the phone.

Fingerprints are a kind of [biometric](?biometric) key: something you are, rather than something you know, like a [password](passwords). That makes them convenient, but you can't change them if they're ever copied. For this reason, phones still ask for a passcode after a restart.

## Fingerprints for a billion people

India's [Aadhaar](aadhaar) system holds the fingerprints and iris scans of more than 130 crore people. When someone collects rations or opens a bank account, a small scanner checks their finger against the national record. This lets people prove who they are without paper documents.

It doesn't always work smoothly. Farm workers, labourers and older people can have worn or cracked fingertips that scanners struggle to read, which is why iris scans and one-time codes are used as backups.

## Fooling a sensor

Researchers have shown that some sensors can be tricked by fake fingers made of gelatin or glue moulded from a real print. Newer sensors try to check that the finger is alive, for example by looking at how skin flexes. No lock is perfect, but for most people a fingerprint is far harder to steal than a four-digit code someone sees over your shoulder.
