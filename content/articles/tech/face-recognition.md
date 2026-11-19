---
id: face-recognition
title: How does a phone recognise your face?
short: Face recognition
subject: tech
hook: Some phones fire more than 30,000 invisible dots of light at your face, measure its shape in 3D, and decide in a blink whether it's really you.
certainty: mixed
certainty_note: How phones recognise faces is well understood. Experts disagree about how accurate face recognition is for different groups of people, and whether police and governments should use it in public places.
surprising_fact: Apple says the chance of a random stranger opening an iPhone with Face ID is about one in a million, but the odds are much higher for identical twins and close siblings.
facts:
- Face ID launched: 2017, on the iPhone X
- Infrared dots projected: more than 30,000
- Stranger match chance (Apple's figure): about 1 in 1,000,000
- Early research: 1960s, by Woody Bledsoe and colleagues
- India's airport face check-in: DigiYatra, from December 2022
links:
- to: biometrics
  type: deeper
  why: How can your body become a password?
- to: fingerprint-sensors
  type: deeper
  why: How does a phone read your fingerprint?
- to: twins
  type: surprise
  why: Are identical twins really identical?
- to: cameras-phones
  type: deeper
  why: How does a tiny phone camera take sharp photos?
- to: privacy
  type: evidence
  why: Who should be allowed to track your face?
- to: ai-what
  type: deeper
  why: How do computers learn to recognise things?
- to: airports
  type: surprise
  why: How does a big airport keep running smoothly?
- to: eyes-see
  type: surprise
  why: How do your own eyes recognise a face?
sources:
- Apple, About Face ID advanced technology (Apple Support).
- U.S. National Institute of Standards and Technology (NIST), Face Recognition Vendor Test, Part 3, Demographic Effects (2019).
- Ministry of Civil Aviation, Government of India, DigiYatra.
interactive:
  t: predict
  prompt: Some cheaper phones recognise faces using only the normal front camera. What is their biggest weakness?
  options:
  - t: They can sometimes be fooled by a photo of the owner
    ok: true
  - t: They only work in the dark
  - t: They can't tell a face from a hand
  reveal: A flat camera sees only a flat image, so a good photo or video might trick it. Phones that measure depth with infrared light check the real 3D shape of a face, which a printed photo does not have.
try_this: Look at photos of family members and try to describe what makes each face recognisable using only measurements, such as "eyes far apart" or "long chin". Swap descriptions with a friend and see if they can match each description to the right photo. That's roughly what early face recognition programs tried.
myth:
  myth: Face recognition works equally well on everyone.
  truth: A large 2019 study by the US standards agency NIST found that many systems made more mistakes with some groups, depending on age, sex and skin colour. The best systems have improved, but accuracy still depends on how they were trained and used.
---

## The short answer

When you look at a phone with face recognition, it takes a picture of your face. It turns that picture into a set of numbers that describe its shape, such as the distances between your eyes, nose, mouth and chin. It compares those numbers with the ones it saved when you set it up. If they match closely enough, the phone opens.

The best systems use infrared light, which our eyes can't see, to measure your face in 3D. A type of [artificial intelligence](ai-what) does the matching, and it keeps learning small changes, like a new haircut or glasses.

## Dots in the dark

Apple's Face ID, launched in 2017, has a tiny projector that sprays more than 30,000 invisible [infrared](?infrared) dots onto your face. An infrared camera photographs the pattern. Where your nose sticks out, the dots bunch differently than on your cheeks. From that, the phone builds a depth map, a 3D model of your face.

Because it uses its own invisible light, it works in a dark room. And because it checks depth, a flat photo won't fool it. Many systems also check that your eyes are open and looking at the screen, so nobody can open your phone while you sleep.

## Turning a face into numbers

The phone doesn't keep a photo of you to compare. It keeps a mathematical summary, a long list of numbers sometimes called a faceprint. A program trained on millions of faces has learned which features best tell people apart.

When you look at the phone again, it makes a new list and measures how close the two are. Close enough, and you're in. The data is kept in a locked-off part of the phone's chip, not sent to the company.

{{story:twins}}

## Twins, siblings and children

Apple says Face ID has about a one-in-a-million chance of opening for a random person. But for [identical twins](twins), close siblings and children under 13, whose faces are still changing, the odds of a mix-up are higher. For those people, a passcode is safer.

Cheaper phones often use only the ordinary front camera. They are handy but easier to fool, which is why banking apps on such phones may still ask for a fingerprint or PIN.

## Beyond phones

Face recognition is now used at airports, offices and stadiums. In India, [the DigiYatra system](airport-security), launched at Delhi, Bengaluru and Varanasi airports in December 2022, lets passengers walk through gates by showing their face instead of a boarding pass. US airports use face checks for some international travellers.

The idea goes back to the 1960s, when the American researcher Woody Bledsoe and his team measured features on photos by hand, then had a computer compare them.

## The big debate

Police in some places use face recognition to search crowds or check photos of suspects. Supporters say it helps find missing children and criminals. Critics worry about mass tracking of ordinary people and wrong matches. In the USA, several people have been wrongly arrested after a face match, and some cities, including [San Francisco](san-francisco) in 2019, banned their police from using it.

A 2019 study by NIST found that many systems made more mistakes with some groups of people than others. Countries are still deciding what rules should protect [privacy](privacy) while allowing useful uses.
