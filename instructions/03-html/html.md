---
title: HTML
path: '/html/'
description: ''
---

# HTML
HTML forms the backbone of a website. It's a language that any web browser can interpret and understand. HTML's responsibility is to put content on the website. The words you read and images you see are all encoded with HTML. But why the complication? Can't one simply upload a Word document and be done with it? The simple answer is no. Browsers require far more information about what to say and how to say it.

Let's get started with basic HTML elements.

## Headers
Headers do more than just format titles into nice bolded texts. They are used by search engines to determine the relevance of your website to users doing a web search. Using the right keywords can generate more traffic to your website. HTML gives you six levels of headers ranging from small to large.

```html
<h1>This is a level 1 header</h1>
<h2>This is a level 2 header</h2>
<h3>This is a level 3 header</h3>
<h4>This is a level 4 header</h4>
<h5>This is a level 5 header</h5>
<h6>This is a level 6 header</h6>
```

## Paragraphs
Every new _p_ tag will give you a new paragraph.

```html
<p>HTML is easy! You can begin creating your own website as soon as you learn the basics.</p>
<p>You can create multiple paragraphs using more p tags.</p>
```

## Anchor tags
These tags link texts to other websites. To create links to your text, wrap them in the &lt;a&gt; tag. Notice that there's an attribute called _href_ which holds the URL you'd like to link to. When users click on the text, _href_ takes them to the URL.

```html
There's a bunch of a tags flying around in <a href="https://en.wikipedia.org/wiki/Pharmacology">Wikipedia</a>
```

## Lists
Also similar to Word, you can create lists. HTML offers two types of lists. Ordered lists &lt;ol&gt; numbers the items. Unordered lists &lt;ul&gt; bullets the items.

```html
<ol>
  <li>Marvel</li>
  <li>DC</li>
  <li>Disney</li>
</ol>

<ul>
  <li>Marvel</li>
  <li>DC</li>
  <li>Disney</li>
</ul>
```

## Image
No website is complete without images. An image tag always has a source. They work similar to _href_ in &lt;a&gt;. The URL to your image goes into the _src_. The alt text helps visually impaired people understand the image. Yes, we care about them too.

```html
<img src="http://www.placepuppy.net/100/100" alt="it's a cute pup" />
```

## Input
Inputs allow users to give you information. Now here's a feature you don't get in Word. You can collect inputs in various formats. Some formats are better than others. For example, which format would you use to select the top 3 favourite songs?

```htm
  <input type="text">
  <input type="password">
  <input type="color" />
  <input type="file" />
  <input type="number" />
  <input type="datetime-local" />
  <input type="radio">Radio</input>
  <input type="checkbox">Checkbox</input>
  <input type="submit"/>
```

Try out all the inputs here.

```html
```

## Select
Life's full of choices. Let's create a dropdown list to select some holiday destinations. The &lt;select&gt; tags always wrap around the &lt;option&gt; tags that hold the items for users to choose from. Value is just the attribute that tells your browser which item your user has selected. Without them, it wouldn't know which option is chosen.

```html
Select your holiday destination.
<select>
  <option value="perth">Perth</option>
  <option value="amsterdam">Amsterdam</option>
  <option value="tokyo">Tokyo</option>
</select>
```

## Textarea
Textarea is exactly what it is. An area for users to type out some text, again like Word's textbox. It's the same as input, except that it allows you more lines.

```html
<textarea></textarea>
```

## Button
Click! Buttons can do a bunch of good stuff. Users can submit a form, close a window, or save a document. They are usually accompanied by a Javascript function. The _onclick_ fires the function when the user clicks on the button. In this case, _onclick_ fires an alert (the pop-up box) that says something. Now please, don't launch that missile.

```html
<button>Useless button</button>
<button onclick="alert('Oh God. The missile is launched.')">Launch Missile</button>
```

## Form
Form encapsulates all the inputs as one. It's pretty neat if you need to group multiple inputs together. In this case, the form below will submit the username and password together. Without form, the browser wouldn't know that the three inputs are meant to be together.

```html
<form>
  Username: <input type="text"/>
  Password: <input type="password"/>
  <input type="submit"/>
</form>
```

## Table
Don't worry about the long code. It's actually easier than it looks. There's a pattern to understanding tables.
- tr: table row
- th: table header
- td: table data

