---
id: maths-binary-fingers
title: How can you count to 1,000 on your fingers?
short: Binary fingers
subject: numbers
hook: Most people count to 10 on their fingers, but with a trick computers use, your two hands can count all the way to 1,023.
certainty: sure
surprising_fact: Every photo, song and video on a phone is stored as long strings of just two digits, 0 and 1, the same system as finger binary.
facts:
- "Highest number on 10 fingers in binary: 1,023"
- "Highest on one hand: 31"
- "Finger values, right thumb first: 1, 2, 4, 8, 16, then 32, 64, 128, 256, 512"
- "Binary uses only two digits: 0 and 1"
- "Traditional Indian finger counting: up to 12 on one hand, using the thumb on finger joints"
links:
- to: binary-code
  type: deeper
  why: How do computers turn everything into 0s and 1s?
- to: place-value
  type: deeper
  why: Why does the 2 in 200 mean two hundred?
- to: exponents
  type: deeper
  why: Why does doubling make numbers explode so fast?
- to: computers-how
  type: surprise
  why: What actually happens inside a computer when you press a key?
- to: counting-history
  type: home
  why: How did ancient people count without numbers?
- to: puzzle-chessboard-rice
  type: surprise
  why: How can a few grains of rice break a king's treasury?
- to: chips-silicon
  type: surprise
  why: How can a chip smaller than a fingernail hold billions of switches?
sources:
- Encyclopaedia Britannica, Binary number system.
- Leibniz G. W., Explication de l'Arithmétique Binaire (1703).
- Ifrah G., The Universal History of Numbers (Wiley, 2000).
interactive:
  t: predict
  prompt: In finger binary, your right thumb is worth 1, index finger 2, middle finger 4, ring finger 8 and little finger 16. Which number do you show by raising only your thumb and ring finger?
  options:
  - t: "9"
    ok: true
  - t: "5"
  - t: "12"
  reveal: Add up the raised fingers. The thumb is 1 and the ring finger is 8, so 1 + 8 = 9. Every number from 0 to 31 has exactly one pattern on one hand.
try_this: Count from 0 to 31 on one hand in binary. Start with a closed fist for 0. Raise your thumb for 1, then lower it and raise your index finger for 2, then raise both for 3. Keep going, adding 1 each time. When you reach 31, all five fingers are up. Then try spelling your age.
myth:
  myth: Binary is a special computer language that only programmers can understand.
  truth: Binary is just a way of writing numbers using two digits instead of ten. Anyone who can add can learn it. Children often learn finger binary in a few minutes.
---

## The short answer

When you count normally on your fingers, each finger is worth 1, so ten fingers reach 10. In finger binary, each finger is worth double the one before. Your right thumb is 1, then 2, 4, 8 and 16 across the rest of that hand. Your left hand goes on: 32, 64, 128, 256 and 512.

To show a number, you raise the fingers that add up to it. Five is the thumb plus the middle finger, 1 + 4. Twenty is the middle finger plus the little finger, 4 + 16. With all ten fingers up, you get 1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 + 256 + 512 = 1,023. That's more than a hundred times further than counting the usual way.

## Up or down, 1 or 0

Each finger has only two choices: up or down. Think of up as 1 and down as 0. A number written this way, using just 1s and 0s, is called [binary](binary-code).

In our everyday system, each place is worth ten times the one to its right: ones, tens, hundreds. In binary, each place is worth two times the one to its right: ones, twos, fours, eights. Your fingers act as the places. The idea of [place value](place-value) is the same. Only the multiplying number changes, from 10 to 2.

## Doubling gets big fast

Why does doubling reach 1,023 while counting only reaches 10? Because doubling grows faster and faster. Each new finger doubles how many numbers you can show. One finger gives 2 patterns, up or down. Two give 4. Three give 8. Ten fingers give 2 × 2 × 2 ... ten times, which is 1,024 patterns, from 0 to 1,023.

This explosive doubling is behind a famous Indian legend. A wise man asked a king for one grain of rice on the first square of a chessboard, two on the second, four on the third and so on. By the 64th square, the king owed more rice than the whole world could grow, as in the [chessboard rice puzzle](puzzle-chessboard-rice).

{{story:puzzle-chessboard-rice}}

## Computers count like this

Computers use binary because their tiny switches have just two states, on and off, like a finger up or down. A computer chip contains billions of these switches.

Eight binary digits, or bits, make a byte. One byte can show 256 different patterns, enough to stand for every letter, number and symbol on a keyboard. A photo on a phone might take a few million bytes. Your fingers are a 10-bit computer, slow but always with you.

The German mathematician Gottfried Leibniz wrote about binary in detail in 1703. Much earlier, the Indian scholar Pingala, writing about poetry more than 2,000 years ago, described patterns of long and short syllables in a way that matches binary counting.

## Counting on joints

Indian traditions have their own clever finger counting. Many people count up to 12 on one hand by touching the thumb to each of the three segments on the other four fingers. With the other hand keeping track of each 12, you can reach 60. This may be linked to ancient systems based on 12 and 60, the reason an hour has 60 minutes.

People use joint counting when chanting mantras or counting days. Some merchants once used secret finger signals, hidden under a cloth, to agree prices without others seeing.

## Try some numbers

Here are some to test yourself. 7 is the thumb, index and middle fingers: 1 + 2 + 4. 10 is the index and ring fingers: 2 + 8. 31 is the whole hand up. To show 100 with both hands, raise the fingers for 64, 32 and 4.

Once you know the pattern, any number up to 1,023 has a shape. It is the same way the numbers inside a [computer](computers-how) work, one bit at a time.
