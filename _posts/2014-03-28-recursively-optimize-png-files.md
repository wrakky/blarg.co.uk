---
layout: blog
title:  "Recursively Optimize PNG Files"
heading: "Recursively Optimize PNG Files"
date:   2014-03-28
permalink: /blog/recursively-optimize-png-files
categories: png code
---

One way to improve performance and reduce bandwidth for your website is to make sure your image files 
are properly optimised. It's an easy win for not much work so there's no excuse for not doing it - 
especially when it can all be done losslessly with the end result will looking exactly the same 
as the original with no loss of quality.

If you are looking at doing this for the first time you probably have a great big folder of images 
which also contains sub-folders and sub-sub-folders of even more images and will want to optimize 
them all. In this article I look at using OptiPNG and PNGCrush, two of the most commonly used png 
optimizers, and see how you can use them to quickly optimize all of the images recursively in a directory.

<!--break-->

## OptiPNG

OptiPNG will automatically overwrite any files it finds which means we can do everything in a single command. Handy!

{% highlight bash %}
cd /path/to/your/images
find -name '*.png' -print0 | xargs -0 optipng -nc -nb -o7
{% endhighlight %}

### How it Works

You will want to run this command in your images directory so first navigate to it. The command 
first uses `find` to gather a list of all files ending in .png in the current directory (and sub-directories). 
It then uses `xargs` to append this list of files to the end of the `optipng` command which will process them all.

The arguments `-nc -nb` tell optipng not to alter any colour information (or we risk changing the 
appearance of the optimized image) and `-o7` tells it to use the best compression.

## PNGCrush

Unfortunately, PNGCrush will not overwrite any images which makes things a bit tricker. We will 
need to write a small bash script to do the work for us instead.

{% highlight bash %}
#!/bin/sh

# loop through all files ending in .png
for file in `find -name '*.png'`
do

  # crush image and save it's output
  pngcrush -reduce -brute $file /tmp/crushed.png

  # overwrite original image with crushed version
  mv /tmp/crushed.png $file

done
{% endhighlight %}

### How it Works

Save the script somewhere and make it executable (`chmod a+x [script.sh]`). Navigate to your images directory and run the script.

It uses `find` to gather a list of all files ending in .png in the current directory (and sub-directories), 
loops through them all and runs `pngcrush` on each file. The optimized file is then saved in `/tmp/crushed.png`
and immediately replaces the original file.

The pngcrush arguments used are `-reduce` which tells it to do lossless compression and `-brute` which will try 126 
different crushing methods for maximum compression.