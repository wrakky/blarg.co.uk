---
layout: blog
title:  "Automatically Collapse FirePHP Responses"
heading: "Automatically Collapse FirePHP Responses"
date:   2010-11-03
permalink: /blog/automatically-collapse-firephp-responses
categories: javascript firephp code
---

[FirePHP](http://www.firephp.org/) is a Firefox extension that allows you to log directly to the 
[Firebug](http://getfirebug.com/) console from PHP. This is great for AJAX applications because 
you can debug your server side scripts without interferring with the responses.

Each script that returns a FirePHP log will generate it’s own group in the Firebug console which is 
expanded by default which means if you are logging a lot of data on the server side (such as 
database queries) then there will be a lot of data displayed in the console which you may not want 
to see all the time.

My solution to this was to edit the FirePHP extension so that each script response is collapsed 
automatically. You can then click a response to expand it if you want to view more details.

<!--break-->

In order to do this you will need to edit the `RequestProcessor.js` file in the FirePHP install 
directory which should located inside your [Firefox profile folder](http://kb.mozillazine.org/Profile_folder_-_Firefox)
at:  
`extensions\FirePHPExtension-Build@firephp.org\chrome\content\firephp\RequestProcessor.js`

You will need to edit line 411 which reads:

{% highlight javascript %}
Firebug.Console.openGroup([URL], null, "firephpRequestGroup", null, true);
{% endhighlight %}

and change it to:

{% highlight javascript %}
var row = Firebug.Console.openGroup([URL], null, "firephpRequestGroup", null, true);
removeClass(row, "opened");
{% endhighlight %}

Once you save these changes you can just restart Firefox and now each FirePHP group will be collapsed by default.

If you would like to be able to toggle on and off automatic collapsing then you can do so by navigating 
your browser to about:config and adding a boolean preference key with the name `extensions.firephp.collapse`. 
Then replace line 411 in `RequestProcessor.js` with:

{% highlight javascript %}
var row = Firebug.Console.openGroup([URL], null, "firephpRequestGroup", null, true);
if (FirePHP.getPref(FirePHP.prefDomain, 'collapse')) {
	removeClass(row, "opened");
}
{% endhighlight %}

If the `extensions.firephp.collapse` is true the response will be collapsed, if it is false then it will be expanded.

<span class="label label-warning">Note:</span> If a new version of FirePHP is released and you 
install it, these changes will be overwritten and will need to be applied again.