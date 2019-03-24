---
title: Layout
path: '/layout/'
description: ''
---

# Layout

CSS can be used to layout your webpage differently. Without this, you couldn't have two boxes next to each other like below:

```html
<style>
  .demo-box {
    width: 200px;
    height: 200px;
    border: 3px solid maroon;
    background-color: coral;
    margin: 8px;
    border-radius: 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>
<div class="demo-box">Box 1</div>
<div class="demo-box">Box 2</div>
```

## The Box Model

We're going to discuss about the **box model** of CSS, which is the most confusing thing for people new to CSS, but it's important.

### display

Every tag has a `display` property assigned to it by default. In fact, CSS has a lot hidden default, e.g. text is black and background is white by default. For `display`, the default value varies depending on the type of tag.

- `div` by default is `display: block`
- `span` by default is `display: inline`

However, given that we have access to CSS, we can change the `display` value so `div` acts like a `span` and vice versa (however, usually you should just use the correct tag). Following are the possible values for `display`:

<div class="pre-responsive-table"></div>

| `display:`     | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inline`       | Like it sounds, it makes the element behave like text, where they will append next to the previous item on the same line. The key here is browser will determine all the width, height, padding, and margin etc. for you and **will not allow you to change them**. This is a common pitfall for those learning. If you trying to set the height and width of something and it doesn't apply, that's probably because of the wrong `display` type. |
| `block`        | `div`, `p`, and `h1` - `h6` tags are `display: block` by default. This allows you to take control of height, padding, and margin etc. By default, something that is `display: block` take the whole line by themselves.                                                                                                                                                                                                                            |
| `inline-block` | A hybrid of the previous two. This will make browser try to place the tag inline, but will still allow you to control the height, width, padding, and margins. Like this: <div class="inline-box"></div> This wouldn't be possible with the previous two values.                                                                                                                                                                                   |
| `flex`         | Externally, it behaves like a `block`. However, it has superpower that able to control the tag inside it. We'll discuss this in details later.                                                                                                                                                                                                                                                                                                     |
| `inline-flex`  | Similar to `flex`, but it appears externally like `inline-block`.                                                                                                                                                                                                                                                                                                                                                                                  |

There are other values like `grid`, `inline-grid`, and `table` etc. which I would not cover here. You can look them up if you're interested.

### Height, Width, Padding, Border, and Margin

Something that is a `block` or `block`-like has several measurements that add up to its whole.

```html
<style>
  .box-model-demo {
    border: 3px solid red;
    padding: 5px;
    margin: 25px;
    background-color: white;
    color: black;
  }
</style>
<div class="box-model-demo-container">
  <div class="box-model-demo">
    <span>Interior Content</span>
  </div>
</div>
```

The `background-color` of the container and the dotted green line is added by me to show padding. Let's pick the CSS rules apart, starting from outside:

- `margin` - this is the space outside the container. If you give something `background-color`, it will not apply to the margin because the margin is **outside** the item.
- `border` - this is the `border` property that we use from the beginning. Not everything need a border.
- `padding` - this is the space between the border and the content. In the example above, padding is the space between the red border and the green dotted line.

Right now, we didn't set the `height` or `width` for the box. Which means it will try to take its height based on its content and 100% of the width it can take. We can change these two.

However, if I set `width: 400px`, what is actually `400px` long? Unfortunately, the answer depends on another property called `box-sizing`.

- if `box-sizing: content-box;` (default), `width` = `(content width)`
- if `box-sizing: border-box;`, `width` = `(content width) + border + padding`

Because most of the time we want width to include border and padding, therefore in most projects today the following rule is included:

```css
* {
  box-sizing: border-box;
}
```

_(This is the rare case where the all selector is allowed.)_

## Laying Out Items

We're discuss how to layout items with CSS using flex. Some people use float, grid, and table as well but we're not going to discuss it here.

We're going to be using the following boxes over the next few examples.

```html
<style>
  .box-1 {
    border: 1px solid grey;
    height: 150px;
    width: 300px;
    background-color: teal;
    color: white;
    text-align: center;
  }
  .box-2 {
    border: 1px solid grey;
    height: 100px;
    width: 300px;
    background-color: crimson;
    color: white;
    text-align: center;
  }
  .box-3 {
    border: 1px solid grey;
    height: 200px;
    width: 100px;
    background-color: forestgreen;
    color: white;
    text-align: center;
  }
</style>
<div>
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

### Flex

`display:flex;` is a display mode in CSS. It allows us to control how the children layout. It's a powerful features and I think you should read the [CSS Tricks article] that explain all the flex properties.

The slightly complex part of Flex is that it is not a single property, but multiple properties used together. However, I think it is pretty easier to remember once you've played with it a few times.

Now what I'm going to show you is a few useful use cases for flex, and all of them are sharing the following CSS.

```html
<style>
  .flex-container {
    display: flex;
  }
</style>
<div class="flex-container">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

Note that I didn't change anything on the box themselves. Instead, I have only add a single CSS rule `display: flex;` on the parent of the boxes - `.flex-container`. With that CSS rule, our boxes has been changed from arranged vertically to be on same row.

Now let's tweak a few other flex properties: `flex-direction`, `justify-content`, and `align-items`.

```html
<style>
  .flex-direction {
    /* flex-direction: row; */
    flex-direction: row-reverse;
    /* flex-direction: column; */
    /* flex-direction: column-reverse; */
  }
</style>
<div class="flex-container flex-direction">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

By changing `flex-direction`, we able to change how the items are being placed in a flex container. Try the examples above with the different values.

Note that the default value for `flex-direction` is `row`, therefore you will not see any difference if you set it.

```html
<style>
  .justify-content {
    /* justify-content: flex-start; */
    justify-content: flex-end;
    /* justify-content: center; */
    /* justify-content: space-between; */
    /* justify-content: space-around; */
    /* justify-content: space-evenly; */
  }
</style>
<div class="flex-container justify-content">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

By changing `justify-content`, we change how the items are aligned along the `flex-direction`. The default value of `justify-content` is `flex-start`.

```html
<style>
  .align-items {
    /* align-items: stretch; */
    align-items: flex-start;
    /* align-items: flex-end; */
    /* align-items: center; */
    height: 100px;
  }

  .align-items > * {
    height: auto;
  }
</style>
<div class="flex-container align-items">
  <div class="box-1">1<br />One</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

`align-items` specify how items are aligned cross-axis against the `flex-direction`. The default value is `stretch`. Note that I've remove all the `height` property on all the box, because some `align-items` property will not work if the `height` or `width` is specified.

[css-tricks-guide-to-flexbox]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
