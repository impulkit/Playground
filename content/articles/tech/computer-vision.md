---
id: computer-vision
title: How do computers see?
short: Computer vision
subject: tech
hook: In 1966, a professor in Massachusetts thought teaching computers to see would make a good summer project for students. Experts are still working on it.
certainty: sure
surprising_fact: To a computer, a 12-megapixel phone photo is about 36 million numbers, with no idea of "cat" or "tree" until it has been trained on huge numbers of examples.
facts:
- "Started: the MIT Summer Vision Project, 1966"
- "ImageNet: a collection of about 14 million labelled pictures"
- "Big breakthrough: 2012, when a neural network called AlexNet won the ImageNet contest"
- "Each colour pixel: 3 numbers, for red, green and blue"
- "Used for: logging in with your face, self-driving cars, plant-spotting apps, medical scans"
links:
- to: pixels
  type: deeper
  why: What is a pixel, exactly?
- to: neural-networks
  type: deeper
  why: How does a computer learn from examples?
- to: eyes-see
  type: surprise
  why: How do your own eyes turn light into pictures?
- to: face-recognition
  type: home
  why: How does your phone know your face?
- to: self-driving
  type: home
  why: Can a car really drive itself?
- to: optical-illusions
  type: surprise
  why: Why do our eyes get fooled too?
sources:
- Papert, S. (1966) The Summer Vision Project. MIT Artificial Intelligence Group, Vision Memo 100.
- Stanford University, ImageNet project.
- Britannica, computer vision.
interactive:
  t: predict
  prompt: Researchers put a few small stickers on a STOP sign. What did a computer vision system think it was?
  options:
  - t: A speed limit sign
    ok: true
  - t: A STOP sign, with stickers on it
  - t: A red apple
  reveal: In a 2017 study, a few black and white stickers made an image-recognition system read a STOP sign as a speed limit sign in most tests. People saw a normal sign. It shows that computers notice different clues from the ones we notice.
try_this: Play "pixel detective". Draw a 10 by 10 grid on squared paper. A friend secretly colours some squares to make a simple picture, then reads you only the list of coloured squares, like "row 3, column 5". Fill in your grid from the numbers and see how long it takes to guess the picture. That is close to how a computer starts.
myth:
  myth: Computers see a photo the way we do, as a scene full of objects.
  truth: A computer starts with a grid of numbers, one set for each pixel. Any idea of "dog" or "road" is something it has to learn by finding patterns in those numbers, after training on many labelled examples.
---

## The short answer

A digital camera turns light into a grid of tiny squares called [pixels](pixels). Each pixel is stored as numbers: how much red, green and blue it has. So to a computer, a photo is a giant table of numbers. Computer vision is the skill of finding meaning in those numbers, such as "this is a face", "that is a zebra crossing" or "this leaf has a disease".

Today, most computer vision uses [neural networks](neural-networks), programs that learn by looking at millions of labelled pictures. They are not given rules for what a cat looks like. They work the rules out from examples.

## The summer project that took 50 years

In 1966, Seymour Papert at the Massachusetts Institute of Technology (MIT) wrote a short plan for a "summer vision project". Students would build a system that could pick out objects in a picture. It sounded simple, because seeing feels easy to us.

It wasn't. Your brain uses a huge share of its power on vision, and most of that work happens without you noticing. You see a chair whether it's in sunlight or shadow, half-hidden or upside down. Early programs were thrown off by a change in lighting. For decades, computer vision worked only in tidy conditions, such as reading handwritten postcodes on envelopes or checking parts on a factory line. Engineers tried writing rules by hand: a face has two dark spots for eyes above a line for a mouth. Real faces, in real light, kept breaking the rules.

{{story:eyes-see}}

## Learning from millions of pictures

The big change came from two things: lots of data and much faster computers. Starting in 2009, a team led by Fei-Fei Li at Stanford built ImageNet, a collection of about 14 million pictures labelled by people with words like "goldfish" or "fire engine".

In 2012, a neural network called AlexNet entered the ImageNet contest and made far fewer mistakes than any program before it. Its layers learned step by step. The first layers spotted edges and blobs of colour. Middle layers put those together into shapes like eyes or wheels. The last layers recognised whole things. Since then, programs have become better than most people at certain narrow picture tasks.

## Where it's working now

Your phone may open when it sees your face, after comparing it with a map of your features it stored when you set it up. At several Indian airports, the DigiYatra system lets passengers walk through gates using [face recognition](face-recognition) instead of showing a boarding pass. Apps can name a bird or a plant from a photo. [Self-driving](self-driving) cars use cameras to read lanes, signs and people crossing.

Doctors use it too. Some programs help check eye scans for damage caused by diabetes, or spot shadows on chest X-rays that a busy doctor might miss. Farmers point phones at crops to identify pests. In each case, the computer is very good at one job and knows nothing outside it.

## Easy to fool

Computer vision can fail in strange ways. In a 2017 study, researchers placed a few stickers on a STOP sign, and an image-recognition system read it as a speed limit sign. A person would never make that mistake. Other programs have labelled a picture of a cow on a beach wrongly, because in their training photos, cows always stood on grass.

Face recognition has also made more mistakes with some groups of people than others, especially when its training pictures didn't include enough variety. That has led to arguments about privacy, fairness and when such systems should be allowed. Engineers are working on these problems, but seeing like a human, with common sense about the world, is still out of reach.
