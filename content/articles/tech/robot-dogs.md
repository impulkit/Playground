---
id: robot-dogs
title: How do walking robots keep their balance?
short: Walking robots
subject: tech
hook: Engineers sometimes test walking robots by kicking them. A good one stumbles sideways, catches itself, and carries on as if nothing happened.
certainty: sure
surprising_fact: Many walking robots learn to walk in a computer game-like world first, where thousands of virtual copies fall over millions of times before the real robot takes a single step.
facts:
- "Spot by Boston Dynamics: went on sale in 2020"
- "Balance sensor: an IMU, which measures tilt and turning"
- "Indian Army robotic \"mules\": 100 delivered in 2024"
- "Spot at Pompeii: began patrolling the ancient ruins in 2022"
- "Honda's ASIMO humanoid: first shown in 2000, retired in 2022"
links:
- to: robots
  type: deeper
  why: What counts as a robot?
- to: ears-hear
  type: surprise
  why: How does your inner ear keep you from falling over?
- to: bicycle-balance
  type: surprise
  why: Why doesn't a moving bicycle fall over?
- to: donkeys-mules
  type: home
  why: Why have mules carried loads in the mountains for centuries?
- to: neural-networks
  type: deeper
  why: How does a computer learn by trial and error?
- to: pompeii
  type: surprise
  why: What happened to the people of Pompeii?
sources:
- Boston Dynamics, Spot product information.
- ETH Zurich Robotic Systems Lab, ANYmal research (Science Robotics, 2022).
- The Tribune (India), Hi-tech robots inducted into Army (2024).
interactive:
  t: predict
  prompt: Which sensor does a walking robot rely on most to know if it is tipping over?
  options:
  - t: A tilt-and-turn sensor called an IMU
    ok: true
  - t: A microphone listening for falling sounds
  - t: A thermometer in each leg
  reveal: An inertial measurement unit (IMU) contains tiny gyroscopes and accelerometers that measure how the robot's body is tilting, turning and speeding up, hundreds of times a second. It does a job similar to the balance organs in your inner ear.
try_this: Stand on one foot with your eyes open and count how long you can stay steady. Then try with your eyes closed. Most people wobble much more. Your brain mixes signals from your eyes, inner ears and feet to balance, and walking robots also mix cameras, tilt sensors and leg sensors.
myth:
  myth: Walking robots keep their balance by holding perfectly still and stiff.
  truth: Good walking robots balance by moving all the time. Like people, they make constant tiny adjustments, shifting where they put their feet to stay under their body as it tips.
---

## The short answer

Walking robots balance a lot like we do. They constantly measure how their body is tilting and moving, then shift where they place their feet to stay upright. A tilt sensor, cameras and sensors in each joint feed a computer, which works out hundreds of times a second where each foot should go next.

Four-legged robots, often called robot dogs, are easier to balance than two-legged ones. With four legs, they can keep three on the ground while one moves, like a tripod. To move quickly, though, they trot with only two feet down at a time, and then they must keep catching their own fall, just as a running animal does.

## The robot's inner ear

You have a balance organ in each inner ear: tiny loops filled with fluid that sloshes when your head moves. Your brain uses it, along with your eyes and the feel of your feet, to stay upright.

A walking robot has something similar called an IMU, or inertial measurement unit. It is a small chip with gyroscopes, which sense turning, and accelerometers, which sense speeding up and the pull of gravity. Motors in each joint also report the angle of the leg and how hard it is pushing. Cameras, and often laser scanners, show the ground ahead, so the robot can spot a step or a hole before it gets there. All of this happens without the robot "thinking" about it in words, much as you don't think about which muscles to tighten when a bus brakes suddenly.

## Falling forward, on purpose

Walking is controlled falling. When you take a step, you tip forward and put a foot out to catch yourself. Robots that walk dynamically do the same.

The key idea is to keep the robot's centre of mass, its balance point, over the area between its feet, or to move the feet quickly under it. When someone shoves a robot sideways, it doesn't stiffen. It takes quick steps in the direction it's being pushed, the way you would on a bumpy bus. Engineers at Boston Dynamics famously filmed people kicking their robots to show how well they recovered.

{{story:bicycle-balance}}

## Learning in a virtual world

Writing exact rules for every rock, slope and slippery floor is almost impossible. So many teams now let robots learn. They build a computer simulation of the robot and set thousands of virtual copies walking over virtual hills, stairs and ice. Each copy gets rewards for staying upright and moving forward, and slowly improves through trial and error.

Training that would take years in the real world takes hours on fast computers. The lessons are then loaded into the real robot. In 2022, researchers at ETH Zurich in Switzerland used this method to train their four-legged robot, ANYmal. It then hiked up a forested Swiss mountain trail, over roots, mud and loose stones, slightly faster than the time suggested for human walkers.

## Robot dogs at work

Boston Dynamics began selling its robot dog, Spot, in 2020. Companies use it to inspect factories, oil rigs and power stations, reading dials and spotting leaks in places that are dangerous or dull for people. In 2022, a Spot robot began patrolling the ancient ruins of [Pompeii](pompeii) in Italy, checking tunnels for damage and signs of illegal digging. Cheaper robot dogs from companies such as China's Unitree are now used in schools and labs.

In 2024, the Indian Army took delivery of 100 four-legged robotic "mules" that can carry supplies and keep watch in the mountains, where real [mules](donkeys-mules) have worked for centuries. Two-legged [robots](robots) are harder. Honda's ASIMO walked and climbed stairs from 2000 until it retired in 2022, and new humanoids now try to walk the way people do.
