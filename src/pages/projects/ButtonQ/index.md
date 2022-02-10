---
# Metadata
title: 'ButtonQ'
type: 'Electronics'

# Thumbnails
thumbnail: './thumbnail.svg'

# Options
path: '/mainsswitch/'
order: 3
---

<article role="article">

The ButtonQ was a project I built while I was working at TechTAP Inc. It was a product designed to help load balance cashier checkout queues at larger businesses.

<article role="article">

![diagram and closeup](images/diagram-and-closeup.png)

</article>

ButtonQ is a screen that showed advertisements to customers waiting in line to checkout. Whenever a checkout aisle was available the screen would flash the number of the available checkout aisle.

TechTAP sold the system to a supplier of grocery store lighting solutions down in Nashville.

</article>

<article role="article">

<iframe width="560" height="315" src="https://www.youtube.com/embed/B_Y43Y9PY2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</article>

<article role="article">

I got involved with the project from someone emailing the hacklab mailing board. They were looking for a way to toggle power on a light that ran on mains power. I responded back, keen to cut my teeth on my very first electronics contract job! It also seemed the perfect opportunity to test out the ESP8266, a WiFi capable microcontroller I had heard about at hacklab but never used myself.

Over a weekend myself and a TechTAP employee ( @exluto ) put together a proof of concept of the ButtonQ at Hacklab.TO!

</article>

<article role="article">

![proto relay board](images/protoBoard.jpg)

![Grind-and-Complete](images/Grind-and-Complete.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/_PzrbdlmDW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</article>

<article role="article">

After building the proof of concept TechTAP hired me on fulltime to complete the project.

I had 2 months from getting hired to put together a prototype to ship to the client. They wanted 8 buttons that could turn mains power on/off and trigger a notice on a digital signage screen.

The design brief was well defined, but we were under high time constraints.

</article>

<article role="article">

![planning1](images/planning1.png)

</article>

<article role="article">

We used off the shelf parts for everything.

The button was an arcade button hooked to an esp8266 NodeMCU devboard and mounted on a PVC project case we bought off amazon.

The mains power relay was tricky to do safely, but I found a [Controllable Four Outlet Power Relay Modules](https://www.adafruit.com/product/2935) from McMaster-Carr.

</article>

<article role="article">

![inside of old button](images/inside-old-button.JPG)

![old relays and buttons](images/old-relays-and-buttons.JPG)

</article>

<article role="article">

Another developer at TechTAP found [PiSignage](https://github.com/colloqi/piSignage), an opensource digital signage program designed for the raspberry pi. Digging into it's source code, they discovered a way to build a simple Android app that would recieve signage content from PiSignage.

Picking up from where their work left off, I architected a system which used the raspberry pi as the digital signage server, but also and MQTT server, and a fleet of esp8266's communicating to eachother and the pi over MQTT.

</article>

<article role="article">

![planning2](images/planning2.png)

![raspberry-pis](images/raspberry-pis.png)

</article>

<article role="article">

</article>

<article role="article">

I programmed all the esp8266 devices published events, like state of it's switches, when it's button's been pressed, to an MQTT topic which was routed by the raspberry pi MQTT server. Then I wrote a simple python script that listened for all the events published by the esp8266s. Whenever one of the buttons were pressed, the python script would send a payload over socketio to the custom android app that had been made by the other TechTAP developer.

I used systemd unit files to handle starting all required services on system boot.

I used a cheap OpenWRT router to handle wireless communication.

</article>

<article role="article">

![pi in action](images/pi-in-action.JPG)

</article>
