---
layout: post
status: publish
published: true
title: Use Coroutines independent of timeScale, Unity 3D
thumbnail: clock-o
author:
  display_name: rontav
  email: mr_vali@yahoo.ro
  url: http://rontavstudio.com
categories:
- Code snippets
- Unity3D
tags: 
- Unity 3D
- coroutine
- time
- timeScale
- WaitForSeconds
- code snippet
comments:
- id: 64
  author: Julio Quiroz
  author_email: chulini@gmail.com
  author_url: http://chulini.info
  date: '2014-10-03 20:24:03 +0300'
  date_gmt: '2014-10-03 17:24:03 +0300'
  content: "I've made my own optimisation to this so I can reuse from any script.\r\nI've
    made this static class:\r\n<code>\r\npublic static class CoroutineUtilities {\r\n\tpublic
    static IEnumerator WaitForRealTime(float delay){\r\n\t\twhile(true){\r\n\t\t\tfloat
    pauseEndTime = Time.realtimeSinceStartup + delay;\r\n\t\t\twhile (Time.realtimeSinceStartup
    < pauseEndTime){\r\n\t\t\t\tyield return 0;\r\n\t\t\t}\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n}\r\n</code>\r\nSo
    when I need to wait for seconds in timescale 0, instead of:\r\n<code>\r\nyield
    return new WaitForSecods(1);\r\n</code>\r\njust use this:\r\n<code>\r\nyield
    return StartCoroutine(CoroutineUtilities.WaitForRealTime(1));\r\n</code>\r\n\r\nThank
    you guys!"
---
I wanted to put a 3,2,1 counter before my game starts.
<br>
I have set the timeScale to 0 in Start function and then I realized that WaitForSeconds is based on timeScale.
<br>
The workaround is from unity answers.
{% highlight c# %}
IEnumerator Counter(){
	while(true){
		float pauseEndTime = Time.realtimeSinceStartup + 1f;
		while (Time.realtimeSinceStartup < pauseEndTime){
			yield return 0;
		}
		Debug.Log(timer);
		timer-=1;
		if(timer == 0){
			Debug.Log ("Start");
			Time.timeScale = 1f;
			StopCoroutine("Counter");
		}
	}
}
{% endhighlight %}