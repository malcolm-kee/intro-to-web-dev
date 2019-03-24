---
title: CSS Selectors
path: '/css-selectors/'
description: ''
---

# CSS Selectors

In [previous section](/css/), I've shown you how to make a `h1` tag or `p` tag to have specific color or size.

But how do you make two items with same tag appears differently? Like below:

<h3 style="color:red;">This is a red h3</h3>
<h3 style="color:blue;">This is a blue h3</h3>

How do we achieve this?

Remember the section on HTML class? We're going to use it now. Class allows us to style same tag differently because we can select based on the the class instead of the tag.

[comment]: # 'TODO: add the link to the HTML class section'

For example, if we have a h1 that is our blog title and another h1 which is the website name, we can do this:

```htm
<div>
  <h1 class="brand-name">Awesome Website</h1>
</div>
<div>
  <div>
    <h1 class="blog-title">Awesome Post that Shocks Obama</h1>
    <p>That is not a clickbait.</p>
  </div>
</div>
```

Then we use CSS to style them differently.

```html
<style>
  .brand-name {
    color: chocolate;
    font-size: 32px;
  }

  .blog-title {
    color: teal;
  }
</style>
<div>
  <h1 class="brand-name">Awesome Website</h1>
</div>
<div>
  <div>
    <h1 class="blog-title">Awesome Post that Shocks Obama</h1>
    <p>That is not a clickbait.</p>
  </div>
</div>
```

- Note that I use a `<style>` tag to include CSS in the html. Another way is to include CSS is to use a `<link>` tag, which I will show you later.
- The css selectors `.brand-name` and `.blog-title` has a dot character (`.`) at the front, which tells CSS to select the element based on `class`, not the tag name. Without the dot, CSS will look for `<brand-name>` and `<blog-title>` tag, which are not standard HTML elements.
- So what should you use? The recommended practice is to always use class, most of the time. Tag selector is only used rarely, for example to style every `a` tag on the page. If you're not sure, use class.

## Combining Selectors

You can combine tag selector with class selector, like below.

```html
<style>
  p.important {
    color: red;
  }
</style>
<div>
  <h3 class="important">Important Title</h3>
  <p>I am some content</p>
  <p class="important">I am important content</p>
  <p>I am some content</p>
  <h3>Not important title</h3>
  <p>I am some content</p>
  <p>I am some content</p>
</div>
```

You can also create a selector to specify an element with multiple classes.

```html
<style>
  .item.quote {
    font-style: italic;
  }
</style>
<div>
  <p class="quote">There are only two hard things in programming:</p>
  <ul>
    <li class="item">Naming things</li>
    <li class="item quote">
      "By the way, can you just add one more thing?"
    </li>
  </ul>
</div>
```

## Other Selectors

There are a few other types of selectors that you can use, but I will not cover today. Perhaps we can cover them in another workshop.

- ID selector

  This is a bad practice so do **NOT** use this and use class selector instead. It's out there in the wild so I just let you know.

```html
<style>
  #danger-text {
    color: red;
  }
</style>
<p id="danger-text">This text is dangerous.</p>
<p>This text is fine.</p>
<p>This text is feeling down.</p>
```

- pseudo-class selector

  This is the selector when specific things happen, like mouse hover, focus, etc.

```html
<style>
  .sensitive:hover {
    color: red;
    font-size: 20px;
  }
</style>
<p>This text is normal.</p>
<p class="sensitive">I am sensitive, don't move your mouse over me!</p>
<p>This text is feeling down.</p>
```

The following selectors will not be explained in this workshop due to time limitations. You can read up them if you interested:

- [child selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator)
- [sibling selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator)
- [descendent selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator)
- [pseudo-element selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
