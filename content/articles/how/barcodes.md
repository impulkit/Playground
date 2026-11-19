---
id: barcodes
title: How does a barcode work?
short: Barcodes
subject: how
hook: The first thing ever sold with a barcode scan was a packet of chewing gum, in Ohio, in 1974.
certainty: sure
surprising_fact: The barcode was dreamed up on a beach, when inventor Joseph Woodland drew the dots and dashes of Morse code in the sand and stretched them into lines.
facts:
- First shop scan: 1974, Troy, Ohio, USA
- First item scanned: a pack of chewing gum
- Patent for the idea: 1952
- Digits on most Indian and European barcodes: 13
- Codes registered in India usually start with: 890
links:
- to: qr-codes
  type: deeper
  why: How does a square of dots hold a whole web address?
- to: binary-code
  type: deeper
  why: How do computers store everything as 0s and 1s?
- to: codes-morse
  type: evidence
  why: How did dots and dashes carry messages across oceans?
- to: lunchbox-dabbawala
  type: surprise
  why: How do Mumbai's lunch carriers sort boxes with no scanners at all?
- to: lasers
  type: home
  why: What makes laser light different from torchlight?
- to: cipher-codes
  type: surprise
  why: How do secret codes work?
- to: chewing-gum
  type: surprise
  why: What is chewing gum made of?
- to: nfc-tap
  type: deeper
  why: How does tap-to-pay work?
sources:
- GS1 (the global barcode standards organisation), EAN/UPC barcodes.
- Encyclopaedia Britannica, bar code.
- Smithsonian Institution, National Museum of American History.
interactive:
  t: predict
  prompt: A shopkeeper scans a packet of biscuits. Where does the price come from?
  options:
  - t: The shop's computer looks it up using the barcode number
    ok: true
  - t: The price is hidden in the thickness of the bars
  - t: The scanner reads the price printed under the bars
  reveal: A barcode stores only a product number. The shop's computer has a list that matches each number to a name and a price, so the shop can change prices without reprinting a single packet.
try_this: Find a packet at home with a 13-digit barcode. Add the 1st, 3rd, 5th, 7th, 9th and 11th digits. Then add the 2nd, 4th, 6th, 8th, 10th and 12th digits and multiply that total by 3. Add both totals, and take that number away from the next multiple of 10 (if it already is one, the answer is 0). You should get the 13th digit.
myth:
  myth: The black and white bars hold the price of the product.
  truth: The bars hold a product number, nothing more. Each shop's computer stores its own price for that number, which is why the same packet can cost different amounts in different shops.
---

## The short answer

A barcode is a number written in stripes. Each digit is turned into a pattern of black bars and white gaps of different widths.

[A scanner](scanners) shines red light across the stripes. White gaps bounce the light back, and black bars soak it up. A sensor records the flickering pattern of bright and dark, and a tiny computer turns it back into digits. Then the shop's computer looks up that number to find the product's name and price.

All of this happens in a fraction of a second, which is why a checkout queue moves faster than when a cashier typed in every price by hand.

## Morse code in the sand

In the late 1940s, an American student named Joseph Woodland was trying to find a way for grocery shops to record what they sold. Sitting on a beach in Miami, he drew the dots and dashes of [Morse code](codes-morse) in the sand with his fingers. Then he pulled them downwards into long thin and thick lines.

That was the idea. Woodland and his friend Bernard Silver patented a barcode in 1952. One of their designs was a bullseye of circles, which could be read from any direction. Scanners good enough to read it cheaply didn't exist yet, so the idea waited more than 20 years.

## Gum, June 1974

On 26 June 1974, at a supermarket in Troy, Ohio, a cashier slid a ten-pack of [chewing gum](chewing-gum) over a new scanner. It beeped. That was the first product sold using the Universal Product Code, the striped barcode Americans still see today. The packet of gum is now kept at the Smithsonian.

Most of the world, including India, uses a slightly longer version with 13 digits. The first few digits show which national barcode office gave out the number. Codes issued in India usually begin with 890. The next digits identify the company and the product.

{{story:lunchbox-dabbawala}}

## The last digit checks the others

The 13th digit is not part of the product number. It's a *check digit*, worked out from the other twelve with a simple sum. If a scanner misreads one bar, the sum no longer matches and the scanner refuses to beep. The cashier tries again.

You can do this sum yourself. Books use it too: their barcode is their ISBN number, which starts with 978. Take the example number 978030640615. The sum gives 7, and that is exactly the final digit printed on the book.

## Lines, squares and lasers

Older scanners used a red [laser](lasers) that swept across the stripes with a spinning mirror. Many newer ones are tiny [cameras](cameras-how) that photograph the whole code at once.

Ordinary barcodes can only be read in one direction and hold a short number. [QR codes](qr-codes), invented in Japan in 1994, pack information into a square grid of dots, so they can hold a whole web address. That's the kind you scan to pay at an Indian tea stall with UPI. Inside the computer, both kinds end up as [binary](binary-code), long strings of 0s and 1s.

## Barcodes everywhere

Barcodes now track parcels, airline bags, library books, hospital wristbands and medicine packets. Couriers scan a single box many times between a warehouse and your door, so they always know where it is. A painted letter on a [dabbawala](lunchbox-dabbawala)'s lunchbox and a striped label on a parcel are doing the same job: making a long address short enough to read at a glance.
