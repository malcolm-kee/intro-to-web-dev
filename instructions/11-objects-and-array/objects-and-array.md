---
title: Objects and Arrays
path: '/objects-and-arrays/'
description: ''
---

# Objects and Arrays

So far we've talked about having one variable at a time: one first name, one last name, one price, etc. What if we have a collection of data? It'd be nice to group together like data. Good news! You can!

```javascript
var person = {
  name: 'Malcolm Kee',
  city: 'Kuala Lumpur',
  age: 29
};
console.log(person);
console.log(person.name);
console.log(person['name']); // same as the line above; definitely prefer using the other one
```

This is called an object. They're extremely useful in JavaScript; they're how you'll group together like-information so that they can be used together. They contain a bunch of **keys** and **values**. The keys are on the left side of the `:` and represent how you get that piece data of out of the object. `name` is one such key, and the way I get the name of the person is by using `person.name` or `person['name']`.

Used in conjunction with functions they're very powerful. Take this example:

```javascript
var person1 = {
  name: 'Malcolm',
  ageRange: '25-35'
};
var person2 = {
  name: 'Mahathir',
  ageRange: '90-95'
};

function suggestMusic(person) {
  if (person.ageRange === '25-35') {
    console.log('You crazy millenial. Listen to Lady Gaga.');
  } else if (person.ageRange === '90-95') {
    console.log('You are obviously from golden age. Try Eric Clapton.');
  } else {
    console.log(
      'Uh, maybe try The Beatles? Everyone likes The Beatles, right?'
    );
  }
}

suggestMusic(person1);
suggestMusic(person2);
```

Now we're able to pass all this information as one package which makes it easy to keep track of since we're just passing one variable.

Objects can as well have nested objects inside of them.

```javascript
var me = {
  name: {
    first: 'Malcolm',
    last: 'Kee'
  },
  location: {
    city: 'KL',
    country: 'Malaysia'
  }
};

console.log(me);
```

## Arrays

Objects are un-ordered collections of datas using keys and values. Arrays, in contrast, are **ordered collections of data**. If you put something in an array, it has an order. For example, you might a list of the days of the week.

```javascript
var daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[6]);
```

You first can see how we declare an array, using `[ ]`. Inside of an array, you can store anything you can store in a variable. You can have an array of numbers, an arry of strings, an array of objects, an array of arrays, an array of arrays of arrays, etc.

You can also see above how we access individual elements in an array: we use square brackets again and then we reference the number that we want to access. Again, remember, the numbering starts at 0. So the first element is index 0.

Arrays also have many methods (another word for functions that live on an object) and properties (another word for key/value pairs) that live on them. Let's see some of those:

```javascript
var primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join(' | '));
```

`primeNumbers.length` gives you back an number that is how long the array is. In this case there are eight elements in the array so it gives us back `8`. `primeNumbers.join(" | "))` takes your whole array and makes it into one string. THe `" | "` paramenter I'm passing is what I want put between each element, so you end up with the string `"1 | 2 | 3 | 5 | 7 | 11 | 13 | 17"`.

So what if I want to add an element to the array after I've created. Use `push`!

```javascript
var attendees = [
  { name: 'Matthew Yong', rsvpOn: '17-Mar' },
  { name: 'Hazh', rsvpOn: '17-Mar' },
  { name: 'Yaw Hog', rsvpOn: '18-Mar' },
  { name: 'Islahuddin Ismail', rsvpOn: '18-Mar' }
];

attendees.push({ name: 'Azreen TP', rsvpOn: '18-Mar' });

console.log(attendees);
console.log('=============');

attendees[2] = { name: 'Brian Teh', rsvpOn: '18-Mar' };

console.log(attendees);
```

The first thing we do is add an element to the end using the push function that arrays have. It "pushes" the element on the end.

Below that, we're overriding index 2 with a new attendee. This will throw away what was there before and set it to be what we've set it to be.

Okay, now, given that, what if we wanted to `console.log` everything in the array? You already have all the tools to do that? Let's see to do it.

```javascript
var cities = [
  'Kuala Lumpur',
  'Melaka Town',
  'Kuala Selangor',
  'Johor Bahru',
  'Seberang Perai'
];

// method 1
for (var i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

// method 2
cities.forEach(function(city) {
  console.log(city);
});
```

The first way, using a for loop, we're using that `i` control variable which gets incremented each loop. We use that `i` to access each item in the array on each iteration of the loop. We have the loop stop when `i` gets equal to the `length` of cities. Very useful pattern. You'll see it a lot.

The second way is using a function that arrays have called `forEach`. This `forEach` method takes in a function and that function will be called once on each item of the array. It will pass that item into the function, which is what `city` is in this situation. Both are useful patterns to know. You'll use both frequently. While you're getting started, just use the one you feel comfortable with. They have different things that make them preferable in different situations but usually you can use either. Method 2 may be a bit more advance but I don't think you should be scared of it.
