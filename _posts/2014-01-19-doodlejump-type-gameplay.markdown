---
layout: post
status: publish
published: true
title: DoodleJump type gameplay, Unity 3D
thumbnail: gamepad
author:
  display_name: rontav
  email: mr_vali@yahoo.ro
  url: http://rontavstudio.com
categories:
- Code snippets
- Unity3D
tags:
- Unity 3D
- code snippet
- doodle jump
- platform
comments:
- id: 13
  author: "Đỗ Ngọc Nh&acirc;n"
  author_email: electronicgreengames@gmail.com
  author_url: http://www.dongocnhan.com
  date: '2014-01-23 07:15:26 +0200'
  date_gmt: '2014-01-23 05:15:26 +0200'
  content: Thanks for this code! I use unity but I don't know how to do the DoodleJump
    for the game, but know I found it here ! :D Keep working, I know this website
    will grow up and become very popular !
pingback:
  title: DoodleJump type gameplay part 2, side teleporting, Unity 3D
  url: /doodlejump-type-gameplay-part-2-unity-3d/
---
Some people had questioned me how to jump through a platform, like in doodlejump.
<br>
The basic idea it's that you change the layer of the player when he jumps and change it back when he has negative Y velocity.
<a class="demoLink" href="http://adf.ly/1O8msb" target="_blank">Demo</a>
The code is pretty basic:
{% highlight c# %}
float jumpForce = 1000f;
void Update(){
	if(Input.GetKeyDown (KeyCode.UpArrow)){
		rigidbody2D.AddForce (new Vector2(0f, jumpForce));
		gameObject.layer = 9;//PlayerInAir Layer
	}
	if(rigidbody2D.velocity.y < 0){
		gameObject.layer = 8;//Player layer
	}
}
{% endhighlight %}
After that, go to Edit -> Project Settings -> Physics 2D and uncheck the collision between PlayerInAir and Ground layers.
<img src="/images/posts/LayerSettings.png" alt="LayerSettings" width="200" height="200">