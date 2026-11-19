---
id: scanners
title: How does a scanner read a page?
short: Scanners
subject: how
hook: The first digital photo ever made, in 1957, was a scanned picture of a baby. It was just 5 cm across and made of only 30,976 dots.
certainty: sure
surprising_fact: A flatbed scanner doesn't take one picture of the page. It reads it one thin line at a time, thousands of lines from top to bottom.
facts:
- "First scanned digital image: 1957, by Russell Kirsch in the USA"
- "Size of that image: 176 × 176 pixels"
- "Typical document scan: 300 dots per inch"
- "Light sensor types: CCD or CIS"
- "OCR: software that turns a scanned picture of words into real text"
links:
- to: pixels
  type: deeper
  why: What is a pixel, really?
- to: barcodes
  type: surprise
  why: How does a shop scanner read a barcode in a flash?
- to: photocopiers
  type: deeper
  why: How does a photocopier copy a page using static electricity?
- to: blindness-tech
  type: surprise
  why: How does technology help blind people read?
- to: cameras-how
  type: deeper
  why: How does a camera catch light?
- to: qr-codes
  type: surprise
  why: How does your phone read a QR code?
- to: braille
  type: surprise
  why: How do blind readers read with their fingers?
- to: how-metal-detector-airport
  type: deeper
  why: How does an airport body scanner work?
sources:
- National Institute of Standards and Technology (NIST), Fiftieth anniversary of the first digital image (Russell Kirsch, 1957).
- Britannica, Scanner; Optical character recognition.
- Library of Congress, Technical guidelines for digitising documents.
interactive:
  t: predict
  prompt: Why does a scanner need its own bright light inside?
  options:
  - t: To shine on the page so the sensor can measure the reflected light
    ok: true
  - t: To warm the paper so the ink shows up
  - t: To dry the ink before it smudges
  reveal: The sensor measures how much light bounces back from each tiny spot. White paper reflects a lot, black ink very little. The scanner's own lamp makes sure every page is lit the same way.
try_this: Take a piece of squared graph paper and a simple black-and-white drawing. Lay the graph paper over it and fill in every square that is more than half black. You've just "scanned" the picture at low resolution. Try again with smaller squares and see how much sharper it gets.
myth:
  myth: A scanner takes a photo of the whole page at once, like a camera.
  truth: A flatbed scanner uses a narrow strip of sensors that slides down the page, reading one thin line at a time. The computer stitches thousands of lines together into one picture.
---

## The short answer

Lift the lid of a flatbed scanner and you'll see a sheet of glass. Under it sits a long, thin bar carrying a lamp and a row of tiny light sensors. When you press scan, a small motor pulls the bar slowly from one end of the page to the other.

As it moves, the lamp lights a narrow strip of the page. Light bounces off the paper. White paper reflects a lot of light, and dark ink reflects very little. The sensors measure how bright each tiny spot is and turn that into a number.

Each strip becomes one row of [pixels](pixels). Thousands of rows, stacked top to bottom, make the finished image.

## Counting dots

Scanners are measured in dots per inch, or dpi. At 300 dpi, a common setting for documents, every inch of the page is split into 300 dots across and 300 down. That's 90,000 dots for each square inch, or about 14,000 for a square centimetre.

More dots give sharper detail and much bigger files. Museums and libraries scanning old maps or manuscripts may use 600 dpi or more, so researchers can zoom in on faded ink. A photo scanned at 1,200 dpi can be printed many times bigger than the original without looking blurry. That's how old family photos get turned into posters.

For colour, the scanner measures each dot three times, through red, green and blue filters, or by flashing red, green and blue lights in turn. Mixing the three values gives the dot's true colour.

## Two kinds of eye

Older and bigger scanners often use a CCD, or charge-coupled device. A set of mirrors and a lens shrinks the strip of page down onto a small sensor chip, much like the one inside a digital camera.

Many slim, cheap scanners use a CIS, or contact image sensor, instead. Here, a row of sensors as wide as the page sits almost touching the glass, lit by coloured LEDs. It needs no mirrors, so it's lighter and uses less power, though it struggles with books that don't lie flat.

{{story:pixels}}

## The baby picture

In 1957, the American engineer Russell Kirsch and his team at the National Bureau of Standards built a drum scanner for one of the country's first computers. The first image they fed in was a photo of Kirsch's baby son, Walden.

The scan was 176 dots wide and 176 high, just 30,976 dots in total, each one either black or white. It was rough and blocky, but it was the first time a photograph had been turned into numbers inside a computer. Almost every digital photo since has worked on the same idea.

## Pictures into words

A scan of a letter is just a picture. A computer can't search it or edit it until software reads the shapes of the letters and turns them into text. This is called optical character recognition, or OCR.

In 1976, the American inventor Ray Kurzweil showed a reading machine that scanned printed books and read them aloud with a computer voice. It was built for [blind readers](blindness-tech), and was one of the first machines to recognise many different fonts. Today, OCR runs quietly in phone apps and in national libraries digitising millions of old books.

## Scanners everywhere

Shops use a different kind of scanner, a laser that sweeps across a [barcode](barcodes) and measures the gaps between its stripes. A [photocopier](photocopiers) is really a scanner and a printer in one box. And your phone camera can now flatten, straighten and sharpen a photo of a page so well that many people never touch a flatbed at all.
