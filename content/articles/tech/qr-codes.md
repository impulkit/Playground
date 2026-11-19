---
id: qr-codes
title: How does a QR code work?
short: QR codes
subject: tech
hook: QR codes were invented to keep track of car parts in a Japanese factory. Now they sit on every chai stall in India.
certainty: sure
surprising_fact: A QR code can still be read even when up to about 30 percent of it is torn, smudged or covered by a logo.
facts:
- Invented: 1994, in Japan
- Inventor: Masahiro Hara at Denso Wave
- QR stands for: Quick Response
- Smallest size: 21 × 21 squares
- Largest size: 177 × 177 squares, holding about 7,000 digits
links:
- to: barcodes
  type: deeper
  why: How do supermarket scanners read stripes?
- to: binary-code
  type: deeper
  why: How can everything be written in 0s and 1s?
- to: upi-payments
  type: home
  why: How does UPI send money in seconds?
- to: japan-culture
  type: surprise
  why: What is everyday life like in Japan?
- to: online-safety
  type: deeper
  why: How can you tell if a link is a trick?
- to: cars-history
  type: surprise
  why: Who built the first car?
- to: nfc-tap
  type: deeper
  why: How does tapping a card pay without a PIN?
sources:
- Denso Wave, History of QR Code (qrcode.com).
- Encyclopaedia Britannica, QR code.
interactive:
  t: predict
  prompt: Why does a QR code have three big squares in its corners?
  options:
  - t: So the camera can find the code and tell which way up it is
    ok: true
  - t: They hold the most important part of the message
  - t: They are the company's logo
  reveal: The three corner squares are called finder patterns. They let a camera spot the code instantly, from any angle, and work out which way it is turned. The missing fourth corner shows which way is up.
try_this: Make your own secret grid code on squared paper. Draw a 5 by 5 box. Shade squares to stand for 1 and leave them white for 0. Agree with a friend that each row of five squares is a number, then send each other messages and decode them.
myth:
  myth: Scanning a QR code is always safe.
  truth: A QR code is just a hidden link or message. Scammers sometimes stick fake codes over real ones, leading to fake websites or payment requests. Check where a code leads before you tap, and ask an adult if you aren't sure.
---

## The short answer

A QR code is a square grid of black and white blocks. Each block is like one bit in [binary](binary-code): black can mean 1, white can mean 0. Together, the blocks spell out a message, often a web address or a payment address.

When you point your phone camera at a QR code, software finds the three big corner squares, works out the code's size and angle, and reads the pattern of blocks. It then turns those 1s and 0s back into letters and numbers. All of that takes a fraction of a second. Unlike a barcode, which holds information only from side to side, a QR code stores it both across and down. That is why it can carry so much more in a small square.

## Born on a factory floor

In the early 1990s, workers at car factories in Japan were scanning many ordinary [barcodes](barcodes) on boxes of parts, one after another. Barcodes can hold only about 20 characters, and they must be scanned in the right direction.

Masahiro Hara, an engineer at a company called Denso Wave, which made parts for Toyota, wanted something faster that held more. He has said the idea for the corner squares came while playing the board game Go, with its black and white stones on a grid. In 1994 his team released the QR code. QR stands for Quick Response.

{{story:barcodes}}

## How the code survives damage

Codes get scratched, rained on and folded. So a QR code stores its message more than once, in a clever mathematical way called error correction. Extra blocks hold clues that let the reader rebuild missing parts.

At the highest setting, about 30 percent of the code can be damaged and it still works. That is why some companies print their logo right in the middle of a QR code. The reader simply treats the logo as damage and fills in the gap. The thin white border around the code matters too. It gives the camera a clean edge, so the code doesn't blur into the pattern behind it.

Codes also come in sizes. The smallest has 21 blocks on each side. The biggest has 177 on each side and can hold about 7,000 numbers.

## A gift to everyone

Denso Wave owned a patent on the QR code, but it chose not to charge anyone for using the standard design. Anyone could print one, and any company could write software to read them.

That decision helped QR codes spread around the globe. For years they were common mainly in Japan and China. Then smartphone [cameras](cameras-how) learned to read them without any special app, and during the COVID-19 pandemic, restaurants everywhere swapped paper menus for codes on the table.

## The square on the chai stall

In India, the QR code found its biggest job. With [UPI](upi-payments), any shop can print a free QR code that carries its payment address. A tea seller, a flower vendor outside a temple and a taxi driver can all [take digital payments](digital-india) with a sheet of laminated paper.

In the United States, QR codes are common on menus, tickets and boarding passes. In India they are on autorickshaw seat backs, temple donation boxes and the side of fruit carts. A tool built to track car parts now helps millions of people buy their morning tea.
