---
title: Function
path: '/function/'
description: ''
---

# Function

Function is a block of reusable code. Just like we use class to reuse CSS styles, we can use function to reuse code.

```javascript
function addTwo(number) {
  return number + 2;
}

var finalAnswer = addTwo(5);
console.log(finalAnswer);
```

This isn't super useful but hopefully it shows you the mechanics of how a function works. We created a function called `addTwo`. This function takes in one parameter, `number` and it returns that number with 2 added to it. We can now use that `addTwo` function as much as we want! Let's make a something a bit more useful.

```javascript
function greet(firstName, lastName, honorific, greeting) {
  return (
    greeting +
    ' ' +
    honorific +
    ' ' +
    lastName +
    '! I’m extremely pleased you could join us, ' +
    firstName +
    '!'
  );
}

console.log(greet('Malcolm', 'Kee', 'Mr', 'Good Morning'));
console.log(greet('Jack', 'Sparrow', 'Captain', 'A-hoy'));
```

Now we rather than have to repeate ourselves over-and-over again with that long string, we can just call greet with the appropriate parameters. Here we use four parameters. The order is important that we send in the parameters because this will be the order function receives these parameters. You can have as many or as few parameters as you like.

The way **call** a function is you add parenthesis to the end of it, like this: `someFunctionName()`. If you see parenthesis after a variable name, you instantly know that that's a function. Inside of the parens go the parameters. These variables will be passed to the function that is being called in the order that you put them there. Example:

```javascript
var myHomeCity = 'Kuala Selangor';
var myHomeState = 'Selangor';
var myHomeCountry = 'Malaysia';

function logOutYourHome(city, state, country) {
  console.log('You are from ' + city + ', ' + state + ' ' + country + '.');
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);
```

## Scope

We'll talk about scope multiple times but we'll start off here with it. Every time you call a function, it has its own scope. Other things can't peek into it; it just has its own little workspace for it work with. Once its done, any variable that you haven't explicitly held on to or returned at the end is discarded. For example:

```js
function addFive(number) {
  var someVariable = "you can't see me outside this function";
  return number + 5;
}

addFive(10);
console.log(someVariable);
```

This is not going to work. `someVariable` is inside of the `addFive` scope and once `addFive` completes, it throws `someVariable` away since it's now out-of-scope.

This can be a difficult one to deal with as someone new to coding because you'll go to log something or use a variable and it's out of scope so it's not there. Just know if that happens, this is probably the problem.

Scope is hard. And scope is particularly strange in JavaScript (it varies by programming language.) If it feels hard it's because it is. A general, imperfect way for you to think about it right now is that a variable is "alive" (in scope) in between whatever the closest function\'s `{` and `}`. A few examples below, see if you can get it right. Keep in mind that the variable will stay in scope as long as any scope it exists in still exists. If I declare a variable in an outter scope and modify a variable in an inner scope, that variable will survive as long as the outter scope does. **It matters where the variable is declared.**

```js
var A = 'A';
var F;

function doStuff(B) {
  console.log(B);
  var C = 'C';
  var H = 'H';
  if (1 + 1 === 2) {
    var D = 'D';
    H = 'something else';
  }
  console.log(D);
  console.log(H);
  F = 'F';
}

var E = 0;
while (E < 3) {
  E++;
  console.log(A);
  var G = 'G';
}
console.log(E);
console.log(G);

doStuff('B');
console.log(B);
console.log(C);
console.log(F);
```

This is pretty convulated example but see what you think. Once your ready, the next block will be the answers.

```js
var A = 'A';
var F;

function doStuff(B) {
  console.log(B); // works, B parameter is still in scope
  var C = 'C';
  var H = 'H';
  if (1 + 1 === 2) {
    var D = 'D';
    H = 'something else';
  }
  console.log(D); // works, D was declared in that if statement block
  console.log(H); // works, H was declared outside the if statement
  F = 'F';
}

var E = 0;
while (E < 3) {
  E++;
  console.log(A); // works, the outer block (called the global scope) is still in scope
  var G = 'G';
}
console.log(E); // works, E was declared outside the whie loop
console.log(G); // works, declared inside the while loop and it's over

doStuff('B');
console.log(B); // does not work, the B parameter expires after the function call
console.log(C); // does not work, C was declared inside the function and the function is over
console.log(F); // works, F was declared in the global scope
```

## Builtins

Lots of functions already exist for you! Smart people have created this commonly-used functions for things we often need. For example, say you have a string and you want to make everything lowercase, you can do this:

```javascript
var sentence = 'ThIs HaS wEiRd CaSiNg On It';
console.log(sentence.toLowerCase());
```

Always be looking for the parenthesis `()`. And the best place to look all this stuff up is [MDN][mdn].

You can call `Math.round(5.1)` and it'll return that number rounded (in this case, `5`). You can use the following function to return part of a string:

```js
string.substr(indexToStart, howManyCharactersToInclude);
```

We'll introduce them as we go but know there are a _lot_ of them. You'll learn by doing.

```javascript
console.log(Math.round(5.1));

var name = 'Malcolm Kee';
console.log(name.substr(8, 3));
```

[mdn]: https://developer.mozilla.org/en-US/
