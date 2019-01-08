---
# Metadata
title: "Chalmers Signal"
type: "Electronics + Design + Web"

# Thumbnails
thumbnail: "./thumbnail.png"

# Options
path: "/chalmerssignal/"
order: 2
---

<article role="article">

The Chalmers Signal is an internet enabled dial designed for reporting shelter occupancy.

I've been experimenting with internet buttons. Here is an image of the internet button at St. Felix that sends me an email when they run out of [chalmers cards](https://hackmd.io/s/S1wOomaRX#). It works well too! The shelter staff tell me they get a kick out of pressing a button to have me show up a few hours later.

</article>

![Chalmers Signal](images/signalAtStFelix.jpg)


<article role="article">

The button is a rotating switch. The green light means space available, the yellow means nearly full, and red means full. An LED lights up when the switch’s selector aligns with it.

The switch could live behind a reception desk of a main office, like the one pictured below (modeled after the desk at St. Felix):

</article>

![Chalmers Signal illustration](images/chalmersSignalIllustration.png)

<article>

The rotating selector switch rests on a desk, connected to power. A more visible signal-light is hung from the wall. The wall mounted light is so that everyone in the office has line of sight to whatever status they're broadcasting.

Finally, the switch would push it's status to a database and website frontend based on Filip Stepien's open source [Shelter Watch](https://shelter.filipstepien.com/). Parts of the frontend might also be borrowed from Civic Tech Toronto's [BaseCount](basecount.netlify.com).

The switch's design is intended to be inexpensive and to be assembled in a makerspace with a lasercutter and an electronics bench (e.g. [HackLab.TO](Hacklab.to) -- I am a member). I expect the material cost of each switch to be ~$20.
