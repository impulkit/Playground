---
id: encryption
title: How does encryption keep secrets?
short: Encryption
subject: tech
hook: Every time you see a little padlock next to a web address, your messages are being scrambled into nonsense that would take ordinary computers far longer than the age of the universe to crack.
certainty: sure
surprising_fact: Some of today's encryption relies on a simple fact about numbers. Multiplying two huge prime numbers is easy, but working backwards to find them can take longer than a lifetime.
facts:
- Caesar cipher: used by Julius Caesar about 2,000 years ago
- Enigma broken: first by Polish mathematicians, 1932
- Public-key idea published: 1976
- Possible 128-bit keys: about 340 followed by 36 zeros
- Padlock in your browser: means the connection is encrypted (HTTPS)
links:
- to: cipher-codes
  type: deeper
  why: How did spies send secret messages in history?
- to: cryptography-maths
  type: deeper
  why: What maths keeps codes unbreakable?
- to: alan-turing
  type: deeper
  why: How did Alan Turing help crack Enigma?
- to: prime-numbers
  type: surprise
  why: Why are prime numbers so special?
- to: passwords
  type: home
  why: What makes a password strong?
- to: quantum-computers
  type: surprise
  why: Could a quantum computer crack every code?
- to: privacy
  type: deeper
  why: Who should be allowed to read your messages?
- to: code-talkers
  type: surprise
  why: How did a spoken language become an unbreakable code?
sources:
- U.S. National Institute of Standards and Technology (NIST), Advanced Encryption Standard (FIPS 197) and post-quantum cryptography standards (2024).
- Simon Singh, The Code Book (1999).
- Bletchley Park Trust, The Enigma machine and codebreaking history.
interactive:
  t: predict
  prompt: In a Caesar cipher each letter shifts three places along the alphabet, so A becomes D. What does the code word FDW mean?
  options:
  - t: CAT
    ok: true
  - t: DOG
  - t: HAT
  reveal: Shift each letter back three places. F goes to C, D goes to A, and W goes to T. With only 25 possible shifts, anyone can crack a Caesar cipher in minutes, which is why modern codes use vastly more possibilities.
try_this: Make a cipher wheel. Cut two paper circles, one a little smaller than the other, and write the alphabet around the edge of each. Pin them together through the centre with a split pin, turn the inner wheel to choose a shift, and send a secret message to a friend who knows the shift.
myth:
  myth: Encrypted means impossible to read, for ever.
  truth: Strong encryption is extremely hard to break, but weak keys, stolen passwords or mistakes in software can let people in. Codes also age, as computers get faster, so experts keep replacing old methods with stronger ones.
---

## The short answer

Encryption turns a readable message into scrambled nonsense, so only someone with the right key can turn it back. The scrambling follows a set of maths rules. The key is a secret number that tells the rules exactly how to scramble and unscramble.

Your phone uses encryption all the time: when you send a chat message, pay with a phone, or visit a website with a padlock in the address bar. Anyone who intercepts the data along the way sees only gibberish. Without the key, breaking modern encryption by guessing would take today's computers far longer than the universe has existed.

## Shifting letters

People have hidden messages for thousands of years. Julius Caesar is said to have used a simple [cipher](?cipher): move every letter three places along [the alphabet](words-alphabet-order), so A becomes D and B becomes E. "CAT" becomes "FDW".

The weakness is that there are only 25 possible shifts. An enemy can try them all in minutes. Even trickier ciphers can be cracked by counting letters, since E is the most common letter in English. The Arab scholar al-Kindi described this trick in the 800s, and it has cracked many of history's [secret codes](cipher-codes) since.

## The Enigma machine

In the Second World War, the German military used Enigma, a typewriter-like machine with spinning wheels that changed the code with every key pressed. The settings changed every day, giving an astronomical number of combinations.

Polish mathematicians, led by Marian Rejewski, first broke Enigma in 1932. They shared their work with Britain just before the war. At Bletchley Park, [Alan Turing](alan-turing) and thousands of others built machines to speed up the search. Their work helped the Allies read many German messages.

{{story:prime-numbers}}

## Keys you can give away

Old ciphers had one big problem. Both people needed the same secret key, and handing it over safely was hard. In 1976, Whitfield Diffie and Martin Hellman published a way around it, and soon after, a method called RSA put the idea to work.

It works like an open padlock. You hand out copies of your padlock to anyone. They can snap it shut on a box with a message inside. But only you have the key that opens it. In computers, the "padlock" is a public key and the "key" is a private one, linked by maths involving huge [prime numbers](prime-numbers).

## How big is big?

Modern methods such as AES use keys with 128 or 256 [binary](binary-code) digits. A 128-bit key has about 340 followed by 36 zeros possible values. A computer testing a billion billion keys every second would need over ten trillion years to try them all. That is hundreds of times the age of the universe.

So attackers rarely try. Instead they steal [passwords](passwords), trick people, or look for mistakes in software.

## Locked for whom?

Many messaging apps now use end-to-end encryption, which means even the company running the app cannot read your messages. Supporters say this protects ordinary people, journalists and businesses. Some police and governments worry it also hides criminals, and want a way to read messages with a court's permission. Security experts warn that any secret back door could be found by others too. The debate continues around the world.

Looking ahead, powerful quantum computers might one day break some of today's public-key methods. In 2024 the US standards agency NIST published new methods designed to resist them.
