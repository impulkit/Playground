---
id: unicode
title: How do computers show every language?
short: Unicode
subject: tech
hook: To a computer, the letter A is the number 65 and the Hindi letter क is 2,325. One shared list of numbers lets every phone on Earth read every language.
certainty: sure
surprising_fact: The list includes ancient scripts nobody speaks any more, like Egyptian hieroglyphs, so scholars can type them too.
facts:
- "Name: Unicode, run by the Unicode Consortium"
- "First version: 1991"
- "Characters in version 17.0 (2025): 159,801"
- "Scripts covered: more than 170"
- "Emoji added: from 2010"
- "Older code it replaced: ASCII, with only 128 characters"
links:
- to: binary-code
  type: deeper
  why: How can 0s and 1s mean anything?
- to: keyboards-languages
  type: home
  why: How do you type in Hindi or Tamil?
- to: emojis
  type: surprise
  why: Who decides which new emoji we get?
- to: endangered-languages
  type: deeper
  why: Why are some languages disappearing?
- to: fonts
  type: deeper
  why: Who draws the letters on your screen?
- to: scripts-india
  type: home
  why: How many scripts does India use?
- to: hieroglyphs
  type: surprise
  why: How did people finally read Egyptian hieroglyphs?
sources:
- The Unicode Consortium, The Unicode Standard and Unicode 17.0 character counts.
- Encyclopaedia Britannica, Unicode.
interactive:
  t: predict
  prompt: In the computer codes most systems still use, what number stands for a capital A?
  options:
  - t: "65"
    ok: true
  - t: "1"
  - t: "100"
  reveal: The old ASCII code, from the 1960s, gave capital A the number 65, B 66 and so on. Unicode kept those numbers, so old English text still works, and then added thousands more for other scripts.
try_this: Invent a secret number code with a friend. Give each letter of your names a number, starting wherever you like, and write a short message as numbers. Swap messages and decode them. Then try reading each other's messages using the wrong code, and you'll see what computers did before Unicode.
myth:
  myth: An emoji looks exactly the same on every phone.
  truth: Unicode decides each emoji's number and meaning, such as "grinning face". Apple, Google, Samsung and others then draw their own pictures, so the same emoji can look a little different.
---

## The short answer

Computers only store numbers, so every letter, digit and symbol has to be given a number. Unicode is one giant agreed list that gives a unique number to every character in almost every written language. The English A is 65. The Hindi क is 2,325. The Tamil அ, the Chinese 水 and the 😀 emoji each have their own.

Because every phone, laptop and website uses the same list, a message typed in Kolkata in Bengali arrives in Kansas as Bengali. Without it, the receiving computer might show nonsense or empty boxes. As of version 17.0 in 2025, Unicode holds 159,801 characters from more than 170 scripts.

## The days of gibberish

In the 1960s American engineers agreed on a code called ASCII. It had 128 slots: English letters, numbers, punctuation and some controls. That was fine for English. It had no room for é, ñ, क or 漢.

So every country and company made its own extra codes, and they clashed. The same number might mean a Russian letter on one computer and a Greek one on another. Emails turned into rows of question marks. Indian newspapers in the 1990s each used their own font codes, so a page typed for one couldn't be read with another. Japanese even has a word, mojibake, for the scrambled text this caused.

## One list for everyone

In the late 1980s, engineers at companies including Xerox and Apple started working on a single code for all languages. The first version of Unicode came out in 1991.

Underneath, each number is stored as [binary code](binary-code), the 0s and 1s of computer memory. A clever system called UTF-8 stores common English letters in one byte and others in two, three or four. It became so popular that almost every website uses it today. Each character also has an official name in capitals, such as DEVANAGARI LETTER KA, and a code written in a counting system called hexadecimal, so क appears in Unicode's charts as U+0915.

{{story:binary-code}}

## How a script gets in

The Unicode Consortium is a non-profit group based in California. Its members include tech companies, universities and some governments. Anyone can propose a new script or character, but they need evidence that people really use it, along with a careful description of how its letters behave.

That matters for small languages. Once a script is in Unicode, people can text, search and publish in it. Santali's Ol Chiki script, from eastern India, was added in 2008. In 2025 Unicode added Tolong Siki, a script created in the 1990s for the Kurukh language of Jharkhand and nearby states. For [endangered languages](endangered-languages), getting onto phones can help young people keep writing them.

Unicode also covers scripts nobody writes any more. Egyptian hieroglyphs, Brahmi, the script of Emperor Ashoka's edicts, and cuneiform from ancient Mesopotamia all have their own blocks of numbers. That lets historians type, search and share ancient texts as easily as a text message.

## Emoji and the rules of joining

[Emoji](emojis) started on Japanese mobile phones in the late 1990s. In 2010 they joined Unicode, which is why they now work across the world. New emoji are approved each year, after people send in proposals.

Numbers alone are not enough, though. Indian scripts join letters into new shapes, and Arabic letters change form depending on their neighbours. Unicode stores the plain letters in order. The font and the phone's software then work out the right shapes on screen, which is why [typing in Hindi or Tamil](keyboards-languages) looks right even though you pressed separate keys. The list keeps growing, one carefully checked character at a time.
