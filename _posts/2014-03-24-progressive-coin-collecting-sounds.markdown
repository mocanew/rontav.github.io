---
layout: post
status: publish
published: true
title: Progressive coin collecting sounds, Unity 3D
thumbnail: circle-o
author:
  display_name: rontav
  email: mr_vali@yahoo.ro
  url: http://rontavstudio.com
categories:
- Code snippets
- Unity3D
tags:
- unity 3D
- code snippet
- progressive
- coin collecting
- sound
comments: []
---
I recently bought and played a game named <a title="On steam" href="http://store.steampowered.com/app/232810/">Godus</a>. I've seen an interesting sound effect and I will try to replicate it into unity.
(<a title="Youtube demo" href="http://youtu.be/DGUQ_heFjRU?t=8m40s" target="_blank">example</a>)<br><br>
Here is the GameManager.cs:
{% highlight c# %}
public static int coinSoundOrder = 0;
public static float t=0;
public static AudioClip[] sound;
public AudioClip[] pSound;
public float expireTime = 2f;
void Start(){
	sound = pSound;
}
public static void PlayCoinSound(){
	AudioSource.PlayClipAtPoint(sound[coinSoundOrder], new Vector3(0,0,0));
	if(coinSoundOrder < sound.Length - 1)
		coinSoundOrder++;
	else
		coinSoundOrder = 0;
	t=0f;
}
void Update(){
	t+=Time.deltaTime;
	if(coinSoundOrder > 0 && t>=expireTime)
		coinSoundOrder=0;
}
{% endhighlight %}
\* I've added a new variable, pSound, because I can't find a way to declare a static variable that can be edited in the inspector.<br>
And now you can call that function each time the player hits a coin, for example:
{% highlight c# %}
void OnTriggerEnter2D(Collider2D obiect){
	if(obiect.gameObject.tag == "Coins"){
		GameManager.PlayCoinSound ();
		Destroy(obiect.gameObject);
	}
}
{% endhighlight %}