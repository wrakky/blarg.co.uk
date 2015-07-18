---
layout: sidebar
title: Barn Door Tracker Calculator
heading: Barn Door Tracker Calculator
description: Automatically calculate the radius required for your barn door tracker. Enter your drive bolt details or select from a preset list.
pageClass: astronomy
breadcrumbs:
  - text: Astronomy
    link: /astronomy
  - text: Barn Door Tracker
    link: /astronomy/barn-door-tracker
  - text: Calculator
sidebar:
  - blog_latest
  - tools
scripts:
  - /assets/js/pages/barn-door-formula.js
---

## Formula

Enter your RPM and drive bolt thread details below to calculate the distance needed between your hinge and drive bolt.

<div class="row">
	<div class="col-sm-12">
		<h4>Revolutions Per Minute</h4>
	</div>
	<div class="col-sm-2">
		<input type="number" class="form-control" id="formulaRpm" value="1" min="1">
	</div>
</div>

<div class="row">
	<div class="col-sm-6">
		<h4>Thread</h4>
		<div class="row">
			<div class="col-sm-4">
				<select id="formulaThreadType" class="form-control">
					<option value="per" selected="selected">per</option>
					<option value="pitch">pitch per</option>
				</select>
			</div>
			<div class="col-sm-4">
				<select id="formulaThreadUnit" class="form-control">
					<option value="inch" selected="selected">inch</option>
					<option value="cm">cm</option>
					<option value="mm">mm</option>
				</select>
			</div>
			<div class="col-sm-4">
				<input type="number" class="form-control" id="formulaThreadCount" value="20" min="1">
			</div>
		</div>
	</div>
	<div class="col-sm-6">
		<h4>Presets</h4>
		<select id="formulaScrew" class="form-control">
			<option value="">Select a screw</option>
			<option value="M4">M4</option>
			<option value="M5">M5</option>
			<option value="M6">M6</option>
			<option value="M8">M8</option>
			<option value="M10">M10</option>
			<option value="M12">M12</option>
		</select>
	</div>
</div>

<br>

<p><button id="formulaCalculate" type="button" class="btn btn-primary">Calculate</button></p>

<div id="formulaResult" class="well hidden">
	<h3>Distance Between Hinge and Drive Bolt</h3>
	<p><code><span id="inchesRevolutions"></span> RPM / ((2Π / 1436) * <span id="inchesThreadCount"></span> TPI) = <strong id="inchesResult"></strong></code></p>
	<p><code><span id="cmRevolutions"></span> RPM / ((2Π / 1436) * <span id="cmThreadCount"></span> TPCM) = <strong id="cmResult"></strong></code></p>
	<p><code><span id="mmRevolutions"></span> RPM / ((2Π / 1436) * <span id="mmThreadCount"></span> TPMM) = <strong id="mmResult"></strong></code></p>
</div>



<!-- Top Secret Calculations! -->
<!--<p>

	Formula = Radius (inches) = RPM / ((2Π / 1436) * TPI)
	<br><br>
	RPM = 1

	Need to match the siderial time one revolution every 1436 minutes (23 hours 56 minutes)

	One revolution is 2*pi radians so siderial rate = 2*pi/1436 or 0.004375 radians per minute;

	Radius (in inches) = RPM / (0.004375 x TPI)

	1 RPM = 1 / (0.004375 x 32) =

	2 * pi * r

</p>-->

## Theory

Stars are always in a fixed position in the sky and appear to move across the night sky as the earth rotates. The rate at which the earth
rotates relative to the stars in known as sidereal time and a sidereal day is the time it takes for the earth to perform a full rotation.
Essentially, it is the time it takes for a any star in the sky to return to that same position.

A sidereal day on Earth is 23 hours 56 minutes and 4.091 seconds long or 1436 minutes (about 4 minutes shorter than a standard solar day)
and we can use this time to calculate the rate at which the barn door tracker needs to turn.

If we think of the top board of the barn door tracker drawing an imaginary line as it moves, it will eventually draw a full circle if it is
able to move 360&deg; on it's hinge. This means that any point on the board can be through of as the radius of an imaginary circle so we need
to work out what size circle will match the sidereal rate of the Earth and this is dependent on the rate at which the top board will move
which is determined by the size of the thread on the drive bolt and the speed at which it is turned.

One rotation of Earth is `2Π radians` so the sidereal rate of the Earth is `2Π / 1436` which is approximately
`0.004375 radians per minute`. Using this value we come to the final formula of:

`Radius (in inches) = RPM / ((2Π/ 1436) * TPI)` or approximately `RPM / (0.004375 * TPI)`

where RPM is the revolutions per minute of the drive bolt and TPI is it's threads per inch. The drive bolt should be centered at this distance
from the hinge.

## Useful Links

* [Wikipedia article on Sidereal time](http://en.wikipedia.org/wiki/Sidereal_time)
* [Wikipedia article on Radians](http://en.wikipedia.org/wiki/Radian)
