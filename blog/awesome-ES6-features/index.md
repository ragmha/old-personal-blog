---
title: Awesome ES6 Features
date: 02/07/2017
description: Refresh your ES6 with these examples 👊
---

## ✊ Convert NodeList to Array:

```javascript
let Headings  = [...document.querySelectorAll('h1')];
```

## ✊ Convert Arguments to Array:

```javascript
let argsArray  = [...arguments];
```

## 🦄 Unique Arrays:

```javascript
let array = [1,3,3,7];

let result = [...new Set(array)]; // => [1, 3, 7]
```

## 🔨 Destructuring:

```javascript
let {foo, bar} = {foo: "lorem", bar: "ipsum"};

foo; // => lorem

bar; // => ipsum
```

## 🚓 Interpolate

```javascript
let obj = { x: 1, y: 2 };

let result = console.log(`Your total is: ${obj.x + obj.y}`);

result; // => Your total is: 3
```

## 🙅 Swapping:

```javascript
let x = 4;
let y = 2;

let [y1, x1] = [x , y];

y1; // => 4
x1; // => 2
```

## 🤔 Finding Max in Array?

```javascript
let arr = [1,4,32,10];

Math.max(...arr); // => 32
```

## 🔪 ~~List comprehension:~~

### `[NOT COMPATIBLE with current browser, Only works on Firefox(Gecko)]`

```javascript
let numbers = [1, 2, 3, 4];

var doubled = [for (let i of numbers) i *2];

doubled; //=> 2,4,6,8
```

## ✊ Map them!

```javascript
let arr = [{id: 1, name:'A'}, {id: 2, name:'B'}, {id:3, name:'C'}];

arr.map(x => x.id); // => [1,2,3]
```

## 😮 Object.is ?
```javascript
let z = (x, y) => x === y || Object.is(x,y);

let obj1 = {
  id : 1
};

let obj2 = {
  id : 1
};

z(obj1, obj1); //=> true
z(obj1, obj2); //=> false
```
## 👻 Is it Hidden?

```javascript
// RegExp.prototype.test()

let isHidden = (file) => /^\.|~$/.test(file);

isHidden(".DS_STORE") //=> true
```

## 🤔 Is it Included?

```javascript
// Array.prototype.includes()
let arr = [1, 2, 3];

arr.includes(2); // => true 🙌

```

## ✋ What them entries ?

```javascript
let obj = {foo: 'bar', baz: 42};

let Entries = Object.entries(obj);

Entries; // => [['foo', 'bar'], ['baz',42]]

```
## ✋ What them values ?

```javascript
let obj = {foo: 'bar', baz: 42};

let Values = Object.values(obj);

Values; // => ['bar', 42]

```

## 😇 Promise

```javascript
let wait1000 = new Promise((resolve, reject) => {
  setTimeout(resolve,1000);
}).then(() => {
  console.log('Wohoo!! 🙌');
});

wait1000; // => after 1 sec Wohoo!! 🙌
```

## 🔍 Find

```javascript
let ages = [12, 19, 6, 4];

// Array.prototype.find()
let firstAdult = ages.find(age => age >= 18);

firstAdult; // => 19

// Array..prototype.findIndex()
let firstAdultIndex = ages.find(age => age >= 18);

firstAdultIndex; // => 1
```

![INTERESTING](http://33.media.tumblr.com/tumblr_lnd67mbWHl1ql201ao1_500.gif)
