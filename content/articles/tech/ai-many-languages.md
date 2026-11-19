---
id: ai-many-languages
title: Why do AI chatbots find some languages harder than others?
short: AI and India's languages
subject: tech
hook: Ask a chatbot something in English and it answers smoothly. Ask the same thing in Santali or Konkani, and it may stumble. The reason is how much it has read.
certainty: sure
surprising_fact: Some AI models are small enough to run on a mobile phone with no internet connection at all.
facts:
- "Languages in India's Constitution (Eighth Schedule): 22"
- "Share of websites in English: about 49.5%"
- "Share of websites in Hindi: less than 0.1%"
- "Extra tokens older chatbots need for Indian languages: about 8 times as many as English"
- "Token: a small piece of text, a word or part of a word"
- "Parameters: the tiny settings an AI adjusts as it learns"
- "EKA-1, an Indian model released in 2026: 22 Indian languages plus English, 26.3 billion parameters"
- "IndiaAI Mission budget (2024): ₹10,372 crore over five years"
links:
- to: large-language-models
  type: home
  why: How do AI chatbots learn language?
- to: ai-what
  type: deeper
  why: What is artificial intelligence?
- to: neural-networks
  type: deeper
  why: How do neural networks learn?
- to: languages-india
  type: evidence
  why: How many languages does India speak?
- to: translation-apps
  type: surprise
  why: How do translation apps work?
- to: ai-safety
  type: surprise
  why: How do we make AI safe and fair?
sources:
- News On AIR (Prasar Bharati), 'Govt launches 3 new indigenous AI foundation models under IndiaAI Mission', 4 November 2026.
- Inc42, 'Soket Labs and ZenteiQ launch indigenous AI models', 4 November 2026.
- Analytics India Magazine, 'IndiaAI Mission releases 3 indigenous AI models developed by Soket, ZenteiQ', November 2026.
- Swarajya, 'IndiaAI Mission unveils three indigenous AI models', 4 November 2026.
- W3Techs, 'Historical yearly trends in the usage statistics of content languages for websites', data to 13 November 2026.
- Priyansh Srivastava, 'The Tokenizer Tax: Quantifying and Explaining the Cross-Lingual Cost of Subword Tokenization for Indian Languages', arXiv 2607.24276, July 2026.
- The Week, 'Govt approves Rs 10,372 crore India AI Mission. All you need to know', 7 March 2024.
- Gulf News (PTI), 'Census: More than 19,500 languages spoken in India as mother tongues', 2 July 2018.
- Census of India 2011, language data (first-language speakers of scheduled languages), via Wikipedia, 'List of languages by number of native speakers in India'.
- Wikipedia, 'Bhashini' (launch in Gandhinagar, July 2022).
- Joseph Weizenbaum, 'ELIZA: a computer program for the study of natural language communication between man and machine', Communications of the ACM, January 1966.
- Ashish Vaswani and others, 'Attention Is All You Need', 2017.
- Constitution of India, Eighth Schedule (reference).
- W3Techs, 'Usage statistics of content languages for websites', checked 14 November 2026.
- Takara TLDR summary of arXiv 2607.24276, 'The Tokenizer Tax' (abstract figures checked).
news:
  date: 2026-11-04
  headline: India releases three home-grown AI models, including one that knows 22 Indian languages
  text: On 3 November 2026, the government released three AI models made in India under the IndiaAI Mission, at a launch where S. Krishnan, Secretary of the Electronics and IT Ministry, spoke. The biggest, EKA-1, was built by the Indian company Soket Labs. It has 26.3 billion parameters, learned from about 7.5 trillion tokens of text, and works in all 22 languages listed in the Constitution plus English. ZenteiQ's smaller models, Dhīr 2B and Dhīr 5B, can run without the internet, which helps in places with weak signal or where data must stay private. This entry explains why chatbots need extra help with languages that have little writing online.
  sources:
  - News On AIR, 4 November 2026
  - Inc42, 4 November 2026
quiz:
  t: predict
  prompt: Why might a small AI model run on a phone while bigger ones need huge computers?
  options:
  - t: It has far fewer parameters, so it needs much less memory and power
    ok: true
  - t: It only works in English
  - t: Phones are faster than supercomputers
  reveal: Every parameter has to be stored and used each time the AI answers. A model with 2 or 5 billion parameters is small enough for a phone's memory. One with 26 billion or more usually needs powerful computers in a data centre.
try_this: Ask someone at home to say the same simple sentence, like "Where is the water?", in every language they know. Notice which words look or sound alike. An AI learns patterns like these, but from billions of sentences.
myth:
  myth: An AI understands words the way a person does.
  truth: A language AI learns patterns. It predicts which word is most likely to come next, based on everything it has read. It can be very useful, but it can also make confident mistakes.
---

## The short answer

An [AI](ai-what) chatbot learns a language by reading enormous amounts of text in it. The more it reads, the better it gets.

