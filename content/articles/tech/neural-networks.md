---
id: neural-networks
title: What is a neural network?
short: Neural networks
subject: tech
hook: A neural network learns to spot a cat the way you learned to spot one, by seeing thousands of examples, not by reading a definition.
certainty: sure
surprising_fact: The first artificial neuron was described on paper in 1943, years before anyone had a computer that could run one.
facts:
- "First artificial neuron (on paper): 1943, Warren McCulloch and Walter Pitts"
- "Perceptron, an early learning machine: 1958, Frank Rosenblatt"
- "Big breakthrough in recognising photos: 2012"
- Building blocks: artificial neurons joined in layers
- Learns by adjusting millions or billions of numbers called weights
links:
- to: brain-works
  type: deeper
  why: How do real neurons in your brain pass messages?
- to: ai-what
  type: home
  why: What does artificial intelligence actually mean?
- to: large-language-models
  type: deeper
  why: How do AI chatbots learn language?
- to: face-recognition
  type: surprise
  why: How does a phone recognise your face?
- to: algorithms
  type: deeper
  why: What is an algorithm, really?
- to: chips-silicon
  type: surprise
  why: What is inside a computer chip?
- to: learning-how
  type: surprise
  why: How does your own brain learn something new?
sources:
- Britannica, Neural network.
- McCulloch W. and Pitts W. (1943), A Logical Calculus of the Ideas Immanent in Nervous Activity, Bulletin of Mathematical Biophysics.
- Russell S. and Norvig P., Artificial Intelligence: A Modern Approach.
interactive:
  t: predict
  prompt: A neural network trained only on photos of dogs in parks is shown a dog on a beach. What might go wrong?
  options:
  - t: It may fail, because it learned to look for grass instead of the dog
    ok: true
  - t: Nothing, it understands what a dog is
  - t: It will say the beach is a dog
  reveal: Networks learn whatever patterns help them guess right in training, and sometimes that is the background, not the animal. If every dog photo had grass, grass may become part of its idea of "dog". This is why good training data needs lots of variety.
try_this: Play "human neural network" with three friends. One person sees a picture and may only say one word to the next, who passes one word to the last, who must guess the picture. Swap roles after each round and notice how you all get better at choosing useful words.
myth:
  myth: A neural network works just like a human brain.
  truth: It borrows a simple idea from the brain, that many small units passing signals can learn together. Real neurons are far more complicated, and a brain learns from far fewer examples than most networks need.
---

## The short answer

A neural network is a computer program built from lots of tiny maths units, called artificial neurons, joined together in layers. Each unit takes in some numbers, multiplies them by its own settings, adds them up and passes the result on. Alone, a unit does almost nothing. Millions of them working together can learn to recognise faces, translate languages or spot a disease in an X-ray.

The name comes from the [neurons in your brain](brain-works), which pass signals to one another. A neural network is a very rough copy of that idea. What makes it special is that nobody writes the rules for it. It learns them from examples.

## Layers of tiny decisions

A typical network has an input layer, several hidden layers and an output layer. Say you want it to tell cats from dogs. A photo goes in as a grid of numbers, one for each pixel's colour.

The first layer might react to simple things, like edges and patches of colour. Later layers combine those into shapes: an ear, an eye, a whisker. The last layer adds everything up and gives two numbers, how likely the picture is a cat and how likely it is a dog. No one tells the network to look for ears. It finds that ears are useful by itself.

## Learning by making mistakes

Every connection between neurons has a number called a weight. At the start, the weights are random, so the network's guesses are rubbish. Then training begins. The network sees a photo labelled "cat", makes a guess and checks how wrong it was.

A method called backpropagation then nudges every weight a tiny bit in the direction that would have made the guess better. Do this with thousands or millions of labelled photos and the weights slowly settle into values that work. It is a bit like tuning thousands of radio knobs at once until the music comes through clearly.

{{story:learning-how}}

## A slow start, then a rush

The idea is old. In 1943, Warren McCulloch and Walter Pitts described an artificial neuron using maths. In 1958, Frank Rosenblatt built the perceptron, a machine that could learn to sort simple shapes. Newspapers got very excited, then disappointed, as early networks hit their limits.

For decades, computers were too slow and there wasn't enough data. That changed with the internet, which provided millions of labelled photos, and with graphics chips designed for video games, which turned out to be very good at this kind of maths. In 2012, a network called AlexNet beat every other method at recognising objects in photos by a wide margin. After that, neural networks spread almost everywhere.

## Where you meet them

If your phone opens when it sees your face, a neural network is doing [face recognition](face-recognition). Networks suggest the next word as you type, clean up blurry photos, translate menus and help doctors read scans. Weather forecasters and astronomers use them too.

The chatbots that answer questions in full sentences are built from very large neural networks trained on huge amounts of text. They are called [large language models](large-language-models), and some have hundreds of billions of weights.

## What they can't do

A neural network only knows the patterns in its training data. If the examples are narrow or unfair, the network will be too. One trained mostly on light-skinned faces may perform worse on darker-skinned ones, a problem researchers have found in real systems.

Networks also can't easily explain their answers. You can see millions of weights, but not a neat list of reasons. That makes people careful about using them for big decisions, like medical treatment or who gets a loan. Many researchers now work on making them easier to check.
