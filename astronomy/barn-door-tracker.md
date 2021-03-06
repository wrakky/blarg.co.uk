---
layout: sidebar
title: How to Build a Barn Door Tracker
heading: How to Build a Barn Door Tracker
description: Build your own Barn Door Tracker mount and take fantastic long exposure photos of the night sky without the star trails. Construction guide, parts list, photo gallery and helpful tips along the way.
pageClass: astronomy
breadcrumbs:
  - text: Astronomy
    link: /astronomy
  - text: Barn Door Tracker
sidebar:
  - barn_door_tracker
  - blog_latest
  - tools
  - tweets
  - flickr
---

<h2 id="what">What Is A Barn Door Tracker?</h2>
<p>
	A barn door tracker (also known as Haig or Scotch mount) is a camera mount used to take long exposure photographs of the night sky
	without the star trails caused by the rotation of the earth.
	It consists of two boards connected by a hinge, with a bolt which is turned to move the two boards apart or towards each other to
	counter the effects of the rotation of the earth.
</p>
<p>
	There are many types of barn door tracker. This guide is for a manual single arm version which consists of a single "arm" (board)
	and is operated manually by the user. More information on other types of barn door tracker can be
	found at <a href="http://starnamer.blogspot.co.uk/2005/09/my-single-arm-manually-driven-barn.html">Starnamers Blog</a> and a motorised version is
	detailed on
	<a href="http://petapixel.com/2013/08/10/buidling-a-diy-barn-door-tracking-mount-for-long-exposure-astrophotography/">this aticle on PetaPixel</a>.
</p>
<p>
	This guide details how I went about building my own tracker, and some of the useful information I discovered whilst doing so which will
	hopefully save you time when you build yours.
</p>

<h2 id="how">How It Works</h2>
<p>
	As mentioned above, the barn door tracker works by joining together two boards and then moving them apart at a specific rate. The hinge
	joining both boards is pointed at the celestial pole and a drive bolt is turned to move the top board which counters the rotation of the earth
	and prevents star trails. The diagram below gives a basic indication of the finished structure.
</p>
<div class="thumbnail">
	<img src="{{ site.baseurl }}/assets/images/astronomy/barn-door-tracker.png" title="Barn door tracker example" alt="Barn door tracker example">
</div>
<p>
	The most important part of the barn door tracker is the radius of the curvature - the distance between the drive bolt and hinge.
	This is determined by the thread size of your drive bolt and will control the rate at which the top board raises for every turn of the drive bolt.
	The formula to calculate this distance is below (where RPM is the revolutions per minute of the drive bolt and TPI is the screw threads per inch):
	<br><br>
	<code>Distance (inches) = RPM / ((2&pi; / 1436) * TPI)</code>.
	<br><br>
	I have created a tool which will automatically calculate the distance needed in either inches, cm or mm and is also preset for the
	standard metric screw sizes such as M6 and M8 where the thread size is not obvious.
</p>
<a href="{{ site.baseurl }}/astronomy/barn-door-tracker-calculator" class="btn btn-primary">View the Barn Door Tracker Calculation Tool</a>