Some languages, like English, have billions of pages online. Others, including many of [India's languages](languages-india), have far less writing on the internet. With less to read, the AI learns less, so it makes more mistakes. It may also chop words in these languages into awkward little pieces, which makes the job even harder.

## How it works

[Chatbots](chatbots) are built from [large language models](large-language-models). These are made of [neural networks](neural-networks), layers of maths loosely inspired by brain cells.

First, the text is chopped into small pieces called tokens. A token can be a whole word, like "water", or a bit of a word, like "wat". Then training begins. The model reads a sentence with the next token hidden and guesses what it is. An [algorithm](?algorithm) checks the guess and nudges millions or billions of tiny settings, called parameters, so the next guess is a little better.

After trillions of these guesses, the model has learned which words tend to follow which. When you ask it a question, it uses [probability](?probability) to pick a likely next token, then the next, and so on, until it has written an answer.

Think of a child who has grown up in a house full of Hindi books and only one Konkani storybook. The child will speak Hindi with ease and Konkani with gaps. A chatbot is the same. It can only be as good at a language as the pile of text it learned from.

{{story:large-language-models}}

## Where it came from

The first chatbot, ELIZA, was made at MIT in the United States in 1966. It followed simple rules and could only pretend to understand English.

For decades, computers struggled even to show Indian scripts properly. A shared system called [Unicode](unicode) slowly gave every letter in every script its own code, so Tamil or Odia text could travel safely between phones and computers.

The big leap came in 2017, when Google researchers described a new design called the transformer. It let models learn from huge amounts of text at once. Most modern chatbots are built on it. They were trained mostly on English text, because that is what the internet had most of, so English got good first.

## India's story

India's Constitution lists 22 languages in its Eighth Schedule. There were 14 in 1950. Santali, Maithili, Bodo and Dogri were among the last added, in 2003. The 2011 [Census](census) found 121 languages with at least 10,000 speakers each, and people named more than 19,500 different mother tongues.

The gap between speakers and online text is huge. Hindi was the first language of about 52.8 crore people in 2011, yet less than 0.1% of websites are in Hindi. Santali, spoken by about 74 lakh people, is written in Ol Chiki and other [scripts](?script), and has very little text online. Many tribal languages are mostly spoken, not written, so there is almost nothing for an AI to read.

India has started to fill the gap. In July 2022, the government launched Bhashini in Gandhinagar, a free platform for translation and speech tools in Indian languages. It has been used to turn speeches into other Indian languages as they are spoken. In 2024, the government approved the IndiaAI Mission, with ₹10,372 crore to spend over five years on computers, data and home-grown models.

In 2026, that mission released EKA-1, built by Soket Labs, which works in all 22 scheduled languages plus English. Alongside it came two smaller models from ZenteiQ, Dhīr 2B and Dhīr 5B, which can run without the internet.

{{story:scripts-india}}

## The numbers that matter

**About 49.5%.** That is roughly the share of websites written in English. So about half of everything a chatbot can read online is in just one language.

**Less than 0.1%.** That is Hindi's share of websites, even though Hindi is the first language of more people in India than any other. Bengali is at about 0.1%.

**About 8 times.** A 2026 study found that an older, widely used chatbot tokeniser needed about 8 times as many tokens for Indian languages as for the same text in English. For Malayalam it was about 13 times. More tokens means slower answers, higher costs and less room for the AI to keep track of a long chat. Newer tokenisers do much better.

**26.3 billion.** That is how many parameters EKA-1 has. It learned from about 7.5 trillion tokens. Reading that much text aloud, one token a second, without a break, would take more than 2 lakh years.

## What people argue about

**Build our own, or adapt?** Some experts say India must build its own models from scratch, trained on Indian data. They argue this keeps sensitive data in the country, makes sure Indian languages are not an afterthought, and builds skills at home.

Others say building giant models costs a lot of money and computing power, and global models are improving quickly at Indian languages. They argue it is smarter to take open models and fine-tune them with Indian data, and spend the savings on collecting better data.

**Gathering the words.** Teams record people speaking in villages and towns to build data for rare languages. Supporters say this is the only way to include these languages. Others ask who owns these recordings, whether speakers are paid fairly, and whether communities agree to how their words are used.

## Myths and mix-ups

**"A chatbot translates by looking up words in a dictionary."** It does not. It has learned patterns across whole sentences. That is why it can handle idioms, but also why it can produce smooth sentences that are wrong.

**"A language with crores of speakers must work well in AI."** Not always. Bhojpuri has around 5 crore speakers, but little of it is written online. What matters is how much text the AI has read, not how many people speak the language.

**"Writing a language in English letters fixes the problem."** Typing Hindi in Roman letters, as many people do in chats, can help a little, because the AI has seen lots of it. But spellings vary from person to person, and every region has its own [dialect](?dialect), so mistakes still creep in.

## What it means for you

If you ask a chatbot something in Marathi, Tamil or Assamese, check the answer carefully, especially for health, money or exam facts. The AI may sound sure while being wrong. Asking the same question in English and comparing can help.

Better language AI could let a farmer ask about crop prices in Kannada, help a grandparent use a phone by speaking Bengali, or let a student read science lessons in Odia. [Voice assistants](voice-assistants) and [translation apps](translation-apps) in more Indian languages could reach crores of people who do not read English.

Small models that work offline matter too. Big chatbots run on a faraway [server](?server) in a [data centre](data-centres), which needs a good signal. A model on the phone itself can still help in a hilly village with weak network. Experts also say every AI must be tested carefully in each language, because [AI safety](ai-safety) matters as these tools spread.

Every time someone types, records or writes in their own language, it adds to what future AIs can learn. When a language has almost no written record, it can fade, as the story of [endangered languages](endangered-languages) shows.
