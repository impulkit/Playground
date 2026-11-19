---
id: tech-ai-art
title: Can AI paint pictures?
short: AI art
subject: tech
hook: In 2018, a blurry portrait made by a computer program sold at a famous auction house in New York for 432,500 US dollars.
certainty: mixed
certainty_note: AI can clearly make images. Whether those images count as art, who owns them and whether it is fair to train AI on artists' work without asking are still argued over by artists, companies and courts.
surprising_fact: Many AI image programs start every picture as random coloured static, like a badly tuned TV, and clean it up step by step until a picture appears.
facts:
- "Early computer artist program: AARON, from the early 1970s"
- "Portrait of Edmond de Belamy sold: 2018, for $432,500"
- "Popular text-to-image tools launched: 2021–2022"
- "US copyright rule: needs a human author (upheld by a court in 2025)"
- "Classic AI mistake: hands with extra fingers"
links:
- to: ai-what
  type: home
  why: What is artificial intelligence, really?
- to: computer-vision
  type: deeper
  why: How do computers recognise what is in a photo?
- to: pixels
  type: deeper
  why: What are pictures on a screen made of?
- to: famous-paintings
  type: surprise
  why: Which paintings changed how people saw the world?
- to: art-forgery
  type: surprise
  why: How do experts catch a fake painting?
- to: deepfakes
  type: deeper
  why: How can a video show something that never happened?
- to: tech-ai-music
  type: deeper
  why: Can computers write music?
sources:
- Christie's, Portrait of Edmond de Belamy sale (2018).
- US Copyright Office, Copyright and Artificial Intelligence, Part 2: Copyrightability (2025).
- Tate, Harold Cohen and AARON.
interactive:
  t: predict
  prompt: Many AI image tools turn a sentence into a picture. What do they usually start with?
  options:
  - t: A screen full of random noise
    ok: true
  - t: A blank white canvas
  - t: A real photo found on the internet
  reveal: These tools, called diffusion models, start from random static. Step by step, they remove the noise in a way that matches your words, until a picture appears. They learned to do this by practising on millions of images.
try_this: Play "noise to picture". Ask a friend to think of a simple object. Draw a page full of random scribbles, then let your friend tell you, one step at a time, which scribbles to rub out or darken until the object appears. That is roughly how a diffusion model cleans up noise.
myth:
  myth: AI art programs cut and paste pieces of other people's pictures together, like a collage.
  truth: Most build a new image from patterns they learned, rather than gluing clips together. But because they learn from real artworks, they can sometimes produce something very close to an existing picture or an artist's style.
---

## The short answer

Yes, in a way. AI programs can now produce paintings, drawings and photo-like images in seconds. Type "a tiger reading a newspaper on a Mumbai local train, painted like a Mughal miniature", and a few seconds later you get a picture.

These programs have studied hundreds of millions of images, along with the words people used to describe them. From that, they learned which shapes, colours and textures go with which words. When you type a prompt, they build a brand new image to match.

Whether the AI is painting in the way a human artist does is a different question. It has no eyes, no hands and no feelings about the picture. That is one reason AI art is so hotly argued about.

## A robot artist from the 1970s

Computer art is older than most people think. In the early 1970s, the British painter Harold Cohen began writing a program called AARON. It could draw shapes, plants and people by following rules Cohen wrote. He kept improving it for over 40 years, and it later learned to colour its own drawings.

But AARON knew only what Cohen taught it. Modern AI is different. It learns from examples on its own, using [neural networks](ai-what) loosely inspired by the brain.

## Making a picture out of static

Many of today's image tools use a method called diffusion. In training, the AI is shown millions of pictures that have been gradually covered in random speckles, like TV static, until nothing is left. It practises undoing that noise, step by step.

Once trained, it can start from pure static and "clean" it into a new image, guided by your words. A picture is just a grid of coloured dots called [pixels](pixels), so the AI is really deciding the colour of millions of dots, over and over.

AI used to be famously bad at hands, often giving people six or seven fingers. Hands are hard because they bend in so many ways and are often half hidden in photos. Newer tools have improved a lot.

{{story:art-forgery}}

## Prizes, auctions and arguments

In 2018, the auction house Christie's sold a portrait made with AI by a group of French artists, called Portrait of Edmond de Belamy, for 432,500 US dollars. That was more than 40 times the top price experts had expected.

In 2022, a man in the USA won first prize in the digital art category of the Colorado State Fair with an image made using an AI tool. Some artists were furious. He argued that he had spent many hours choosing words and adjusting the result.

In 2024, a painting made by a humanoid robot called Ai-Da sold for more than a million dollars at Sotheby's.

## Who owns it?

AI tools learned from huge numbers of images posted online, including the work of living artists, usually without asking them. Many artists say this is unfair, especially when AI can copy their style in seconds. Some have taken AI companies to court.

In the USA, the Copyright Office says an image made entirely by AI, without real human creative choices, cannot be protected by copyright. A US court agreed in 2025. Pictures where a human makes many of the creative decisions are a greyer area.

## Spotting AI pictures

AI images can look real, which makes them easy to misuse, for example in fake news photos. Clues include odd hands, melted-looking text in the background, earrings that do not match and lighting that makes no sense. Some companies now add hidden labels to AI images to mark where they came from.

Art experts have dealt with fakes for centuries. The tricks used to catch a forged old painting, such as checking paints and brushstrokes, are now joined by new tools that hunt for traces of AI. And the same kind of AI that paints from noise has learned to [compose music](tech-ai-music) too.
