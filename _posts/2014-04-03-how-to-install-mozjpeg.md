---
layout: blog
title:  "How to Install mozjpeg"
heading: "How to Install mozjpeg"
date:   2014-04-03
permalink: /blog/how-to-install-mozjpeg
categories: mozjpeg images code
---

About a month ago Mozilla [announced their 'mozjpeg'](https://blog.mozilla.org/research/2014/03/05/introducing-the-mozjpeg-project/)
project with the aim of improving [lossless](http://en.wikipedia.org/wiki/Lossless_compression) jpeg 
compression and making the web a faster place. Forked from [libjpeg-turbo](http://libjpeg-turbo.virtualgl.org/), 
mozjpeg is more concerned with reducing filesize than doing it quickly. It uses the same compression process written 
in a perl script by Loren Merritt called `jpegcrush` and claims to be able to reduce jpeg size by 10% on average.

So, it sounds pretty good and you want to save some bandwidth and give mozjpeg a go. With a lack of 
an auto-install option using a repository like APT you will need to build it from source which 
sounds complicated but is actually pretty easy as I show.

<!--break-->

Full build instructions can be found in the [build instructions file](https://github.com/mozilla/mozjpeg/blob/master/BUILDING.txt) 
in the github repo. These are very comprehensive and cover all "Un*x Platforms (including Cygwin and OS X)". 
This guide aims to simplify the process by giving step by step guide for building on Ubuntu 12.04 
(and should be portable for other versions of Ubuntu and probably other flavours of Linux as well with a some minor changes).

## Download Source

First you need to download the source.

You can either use a release version which should be stable and ready for production use from the 
[list of release archives](https://github.com/mozilla/mozjpeg/releases) and download the latest 
version and extract it (v1.0.1 is the latest version at time of writing):

{% highlight bash %}
wget https://github.com/mozilla/mozjpeg/archive/v1.0.1.tar.gz
tar -xvf v1.0.1.tar.gz
{% endhighlight %}

Alternatively, if you want the latest cutting edge version you can clone the 
[github repository](https://github.com/mozilla/mozjpeg) directly:

{% highlight bash %}
sudo apt-get install git
git clone https://github.com/mozilla/mozjpeg.git
{% endhighlight %}

## Install Requirements

Building mozjpeg requires the following programs to be installed:

* autoconf 2.56 or later
* automake 1.7 or later
* libtool 1.4 or later
* NASM 0.98 or later
* make

You can go ahead and install them like so:

{% highlight bash %}
sudo apt-get install autoconf automake libtool nasm make
{% endhighlight %}

## Building

Once the source has been downloaded and extracted, navigate to the extracted contents directory. 
Next running `autoreconf` will to build the configure file. Then create a `build` directory inside 
the source and navigate to it. Once in the build directory, run `configure` which will generate the 
Makefile which is used to install the final program using `make install` and is run as `sudo` so it 
has permission to put the installation in /opt.

{% highlight bash %}
cd mozjpeg-1.0.1
autoreconf -fiv
mkdir build && cd build
sh ../configure
sudo make install
{% endhighlight %}

## Usage

Following the above instructions will install mozjpeg in `/opt/libmozjpeg` and it can be used by 
calling `jpegtran` in the bin directory:

{% highlight bash %}
/opt/libmozjpeg/bin/jpegtran -copy none image.jpg > compressed.jpg
{% endhighlight %}

However, I find it easier to add the command to my local path so it can be accessed anywhere. Also, 
as it shares it's namings with `libjpeg-turbo, renaming it to something like `mozjpeg` makes it more 
`convenient to use and remember, especially if you already have `libjpeg-turbo` installed:

{% highlight bash %}
sudo ln -s /opt/libmozjpeg/bin/jpegtran /usr/local/bin/mozjpeg
{% endhighlight %}

After adding this link you can use mozjpeg from anywhere easily and conveniently:

{% highlight bash %}
mozjpeg -copy none image.jpg > compressed.jpg
{% endhighlight %}

And there you have it, mozjpeg installed on your system ready to save you bandwidth and speed up 
your website!