<h2 id="build">Build Process</h2>
<p>
	Building is relatively straight forward. I have listed all the parts I used to build mine at the bottom of the page
	but it is essentially a couple of solid boards that will not bend, a hinge and a few screws and nuts.
	<ol>
		<li>
			<strong>Drill Holes</strong>
			<br>
			Firstly you want to drill the holes in the boards. The bottom board will have two holes, one for for connecting your tripod to the mount
			and another one for the drive bolt to go through. The drive bolt position needs to be calculated (as described above) but the tripod hole can
			go anywhere, although near the hinge is a good idea to give the drive bolt plenty of clearance.
			<br>
			The top board will have a hole for the tripod head to be secured through. This can also go anywhere but closer to the hinge make the unit
			more stable.
		</li>
		<li>
			<strong>Tripod Hole</strong>
			<br>
			Take the bottom board and drill the hole that will be used for the tripod to attach itselt to the mount. This can go anywhere on the board
			but I would recommend putting it fairly close to where the hinge will go.
			Once drilled you will want to insert the &frac14;" BSW (Whitworth) t-nut into the under-side of it and
			make sure it is flush to the board as the tripod will be screwing into this and you want it as secure as possible.
			Remember the tripod will be tilting (sometimes at very steep angles) and the entire mount and camera will be supported through this
			connection so you want it to be rock solid. A small screw coming in from the top to tighten the t-nut against the bottom of the board
			help with this.
		</li>
		<li>
			<strong>Drive Bolt Hole</strong>
			<br>
			Next step is to make the hole for the drive bolt in the bottom board. As described above, the hole needs to be a certain distance from the
			hinge and this distance depends on the type of drive bolt you are using. Once the hole has been made, insert the drive bolt t-nut
			into the hole and make sure it is secure.

		</li>
		<li>
			<strong>Tripod Head Hole</strong>
			<br>
			Make a hole in the top board for the tripod head to sit on. The hole will need to be big enough to fit a &frac38;" screw through it.
		</li>
		<li>
			<strong>Join Hinges</strong>
			<br>
			Once all the holes have been made it is time to join the boards together with a hinge. I used a long piano hinge and cut it to size. You can use
			multiple smaller hinges but the one single long hinge will be more secure and you won't have to worry about exactly lining up all the smaller ones.
		</li>
		<li>
			All that is left to do it attach the mount head to the top board and insert your drive bolt and you're done with the bare essentials.
			You now have a working barn door tracker which you can go out and use right away.
		</li>
		<li>
			<strong>Additional Extras</strong>
			<br>
			The following enhancements will make using your barn door tracker easier:
			<ul>
				<li>
					Attach a small tube along the outside of the hinge (I used an empty biro). You can use this to look through when doing polar
					alignment which will make things more accurate.
				</li>
				<li>
					In addition to the tube, holding a laser pen against the hinge will point a straight beam in the same direction of the hinge
					which can make polar aligning easier.
				</li>
				<li>
					Find an old CD, DVD or anything circular and mark on it every 30&deg;. Attach this to the bottom of the drive bolt
					and also attach something to the bottom board which points to the disc (I used a straw).
					Every mark on the disc represents 5 seconds of movement which will make time keeping whilst turning the drive bolt easier.
				</li>
			</ul>
		</li>
	</ol>
</p>

<h2 id="screws">A Tale of Two Screws</h2>
<p>
	You will need specific sized screws and nuts for attaching the mount head and tripod to you barn door tracker.
	Thankfully standards apply so most tripods and cameras will have the same sizes. However, if you are not in the USA,
	these pieces are can be hard to come by as they are in the old inch format and not the metric formats that most non-US
	countries have now adopted so don't expect to walk into any hardware store in the UK and pick these up. I found the best source to
	be either <a href="http://www.ebay.co.uk/">eBay</a> or <a href="http://www.modelfixings.co.uk/">ModelFixings.co.uk</a>.
</p>
<h4>Attaching the Tripod to the Tracker</h4>
<p>
	To attach your tripod to the tracker you will need a <strong>&frac14;" BSW (Whitworth)</strong> T-nut. The bolt on the top of the
	tripod will screw and secure into this as it would when attaching your camera to the tripod.
	UNC thread could also work here at a pinch but they have a 60&deg; thread instead of the 55&deg; thread on
	the Whitworth so could possibly damage the thread on you tripod.
</p>
<h4>Attaching the Mount Head to the Tracker</h4>
<p>
	To attach your mount head to the tracker you will need a <strong>&frac38;" UNC</strong> screw. You will want the length to be
	long enough to go through the top board of the tracker and into the mount head, but not so long that it will reach past the end of the screw socket.
	I found that 1&frac12; inches worked for me but it depends on the depth of the screw socket on your mount head and the thickness of the board
	you have used.
</p>

<h2 id="use">How To Use Your Barn Door Tracker</h2>

