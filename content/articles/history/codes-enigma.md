---
id: codes-enigma
title: How was the Enigma code cracked?
short: Enigma code
subject: history
hook: The German Enigma machine could be set up in about 159 quintillion ways, and every night at midnight its settings changed.
certainty: sure
surprising_fact: Enigma was first broken in 1932 by Polish mathematicians, seven years before the Second World War began and long before Bletchley Park.
facts:
- "Invented by: Arthur Scherbius, Germany, patented 1918"
- "Possible army settings: about 159 quintillion (159 followed by 18 zeros)"
- "First broken: by Polish codebreakers, December 1932"
- "Bletchley Park staff by 1945: about 10,000, around three-quarters women"
- "Kept secret until: the 1970s"
links:
- to: alan-turing
  type: deeper
  why: What else did Alan Turing invent?
- to: cipher-codes
  type: deeper
  why: How do secret codes and ciphers work?
- to: cryptography-maths
  type: surprise
  why: How does maths keep your messages secret today?
- to: world-war-two
  type: home
  why: Why did the Second World War start?
- to: first-computers
  type: surprise
  why: What were the first computers like?
- to: encryption
  type: surprise
  why: How does your phone lock away your chats?
- to: spies-india
  type: home
  why: Who were India's famous spies?
sources:
- Bletchley Park Trust, history of Enigma and the codebreakers.
- National Museum of Computing (UK), the Bombe and Colossus.
- Britannica, Enigma.
interactive:
  t: predict
  prompt: Enigma had one small weakness that helped codebreakers a lot. What was it?
  options:
  - t: A letter could never be turned into itself
    ok: true
  - t: It always used the same setting on Sundays
  - t: It couldn't write the letter Z
  reveal: Because of how the wiring looped back, an A could become any letter except A. Codebreakers used this to rule out wrong guesses. If they guessed a word was in a message, they knew it couldn't sit where any of its letters matched.
try_this: Make a simple code wheel. Cut two paper circles, one smaller than the other, and write the alphabet around the edge of each. Pin them together at the centre with a split pin so they turn. Turn the inner wheel three letters and use it to send a friend a secret message.
myth:
  myth: Alan Turing built the first computer to crack Enigma.
  truth: Turing designed the Bombe, an electrical machine with spinning drums that tested Enigma settings. It was not a computer. The Colossus computers at Bletchley Park, built by engineer Tommy Flowers, attacked a different German code called Lorenz.
---

## The short answer

Enigma was a typewriter-like machine used by Germany's military in the Second World War to scramble messages. Press a key and a different letter lit up. Its spinning wheels moved with each key press, so the code changed with every letter.

Germany believed Enigma could not be broken. But in 1932, Polish mathematicians cracked an early version using clever maths. Just before the war, they shared their secrets with Britain and France. At Bletchley Park in England, thousands of codebreakers, including [Alan Turing](alan-turing), built machines called Bombes to find each day's settings. By the middle of the war, they were reading many German messages, sometimes within hours.

## A machine with billions of choices

An Enigma looked like a typewriter in a wooden box. Inside were three rotors, wheels with 26 contacts on each side, wired in a jumbled way. When you pressed a key, electricity ran through the rotors and lit up a different letter. Then the first rotor clicked forward one step, changing the whole path.

At the front was a plugboard that swapped pairs of letters, adding even more mixing. With all the choices of rotors, starting positions and plugs, an army Enigma had about 159 quintillion possible settings. Checking them one by one, even at one per second, would take far longer than the age of the universe.

## The Polish breakthrough

In the early 1930s, three young Polish mathematicians, Marian Rejewski, Jerzy Różycki and Henryk Zygalski, took on Enigma. Rejewski used a branch of maths about rearranging things to work out the wiring of the rotors. By December 1932, Poland could read some German messages.

In July 1939, weeks before Germany invaded Poland, they handed copies of Enigma and their methods to British and French codebreakers. Without that gift, Bletchley Park would have started almost from nothing.

{{story:cryptography-maths}}

## Bletchley Park and the Bombe

Bletchley Park was a country house north of London. By 1945, about 10,000 people worked there, around three-quarters of them women. They included mathematicians, chess players, crossword fans and linguists. Some were recruited after solving a newspaper crossword quickly.

Turing and Gordon Welchman designed the British Bombe, a cupboard-sized machine with rows of spinning drums. Codebreakers fed it a guessed word, called a crib. German messages often contained predictable phrases, such as weather reports. The Bombe raced through settings that could match, and threw out impossible ones. Each day, the team then tested the survivors by hand. Many staff were in their late teens or early twenties, working in wooden huts in shifts round the clock.

## Help from mistakes and captures

Enigma's design had a flaw: no letter could ever become itself. Lazy operators made it worse by using easy starting positions, like ABC, or repeating the same phrases daily.

Navies helped too. In May 1941, British sailors boarded a sinking German submarine, U-110, and grabbed its codebooks and settings sheets. The German navy later added a fourth rotor, which locked out Bletchley for most of 1942 until new captures and faster Bombes helped them catch up.

## A secret kept for 30 years

Information from Enigma, code-named Ultra, helped the Allies find submarines in the Atlantic and plan for D-Day in 1944. Some historians think it shortened the [Second World War](world-war-two) by two years or more, though others think the effect is hard to measure.

After the war, everyone was sworn to secrecy. Many codebreakers never told their families. The story came out only in the 1970s. And the strangest part? A different code-breaking project at Bletchley led to Colossus, one of the world's [first computers](first-computers), and today every phone uses far stronger [encryption](encryption) than Enigma ever had.
