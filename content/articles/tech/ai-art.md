---
id: ai-art
title: Can a computer make art?
short: AI art
subject: tech
hook: In 2018 a blurry portrait painted by a computer program sold at a famous auction house for more than many paintings by living artists.
certainty: debate
certainty_note: Computers can clearly produce striking pictures, music and poems. Whether that counts as art, who the artist is, and whether training on human artists' work is fair are all still argued over by artists, lawyers and philosophers.
surprising_fact: An artist named Harold Cohen spent more than 40 years teaching one drawing program, called AARON, starting in the early 1970s.
facts:
- Famous early program: AARON, by Harold Cohen, from the 1970s
- Edmond de Belamy sold: 2018, at Christie's, for $432,500
- How most image AIs work: they learn from millions of captioned pictures
- Common method: turning random noise into a picture, step by step
- US copyright rule: needs a human author
links:
- to: ai-what
  type: deeper
  why: What does "artificial intelligence" actually mean?
- to: famous-paintings
  type: surprise
  why: What makes a painting famous in the first place?
- to: art-forgery
  type: surprise
  why: How do experts catch a fake painting?
- to: pixels
  type: deeper
  why: How is a picture on a screen made of tiny squares?
- to: deepfakes
  type: home
  why: How can a computer fake a video of a real person?
- to: patents
  type: evidence
  why: Who owns an idea once it's out in the world?
- to: modern-art
  type: surprise
  why: Why did people once say modern art wasn't art?
- to: tech-ai-art
  type: deeper
  why: Can an AI really paint a picture?
sources:
- Christie's auction house, Portrait of Edmond de Belamy, 2018 sale.
- US Copyright Office, Copyright Registration Guidance for Works Containing AI-Generated Material, 2023.
interactive:
  t: predict
  prompt: Many AI image programs start each new picture from something surprising. What is it?
  options:
  - t: A screen full of random speckles, like TV static
    ok: true
  - t: A blank white canvas
  - t: A random painting copied from the internet
  reveal: Most popular image generators begin with pure noise. Then, over many small steps, they nudge the speckles towards something that matches your words, the way a photo slowly comes into focus.
try_this: Write a one-line description of a picture, such as "a tiger reading a newspaper on a Mumbai local train". Give the same line to three friends or family members and ask each to draw it in five minutes. Compare the drawings and talk about which choices each person made that the words didn't say.
myth:
  myth: AI art programs cut and paste bits from pictures they find online.
  truth: Most generators don't stitch together pieces of stored images. They learn patterns from millions of pictures and then produce new pixels. Even so, they can sometimes produce something very close to a famous image they saw often during training.
---

## The short answer

Yes, computers can produce pictures, music and poems, some of them good enough to win prizes or sell for large sums. Whether that counts as art is a harder question, and people genuinely disagree.

Most of today's art programs are a kind of [artificial intelligence](ai-what). They are trained on millions of pictures, each with a caption. From those, the program learns which shapes, colours and textures tend to go with words like "sunset", "elephant" or "watercolour". Give it a new sentence and it produces a new picture to match. It has never seen a sunset itself. It has only seen what people photographed and painted.

## From static to a picture

The best-known image generators use a method called diffusion. During training, the computer takes real pictures and adds random speckles to them, a little at a time, until nothing is left but noise. Then it practises the reverse: removing a little noise at each step so the picture comes back.

Once it is good at that, you can hand it pure static and a sentence. Step by step, it removes the "noise" in a way that matches your words. After a few dozen steps, a cat in a spacesuit appears out of nothing. Underneath, the whole thing is just a grid of [pixels](pixels), each one given a colour by a lot of arithmetic.

{{story:art-forgery}}

## An artist and his program

Computer art is older than most people think. In the early 1970s, a British painter named Harold Cohen began writing a program called AARON. He taught it rules about shapes, bodies and plants, and it drew pictures with a robotic pen. Later it chose colours too. Cohen kept improving it until he died in 2016.

Cohen never claimed AARON was an artist on its own. He saw it more like a very unusual paintbrush, one that could surprise its maker. Many artists who use AI today describe their work in a similar way.

## The portrait that shocked an auction

In 2018, the auction house Christie's in New York sold a blurry portrait of a made-up gentleman called Edmond de Belamy. A group of young French artists had made it using an AI program trained on thousands of old portraits. It sold for $432,500, far above the expected price.

Some people called it a turning point. Others pointed out that the code the group used had been written mostly by someone else, and shared freely online. That argument, about who really made the picture, has followed AI art ever since.

## Is it fair?

Many illustrators and painters are upset that their work was used to train AI programs without their permission and without payment. Some have taken companies to court in the US and elsewhere. The companies argue that learning from public images is allowed, the way a student learns by looking at [famous paintings](famous-paintings). Courts have not settled the matter yet.

There is also the question of ownership. In 2023, the US Copyright Office said that pictures made entirely by AI cannot be copyrighted, because copyright protects work by a human author. If a person makes real creative choices, such as arranging, editing or painting over, those human parts can be protected.

## A very old argument

People have asked "is it art?" many times before. When photography appeared in the 1800s, some painters said a machine couldn't make art. Later, critics said the same about [modern art](modern-art) that didn't look like anything. Each time, people slowly worked out new ideas about what an artist does. Many think the same will happen again: the thinking, choosing and meaning may matter more than who, or what, holds the brush.
