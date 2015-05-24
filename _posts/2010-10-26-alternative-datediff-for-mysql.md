---
layout: blog
title:  "Alternative DATEDIFF for MySQL"
heading: "Alternative DATEDIFF for MySQL"
date:   2010-10-26
permalink: /blog/test.html
categories: mysql code
---

The `DATEDIFF()` function was added in MySQL version 4.1.1. For earlier versions
that do not support this function you can make a work-around for it using the
`TO_DAYS` function. This article show you how to do just that.

The following code shows how to perform the equivalent of `DATEDIFF()` when it 
is not available:

{% highlight mysql %}
SELECT TO_DAYS(date1) - TO_DAYS(date2);

-- example
SELECT TO_DAYS('2010-01-03') - TO_DAYS('2010-01-01'); -- returns '2'
{% endhighlight %}

This will give the same effect as `DATEDIFF(date1, date2)` by converting each 
date to the number of days since year 0 and subtracting them.

Note: According the MySQL manual, `TO_DAYS()` is not intended for use with dates
that precede the year 1582 because it does not take into account the days that 
were lost when the Gregorian calendar was introduced so using this method is 
not advisable for dates earlier than this.