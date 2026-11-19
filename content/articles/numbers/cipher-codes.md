---
id: cipher-codes
title: How do secret codes work?
short: Secret codes
subject: numbers
hook: Julius Caesar sent secret messages by shifting every letter. Try cracking one.
icon: lock
certainty: sure
surprising_fact: In World War II, cracking the German ‘Enigma’ code helped shorten the war. The work was top secret for decades.
facts:
- Caesar's shift: 3 letters, according to the Roman writer Suetonius
- Possible Caesar shifts in English: 25
- Codebreaking by letter counting: described by al-Kindi, Baghdad, 9th century
- Enigma first broken: by Polish mathematicians, 1932
- Most common letter in English: E
links:
- to: binary-code
  type: deeper
  why: Everything becomes numbers first
- to: internet-how
  type: deeper
  why: Keeping internet messages safe
- to: writing-began
  type: surprise
  why: A script nobody can read yet
- to: prime-numbers
  type: deeper
  why: Why are prime numbers so special?
- to: code-talkers
  type: surprise
  why: How did a language become an unbreakable code?
- to: alan-turing
  type: home
  why: Who was the codebreaker who imagined the computer?
- to: passwords
  type: surprise
  why: What makes a password hard to guess?
sources:
- Singh S. (1999) The Code Book. Fourth Estate.
- Suetonius, Life of Julius Caesar, 56.
interactive:
  t: experiment
  kind: cipher
quiz:
  t: predict
  prompt: "A message reads KHOOR. Each letter was shifted 3 places forward in the alphabet. What does it say?"
  options:
  - t: HELLO
    ok: true
  - t: HAPPY
  - t: JELLY
  reveal: Shift each letter 3 places back. K becomes H, H becomes E, O becomes L, and R becomes O. KHOOR is HELLO.
try_this: Write the alphabet on two strips of paper. Lay them one above the other, then slide the bottom strip three letters to the left. Now each letter on top has a secret partner below it. Send a friend a message, and tell them only the shift.
myth:
  myth: A code and a cipher are the same thing.
  truth: A code swaps whole words or ideas for other words or symbols, usually using a codebook. A cipher scrambles a message letter by letter, following a rule and a key.
---

## The short answer

A cipher is a rule for scrambling a message. Only someone who knows the rule, the key, can unscramble it.

Caesar's cipher shifts every letter by the same amount. With a shift of three, A becomes D and B becomes E. It's easy to crack today, because there are only 25 possible shifts. You could try them all before lunch.

Your phone uses much stronger codes, based on maths so hard that even powerful computers can't crack them quickly. The idea is the same as Caesar's: a rule, a key and a message that looks like nonsense to everyone else.

## Counting letters to crack codes

For centuries, people swapped each letter for a different symbol, in no particular order. That gives a huge number of possible keys, far too many to try one by one. It seemed unbreakable.

Then, in the 9th century, a scholar in Baghdad named al-Kindi described a trick. In any language, some letters turn up far more often than others. In English, E is the most common, followed by T and A. So if one symbol fills a secret message, it is probably E. Count the symbols, match them to the usual letter frequencies, and the message slowly cracks open. This method, called frequency analysis, broke most secret letters for hundreds of years.

## The Enigma machine

In World War II, the German forces used a machine called Enigma. Its spinning wheels changed the cipher after every single letter typed, and the settings changed every day.

Polish mathematicians broke an early version in 1932 and shared their work with Britain just before the war began. At Bletchley Park in England, thousands of people worked in secret, including the mathematician [Alan Turing](alan-turing). They built electric machines to test settings quickly. Their work stayed secret until the 1970s.

{{story:alan-turing}}

## Codes made of words

Some secret messages are codes rather than ciphers. In World War II, the US Marines used [Navajo speakers](navajo-nation) who sent messages in their own language, with special words for military terms. Enemy listeners could not understand a word.

The difference matters. A cipher can be cracked by maths alone. A code, built on a language or a secret codebook, needs someone who knows the words.

## Hiding the message itself

Another trick is to hide that a message exists at all. This is called steganography, from Greek words meaning "covered writing". The Greek historian Herodotus told of a messenger whose head was shaved, tattooed with a secret note, and sent off once his hair had grown back.

Children have long used invisible ink made from lemon juice, which shows up brown when an adult gently warms the paper. Today, computers can hide words inside the tiny colour details of a photo, where no eye would notice. A clever spy might use both: scramble the message, then hide it.

## Locks made of prime numbers

When you see a padlock symbol in a web browser, your messages are being enciphered. Many systems rely on a neat fact about [prime numbers](prime-numbers). Multiplying two huge primes together is quick. Working backwards, to find which two primes made the answer, would take ordinary computers an extremely long time.

So your phone can share a public lock that anyone may use, while keeping the key private. Underneath, every message is a long string of 1s and 0s, as explained in [binary](binary-code), being scrambled by arithmetic. Caesar would recognise the idea. He would not recognise the numbers, which can run to hundreds of digits.
