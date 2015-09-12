---
layout: post
status: publish
published: true
title: DoodleJump type gameplay part 2, side teleporting, Unity 3D
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
- side teleport
comments: []
---
>EDIT: Better way of doing this is on <a href="https://www.youtube.com/watch?v=TknsiuWErPM" target="_blank">youtube</a>.
(To make it work for any size/resolution you will need to move the cameras)

In the <a href="/doodlejump-type-gameplay">last part</a> I showed how to jump through platforms.
Now I will show you how to implement the side teleporting. (<a href="https://www.youtube.com/watch?v=uFHeFSz7wU0&t=39s" target="_blank">example</a>)<br>
<a href="http://adf.ly/1MsBIo" target="_blank" class="demoLink">Demo</a>
This code is attached on the player:
{% highlight c# %}
void OnTriggerEnter2D(Collider2D other){
	if(other.gameObject.name == "RightColl" || other.gameObject.name == "LeftColl"){
		transform.position = new Vector2(transform.position.x / Mathf.Abs (transform.position.x) - transform.position.x, transform.position.y);
	}
}
{% endhighlight %}
You need to make 2 empty gameObjects, with the names LeftColl and RightColl, and attach a 2D box collider to them. On the 2D box collider check isTrigger.
{% highlight c# %}
public Camera mainCam;
public BoxCollider2D leftColl;
public BoxCollider2D rightColl;
void Start(){
    rightColl.size = new Vector2(3f, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height*2f, 0f)).y);
    rightColl.center = new Vector2(mainCam.ScreenToWorldPoint (new Vector3(Screen.width, 0f, 0f)).x + 3f, rightColl.size.y/2);
    leftColl.size = new Vector2(3f, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height*2f, 0f)).y);
    leftColl.center = new Vector2(mainCam.ScreenToWorldPoint (new Vector3(0f, 0f, 0f)).x - 3f, leftColl.size.y/2);
}
{% endhighlight %}
This piece of code will set the colliders to the right coords.