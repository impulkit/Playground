---
id: quantum-computers
title: What is a quantum computer?
short: Quantum computers
subject: tech
hook: Some quantum computers have to be kept colder than outer space, just so their tiny parts can follow the strange rules of the atomic world.
certainty: mixed
certainty_note: Quantum computers exist and work, but today's machines make many errors. Experts disagree about how soon they will solve useful problems that ordinary computers can't, with guesses ranging from a few years to decades.
surprising_fact: The chips inside many quantum computers are cooled to about a hundredth of a degree above absolute zero, colder than the space between the stars.
facts:
- Basic unit: the qubit (quantum bit)
- Key ideas: superposition, entanglement and interference
- Operating temperature (superconducting kind): about -273°C
- Shor's code-breaking method: 1994
- India's National Quantum Mission: approved 2023
links:
- to: binary-code
  type: deeper
  why: How can just 0s and 1s store a whole film?
- to: computers-how
  type: deeper
  why: What happens inside a computer when you press a key?
- to: encryption
  type: home
  why: How do secret codes keep your messages safe?
- to: temperature-scales
  type: surprise
  why: Is there a coldest possible temperature?
- to: supercomputers
  type: home
  why: What can a supercomputer do?
- to: einstein
  type: surprise
  why: What did Einstein call "spooky action at a distance"?
- to: future-teleport
  type: surprise
  why: Can quantum physics teleport anything?
sources:
- IBM, What is quantum computing?
- Department of Science and Technology, Government of India, National Quantum Mission.
interactive:
  t: predict
  prompt: Will quantum computers replace laptops and phones?
  options:
  - t: No, they are only better at certain kinds of problems
    ok: true
  - t: Yes, every phone will have one within a few years
  - t: Yes, because they are faster at everything
  reveal: Quantum computers are good at special tasks, such as simulating molecules or certain kinds of code-breaking. For email, games and videos, ordinary chips are faster and far cheaper. They are likely to stay in labs and data centres.
try_this: Spin a coin on a table. While it spins, is it heads or tails? Neither yet, until it falls. That's a rough picture of a qubit in superposition. Now try spinning two coins at once and see that they land independently, unlike entangled qubits, whose results are linked.
myth:
  myth: A quantum computer works by trying every possible answer at the same time and picking the right one.
  truth: It's cleverer and harder than that. A quantum computer arranges its qubits so the wrong answers cancel each other out and the right ones grow stronger, a bit like waves. Only some problems can be set up this way.
---

## The short answer

An ordinary computer stores information as bits, each one either 0 or 1, as in [binary code](binary-code). A quantum computer uses qubits. Thanks to the rules of quantum physics, which govern atoms and tiny particles, a qubit can be in a blend of 0 and 1 at once until it is measured. This blend is called superposition.

Qubits can also be linked, so that measuring one tells you something about another, even far away. This is called entanglement. By carefully steering many qubits together, a quantum computer can solve some special problems far faster than any ordinary machine. For most everyday jobs, though, it would be no better than a laptop.

## Bits, qubits and waves

A normal bit is like a [light switch](light-switch): on or off. A qubit is more like a spinning coin that hasn't landed. While it spins, it carries a mix of heads and tails. When you look, it lands one way or the other.

The real power comes from interference. Quantum states behave a bit like waves on a pond. Where two crests meet, they add up. Where a crest meets a dip, they cancel. A quantum program is designed so that paths leading to wrong answers cancel and paths leading to the right answer grow. When you finally measure, the right answer is the likely one.

{{story:binary-code}}

## Colder than space

Qubits are fragile. A little heat, a stray vibration or a passing radio wave can knock them out of superposition, and the calculation falls apart. This loss is called decoherence.

So the most common kind, made from superconducting circuits, sits inside a tall gold-coloured fridge that looks like a chandelier. It cools the chip to about a hundredth of a degree above absolute zero, the [coldest possible temperature](temperature-scales). That's colder than outer space, which is about 2.7 degrees above absolute zero. Other designs use trapped atoms held by [lasers](lasers), or particles of light.

## What they could do

**Simulating nature.** Molecules follow quantum rules, so a quantum computer could model them naturally. That might help design [new medicines](medicine-how), fertilisers and better [batteries](batteries).

**[Breaking codes](cryptography-maths).** In 1994 the mathematician Peter Shor showed that a big enough quantum computer could crack some of the codes that protect online banking and messages. Today's machines are far too small to do this. But governments are already switching to new kinds of [encryption](encryption) designed to resist quantum attack.

**Searching and optimising.** Some problems, like finding the best routes for thousands of delivery trucks, might be helped, though by how much is still argued over.

## Spooky links

[Albert Einstein](einstein) was uneasy about entanglement. He called it "spooky action at a distance", because measuring one particle seemed to instantly affect another far away. Experiments since then have shown the effect is real. The 2022 Nobel Prize in Physics went to three scientists for experiments proving it. Entanglement can't be used to send messages faster than light, but quantum computers rely on it.

## Where things stand

In 2019 Google said its 53-qubit chip, Sycamore, did a test calculation in about 200 seconds that would take the best supercomputer thousands of years. IBM argued a [supercomputer](supercomputers) could do it in days. The task itself was useless, chosen only to show the machine's power.

Today's machines have hundreds or a few thousand qubits, but they make too many errors for most real work. Researchers are building error correction, which uses many physical qubits to make one reliable one. In 2023 India approved a National Quantum Mission of about ₹6,000 crore to build its own machines. Companies and labs in the United States, China and Europe are racing too. Nobody knows whether the winning qubit will be a cold circuit, a trapped atom or something not yet invented.
