---
title: Programming Basics
path: '/programming-basics/'
description: ''
---

# Programming Basics

![JS Logo](js.svg)

Programming, also known as coding, is about asking computer to do something for you.

## For Who/What Your Code is Written For?

You may think, since coding is all about asking computer to do something, then it's written for computer.

But the fact is, your code is written for computer **and** human. Why? Because you or someone else is going to go back to the code that you've written previously and try to understand it and change it.

Therefore, it's important to write code that's easily to be understood. Be explicit, be simple. Code is communication.

> "Any fool can write code that a computer can understand. Good programmers write code that human can understand" &mdash; Martin Fowler

When you write code and provide it to computer, computer will break it down into smaller pieces so that it can understand and then it will run those one at a time. With Javascript, only one thing will happen at a time (this is called single-thread in Computer Science terminology, but you don't need to know the term to code).

## Your First Code

Now let's write our first code.

```javascript
var monthlyRent = 500;

var yearlyRent = monthlyRent * 12;

console.log(yearlyRent);
```

- On line 1, we declare a variable, `monthlyRent` and assign it the value of 500. `var` is a keyword for us to tell Javascript that we declaring a variable. Variable name cannot have space, therefore we merge "monthly rent" to a single word `monthlyRent`. In order to make it more readable, we capitalize "rent".
- Notice the semicolon (`;`) at the end of each line. Semicolon tells Javascript that you've completed the statement, it's like a full stop for sentence.
- Variable name can be called almost anything. You **can't** use keyword as variable name, like this: `var var = 20;`. `var` is a keyword so it can't be used as variable name.
- However, you should name your variable properly so that reader of your code can easily understand your intention. Always, always, always use a good variable name and put some thought into it.
- After line 1, I have a variable named `monthlyRent` that I can use as much as I want. In this case, it equals to value 500 but it also represents the meaning of monthly rent. I use `monthlyRent` to calculate yearlyRent on line 3 with the multiplication sign `*`. I'm mixing variable and number here but that's fine, Javascript knows that `monthlyRent` represents 500 and will translate it before do the actual multiplication.
- Why I don't just use the value `500` directly on line 3, i.e. `var yearlyRent = 500 * 12;`? Because it communicate your intention. Imagine someone comes to this code 3 months later, how could they know what the `500` represents? It could represents the number of residents, number of
  electrical appliances, etc.
- In fact, you could argue that I should have another line `var numberOfMonth = 12;` to make the meaning of 12 clear. You can do that. There is no "one right way" to write a code.
- `console.log(yearlyRent)` is going to print whatever stored in `yearlyRent` to the Javascript console. The Javascript console is part of browser dev tools. We'll explain how it works slightly later.

Let's get the snippet working in our browser. Make a new folder and add an `index.html` with the following content:

```htm
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript Experiments</title>
  </head>
  <body>
    <h1>JavaScript Experiments!</h1>
    <script src="./calculate.js"></script>
  </body>
</html>
```

That `script` tag is going to load Javascript into our HTML page. So make another file in the same folder with the name `calculate.js` (it can be anyname as long as the value in the `script` tag matches it). Then in that JS file add our code from above:

```js
var monthlyRent = 500;

var yearlyRent = monthlyRent * 12;

console.log(yearlyRent);
```

Now if you open the HTML file and open your console, you should see the number `6000` being printed. Congratulations! You just written your first code!

## Numbers, Strings, and Booleans

So far we've just dealt with numbers. Let's go further and start working with words and characters. In programming, we refer to these things are strings, as in a string of one-letter characters. An example of this would be

```javascript
var myName = 'Malcolm Kee';
console.log(myName);
```

You can see I use the `'` (single quote) to enclose everything I want to be in the string. In JavaScript you can also use `"` (double quote) as well to demarcate strings.

Strings, as you may imagine, are everywhere in programming. We're constantly keeping track of names, addresses, names of products, cities, etc. and thus constantly need strings.

Let's go further. Strings let you join them together through string concatenation. If I want to be able to greet someone based on their name, I might have something like this:

```javascript
var firstName = 'Malcolm';
var lastName = 'Kee';

var sentence = 'Hello ' + firstName + ' ' + lastName + '! How are you!?';

console.log(sentence);
```

We can use the `+` to tell JavaScript to connect two strings. Notice how we have insert the space between `firstName` and `lastName`. The computer only does exactly what you tell it to do. If you don't insert that space, it doesn't get put there.

### Booleans

Sometimes you just need a simple true or false. These are where booleans are useful. Something like a light switch's state is best represented by a boolean. A light is either on (true) or off (false). You'd have something like `var lightIsOn = true;`. Useful and you'll see them everywhere.

### Number

A number in JS is a number.

## Control Flow

Sometimes I want to modify the flow of how my program works, or in other words, some time I only want to run code if some condition is true. This is where `if` statements are very useful. Imagine if we tried this.

```javascript
var skyIsBlue = true;

if (skyIsBlue) {
  console.log('The sky is blue!');
} else {
  console.log('The sky is … not blue?');
}
```

In the above example, the condition inside of the parens is evaluated and if it's true, the first block is run and the second is skipped. If it is false, the second block is run and the first block is skipped. Paste that code into your experiments and play with it. You also do not have to have an else block. Okay, let's go further.

```javascript
if (2 + 2 === 4) {
  console.log(
    'Oh thank god, the fundamental principles of mathematics still hold true.'
  );
} else {
  console.log('Uh, is this some lame joke or something?');
}
```

You can put any expression (a technical terms, means anything you can stick on the right side of an equal sign, we'll explore it more as we go) inside of the if statement. In this case, we are asking, is two plus two still equal to four. If this is true (I hope so) then again the first block will be run. If not, the second will be.

Let's talk about `===` for a second. If you use just one `=` in JavaScript, it means **is assigned to**. So when we have `const isBrianCool = true;` you can verbalize that as "The variable isBrianCool is assigned to true". Thus we can't use that inside of the if statement because that's not we mean. We're trying to ask a question, not assign something. We're trying to ask "is two plus two equal to four." Enter the triple equals. Triple equals is the same as asking "is this equal to that." We use the triple equals instead of the double equals because double equals does a lot of funny business that usually we don't want it to do. It does what's called coercion and we'll talk about that below. But in an example `2 == "2"` but it does not `2 === "2"`. String 2 is double equal to number 2 but string 2 is not triple equal to number 2.

There's also `!==`. This is asking "is this not equal to that". Lastly you can ask with numbers `>` `>=` `<` `<=` as well to ask if numbers less than or greater than too. For another example:

```javascript
var friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log('Cool, now I have a lot of nachos to myself.');
} else if (friendsAtYourParty >= 4) {
  console.log('Perfect amount to play some Mario Kart.');
} else {
  console.log('Wooooo turn on the dance music!');
}
```

This also demonstrates the `else if` if you have more than just two different conditions.

### Loops

Okay so now what if I want do one thing multiple times? I could do something like this

```javascript
var friendsAtYourParty = 0;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
console.log(friendsAtYourParty);
```

That's annoying though. I wish there was a better way.

Let's explore a few ways to do that using loops.

```javascript
var friendsAtYourParty = 0;
while (friendsAtYourParty < 10) {
  friendsAtYourParty = friendsAtYourParty + 1;
}
console.log(friendsAtYourParty);
```

This is a while loop. The first part works similar to an `if` statement: as long as what's inside that statement is **true** it will continue running and re-running the body (what's between the `{ }`) until that statement is false. Once that statement is false, it'll break the loop and continue on. This case, we add 1 to `friendsAtYourParty` until it's 10, and then the next loop, when it's 10, it'll stop because 10 is not less than 10.

Also, let's just show you a few shortcuts for adding one to a thing

```javascript
var friendsAtYourParty = 0;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty += 1;
friendsAtYourParty++;
++friendsAtYourParty;
console.log(friendsAtYourParty);
```

Those four lines are equivalent. They all do the exact same thing: they add one to the existing total. The second one, the plus-equals line, you can put any number there and it'll add that amount to total, so `friendsAtYourParty += 15;` would add 15 to the total. It also works with `-=` (subtraction,) as well as `*=` (multiplication,) `/=` (division,) and `**=` (exponent.) Two last two lines (`++` before or after) just signify add one. They more-or-less mean the same thing (there's a subtle different of _when_ it adds one that should never matter to you) but suffice to say everyone in the JavaScript community _always_ does the `++` after; I've never seen anyone do it before in JavaScript.

