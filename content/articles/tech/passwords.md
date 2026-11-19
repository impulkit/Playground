---
id: passwords
title: What makes a good password?
short: Passwords
subject: tech
hook: A password made of four random ordinary words can be far harder to crack than a short jumble like P@55w0rd.
certainty: sure
surprising_fact: For years, official advice said to change passwords every few months. US experts now advise against forced changes, because people just make tiny, guessable tweaks.
facts:
- Most important feature: length
- Possible 3-digit lock codes: 1,000
- Possible 8-letter lowercase passwords: about 200 billion
- Early computer passwords: MIT, early 1960s
- Extra protection: two-step checks, such as a one-time code
links:
- to: online-safety
  type: home
  why: What else keeps you safe online?
- to: cipher-codes
  type: deeper
  why: How do secret codes work?
- to: big-numbers
  type: deeper
  why: How big is a trillion, really?
- to: upi-payments
  type: home
  why: How does paying by phone work?
- to: ancient-rome
  type: surprise
  why: How did Roman soldiers keep their secrets?
- to: probability
  type: surprise
  why: How do you work out the chance of something happening?
- to: locks-keys
  type: surprise
  why: How does a lock know the right key?
- to: biometrics
  type: deeper
  why: Can your face or fingerprint replace a password?
sources:
- US National Institute of Standards and Technology (NIST), Digital Identity Guidelines, SP 800-63B.
- UK National Cyber Security Centre, Three random words.
interactive:
  t: predict
  prompt: Which of these passwords would take a computer longest to guess?
  options:
  - t: purple tiger river lantern
    ok: true
  - t: P@ss1!
  - t: Rahul2014
  reveal: The four random words are by far the longest, which multiplies the number of possibilities enormously. "P@ss1!" is short, and "Rahul2014" uses a name and a year, which guessing programs try early. Length and randomness beat clever symbols.
try_this: Take a 3-digit number lock, or draw one on paper. There are 1,000 possible codes, from 000 to 999. Time how long it takes you to try 20 codes. Then work out how long trying all 1,000 would take you. Now think what happens with 4 digits (10,000 codes) and why each extra digit helps so much.
myth:
  myth: A short password full of symbols, like P@55w0rd, is very strong.
  truth: Guessing programs know common swaps like @ for a and 0 for o, and short passwords have fewer possibilities to try. A long password or a string of random words is usually much stronger and easier to remember.
---

## The short answer

A good password is long, hard to guess and used for only one account.

Length matters most. Every extra character multiplies the number of possible passwords a computer would have to try. A string of three or four random, unrelated words, like "lantern purple river tiger", is long and surprisingly easy to remember. Avoid names, birthdays, favourite teams and common words like "password", because guessing programs try those first.

Never reuse the same password everywhere. If one website is hacked, criminals try the stolen password on other sites. And never share your password or a one-time code with anyone except a trusted adult.

## The maths of guessing

Attackers often use computers to try huge numbers of guesses. So the question is: how many possibilities are there?

A 3-digit bicycle lock has 1,000 combinations. A password of 8 lowercase letters has 26 multiplied by itself 8 times, about 200 billion. That sounds like a lot, but a powerful computer can try that many quickly if it has a stolen copy of scrambled passwords. Pick four random words from a list of about 7,000, and the possibilities jump to thousands of trillions, more than 10,000 times as many. You can explore numbers like that in [big numbers](big-numbers).

## Why "P@55w0rd" is weak

Many websites used to demand a capital letter, a number and a symbol. People responded predictably: a capital at the start, a number at the end, and @ for a, 0 for o. Guessing programs learned these tricks and try them early.

In 2017, the US National Institute of Standards and Technology rewrote its advice. It now recommends long passwords, checking new passwords against lists of ones already stolen, and not forcing people to change them every few months. Britain's National Cyber Security Centre recommends using three random words.

{{story:cipher-codes}}

## Watchwords and early computers

Passwords are ancient. Roman soldiers used watchwords, passed around the camp each night on a wooden tablet, according to the Greek historian Polybius. A guard would challenge anyone approaching and let them pass only if they knew the word.

Computer passwords began in the early 1960s at the Massachusetts Institute of Technology, where many people shared one big computer and each needed a private space. Websites don't usually store your actual password. They store a scrambled version made with maths, a relative of the [secret codes](cipher-codes) used for centuries.

## More than a password

Even a strong password can be stolen, for example by a fake website that tricks you into typing it. So many services add a second check. After your password, you might need to enter a one-time code sent to your phone, or approve the login on another device.

In India, one-time codes, or OTPs, protect bank logins and [UPI payments](upi-payments). Criminals sometimes phone people pretending to be from a bank and ask for the OTP. A real bank will never ask for it.

## Remembering them all

Most people have dozens of accounts, and nobody can remember dozens of long, different passwords. Password managers help. These apps create strong passwords, store them in an encrypted vault and fill them in for you, so you only need to remember one master password.

Some phones and computers now use passkeys instead, which let you log in with your [fingerprint](fingerprint-sensors), face or a PIN on your own device, without typing a password at all. Whatever you use, the same rule applies, and it's one of the rules in [staying safe online](online-safety): keep it long, keep it unique, keep it to yourself.
