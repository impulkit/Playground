---
id: keyboards-languages
title: How do you type in Hindi or Tamil?
short: Indian keyboards
subject: tech
hook: On India's standard keyboard layout, the key that types क in Hindi types க in Tamil and ক in Bengali.
certainty: sure
surprising_fact: Hindi has more letters and vowel signs than an English keyboard has keys, yet most people type it on the same keyboard, often by spelling words out in English letters.
facts:
- "Standard Indian layout: InScript, set by the Government of India"
- "Scripts it covers: Devanagari, Bengali, Gurmukhi, Gujarati, Odia, Tamil, Telugu, Kannada, Malayalam and more"
- "Tamil Nadu's own standard: Tamil99, from 1999"
- "Common phone method: type the sounds in English letters and let the phone convert them"
- "Behind the scenes: Unicode gives every letter a number"
links:
- to: unicode
  type: deeper
  why: How can one computer show every language?
- to: scripts-india
  type: home
  why: Why does India have so many scripts?
- to: typewriters-keyboards
  type: deeper
  why: Why are English keyboard letters in such a strange order?
- to: hindi-language
  type: home
  why: Where did Hindi come from?
- to: tamil-ancient
  type: surprise
  why: How old is Tamil?
- to: translation-apps
  type: surprise
  why: How does a phone translate what you say?
- to: languages-india
  type: deeper
  why: How many languages do Indians speak?
sources:
- Ministry of Electronics and Information Technology, Government of India, Technology Development for Indian Languages (TDIL).
- The Unicode Consortium, The Unicode Standard, South Asian scripts.
interactive:
  t: predict
  prompt: On the InScript keyboard, you press the key that types क (ka) in Hindi. What does the same key type if you switch to Tamil?
  options:
  - t: க, the Tamil letter for ka
    ok: true
  - t: A random Tamil letter
  - t: Nothing, because Tamil has its own keyboard shape
  reveal: Most Indian scripts grew from the same ancient Brahmi script and keep their letters in the same order. InScript uses that, so each key types the matching sound in every script. Learn it once and you can type nine or more scripts.
try_this: Write your name in an Indian script you know, then count how many separate marks you used, including vowel signs and dots. Now count the letters in your name in English. Ask yourself how a keyboard with only 26 letter keys could handle both.
myth:
  myth: You need a special keyboard to type in Indian languages.
  truth: Any ordinary phone or computer can do it. The letters are handled by software, so you switch languages in the settings, not by buying new keys.
---

## The short answer

You use the same keyboard, but tell the computer to switch languages. Then software turns your key presses into Hindi, Tamil or any of India's other scripts.

There are two main ways. One is a layout called InScript, where each key is given an Indian letter. The other, far more popular on phones, is phonetic typing. You type "namaste" in English letters and the phone offers नमस्ते. Many phones also let you speak and watch the words appear. Under all of these sits a system called [Unicode](unicode), which gives every letter of every script its own number so it looks right on any screen.

## Why Indian scripts are tricky

English letters sit in a row, one after another. Most [Indian scripts](scripts-india) work differently. Each consonant carries a built-in "a" sound, and you change the vowel by adding a small sign, called a matra, above, below, before or after it. In Hindi, कि (ki) puts its vowel sign before the letter, even though you hear it after.

Some consonants also join into one shape. क and ष together make क्ष, which looks nothing like either. A keyboard can't have a key for every combination. So the computer has to work out the joining after you type, using rules built into the font and the system.

{{story:languages-india}}

## One layout for many scripts

In the 1980s the Government of India designed a standard layout called InScript. Vowels sit on the left side of the keyboard and consonants on the right, grouped the way children learn them in school: क, ख, ग, घ and so on.

The clever part is that Hindi, Bengali, Gujarati, Tamil, Telugu and most other Indian scripts come from the same ancient parent and list their sounds in the same order. So InScript gives the same key to the same sound in every script. Tamil Nadu later made its own layout, Tamil99, which suits Tamil's smaller set of letters and lets you type common sounds with fewer key presses. Phones and computers also offer layouts for Ol Chiki, used for Santali, and for the Perso-Arabic script used for Urdu and Kashmiri.

## Typing by sound

Most people never learn InScript. On a phone, they type Hindi words in English letters, and the keyboard guesses the Hindi. "Bharat" becomes भारत. The guess improves as it learns which words you use.

Plenty of people skip the switch entirely and send messages in [Hindi](hindi-language) written in English letters, such as "kal milte hain". It is quick and needs no settings, though it can be hard to read for anyone who doesn't already know the language.

Voice typing has grown quickly too. Many people who never learned to type, or who find small keys fiddly, just speak into their phone in Hindi, Tamil, Bengali or Marathi and watch the words appear. A government project called Bhashini, started in 2022, is building free speech and translation tools for Indian languages, so that more people can use the internet in their own.

## From typewriters to fonts

Before computers, offices used Hindi typewriters with their own odd layouts, adapted from the English [typewriter](typewriters-keyboards). Some government typing tests still use that old layout, so a few people learned it and never stopped.

Early computers made a mess of Indian languages. In the 1990s each newspaper or software company used its own secret code for letters. Text typed in one font turned into gibberish in another. Unicode fixed that by agreeing on one number for each letter. Today a Tamil message typed in Chennai shows up correctly on a phone in Chicago, and the person reading it never thinks about the numbers underneath.
