---
layout: blog
title:  "Comparison of JPEG Lossless Compression Tools"
heading: "Comparison of JPEG Lossless Compression Tools"
date:   2014-06-27
permalink: /blog/comparison-of-jpeg-lossless-compression-tools
categories: mozjpeg images code
---

[Losslessly compressing](http://en.wikipedia.org/wiki/Lossless_compression) JPEG files is a great but often
overlooked way to reduce file sizes on your website or application without losing image quality. Smaller file
sizes mean less bandwidth usage for you, and faster page load speeds for your users. What's not to like about that?

So you want to losslessly compress all your lovely JPEGs but what tool should you use to get the maximum benefit?
In this article I compare four tools (jpegoptim, jpegtran, jpegrescan and mozjpeg) and use them to losslessly compress a few
different JPEG files to see which gives the best reduction in file size.

<!--break-->

<div class="well well-sm update">
	<h4>Update 1st August 2014</h4>
	<p>Mozjpeg version 2.1 was released on 29th July and the tests have been updated to include this new version.</p>
</div>

## Tools Used

Listed below are the tools used in this test. The test script can be found on my [github page](https://github.com/wrakky/lossless-jpeg-comparison).

Know of any other tools that provide lossless compression? Let me know and I'll include them in the test!

### jpegoptim v1.4.1 - [https://github.com/tjko/jpegoptim](https://github.com/tjko/jpegoptim)

A popular utility for optimizing and compressing JPEG files.

{% highlight bash %}
jpegoptim --strip-all --all-progressive --dest=[/path/to/compressed] [/path/to/original]
{% endhighlight %}

### jpegtran v9a - [http://jpegclub.org/jpegtran/](http://jpegclub.org/jpegtran/)

Another popular utility program from the [libjpeg-turbo](http://libjpeg-turbo.virtualgl.org/) image codec.

{% highlight bash %}
jpegtran -copy none -optimize -progressive -outfile [/path/to/compressed] [/path/to/original]
{% endhighlight %}

### jpegrescan v1.0 - [https://github.com/kud/jpegrescan](https://github.com/kud/jpegrescan)

A perl script for losslessly compressing JPEG files. Originally created by Loren Merritt as *jpgcrush*.

{% highlight bash %}
jpegrescan -s [/path/to/original] [/path/to/compressed]
{% endhighlight %}

### mozjpeg v1.0 &amp; v2.1 - [https://github.com/mozilla/mozjpeg](https://github.com/mozilla/mozjpeg)

[Recently announced](https://blog.mozilla.org/research/2014/03/05/introducing-the-mozjpeg-project/) project from
Mozilla. Aims to improve lossless JPEG compression even further than the currently available options. It is a fork of
[libjpeg-turbo](http://libjpeg-turbo.virtualgl.org/) with jpgcrush functionality added. For more information
see my article on [how to compile mozjpeg](/blog/how-to-install-mozjpeg)

{% highlight bash %}
mozjpeg -copy none -outfile [/path/to/compressed] [/path/to/original]
{% endhighlight %}

## Results

#### Rankings

1. mozjpeg
2. jpegrescan
3. jpegoptim and jpegtran (joint)

Maybe not unsurprisingly given it's mission to increase compression, the winner is <strong>mozjpeg</strong>. Interestingly,
v1.0 and v2.1 did better on different photos so there was no clear winner on file size between the two version but v2.1
was between 10% and 20% faster than v1.0 and now also supports baseline JPEGs which may tip the balance.

In a close second was <strong>jpegrescan</strong> with 2 of the photos reducing by the same amount and the rest only a couple
of hundred bytes bigger when compared to mozjpeg but took 2-3 times longer to process the images. These two performed
between 1-2% better than both <strong>jpegtran</strong> and <strong>jpegoptim</strong> which reduced files by exactly the
same amount as each other.

If speed is also an issue then both jpegtran and jpegoptim are valid options performing about 3 times faster than mozjpeg
whilst still giving good results, although a good caching solution will negate most of the drawbacks of the longer run times.
Also good (as noted above) was mozjpeg 2.1 being between 10% and 20% faster than v1.0 which hopefully bodes well for future releases.

## Tests &amp; Results

<p>
	These are the images used in the tests with the full results and figures:
</p>

<!-- Comet -->
<div class="media">
	<a class="pull-left" href="https://www.flickr.com/photos/16120271@N03/8608708499/">
		<img class="media-object" src="https://farm9.staticflickr.com/8245/8608708499_0e457569c6_t.jpg" alt="Comet PANSTARRS with Andromeda Galaxy">
	</a>
	<div class="media-body">
		<h4 class="media-heading">Comet PANSTARRS with Andromeda Galaxy</h4>
		<strong>Filesize: </strong>6,178,710 bytes (5.9mb)<br>
		<strong>Dimensions:</strong> 4824 x 3161
	</div>
</div>
<table class="table">
	<thead>
		<tr><th>Tool</th><th>Filesize Reduction</th><th>Time Taken</th></tr>
	</thead>
	<tbody>
		<tr><td>jpegoptim</td><td>17.635% - 1,089,625 bytes (1mb)</td><td>2,342ms</td></tr>
		<tr><td>jpegtran</td><td>17.635% - 1,089,625 bytes (1mb)</td><td>2,221ms</td></tr>
		<tr><td>jpegrescan</td><td>18.875% - 1,166,276 bytes (1.1mb)</td><td>16,816ms</td></tr>
		<tr><td>mozjpeg1</td><td>18.876% - 1,166,323 bytes (1.1mb)</td><td>6,280ms</td></tr>
		<tr><td>mozjpeg2</td><td class="success">18.879% - 1,166,519 bytes (1.1mb)</td><td>5,272ms</td></tr>
	</tbody>
</table>

<!-- Duck -->
<div class="media">
	<a class="pull-left" href="https://www.flickr.com/photos/16120271@N03/6834383270/">
		<img class="media-object" src="https://farm8.staticflickr.com/7209/6834383270_3b01cceeeb_t.jpg" alt="Female mallard">
	</a>
	<div class="media-body">
		<h4 class="media-heading">Female Mallard</h4>
		<strong>Filesize: </strong>4,213,895 bytes (4mb)<br>
		<strong>Dimensions:</strong> 4928 x 3264
	</div>
</div>
<table class="table">
	<thead>
		<tr><th>Tool</th><th>Filesize Reduction</th><th>Time Taken</th></tr>
	</thead>
	<tbody>
		<tr><td>jpegoptim</td><td>6.315% - 266,136 bytes (260kb)</td><td>1,658ms</td></tr>
		<tr><td>jpegtran</td><td>6.315% - 266,136 bytes (260kb)</td><td>1,654ms</td></tr>
		<tr><td>jpegrescan</td><td>7.77% - 327,444 bytes (319kb)</td><td>11,387ms</td></tr>
		<tr><td>mozjpeg1</td><td>7.77% - 327,452 bytes (319kb)</td><td>4,716ms</td></tr>
		<tr><td>mozjpeg2</td><td class="success">7.771% - 327,464 bytes (319kb)</td><td>4,237ms</td></tr>
	</tbody>
</table>

<!-- Jupiter -->
<div class="media">
	<a class="pull-left" href="https://www.flickr.com/photos/16120271@N03/13376784453/">
		<img class="media-object" src="https://farm8.staticflickr.com/7226/13376784453_0ba6fcef3f_t.jpg" alt="Jupiter and Moons">
	</a>
	<div class="media-body">
		<h4 class="media-heading">Jupiter and Moons</h4>
		<strong>Filesize: </strong>3,157,940 bytes (3mb)<br>
		<strong>Dimensions:</strong> 4928 x 3264
	</div>
</div>
<table class="table">
	<thead>
		<tr><th>Tool</th><th>Filesize Reduction</th><th>Time Taken</th></tr>
	</thead>
	<tbody>
		<tr><td>jpegoptim</td><td>15.537% - 490,662 bytes (479kb)</td><td>1,471ms</td></tr>
		<tr><td>jpegtran</td><td>15.537% - 490,662 bytes (479kb)</td><td>1,469ms</td></tr>
		<tr><td>jpegrescan</td><td class="success">16.574% - 523,402 bytes (523kb)</td><td>9,672ms</td></tr>
		<tr><td>mozjpeg1</td><td class="success">16.574% - 523,402 bytes (523kb)</td><td>4,046ms</td></tr>
		<tr><td>mozjpeg2</td><td>16.514% - 521,533 bytes (521kb)</td><td>3,484ms</td></tr>
	</tbody>
</table>

<!-- Beer -->
<div class="media">
	<a class="pull-left" href="https://www.flickr.com/photos/16120271@N03/14181107726/">
		<img class="media-object" src="https://farm3.staticflickr.com/2920/14181107726_ac9e7d739d_t.jpg" alt="Beer">
	</a>
	<div class="media-body">
		<h4 class="media-heading">Beer</h4>
		<strong>Filesize: </strong>2,154,968 bytes (2mb)<br>
		<strong>Dimensions:</strong> 3264 x 2448
	</div>
</div>
<table class="table">
	<thead>
		<tr><th>Tool</th><th>Filesize Reduction</th><th>Time Taken</th></tr>
	</thead>
	<tbody>
		<tr><td>jpegoptim</td><td>8.011% - 172,644 bytes (168kb)</td><td>854ms</td></tr>
		<tr><td>jpegtran</td><td>8.011% - 172,644 bytes (168kb)</td><td>741ms</td></tr>
		<tr><td>jpegrescan</td><td class="success">8.666% - 186,750 bytes (182kb)</td><td>5,742ms</td></tr>
		<tr><td>mozjpeg1</td><td class="success">8.666% - 186,750 bytes (182kb)</td><td>2,089ms</td></tr>
		<tr><td>mozjpeg2</td><td>8.483% - 182,815 bytes (178kb)</td><td>1,786ms</td></tr>
	</tbody>
</table>

<!-- House Martins -->
<div class="media">
	<a class="pull-left" href="https://www.flickr.com/photos/16120271@N03/7272580786/">
		<img class="media-object" src="https://farm8.staticflickr.com/7231/7272580786_06d364cb65_t.jpg" alt="House Martins">
	</a>
	<div class="media-body">
		<h4 class="media-heading">House Martins</h4>
		<strong>Filesize: </strong>1,122,198 bytes (1mb)<br>
		<strong>Dimensions:</strong> 2048 x 1356
	</div>
</div>
<table class="table">
	<thead>
		<tr><th>Tool</th><th>Filesize Reduction</th><th>Time Taken</th></tr>
	</thead>
	<tbody>
		<tr><td>jpegoptim</td><td>5.367% - 60,229 bytes (59kb)</td><td>482ms</td></tr>
		<tr><td>jpegtran</td><td>5.367% - 60,229 bytes (59kb)</td><td>501ms</td></tr>
		<tr><td>jpegrescan</td><td>6.264% - 70,303 bytes (68kb)</td><td>3,259ms</td></tr>
		<tr><td>mozjpeg1</td><td>6.268% - 70,349 bytes (68kb)</td><td>1,235ms</td></tr>
		<tr><td>mozjpeg2</td><td class="success">6.268% - 70,350 bytes (68kb)</td><td>1,114ms</td></tr>
	</tbody>
</table>

<!-- Sunset -->
<div class="media">
	<a class="pull-left" href="https://www.flickr.com/photos/16120271@N03/6613482555/">
		<img class="media-object" src="https://farm8.staticflickr.com/7168/6613482555_23492c5dc0_t.jpg" alt="Sunset">
	</a>
	<div class="media-body">
		<h4 class="media-heading">Sunset</h4>
		<strong>Filesize: </strong>320,398 bytes (312kb)<br>
		<strong>Dimensions:</strong> 1024 x 768
	</div>
</div>
<table class="table">
	<thead>
		<tr><th>Tool</th><th>Filesize Reduction</th><th>Time Taken</th></tr>
	</thead> 
	<tbody>
		<tr><td>jpegoptim</td><td>3.642% - 11,672 bytes (168kb)</td><td>150ms</td></tr>
		<tr><td>jpegtran</td><td>3.642% - 11,672 bytes (168kb)</td><td>149ms</td></tr>
		<tr><td>jpegrescan</td><td>4.804% - 15,393 bytes (182kb)</td><td>1,423ms</td></tr>
		<tr><td>mozjpeg1</td><td>4.817% - 15,435 bytes (182kb)</td><td>478ms</td></tr>
		<tr><td>mozjpeg2</td><td class="success">4.819% - 15,441 bytes (182kb)</td><td>335ms</td></tr>
	</tbody>
</table>