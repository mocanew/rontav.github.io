---
layout: post
status: publish
published: true
title: Random spawn and random sounds, Unity 3D
thumbnail: random
author:
  display_name: rontav
  email: mr_vali@yahoo.ro
  url: http://rontavstudio.com
categories:
- Code snippets
- Unity3D
tags: 
- Unity 3D
- code snippets
- random
comments: []
---
This two things are easy to do but many people don't know how, so I will explain.<br>
Random spawn :
{% highlight c# %}
public GameObject[] prefab;
void RandomSpawn(){
	Instantiate(prefab[Random.Range(0, prefab.Length)], position, rotation);
}
{% endhighlight %}
Play random sounds:
{% highlight c# %}
public AudioClip[] sound;
void RandomSounds(){
	AudioSource.PlayClipAtPoint(sound[Random.Range (0, sound.Length)], Camera.main.transform.position);
}
{% endhighlight %}
I've used playClipAtPosition to play the song even if the gameObject gets destroyed.<br>
The idea is: we get a random number between 0 and the lenght of the array and play the sound with that index.