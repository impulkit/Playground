---
id: cryptography-maths
title: How does maths keep messages secret?
short: Secret maths
subject: numbers
hook: Every time someone pays with UPI, a puzzle about prime numbers stands guard. Nobody knows a fast way to solve it.
certainty: sure
surprising_fact: Multiplying two huge prime numbers takes a computer a split second, but working backwards to find them from the answer could take ordinary computers longer than the age of the universe.
facts:
- Cryptography: the science of secret writing
- Famous early cipher: Julius Caesar's letter shift
- Code-breaking trick: frequency analysis, described by al-Kindi in the 800s
- Public-key cryptography: published in 1976–1977
- RSA relies on: how hard it is to split big numbers into primes
links:
- to: prime-numbers
  type: deeper
  why: Why are prime numbers so stubborn?
- to: alan-turing
  type: surprise
  why: How did a mathematician help shorten a war?
- to: cipher-codes
  type: home
  why: Can you make a cipher your friends can't crack?
- to: upi-payments
  type: surprise
  why: How does money fly from one phone to another?
- to: passwords
  type: deeper
  why: What makes a password hard to guess?
- to: quantum-computers
  type: deeper
  why: Could a new kind of computer break today's codes?
- to: blockchain
  type: deeper
  why: How does maths keep a digital ledger honest?
sources:
- Simon Singh, The Code Book (1999).
- Encyclopaedia Britannica, entries on cryptology and the RSA encryption.
- Bletchley Park Trust, history of codebreaking in the Second World War.
interactive:
  t: predict
  prompt: In English writing, which letter turns up most often? Code-breakers use this to crack simple ciphers.
  options:
  - t: E
    ok: true
  - t: A
  - t: S
  reveal: E is the most common letter in ordinary English text. If a secret message swaps every letter for another, the symbol that appears most often probably stands for E, and the rest of the cipher starts to fall apart.
try_this: Write the alphabet in a row, then write it again underneath, shifted three places so A sits over D. Use it to turn a short message into code and give it to a friend with the hint "shift 3". Then try cracking a friend's longer message by counting which letter appears most.
myth:
  myth: A secret code is safe as long as nobody knows how it works.
  truth: Modern cryptography assumes the enemy knows the method. Only the key is kept secret. Codes whose safety depends on hiding the method tend to get broken.
---

## The short answer

Cryptography is the science of scrambling a message so only the right person can read it. The scrambling method is called a [cipher](?cipher), and the secret setting that opens it is called the key.

For most of history, ciphers were clever word games. Today they are built from maths, especially [prime numbers](prime-numbers). Your phone uses this maths every time you send a message, log in to a website or make a payment, so that anyone listening in sees only nonsense.

## Caesar's shift and how it broke

The Roman writer Suetonius tells us that Julius Caesar wrote secret letters by shifting each letter three places along the alphabet. A became D, B became E, and so on. It fooled people who weren't expecting it.

But shift ciphers, and even ciphers that swap every letter for a random symbol, have a weakness. In any language, some letters appear far more than others. Around the 800s CE, the Arab scholar al-Kindi described how to count the symbols in a secret message and match the most common ones to the most common letters. This method, called frequency analysis, cracked simple ciphers for centuries.

## Machines and a war

In the [Second World War](world-war-two), German forces used the Enigma machine. It looked like a typewriter, with spinning wheels inside that changed the cipher with every key pressed. The number of possible settings was so vast that guessing was hopeless.

At Bletchley Park in England, thousands of people worked to break it. Among them was the mathematician [Alan Turing](alan-turing), who helped design machines called bombes to test settings quickly. They built on earlier work by Polish mathematicians. Historians believe the decoded messages helped the Allies win sooner.

{{story:alan-turing}}

## The padlock trick

Old ciphers had one big problem. Both people needed the same secret key, so they had to meet or send it somehow without anyone stealing it.

In 1976 and 1977, researchers in the USA published a way around this, called public-key cryptography. Think of a padlock. You hand out open padlocks to anyone who asks. They snap your padlock shut on a box, but only you have the key to open it. Anyone can lock the box, but only one person can open it.

The best-known version, RSA, is named after Ron Rivest, Adi Shamir and Leonard Adleman. Its padlock is a giant number made by multiplying two secret primes. Multiplying is easy. Splitting the giant number back into its two primes is extremely hard if the primes are hundreds of digits long.

## Guarding your phone

That one-way trick protects online shopping, [email](email) and payments, including India's [UPI system](upi-payments). The small padlock beside a website's address in your browser means your connection is being scrambled. Strong [passwords](passwords) add another lock on top.

Mathematicians keep checking whether anyone has found a shortcut. One worry is the [quantum computer](quantum-computers), which in theory could factor huge numbers fast. Cryptographers are already designing new ciphers based on different maths problems, so they are ready before such machines get powerful enough.

## Hide the key, not the method

In 1883, a Dutch-born teacher named Auguste Kerckhoffs wrote down a rule that cryptographers still follow. A good cipher should stay safe even if the enemy knows exactly how it works. Only the key needs to be secret. That is why the maths behind RSA is printed in textbooks, and anyone can check it for weaknesses.
