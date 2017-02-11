---
title: 😎 Awesome ES6 Features
date: 02/07/2017
description: Refresh your ES6 with these examples 👊
---

## ✊ Convert NodeList to Array:

```javascript
// Spread syntax - https://goo.gl/0elyOR

let Headings  = [...document.querySelectorAll('h1')];
```

## ✊ Convert Arguments to Array:

```javascript
// Spread syntax - https://goo.gl/0elyOR

let argsArray  = [...arguments];
```

## 🦄 Unique Arrays:

```javascript
// Spread syntax - https://goo.gl/0elyOR

// Set syntax - https://goo.gl/jwroxF

let array = [1,3,3,7];

let result = [...new Set(array)]; // => [1, 3, 7]
```

## 🔨 Destructuring:

```javascript
// Destructuring assignment syntax - https://goo.gl/vwd7C1

let {foo, bar} = {foo: "lorem", bar: "ipsum"};

foo; // => lorem

bar; // => ipsum
```

## 🚓 Interpolate

```javascript
// Template literals #Expression interpolation - https://goo.gl/rnqz0a

let obj = { x: 1, y: 2 };

let result = console.log(`Your total is: ${obj.x + obj.y}`);

result; // => Your total is: 3
```

## 🙅 Swapping:

```javascript
// Destructuring assignment #Swapping variables - https://goo.gl/0ZQYtm

let x = 4;
let y = 2;

let [y1, x1] = [x , y];

y1; // => 4
x1; // => 2
```

## 🔍 Finding Max in Array?

```javascript
// Spread syntax - https://goo.gl/0elyOR

// Math.max() syntax - https://goo.gl/AVXfW3

let arr = [1,4,32,10];

Math.max(...arr); // => 32
```

## 🔪 ~~List comprehension:~~

### `[NOT COMPATIBLE with current browser, Only works on Firefox(Gecko)]`

```javascript
// Array comprehensions syntax - https://goo.gl/PJn9ol

let numbers = [1, 2, 3, 4];

var doubled = [for (let i of numbers) i *2];

doubled; //=> 2,4,6,8
```

## ✊ Map them!

```javascript
// Array.prototype.map() syntax - https://goo.gl/EEn7n6

let arr = [{id: 1, name:'A'}, {id: 2, name:'B'}, {id:3, name:'C'}];

arr.map(x => x.id); // => [1,2,3]
```

## 😮 Object.is ?

```javascript
// Object.is() syntax - https://goo.gl/2utt2F

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
// RegExp.prototype.test() syntax - https://goo.gl/aC3Snu

let isHidden = (file) => /^\.|~$/.test(file);

isHidden(".DS_STORE") //=> true
```

## 🤔 Is it Included?

```javascript
// Array.prototype.includes() syntax - https://goo.gl/hkxraC

let arr = [1, 2, 3];

arr.includes(2); // => true 🙌

```

## 👋 What them entries ?

```javascript
// Object.entries() syntax - https://goo.gl/oSCIe1

let obj = {foo: 'bar', baz: 42};

let Entries = Object.entries(obj);

Entries; // => [['foo', 'bar'], ['baz',42]]

```
## 👋 What them values ?

```javascript
// Object.values() syntax - https://goo.gl/bR6thf

let obj = {foo: 'bar', baz: 42};

let Values = Object.values(obj);

Values; // => ['bar', 42]

```

## 🙏 Promise

```javascript
// Promise syntax - https://goo.gl/nBnJyq

let wait1000 = new Promise((resolve, reject) => {
  setTimeout(resolve,1000);
}).then(() => {
  console.log('Wohoo!! 🙌');
});

wait1000; // => after 1 sec Wohoo!! 🙌
```

## 🔍 Find

```javascript
// Array.prototype.find() syntax - https://goo.gl/xB2vwU

let ages = [12, 19, 6, 4];

let firstAdult = ages.find(age => age >= 18);

firstAdult; // => 19
```

## 🔍 Find its `index`

```javascript
// Array.prototype.findIndex() syntax - https://goo.gl/NFp858

let ages = [12, 19, 6, 4];

let firstAdultIndex = ages.find(age => age >= 18);

firstAdultIndex; // => 1
```

![Hmmm....INTERESTING](http://33.media.tumblr.com/tumblr_lnd67mbWHl1ql201ao1_500.gif)

## Reference
[**MDN**](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