Notice that every row begins with &lt;tr&gt; and ends with &lt;/tr&gt;. Inside every table row, there are three more &lt;th&gt; or &lt;td&gt; tags. Each of the three tags are read from left to right. In the top most table row, Drug Type will go to the left, Uses sits in the center, and Examples will go to the right. In the next table row, the same thing is repeated. Now that you know the pattern, try adding more rows and columns below.

```html
<table>
  <tr>
  <th>Drug Type</th>
  <th>Uses</th>
  <th>Examples</th>
  </tr>
<tr>
  <td>Analgesics</td>
  <td>Pain killers</td>
  <td>Paracetamol</td>
</tr>
  <tr>
    <td>Antibiotics</td>
    <td>To kill bacteria</td>
    <td>Penicillins</td>
  </tr>
  <tr>
    <td>Antipsychotics</td>
    <td>To manage psychosis</td>
    <td>Clozapine</td>
  </tr>
</table>
```

## Divs, classes, and ids
Divs or divisions are used to neatly divide your sections. Unlike tables in the next section, divs are invisible boxes that have no cells. You can however, place a div inside another div, much like a box inside a bigger box. Divs can be assigned classes or ids.

Think of classes as 'groupings'. You can group common divs to give them common features. You don't always need to use them, but they are extremely useful for CSS styling which we will learn later. In the example below, the three superhero divs are nested inside the larger Avengers div.

Ids work similarly to classes except that they select a specific target in your website. For example, clicking on the 'Home' button will take you to your home page, obviously. This is because the 'Home' button is assigned the home page id.

```html
<div class="Avengers">
<div class="superhero">
  <h4>Tony Start</h4>
  <p>Genius with a metal armour.</p>
</div>

<div class="superhero">
  <h4>Steve Rogers</h4>
  <p>Skinny kid from the block.</p>
</div>

<div class="superhero">
  <h4>Bruce Banner</h4>
  <p>Mean, green, fighting machine.</p>
</div>
</div>

<div id="signup">Sign up as an Avenger today!</div>
<br/>
Name: <input type="text"/>
<br/>
Superpower: <input type="text"/>
<br/>
<input type="submit"/>
```

## Meta HTML
To put it simply, meta html is just information about html. It informs your browser what you're running on.

```htm
<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Very Own Website</title>
  <script>function launchMissile()</script>
  <style> ... CSS ... </style>
</head>
<body>
  <h1>Homepage</h1>
  <p>What's all this extra stuff?</p>
</body>
</html>
```
What's all these extra stuff? Let's break it down.

- **&lt;!DOCTYPE html&gt;** Hey Mr Browser! I'm using HTML version 5.
- **&lt;html lang="en"/&gt;** I'm using it in English.
- **&lt;head/&gt;** The data about my HTML document is here. This part's invisible to the user. Please wrap up _title_, _script_, and _style_ for me.
- **&lt;title/&gt;** This is the name of my tab.
- **&lt;script/&gt;** My Javascript is here. Now you know what functions to run.
- **&lt;style/&gt;** My CSS is here. Now you how to style the website.
- **&lt;body/&gt;** The rest of my code HTML is here. This is the visible part of my page.

![img](anatomy-of-an-html-element.png)  
Source: _https://developer.mozilla.org/en-US/docs/Glossary/element_

This is a simple line of code that tells the browser to say 'Hello world!'. Of course, our users wouldn't see the extra stuff that goes in to the HTML. To the browser, this line contains rich information about what to say, where to say it, and how to say it. Let's break down the pieces in this line of code.

- **Elements**: Code that begins and ends with tags are elements.
- **Tags**: Defines how data should be formatted and displayed. Tags can stand alone (&lt;div/&gt;) or used with opening (&lt;div&gt;) and closing (&lt;div/&gt;) tags. Note the position of the '/' inside them.
- **Attributes**: Store information about an element. Attributes are usually accompanies by values.

## Story board
There are many more tags to be picked up at your own time. Try putting everything together to create your own story here.

```html
<br/>
<h2>Code something cool here</h2>
<p>Now there, no copy-pasting.</p>
<img src="https://i.kym-cdn.com/entries/icons/original/000/008/402/Screen_shot_2012-01-18_at_5.28.23_PM.png" alt="no copy-pasting face"/>
<p>Because hands-on coding:</p>
<ul>
  <li>Builds muscle memory</li>
  <li>Builds speed</li>
  <li>Increases learning rate</li>
</ul>
<hr/>
<em>Have fun!</em>
```
