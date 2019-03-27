---
title: CSS Cascades
path: '/css-cascades/'
description: ''
---

# CSS Cascades

Cascade, the "C" in CSS, is the part what makes some people says CSS are confusing and hard. However, I think it's important for you to understand it so you know what could be the possible reasons when your CSS doesn't work.

## What Happens When CSS Rules in Conflict?

What happen if you have two CSS rules that is trying to do conflicting thing? Let's see an example.

```html
<style>
  .title {
    color: green;
  }
  .title {
    color: red;
  }
</style>
<h3 class="title">Title</h3>
```

In this case, we have two rules for the same class. So which one is applied? Since they're equal, the one that comes **last** wins.

Now take one step more complicated.

```html
<style>
  .heading {
    color: green;
    border: 1px solid orange;
  }
  .brand {
    color: red;
  }
</style>
<h3 class="heading brand">Brand Heading</h3>
```

So what's this going to look like? In the eyes of CSS, these two rules are equal because they both have the same **specificity** (this is a word that used a lot in CSS). They both specify one class, which makes them equal. Since `.brand` comes later, it wins. Since `border` property doesn't conflict, it will still be applied.

```html
<style>
  .animal.subtitle {
    color: green;
  }
  .subtitle {
    color: red;
  }
</style>
<h3 class="animal subtitle">Tiger</h3>
```

As you may imagine, because the first rule (`.animal.subtitle`) has two classes, its specificity is higher (it's harder to match two classes than only one class), so it wins even though it comes first. Remember, order only matters if other things being equal.

```html
<style>
  .special-title {
    color: gold;
  }
  h4 {
    color: red;
  }
</style>
<h4 class="special-title">Tiger</h4>
```

This one is less obvious. Now we need to dig slightly deeper to specificity. **A class is considered more specific than a tag**. A class selector overrides a tag selector. Therefore even though the `h4` selector comes later, it still loses to `.special-title` selector. That's why it's useful to do all CSS in classes, you doesn't need to worry these specificity and only deal with two factors: _number of classes_ and _order_.

You doesn't want to face the struggle:

![Guy struggling with curtain](css-frustration.gif)

## id and !important

The next two should nearly never use. I discuss them because people post it out there as solution in forum and you may find them when you google.

As discussed [previously](/css-selectors/#other-selectors), we can use select element by id with CSS.

```html
<style>
  #special-heading {
    color: red;
  }

  .nav-head.nav-main.nav-special {
    /*
    This is for illustration only.
    Never have selector that is this long.
    It's too specific.
    */
    color: blue;
  }
</style>
<h3 id="special-heading" class="nav-head nav-main nav-special">I am special</h3>
```

You may think that because the class selector is so long, it would wins over the id selector. Not so. Id selector always win over class selector, just like class selector always wins over class selector.

Any other way that you should avoid?

```html
<style>
  #special-head {
    color: red;
  }

  .navi-head.navi-main.navi-special {
    color: blue;
  }

  .navi-special {
    color: pink !important;
  }
</style>
<h3 id="special-head" class="navi-head navi-main navi-special">I am special</h3>
```

`!important` is the key word that says, "Hey CSS, screw your specificity, I am important! Just use me!". As you can see in the last example, a single class selector able to overpowers multiple class selector and even id selector.

However, using `!important` is gonna be a nightmare in your code, as it breaks all the rules and people will start all saying themselves are `!imporant` and nobody can figure how your CSS code works anymore.