Okay, so now let's see a second kind of loop to achieve the same effect as above.

```javascript
var friendsAtYourParty = 0;
for (let i = 0; i < 10; i++) {
  friendsAtYourParty++;
}
console.log(friendsAtYourParty);
```

This is a for loop which is likely the most common kind of loop. Inside the parens are three statements and you need all of them. The `var i = 0;` is you defining your control variable that will control the loop. For some reason people always use `i`, not sure why. It's just that way. It really could be anything. The second statement `i <= 10` is just like the while loop, is that's the statement that is as soon as it's false it breaks the loop. The last statement, `i++` is that happens at the end of every loop. In our case, we increment the control variable `i` so that it creeps closer to the end of the loop each time.

An important note: in coding, we start counting from 0. In English, we count `1, 2, 3, 4, 5, etc.` but in coding we count `0, 1, 2, 3, 4, etc.`. So the fifth element of a string is index 4 (where index is how we'd refer to where that item is in the string). Index 0 is the first element. It's weird but you get used to it and it makes a lot of things easier.

Sometimes, if you mess up what's inside the control condition for the loop, you'll get a runaway loop that'll never complete. This is called an **infinite loop** and it'll lock up and crash your code. Something like this:

```js
var friendsAtYourParty = 1;
while (friendsAtYourParty > 0) {
  friendsAtYourParty = friendsAtYourParty + 1;
}
console.log(friendsAtYourParty);
```

Since you're adding one to `friendsAtYourParty` each time, and the loop will continue each time until it's less than zero, that condition will never happen. Thus it'll continue going until it crashes your code. Be careful of these. Nasty bugs.

## Exercise

<hr />

Write some code that declares two variables, `character` and `timesToRepeact`.

Using a loop, repeat that character that many times and then console.log it.
Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log 'fffff'

<hr />

You can use your console in your browser to see the output.
