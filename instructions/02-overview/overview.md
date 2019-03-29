---
title: Overview
path: '/overview/'
description: ''
---

# Overview

Today we will learn quite some new terms, just like learning any new subject. When introducing new term, I will try my best to explain them, and hopefully give you some analogy to understand it better.

Today we're going to cover three "languages":

- HTML
- CSS
- Javascript

## Building A House

Why do you need to learn three languages? Let's make an analogy of building a house.

To build a house, you need three things:

1. the raw materials and the basic structure - **Content/Structure**
1. an architectural drawing to specify how to organize the raw materials so it looks great and brings delight to people live in it and people looking at it - **Style/Appearance**
1. electricity, water supply, alarm systems etc. - **Functionality**

That three basic requirements to build a house is like what the 3 languages mean for building a website:

1. HTML is the structure and content of your website.

   For example, I use HTML to states this page has a header, and a main content section, and a navigation that you can see on the right. In the main content section I specify I have a main title of "Overview", subtitle of "Building A House", and there are some paragraph in each section.

   When you write HTML, it's a bit like writing a Microsoft Word document. Instead of using clicking on the toolbar to specify your heading, or click "Insert Link" to add a link, you just write HTML to specify those.

   Just like you can build a house without an architect or designer, you can have a website with only HTML without CSS. It's just that it's so ugly that nobody would like to visit it.

1. CSS specify the styles and appearances of the website

   CSS is used to specify anything that related to appearance, e.g. color, font-size, spacing, and even how the cursor appears when you point your mouse cursor at something.

   When you write CSS, it's like writing a list of rules that specify a specific appearance properties. For example, you would specify all links colors are yellow, and background is black etc.

1. Javascript adds functionality to your website

   Javascript is the programming language that allows you to build functionality to your website. For example, clicking on the toggle button at the top right, the color theme of this website would change, and I achieve that by using Javascript. Javascript is the only programming language browser understand.

We will go through what each of these in detail later, so no worries if this is not making any sense now. Just bear in mind the key takeaways here:

1. HTML - Structure + Content
1. CSS - Styles
1. Javascript - Functionality

## Tools

Today we will go through this website, and it will be always on Internet even after this workshop ends, so don't bother to copy anything down, you can refer to it later.

However, there are two softwares that I want to discuss now, so it's easier when we do our coding exercise.

### The Browser

One of the most important tools in building website is the web browser. The web browser contains a lot of tools that help you as a web developer to understand your code, find bug, and experiment changes.

> My Recommendation: Google Chrome or Firefox

[Download Chrome](https://www.google.com/intl/en/chrome/) | [Download Firefox](https://www.mozilla.org/en-US/firefox/new/)

I'm mostly familiar with these two browsers, so I can help you when you're using them.

### Text Editor

One of the things all programmer like to always argue is which text editor is the best. For me, it's mostly personal preference.

> My Recommendation: Visual Studio Code

[Download VS Code](https://code.visualstudio.com/Download)

VS Code is my personal favourite. It's fast, have a lot of good default built-in, and very extensible.

Other popular alternatives are [Sublime Text 3][sublime-text], [Notepad++][notepad-plus-plus]. Microsoft Word is not allowed.

### Code on This Website

Once in a while, I will show you some code example, which would looks like below:

```html
<p>This is a paragraph.</p>
```

In other times, I will show you some code that is **editable**, like below:

```htm
<h1>I am heading</h1>
<p>I am paragraph. <a href="https://google.com">Me a Link</a></p>
```

## Your Responsibility in this Workshop

Have you tried to tap a song and ask your friend to guess? Pick a well-known song like Happy Birthday and tap out the rhythm on the table.

In 1990 there was such a research in Standard University, and it consists of participants categorized into tappers and listeners, and ask tappers to do so while letting the listeners to guess.

However, before the listeners make the guess, the tappers are asked to predict how often the listeners would be able to guess the song. The tappers are confident. In average, they predict about half of the listeners would be able to guess the song correctly.

Yet, the listeners are only able to guess the song correctly for less than 3% of the songs.

Why the difference is so big? This is because the tappers could hear the melody in their head, but listeners could not. The tappers' knowledge of the song that they're tapping caused them to miscalculate the listeners' comprehension. The tappers are [cursed by knowledge][curse-of-knowledge].

Why am I telling you this? Because I want to highlight one fact, which is the fact that while I'm teaching you today, I may sounds like the things are easy, simple. And I would think that my explanation are easy to understand for you, but the fact is I'm cursed by my knowledge too. Even though I try my best to make my explanation as simple as I could, but still, I probably overestimate how clear is my explanation.

So you have a responsibility in this workshop: tell me if I'm talking something that doesn't making any sense. If you need me to explain more, don't be shy to stop me and ask me to slow down or reexplain the things that I've just show you. I'm cursed by my knowledge, and I need your help to improve how I explain things.

Now let's get started.

[curse-of-knowledge]: https://en.wikipedia.org/wiki/Curse_of_knowledge
[sublime-text]: https://www.sublimetext.com/3
[notepad-plus-plus]: https://notepad-plus-plus.org/download/v7.6.4.html
