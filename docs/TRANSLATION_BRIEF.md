# Kyun language brief: write it as a native writer would

Kyun is a free encyclopedia for curious kids aged 8 to 13 (and their families). You are bringing its stories into **one Indian language**. This is not word-for-word translation. Write each story the way a gifted children's-magazine writer in your language would write it if they had researched the same facts: natural sentences, native rhythm, local examples, real idioms. A child should never feel they are reading something "converted from English".

Read this brief, then read two English stories you are given and the model translation guidance for your language below.

## What must stay exactly the same

- **Facts.** Every number, date, name, place and claim stays as in English. Do not add facts you are unsure of; do not drop any fact from the facts box, the quiz or the surprising fact. You may drop or change a *comparison* if it does not work in your language.
- **Structure and markup.**
  - Front matter keys stay in English (`id`, `title`, `short`, `hook`, `subject`, `links`, `to`, `type`, `why`, `facts`, `quiz`/`interactive`, `prompt`, `options`, `t`, `ok`, `reveal`, `try_this`, `myth`, `truth`, `surprising_fact`, `certainty`, `certainty_note`, `sources`, `image`…).
  - Keep `id`, `subject`, `certainty`, every `links: - to:` and `type:`, the `image:` block (except `caption`, which children see: translate it), `sources:` (leave source names in English), and any `interactive:` fields other than visible text (for example `t: predict`, `ok: true`, coordinates) exactly as they are.
  - Translate the **values** people read: `title` (a real question in your language), `short`, `hook`, `surprising_fact`, `certainty_note`, every `facts` label and value, every link `why`, quiz `prompt`, option `t` text and `reveal`, `try_this`, `myth.myth`, `myth.truth`.
  - `facts` stay as `- Label: value` lines. Quote a value if it contains `: ` (colon and space).
- **Body.** Same sections in the same order. The first section is the short answer (write its heading naturally in your language, for example Hindi "छोटा जवाब"). Other headings are short phrases, not questions.
  - Keep every inline story link: `[words](article-id)`. Translate the words naturally; the id after them must not change. You may move the link to wherever it reads best in your sentence.
  - Keep the embed line exactly as it is, on its own line: `{{story:some-id}}`.
  - Mark 3 to 6 **tricky words** a child might not know: `[शब्द](?dictionary-id)`. Use only ids from `content/dictionary.yml` (the English word tells you the concept). Pick words that genuinely appear in your text.

## How to write

- **Audience:** a curious 10-year-old in your language's heartland, reading on a phone, and the parent reading over their shoulder.
- **Register:** the warm, clear language of the best children's magazines and science shows in your language. Everyday words, not textbook or officialese. Avoid heavily Sanskritised, Persianised or archaic vocabulary when a common word exists. Where children actually say the English word (oxygen, computer, robot, planet in some languages), write it in your script; where your language has a common native word kids learn in school, prefer that, and you may give the other in brackets once.
- **Sentences:** build them the way your language builds them. Do not copy English word order, sentence length, or punctuation. Short and long sentences mixed; most under 20 words.
- **Address:** speak to the reader now and then, using the friendly form children's magazines in your language use (Hindi: तुम).
- **Examples and comparisons:** make them land locally. Replace American comparisons (football fields, school buses, miles) with ones a child in your language's region knows (cricket pitch, a local train, a famous local landmark, a state city). Keep Indian comparisons that already work.
- **Jokes, rhymes, wordplay:** recreate them in your language or replace them with something equally fun. Never translate a pun literally.
- **Numbers:** use international digits (0-9). Use metric units. Lakh and crore are fine where natural; keep large science numbers clear (for example "15 करोड़ किलोमीटर").
- **Names:** people and places in your script, spelled the way your language's newspapers spell them. Scientific names stay in Latin script.
- **Never:** em dashes (—). No emoji. At most 3 exclamation marks per story. No filler openers like "क्या आप जानते हैं", "आइए जानें", "रोचक बात यह है कि" (or their equivalents in your language). No "in conclusion" summaries. No moralising.
- **Sensitivity:** religion, history, politics and the body stay neutral, accurate and age-appropriate, exactly as in English.

## Files

- Your unit file lists stories as `subject|id`. Read `content/articles/<subject>/<id>.md` and write `content/i18n/<lang>/<subject>/<id>.md`.
- When the unit is done, run `python3 tools/check_i18n.py <lang> --unit <unit file>` and fix every ERROR. Read two of your stories aloud in your head: if a sentence sounds translated, rewrite it.
- Keep helper scripts in the scratchpad folder you are given, never in `content/`.

## Language notes

