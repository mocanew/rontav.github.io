---
layout: post
status: publish
published: true
title: ScrollRect snap to grid horizontally, Unity3D
thumbnail: ellipsis-h
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
- snap to grid
- scrollrect
comments: []
---
The scrollrect that snaps to a grid is a generic function and I think Unity will add it in the future.<br>
There's a problem that I cannot solve: if you make the child too big, it will display under the next child. I didn't find any option for a z-index or depth. If you find a sollution to this, please comment it down below.<br>
You can download the scene <a href="http://adf.ly/1IF34R" target="_blank">here</a>.
<a href="http://adf.ly/1IF2aN" class="demoLink" target="_blank">Demo</a>
{% highlight c# %}
using UnityEngine;
using System.Collections;
using UnityEngine.UI;
public class gridsnap : MonoBehaviour {
    GridLayoutGroup grid;
    RectTransform rect;
    ScrollRect scrollRect;
    Vector2 targetPos;
    bool done = false;
    float t = 0;
    void Start() {
        grid = GetComponent<GridLayoutGroup>();
        rect = GetComponent<RectTransform>();
        scrollRect = GetComponentInParent<ScrollRect>();
        // auto adjust the width of the grid to have space for all the childs
        rect.sizeDelta = new Vector2((transform.childCount + 2f) * grid.cellSize.x + (transform.childCount - 1f) * grid.spacing.x, rect.sizeDelta.y);
    }
    public void Update() {
        t = Time.deltaTime * 15f;
        if (t > 1f) {
            t = 1f;
        }
        if (Mathf.Abs(scrollRect.velocity.x) > 800f && !done) {
            touchUp();
        }
        if (!done && Mathf.Abs(scrollRect.velocity.x) < 800f) {
            rect.localPosition = Vector2.Lerp(rect.localPosition, targetPos, t);
            if (Vector3.Distance(rect.localPosition, targetPos) < 0.001f) {
                rect.localPosition = targetPos;
                done = true;
            }
        }
        Vector2 tempPos = new Vector2(Mathf.Round(rect.localPosition.x / (grid.cellSize.x + grid.spacing.x)) * (grid.cellSize.x + grid.spacing.x) * -1f, 0);
        for (int i = 0; i < transform.childCount; i++) {
            Transform child = transform.GetChild(i);
            if (child.localPosition.x == tempPos.x) {
                // do what you want with the child
                child.localScale = Vector3.Lerp(child.localScale, new Vector3(1.5f, 1.5f, 1f), t);
            }
            else {
                child.localScale = Vector3.Lerp(child.localScale, new Vector3(1f, 1f, 1f), t);
            }
        }
    }
    public void touchDown() {
        done = true;
    }
    public void touchUp() {
        float newX = Mathf.Round(rect.localPosition.x / (grid.cellSize.x + grid.spacing.x)) * (grid.cellSize.x + grid.spacing.x);
        newX = Mathf.Sign(newX) * Mathf.Min(Mathf.Abs(newX), (rect.rect.width - scrollRect.GetComponent<RectTransform>().rect.width) / 2f);
        targetPos = new Vector2(newX, 0);
        done = false;
    }
}
{% endhighlight %}