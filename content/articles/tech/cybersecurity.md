---
id: cybersecurity
title: How do hackers break in, and how do we stop them?
short: Cybersecurity
subject: tech
hook: Most break-ins don't start with a genius typing code in a dark room. They start with a friendly-looking message that tricks someone into clicking.
certainty: sure
surprising_fact: In 1988 a student's experiment accidentally slowed or crashed thousands of computers, roughly a tenth of the internet at the time, in a single day.
facts:
- Most common trick: phishing, fake messages that steal passwords
- Morris worm: 1988, one of the first worms to spread across the internet
- WannaCry attack: May 2017, about 150 countries hit
- India's cyber fraud helpline: 1930
- Best simple defences: updates, strong passphrases, two-step login
links:
- to: passwords
  type: deeper
  why: What makes a password really strong?
- to: online-safety
  type: home
  why: How can you stay safe online?
- to: encryption
  type: deeper
  why: How does encryption keep secrets?
- to: locks-keys
  type: surprise
  why: How does a lock know the right key?
- to: cipher-codes
  type: surprise
  why: How did people send secret messages long ago?
- to: internet-how
  type: deeper
  why: How does the internet actually work?
- to: privacy
  type: deeper
  why: Who gets to see your information?
- to: alan-turing
  type: surprise
  why: Who cracked the codes of the Second World War?
sources:
- Indian Computer Emergency Response Team (CERT-In), Ministry of Electronics and IT, Government of India.
- U.S. Cybersecurity and Infrastructure Security Agency (CISA), Secure Our World guidance.
- U.S. Federal Bureau of Investigation, The Morris Worm (FBI history).
interactive:
  t: predict
  prompt: Security experts say one simple step blocks the vast majority of attempts to break into online accounts. Which one?
  options:
  - t: Changing your password every day
  - t: Turning on two-step login, so a code is also needed
    ok: true
  - t: Never using the internet after dark
  reveal: With two-step login, a stolen password alone is not enough. The attacker also needs a code from your phone or a security key. Companies such as Microsoft and Google report that it stops most automated account attacks.
try_this: Play "spot the phish" with a family member. Each of you writes three short fake messages, such as "You won a free phone, click here", mixed with a real one from school. Swap and hunt for clues like spelling mistakes, rushing you, strange web addresses or requests for passwords.
myth:
  myth: Hackers mostly break in by cracking codes with super-powerful computers.
  truth: Most attacks rely on people. Tricking someone into clicking a link, sharing a password or opening a bad file is far easier than breaking strong encryption.
---

## The short answer

Hackers who break in usually look for the easiest way through. Often that is a person. They send fake messages, called phishing, that trick someone into typing a password into a fake website. Or they guess weak passwords, or slip in through software that hasn't been updated.

Cybersecurity is the work of keeping computers, phones and networks safe from these attacks. For ordinary people, a few habits block most attacks: keep devices updated, use long and different [passwords](passwords), turn on two-step login, and stop and think before clicking links.

## Fooling people, not machines

[Phishing](tech-spam-email) gets its name from "fishing": the attacker throws out bait and waits for a bite. A message might look as if it is from a bank, a delivery company or even a school. It says something urgent, like "Your account will be closed today". The link leads to a fake page that looks just like the real one.

This kind of trickery is called social engineering. It works because people are busy, helpful and sometimes scared. That is why the best defence is often simply to slow down and check.

## Doors left open

Software is written by people, and people make mistakes. Some mistakes create holes that attackers can use. When companies find a hole, they send out a fix, called a patch, in an update. Devices that skip updates stay open.

In May 2017 a program called WannaCry spread through computers that had missed one such update. It locked files and demanded payment in [Bitcoin](blockchain) to release them. It hit hospitals, railways and businesses in about 150 countries. In Britain, some hospitals had to turn away patients. Attacks like this, which lock files and demand a ransom, are called ransomware.

{{story:locks-keys}}

## The worm of 1988

One of the first big internet attacks was an accident, at least partly. In November 1988 Robert Morris, a student at Cornell University, released a program meant to spread quietly and count how many computers were online. A mistake made it copy itself again and again. Thousands of computers slowed to a crawl or crashed.

Morris became the first person convicted under a new US computer crime law. He later became a professor at the Massachusetts Institute of Technology. A floppy disk holding the worm's code is now kept at the Computer History Museum in California.

## Locks, keys and guards

Defenders use many layers, like a castle with walls, gates and guards. Firewalls filter traffic coming into a network. Antivirus software looks for known bad programs. [Encryption](encryption) scrambles data so stolen files can't be read.

Companies also hire ethical hackers, people paid to try breaking in so holes can be fixed first. Many firms run "bug bounty" programmes that reward anyone who reports a security flaw responsibly. Some teenagers have earned money this way.

## Who to call

Every country now has teams that respond to cyber attacks. In India, CERT-In, part of the Ministry of Electronics and IT, warns about new threats. If someone is cheated online, they can call the national helpline 1930 or report it on the government's cybercrime website. In the USA, the Cybersecurity and Infrastructure Security Agency plays a similar role.

If anything online ever feels wrong, such as a scary message or a request for money or passwords, tell a parent or teacher straight away. Good [online safety](online-safety) is mostly about asking before acting.