- **Hindi (hi):** everyday Hindustani of Hindi newspapers and children's magazines (Champak, Chandamama style), Devanagari, तुम for the reader. Prefer ग्रह, सूरज, धरती/पृथ्वी, हवा over rare Sanskrit coinages; ऑक्सीजन, कंप्यूटर, रोबोट are fine.
- **Marathi (mr):** standard Marathi of Loksatta and Kishore magazine, Devanagari, warm तू/तुम्ही as children's magazines do. Local examples: Mumbai local, Pune, Sahyadri, Konkan.
- **Bengali (bn):** standard Bengali (চলিত ভাষা) of Anandamela and Kishore Bharati, Bengali script, তুমি for the reader. Local examples: Kolkata, Howrah Bridge, the Sundarbans, Ganga/Hooghly.
- **Tamil (ta):** clear contemporary written Tamil of children's magazines like Chutti Vikatan, Tamil script, friendly address. Use Tamil words where common (கோள், சூரியன்) and transliterate where children say the English. Local examples: Chennai, Marina Beach, Madurai, the Kaveri.
- **Telugu (te):** standard modern Telugu of Eenadu and children's magazines like Chandamama, Telugu script, friendly address. Local examples: Hyderabad, Charminar, Godavari, Tirupati.

## App text (ui.yml)

Placeholders: `{n}` is a number and `{x}` is a word or name filled in at runtime, in the order they appear in the English. To reorder two of the same kind, number them: `"{n} of {n}"` can become `"{n2} में से {n1}"`. Unnumbered placeholders fill in English order.

## Daily news entries (`news:` block)
Some stories carry a `news:` block in front matter (the day they were the main news). Keep `date` and `sources` exactly; translate `headline` and `text` naturally, keeping every name, number and attribution ("Iran says...", "news reports say...") exactly as in English. These are long (1,000+ words): translate every section; politics stays neutral, word for word in meaning.

## The spoken-word test (overrides dictionary correctness)
Read every sentence aloud in your head as if telling it to a family at dinner in your language's heartland (a home in Patna or Indore for Hindi, Pune for Marathi, Kolkata for Bengali, Madurai for Tamil, Vijayawada for Telugu). If a word would make the family pause, it is wrong even if a dictionary says it is correct.
- Prefer the word people actually say, including the English word in your script when that is what people say (Hindi: "होर्मुज़ स्ट्रेट" or "होर्मुज़ का समुद्री रास्ता", not "जलडमरूमध्य"; "महँगाई", not "मुद्रास्फीति"; "टैरिफ़"/"आयात शुल्क", not "प्रशुल्क"; "इंफ़्लेशन" only if explaining the English term).
- A technical term the story is about may appear once, explained in plain words, then use the everyday word.
- Never use a textbook coinage, a Sanskritised or Persianised word, or an officialese phrase where a spoken one exists. News-channel or newspaper usage that ordinary people repeat is fine.
- Sentences must sound like your language, not like English with your words in them. Break long sentences; use your language's natural order and connectors.

## Common mistakes to avoid (found in reviews)
- Large numbers: say them the Indian way. "Hundreds of thousands" = लाखों / லட்சக்கணக்கான / লাখ লাখ / లక్షల / लाखो, never a word-for-word "hundreds-thousands". "Billions" = अरबों etc.
- Don't overstate or soften: "almost smooth" is not "flat"; "much longer" is not "many times longer"; "not much affected" is not "not affected at all". Keep hedges exactly as strong as the English.
- Never add a fact, chemical, name or number that isn't in the English, even if true.
- Watch false friends: pick the word for the sense meant ("patterns" is not "samples"; "helper" is not "assistant"; data "traffic" is not road traffic).
- Archaic or textbook coinages fail the spoken-word test even when correct (Hindi: आतिशी शीशा, क्षरण; Tamil: தீங்குநிரல், நீர்க்குறி).
- Mark 3 to 6 tricky words from content/dictionary.yml; search the dictionary for concepts that appear in your text before giving up.
- After writing each file, parse its front matter (the checker does this) and fix quoting: quote any value containing ": ".
- More slips seen in review: "सैकड़ों हज़ार" (use लाखों); a word for the wrong thing (रसोइये = cooks, रसोई = kitchen; "inland" is not ज़मीन के अंदर); doubled words ("और और"); calques like "एक ही कहानी साझा करता है", "हर ढकाई"; bookish words like आवर्धक लेंस, मुख्यतः, शृंखला प्रतिक्रिया, सुघड़, वंश-शाखा. Never turn a story link [words](story-id) into a dictionary link or drop it.
- Number words, exact table (1 lakh = 100,000; 1 crore = 10 million). Use this, don't improvise:
  | English | Hindi / Marathi | Bengali | Tamil | Telugu |
  | hundreds of thousands | लाखों | লাখ লাখ | லட்சக்கணக்கான | లక్షల |
  | millions | लाखों (or दसियों लाख when exactness matters) | লাখ লাখ / কয়েক মিলিয়ন | லட்சக்கணக்கான / பல மில்லியன் | లక్షల / మిలియన్ల |
  | tens of millions | करोड़ों / कोट्यवधी (mr) | কোটি কোটি | கோடிக்கணக்கான | కోట్ల |
  | hundreds of millions | दसियों करोड़ | কয়েকশো মিলিয়ন / দশ কোটির বেশি | பல கோடி | పదుల కోట్ల |
  | billions | अरबों | শত কোটি / বিলিয়ন | பல்லாயிரம் கோடி / பில்லியன் | వందల కోట్ల / బిలియన్ల |
  An exact figure is converted exactly (5 million = 50 लाख; 30 million = 3 करोड़).
