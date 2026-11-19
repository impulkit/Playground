---
id: voice-assistants
title: How does a voice assistant understand you?
short: Voice assistants
subject: tech
hook: When you say "Hey" to a smart speaker, a tiny chip has been listening for that one word all day, ignoring everything else you said.
certainty: sure
surprising_fact: In 1952 a machine at Bell Labs in the USA called Audrey could recognise spoken digits from zero to nine, but mostly only from the voice it had been tuned to.
facts:
- Early speech machine: Audrey, Bell Labs, 1952
- IBM Shoebox: understood 16 spoken words, 1962
- Siri launched: 2011, on the iPhone 4S
- Main steps: wake word, speech to text, meaning, action, spoken reply
- Hard parts: accents, background noise, mixing languages
links:
- to: sound-travel
  type: deeper
  why: How does sound travel through the air?
- to: ears-hear
  type: surprise
  why: How do your ears turn sound into signals?
- to: ai-what
  type: deeper
  why: What is artificial intelligence, really?
- to: chatbots
  type: deeper
  why: How do chatbots write their answers?
- to: accessibility-tech
  type: surprise
  why: How does technology help people with disabilities?
- to: privacy
  type: evidence
  why: Who gets to hear what you say at home?
- to: languages-india
  type: surprise
  why: How many languages are spoken in India?
- to: translation-apps
  type: deeper
  why: How do apps translate from one language to another?
sources:
- Encyclopaedia Britannica, Speech recognition.
- IBM Archives, IBM Shoebox.
- Nokia Bell Labs, history of speech research.
interactive:
  t: predict
  prompt: Before a smart speaker hears its wake word, where is it sending what it hears?
  options:
  - t: Nowhere. It checks short bits of sound on the device and throws them away
    ok: true
  - t: To the company's computers, every second of every day
  - t: Straight to your parents' phone
  reveal: The device keeps a few seconds of sound in a tiny memory and checks it for the wake word. Only after it hears the word does it usually start sending your request to the company's computers. That is why its light changes when it wakes.
try_this: Say the same sentence to a voice assistant or a phone's voice typing in three ways, quickly, slowly and with a strong accent or a mix of Hindi and English. Write down what it typed each time. Look at which words it got wrong and think about why.
myth:
  myth: Voice assistants understand language the way people do.
  truth: They match sound patterns to likely words, then match words to likely requests, using statistics learned from huge amounts of examples. They can be very good at this, but they don't share our experience of the world, which is why odd mistakes happen.
---

## The short answer

A voice assistant, like the ones in smart speakers and phones, understands you in a few quick steps. First it listens for its wake word. Then it records what you say and usually sends the sound to powerful computers far away. Those computers turn the sound into text, work out what you want, and send back an answer, which the device speaks aloud.

All of this takes about a second or two. Each step uses a type of [artificial intelligence](ai-what) trained on huge amounts of recorded speech and written text.

## Step one: the wake word

The device's [microphones](microphones) are always listening, but a small chip inside only checks for one thing: the wake word, such as "Alexa" or "Hey Siri". It keeps a few seconds of sound in a short memory loop, checks it, and lets it vanish.

When the chip thinks it has heard the word, the device wakes up, its light changes, and it starts paying attention. Sometimes it gets it wrong and wakes up when someone on TV says something that sounds similar.

## Step two: from sound to words

[Your voice](voice) is a pattern of vibrations in the air, called sound waves. A microphone turns them into numbers. The computer slices those numbers into tiny pieces, about a hundredth of a second each, and studies the mix of high and low pitches in each slice.

A speech model, trained on thousands of hours of people talking, works out which speech sounds those slices probably are, and which words they probably make. It also uses context. If you say "play some music by", it expects a singer's name next, not a vegetable.

{{story:ears-hear}}

## Step three: working out what you mean

Turning sound into words is only half the job. "What's the weather like?" and "Will I need an umbrella?" use different words but mean almost the same thing. A second program, trained to understand language, sorts your request into a type, such as weather, music or timer, and picks out details like a place or a time.

Then the assistant does the job: it looks up the forecast, starts a song or sets the timer. Finally, a text-to-speech program turns the answer into a natural-sounding voice.

## From 16 words to millions

Early machines were very limited. Bell Labs' Audrey, in 1952, recognised spoken numbers. IBM's Shoebox, shown at the 1962 World's Fair in [Seattle](seattle), understood 16 words, including the digits, and could do simple sums.

Real progress came when computers got fast enough to learn from huge recordings of speech. Apple added Siri to the iPhone in 2011. Amazon's Echo speaker arrived in 2014, and Google's Assistant in 2016.

## Accents, languages and privacy

Speech systems learn from the voices they are trained on. If those were mostly American voices, they may struggle with Scottish, Tamil or Texan accents. Indians often mix Hindi and English in one sentence, and companies have had to train special models to cope. With [India's many languages](languages-india), there is still a long way to go.

Voice assistants are a big help for people who cannot see well or cannot use their hands easily. But they also raise questions about [privacy](privacy). Recordings are often stored, and in 2019 several companies admitted that human workers had listened to some clips to improve accuracy. Most now let users review and delete their recordings.
