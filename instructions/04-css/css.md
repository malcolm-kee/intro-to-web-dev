---
title: CSS
path: '/css/'
description: ''
---

# CSS

![CSS Logo](css.png)

So far you've learnt HTML to write document that is meaningful to human and machine. However, as mentioned in the beginning, that's like the raw material and structure of you home only.

To have a home that you're proud to let your parents and friends to visit, you need to add some _styles_ to it.

## Style

CSS stands for **C**ascading **S**tyle **S**heet. As its name implies, it's used to style your website. (We'll talk about the Cascading part [later](/css-cascades/).)

The most apparent way to use CSS is to change the visual display of your HTML. Imagine a h1 like below:

```html
<h1>This is an h1</h1>
```

What if we want to make the h1 blue instead? Like this

<h1 style="color:blue;">This is an h1</h1>

To make that happens, we can write a CSS rule, which would look like this:

```css
h1 {
  color: blue;
}
```

Let's break the CSS rule down:

- `h1` - This is what we call the **selector**. Anything that matches the selector will going to have everything inside the `{ }` (curly braces) applied to it.
- `color` - This is called the **property**. There are few hundred of CSS properties, and most of the time we'll only be using about 50+ of them. The `color` property affects the color of the text.
- `blue` - This is known as the **value** of the CSS rule. This set what should the property be. In this case, we set the `color` property as `blue`. CSS also understands other format of color, e.g. `#0000ff` (known as hex values), `rgb(0, 0, 255)` (rgb), `hsl(240, 100%, 50%)` (hsl). All the previous values is similar to `blue`. You don't actually need to understand how these format works, because I myself don't understand them myself. If we're coming from design background or photography they may be familar for you. If you really interested how they work, here's a great article from [CSS Tricks][css-tricks-color-article].
- `;` - Every property-value pair must ends with a semicolon. Think of it like the period/full-stop for a sentence. This is how computer know that you're done with the property and move on.

Let's take one step further and make our `h1` look even more different.

```css
h1 {
  color: chocolate;
  font-size: 60px;
  font-weight: normal;
  text-decoration: underline;
  text-transform: uppercase;
  border: 3px solid cyan;
}
```

<h1 style="color:chocolate;font-size:60px;font-weight:normal;text-decoration:underline;text-transform:uppercase;border:3px solid cyan;">This is an h1</h1>

Notice that we're still using the same HTML: `<h1>This is an h1</h1>`. Nothing has changed there! There are just CSS that totally change it appears. Also notice that:

- one selector can have multiple property-value pair
- one property can have multiple values

Let's go through each of the property-value pairs:

<div class="pre-responsive-table"></div>

| property-value                | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `color: chocolate;`           | We use this before, but now we're using `chocolate` instead of `blue`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `font-size: 60px;`            | `font-size` is used to set the size of the text. Here we set it as 60 pixels (`px`). Just like there are many units for length (meter, foot, inch, etc.), there are few units you can used for `font-size`, e.g. `em`, `px`, or `rem`. Read this [CSS Tricks article][css-tricks-length-article] to learn more about what each unit means.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `font-weight: normal;`        | Our `h1` was bold by default, with `font-weight` we can set it to normal weight.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `text-decoration: underline;` | Just like MS Word, we can have some text decoration like `underline`, `line-through`, `overline`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `text-transform: uppercase;`  | This could be a bit confusing because we actually didn't change the HTML content, but just make it appears all uppercase. You can also make them all `lowercase`, or just `capitalize`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `border: 3px solid cyan;`     | This is how you create border around HTML item. Note that the border go all the way to the edge of the page. This is because `h1` take the whole line even though when its content is not that long. We'll address this behavior later when we talk about box-model. For now just keep that in mind. <br /> Notice we have 3 values for a single property: `3px`, `solid`, `cyan`. `3px` is the thickness of the border, `solid` states that it's a solid line (it could be `dotted` or `dashed` as well), and `cyan` is the color of the border. This is an example of CSS shorthand properties, because it could be written with 3 separate rules: <br />`border-style: solid;`<br /> `border-width: 3px;`<br /> `border-color: cyan`<br /> You'll see a lot like these in CSS. |

## Parents and Children

If you have a HTML that looks like this:

```html
<div>
  <p>This is a p.</p>
</div>
```

with the following CSS:

```css
div {
  color: red;
}
```

The `p` will be colored red too. This is because it has a parent and just like kid inherits some of their parents looks and bad habit, children in HTML inherits some of their parents CSS properties as well. This actually works if the HTML structure is very deep like:

```html
<body>
  <div>
    <div>
      <h1>
        <span>Hey I have same color as body!</span>
      </h1>
    </div>
  </div>
</body>
```

In fact, there is how I able to make the dark theme for this website.

## Poke Around

Poke around with the CodePen below.

Click on the "Edit on CodePen" to go to the page where you can edit the CSS.

<iframe height='600' scrolling='no' title='CSS Playground' src='//codepen.io/btholt/embed/ELaxOB/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/btholt/pen/ELaxOB/'>CSS Playground</a> by Brian Holt (<a href='https://codepen.io/btholt'>@btholt</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[css-tricks-color-article]: https://css-tricks.com/nerds-guide-color-web/
[css-tricks-length-article]: https://css-tricks.com/the-lengths-of-css/
