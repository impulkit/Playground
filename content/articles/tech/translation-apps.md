---
id: translation-apps
title: How do translation apps work?
short: Translation apps
subject: tech
hook: Point your phone at a menu in Japanese and the words turn into English on the screen. Behind that trick are billions of sentences translated by people.
certainty: sure
surprising_fact: Early translation programs learned partly from official documents of the United Nations and the European Union, because the same text existed carefully translated into many languages.
facts:
- First public demo: Georgetown–IBM experiment, 1954
- Google Translate launched: 2006
- Switch to neural translation: 2016
- Languages on big apps: well over 100, some more than 200 (2024)
- India's language mission: Bhashini, launched 2022
links:
- to: translation
  type: deeper
  why: How do human translators turn one language into another?
- to: languages-india
  type: home
  why: How many languages does India have?
- to: learning-languages
  type: deeper
  why: Why is it easier for children to learn languages?
- to: ai-what
  type: deeper
  why: What is artificial intelligence, really?
- to: chatbots
  type: deeper
  why: How do chatbots write their answers?
- to: cameras-phones
  type: surprise
  why: How does a tiny phone camera take sharp photos?
- to: endangered-languages
  type: surprise
  why: Can technology save a dying language?
- to: hieroglyphs
  type: surprise
  why: How did one stone help people read hieroglyphs?
sources:
- Encyclopaedia Britannica, Machine translation.
- Ministry of Electronics and Information Technology, Government of India, Bhashini (National Language Translation Mission).
- Vaswani A. and others (2017), Attention Is All You Need, Google research paper.
interactive:
  t: predict
  prompt: In Turkish and Bengali, the word for "he" and "she" is the same. When early apps translated "She is a doctor" into Bengali and back to English, what often happened?
  options:
  - t: It came back as "He is a doctor"
    ok: true
  - t: It came back exactly right every time
  - t: The app refused to translate it
  reveal: The app had no way to know who was meant, so it guessed from patterns in its training text, where doctors were more often written as "he". Researchers spotted this bias, and some apps now show both versions.
try_this: Write three sentences, one plain, one with an idiom like "It's raining cats and dogs", and one joke. Translate each into another language with an app and then back again. Compare the results with the original, and ask someone who speaks that language which version sounds natural.
myth:
  myth: Translation apps swap words one at a time, like a dictionary.
  truth: Modern apps translate whole sentences at once. They look at how every word relates to the others, because word order and meaning change from language to language.
---

## The short answer

A modern translation app is a computer program that has studied an enormous number of sentences in two or more languages, side by side. From all those examples it has learned patterns: which words and phrases in one language usually match which in another, and how word order changes.

When you type or speak a sentence, the app turns it into numbers and works out what the whole sentence probably means. Then it builds a new sentence in the other language, word by word. The kind of [artificial intelligence](ai-what) it uses is called a neural network, loosely inspired by how brain cells connect.

## Rules that kept breaking

People tried to get machines to translate as early as the 1950s. In 1954 IBM and Georgetown University showed a computer turning about 60 Russian sentences into English. Newspapers predicted perfect translation within a few years.

It took much longer. Early systems used dictionaries and [grammar](grammar-why) rules written by hand. But languages are full of exceptions, [idioms](idioms) and words with many meanings. "Bank" can mean a place for money or the side of a river. Rule-writers could never keep up.

## Learning from examples

In the 1990s and 2000s, researchers tried a new approach. Instead of writing rules, they fed computers millions of sentences already translated by people, such as United Nations reports, and let them count which phrases matched up. Google Translate launched with this method in 2006.

It worked better, but translations often came out choppy, because the system pieced together short phrases without seeing the whole sentence.

{{story:languages-india}}

## The neural leap

In 2016 Google switched its app to neural translation, and the quality jumped. In 2017 Google researchers described a design called the transformer, which pays "attention" to how every word in a sentence relates to every other word. Transformers now power most translation apps and many chatbots too.

Phones can also translate what they see. The camera reads the letters on a sign, a program recognises them as text, and the translation is drawn over the picture, often in a matching font. Many apps let you download a language pack first, so this works even without an internet connection, which is handy on a mountain trek or a long train journey.

## Where apps still stumble

Apps struggle with jokes, poems, slang and idioms. "Break a leg" means good luck in English, but translated literally it sounds alarming. They can also [repeat biases](ai-safety) hidden in their training text, like guessing that a doctor is a man.

Languages with fewer written texts online are harder still. Hindi, [Bengali](bengali-language) and Tamil have hundreds of millions of speakers, but far less digital text than English. Smaller languages, such as many tribal languages of India, may have almost none. That is why some researchers are recording speakers and collecting stories to help [endangered languages](endangered-languages) survive online.

## India's translation challenge

India's constitution lists 22 scheduled languages, and many more are spoken. In 2022 the government launched Bhashini, a national mission to build free translation and speech tools for Indian languages. The aim is that a farmer could speak in Odia and be understood by an official who reads only Kannada. Researchers at places like IIT Madras have gathered large collections of Indian-language text and speech to train these systems.

Even so, good [human translators](translation) are still needed for books, courts and hospitals, where a small mistake can matter a lot.
