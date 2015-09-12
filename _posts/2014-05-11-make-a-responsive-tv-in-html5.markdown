---
layout: post
status: publish
published: true
title: Make a responsive TV in HTML5
thumbnail: television
author:
  display_name: rontav
  email: mr_vali@yahoo.ro
  url: http://rontavstudio.com
categories:
- Code snippets
- WebProgramming
tags:
- code snippet
- image
- code
- tv
- stream
- tv frame
- html
- css
- html5
comments:
- id: 63
  author: Do Ngoc Nhan
  author_email: electronicgreengames@gmail.com
  author_url: http://www.dongocnhan.com
  date: '2014-05-12 21:41:19 +0300'
  date_gmt: '2014-05-12 18:41:19 +0300'
  content: Wow! That cool, I love it! ^_^
---
Here's the TV frame that we want to put our video in:
<img class="size-full wp-image-526" alt="tv" src="/images/posts/tv.png" width="282" height="241">
<br>
The HTML:
{% highlight html %}
<div class="TVwrapper">
    <div class="TVtop"></div>
    <div class="TVleft"></div>
    <div class="stream">
           <!-- Put your embed code here, but do not declare width and height -->
           <iframe src="http://www.youtube.com/embed/inKWORx42Ns" frameborder="0"></iframe>
        </div>
    <div class="TVright"></div>
    <div class="TVbot"></div>
</div>
{% endhighlight %}
*The embed code that youtube gave me behaved strange. I had to get the link&nbsp;manually and put it into an iframe.
<br>
CSS:
{% highlight css %}
.TVtop{
    background: url('TVtop.png') no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 8px;
    z-index: 2;
}
.TVbot{
    background: url('TVbottom.png') no-repeat;
    background-size: 100% 100%;
    width: 100%;
    padding-bottom: 8%;
    clear: both;
    z-index: 2;
}
.TVleft{
    background: url('TVleft.png') no-repeat;
    background-size: 100% 100%;
    float: left;
    width: 8px;
    padding-bottom: 56.25%;
    position: absolute;
    z-index: 2;
}
.TVright{
    background: url('TVright.png') no-repeat;
    background-size: 100% 100%;
    float: right;
    width: 8px;
    padding-bottom: 56.25%;
    position: absolute;
    right: 0;
    z-index: 2;
}
.stream{
    float: left;
    width:100%;
    width: calc(100% - 8px);
    padding-bottom: 56.3%;
    position: relative;
    z-index: 1;
}
.stream iframe{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
.TVwrapper{
    width:100%;
    margin: 0 auto;
    position: relative;
    /* optional */
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
{% endhighlight %}
The hardest part if you want to make a responsive TV in HTML5 is to cut the TV in 4 pieces.
<br>
Working example below:
<div class="text-center" style="margin: 15px 0;">
    <button style="color: #000;font-size: 14px;" onclick="document.getElementById('tvWrapper').style.width = '1000px';">1000px</button>
    <button style="color: #000;font-size: 14px;" onclick="document.getElementById('tvWrapper').style.width = '650px';">650px</button>
    <button style="color: #000;font-size: 14px;" onclick="document.getElementById('tvWrapper').style.width = '500px';">500px</button>
    <button style="color: #000;font-size: 14px;" onclick="document.getElementById('tvWrapper').style.width = '250px';">250px</button>
    <button style="color: #000;font-size: 14px;" onclick="document.getElementById('tvWrapper').style.width = '100%';">100%</button>
</div>
<div id="tvWrapper" style="margin: 0 auto; width: 500px; -webkit-transition: all 1s; -moz-transition: all 1s; -o-transition: all 1s; transition: all 1s;">
    <div style="width: 100%; margin: 0 auto; position: relative;">
        <div style="background: url('http://s28.postimg.org/3xquvgh31/TVtop.png') no-repeat; background-size: 100% 100%; width: 100%; height: 8px; z-index: 2;"></div>
        <div style="background: url('http://s28.postimg.org/3py61tzst/TVleft.png') no-repeat; background-size: 100% 100%; float: left; width: 8px; padding-bottom: 56.25%; position: absolute; z-index: 2;"></div>
        <div style="float: left; width: calc(100% - 8px); padding-bottom: 56.3%; position: relative; z-index: 1;"><iframe width="300" height="150" style="position: absolute; width: 100%; height: 100%; margin: 0 auto;border: 0;" src="http://www.youtube.com/embed/inKWORx42Ns"></iframe></div>
        <div style="background: url('http://s3.postimg.org/vzf09qvk3/TVright.png') no-repeat; background-size: 100% 100%; float: right; width: 8px; padding-bottom: 56.25%; position: absolute; right: 0; z-index: 2;"></div>
        <div style="background: url('http://s24.postimg.org/fxwbp4pv9/TVbottom.png') no-repeat; background-size: 100% 100%; width: 100%; padding-bottom: 8%; clear: both; z-index: 2;"></div>
    </div>
</div>