<h3>Polar Alignment</h3>
<p>
	In order to use the tracker, it will need to be polar aligned.
	Polar alignment is the process of aligning the hinge of the tracker with the north or south celstial pole (depending on your location). This will counter
	the effects of the earth's rotation as you move the tracker.
	Polar alignment is much easier in the northern hemisphere due to the pole star, Polaris, being easily visible to the naked eye and only
	&frac34;&deg; from the north celestial pole. Southern hemisphere users have a harder job as there is no easily visible star to use as a reference -
	Sigma Octantis is the closest at about 1&deg; distance.
</p>
<p>The following links can provide more information on polar alignment:</p>
<ul>
	<li><a href="http://en.wikipedia.org/wiki/Polar_alignment">Wikipedia article on polar alignment</a></li>
	<li><a href="http://www.astro-baby.com/simplepolar/simple_polar_alignment.htm">Northern hemisphere guide by Asto Baby</a></li>
	<li><a href="http://www.celestron.com/c3/support3/index.php?_m=knowledgebase&_a=viewarticle&kbarticleid=1734">Southern hemispeher guide by Celestron</a></li>
	<li><a href="https://www.google.com/search?q=polar+alignment">Google search on polar alignment</a></li>
</ul>

<h3>Camera Settings</h3>
<p>The following camera settings are recommended to get the most out of the barn door tracker:</p>
<ul>
	<li>
		<strong>Shutter Speed:</strong>
		As long as possible - or use Bulb mode if you have a remote shutter control. After all, this is why you want to use a barn door tracker
		in the first place!
	</li>
	<li>
		<strong>Aperture:</strong>
		Open all the way - select the lowest F-Stop number to maximise the amount of light captured by the camera.
	</li>
	<li>
		<strong>ISO:</strong>
		Set this to the highest value your camera can handle without generating extra noise. 800 is a good place to start. The higher the ISO,
		the more sensitive the sensor will be to light.
	</li>
	<li>
		<strong>Focus:</strong>
		Enable manual focus and set to infinity.
	</li>
	<li>
		<strong>Mirror Lock:</strong>
		Enable mirror lock to reduce the vibrations caused by the camera mirror moving into position. If your camera does not support this,
		placing a dark cloth over the lens just before starting the exposure will also acheive the same effect.
	</li>
	<li>
		<strong>Picture Format</strong>
		Shoot in RAW format if you are planning on doing some post processing. This format is not processed by the camera so
		retains the full data for each shot but will also take up a lot more space on your memory card.
	</li>
</ul>

<h3>Tracker Operation</h3>
<p>
	Depending on the focal length you are using, you don't need to continuously move the drive bolt. The following is a rough guide to
	how often you need to operate the tracker and how long it will be effective for:
</p>
<ul>
	<li>
		<strong>Wide angle lens (30mm or less):</strong>
		&frac12; turn every 30 seconds - effective for about 15 minutes
	</li>
	<li>
		<strong>Normal lens (35-65mm):</strong>
		&frac14; turn every 15 seconds - effective for about 10 minutes
	</li>
	<li>
		<strong>Zoom lens (70mm or more):</strong>
		1/12 turn every 5 seconds - effective for about 5 minutes
	</li>
</ul>
<p>
	These times may not seem very long compared to a professional tracking system but they can be very effective, especially when multiple
	exposures are taken and then "stacked" using software such as Photoshop or automated tools like <a href="http://www.astronomie.be/registax/">Registax</a>
	or <a href="http://deepskystacker.free.fr/">DeepSkyStacker</a>.
</p>

<h2 id="gallery">Gallery</h2>
<h3>Barn Door Tracker</h3>
<p>Here are some photos of my completed barn door tracker. The larger versions of each photo are annotated with the part numbers in the Parts section below.</p>
<div class="row">
	<div class="col-xs-6 col-sm-3 col-md-2">
		<a href="{{ site.baseurl }}/assets/images/astronomy/barn-door-1.jpg" class="thumbnail" rel="gallery" title="Barn door tracker">
			<img alt="Blarg Car" src="{{ site.baseurl }}/assets/images/astronomy/barn-door-1_tn.jpg">
		</a>
	</div>
	<div class="col-xs-6 col-sm-3 col-md-2">
		<a href="{{ site.baseurl }}/assets/images/astronomy/barn-door-2.jpg" class="thumbnail" rel="gallery" title="Alernative angle">
			<img alt="Blarg Raptor" src="{{ site.baseurl }}/assets/images/astronomy/barn-door-2_tn.jpg">
		</a>
	</div>
	<div class="col-xs-6 col-sm-3 col-md-2">
		<a href="{{ site.baseurl }}/assets/images/astronomy/barn-door-3.jpg" class="thumbnail" rel="gallery" title="Close up of the hinge">
			<img alt="Blarg Cavemen" src="{{ site.baseurl }}/assets/images/astronomy/barn-door-3_tn.jpg">
		</a>
	</div>
	<div class="col-xs-6 col-sm-3 col-md-2">
		<a href="{{ site.baseurl }}/assets/images/astronomy/barn-door-4.jpg" class="thumbnail" rel="gallery" title="Drive bolt and turning disc">
			<img alt="Owl Blarg" src="{{ site.baseurl }}/assets/images/astronomy/barn-door-4_tn.jpg">
		</a>
	</div>
	<div class="col-xs-6 col-sm-3 col-md-2">
		<a href="{{ site.baseurl }}/assets/images/astronomy/barn-door-5.jpg" class="thumbnail" rel="gallery" title="Opened up showing internal screws">
			<img alt="Keep Calm" src="{{ site.baseurl }}/assets/images/astronomy/barn-door-5_tn.jpg">
		</a>
	</div>
	<div class="col-xs-6 col-sm-3 col-md-2">
		<a href="{{ site.baseurl }}/assets/images/astronomy/barn-door-6.jpg" class="thumbnail" rel="gallery" title="View from below">
			<img alt="Blarg Cat" src="{{ site.baseurl }}/assets/images/astronomy/barn-door-6_tn.jpg">
		</a>
	</div>
</div>

<h3>Photos</h3>
<p>
	Here is a photo taken with the barn door tracker. It is a composite of 23 exposures 60 seconds each and then stacked together. More photos
	will be added once the weather improves!
</p>
<div class="row">
	<div class="col-xs-6 col-sm-3 col-md-2">
		<a href="//farm9.staticflickr.com/8151/7638506470_1e93082ff3_b.jpg" class="thumbnail" rel="gallery" title="Barn door tracker photo">
			<img alt="Blarg Car" src="//farm9.staticflickr.com/8151/7638506470_1e93082ff3_n.jpg">
		</a>
	</div>
</div>

<h2 id="parts">Parts</h2>

<p>
	These are the parts I used to build my barn door tracker along with sources and prices. The total cost came to just
	under &pound;35; I also used a saw, phillips screwdriver and a drill during the construction process.
</p>

<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th>#</th>
			<th>Part</th>
			<th>Source</th>
			<th>Price</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>
				2 x Wood boards
				<br>
				<small class="text-muted">
					I used 300x200mm pieces but any size can work
					<br>
					(providing there is enough length for the drive bolt and they don't bend!)
				</small>
			</td>
			<td>Old coffee table</td>
			<td>-</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Piano hinge</td>
			<td>Father-in-law</td>
			<td>-</td>
		</tr>
		<tr>
			<td>3</td>
			<td>8 x screws for piano hinge</td>
			<td>Toolbox</td>
			<td>-</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Ball &amp; socket tripod head</td>
			<td>Amazon</td>
			<td>&pound;27.95</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Tripod screw - &frac38;" x 1&frac12;" UNC</td>
			<td>modelfixings.co.uk</td>
			<td>
				&pound;0.56
				<br>
				<small class="text-muted">(Pack of 4 for &pound;1.50 + &pound;0.75 postage)</small>
			</td>
		</tr>
		<tr>
			<td>6</td>
			<td>
				Tripod mount T-nut - &frac14;"-20 UNC (3 prong)
			</td>
			<td>eBay</td>
			<td>
				&pound;0.58
				<br>
				<small class="text-muted">(Pack of 5 for &pound;1.50 + &pound;1.40 postage)</small>
			</td>
		</tr>
		<tr>
			<td>7</td>
			<td>
				Tripod mount t-nut securing screw - &frac14;" BSW x &frac38;"
				<br>
				<small class="text-muted">Securing the tripod connecting t-nut from the other size mades it more secure</small>
			</td>
			<td>eBay</td>
			<td>
				&pound;0.27
				<br>
				<small class="text-muted">(Pack of 10 for &pound;2.10 + &pound;0.60 postage)</small>
			</td>
		</tr>
		<tr>
			<td>8</td>
			<td>
				Empty biro tube
				<br>
				<small class="text-muted">Used for polar alignment</small>
			</td>
			<td>Amazon</td>
			<td>-</td>
		</tr>
		<tr>
			<td>9</td>
			<td>Drive bolt - 100mm M8 coach bolt</td>
			<td>eBay</td>
			<td>
				&pound;0.73
				<br>
				<small class="text-muted">(Pack of 4 for &pound;2.90)</small>
			</td>
		</tr>
		<tr>
			<td>10</td>
			<td>Drive bolt T-nut - M8 (4 prong)</td>
			<td>eBay</td>
			<td>
				&pound;0.22
				<br>
				<small class="text-muted">(Pack of 10 for &pound;0.99 + &pound;1.25 postage)</small>
			</td>
		</tr>
		<tr>
			<td>11</td>
			<td>Drive bolt Cap Nut - M8</td>
			<td>eBay</td>
			<td>
				&pound;0.10
				<br>
				<small class="text-muted">(Pack of 10 for &pound;1.03)</small>
			</td>
		</tr>
		<tr>
			<td>12</td>
			<td>
				Blank DVD
				<br>
				<small class="text-muted">Used to make turning the drive bolt easier</small>
			</td>
			<td>Already owned</td>
			<td>-</td>
		</tr>
		<tr>
			<td>13</td>
			<td>
				Straw
				<br>
				<small class="text-muted">Used to point to the turning DVD</small>
			</td>
			<td>Already owned</td>
			<td>-</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<th></th>
			<th></th>
			<th></th>
			<th>Total Cost: &pound;30.41</th>
		</tr>
	</tfoot>
</table>

<h2 id="resources">Useful Resources</h2>
<h3>Other Barn Door Tracker Guides</h3>
<ul>
	<li>
		<a href="http://www.astropix.com/BGDA/SAMPLE2/SAMPLE2.HTM">Constructing a Barn-Door Tracker</a>
	</li>
	<li>
		<a href="http://petapixel.com/2013/08/10/buidling-a-diy-barn-door-tracking-mount-for-long-exposure-astrophotography/">
			Building a DIY Barn Door Tracking Mount for Long-Exposure Astrophotography
		</a>
	</li>
	<li>
		<a href="http://starnamer.blogspot.co.uk/2005/09/my-single-arm-manually-driven-barn.html">
			Starnamer's Single-Arm Manually-Driven Barn Door Star Tracker
		</a>
	</li>
	<li>
		<a href="http://www.garyseronik.com/?q=node/52">
			Gary Seronik's Motorised Guide with Curved Drive Bolt
		</a>
	</li>
	<li>
		<a href="http://brownian-walk.blogspot.co.uk/2012/08/a-simple-but-elegant-barn-door-tracker.html">
			A Tracker Built using a metal hinge
		</a>
	</li>
	<li>
		<a href="http://www.philharrington.net/scotch.htm">
			Phil Harrington's Guide
		</a>
	</li>
	<li>
		<a href="http://www.astronomyboy.com/barndoor/index.shtml">
			Astronomy Boy's Barn Door Tracker
		</a>
	</li>
	<li>
		<a href="http://stargazerslounge.com/forum/18-diy-astronomer/">
			Stargazers Lounge DIY Astronomy Forum
		</a>
	</li>
</ul>

<h3>Image Processing</h3>
<ul>
	<li><a href="http://www.photoshop.com/">Adobe Photoshop</a></li>
	<li><a href="http://www.gimp.org/">Gimp</a> - free image manipulation software</li>
	<li><a href="http://www.astronomie.be/registax/">Registax</a> - free software for alinginment, stacking and processing images</li>
	<li><a href="http://deepskystacker.free.fr/english/index.html">DeepSkyStacker</a> - free software for processing and stacking images</li>
</ul>