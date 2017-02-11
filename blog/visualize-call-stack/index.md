---
title: 🔍 Visualization of the 📞 stack
date: 02/08/2017
description: Visualize the call-stack of printSquare with 10 steps 👌
---


## " `one thread` === `one call stack` === `one thing at a time` "
___
```javascript
// Example
 function multiply(a, b) {
   return a * b;
 }

 function square(n) {
    return multiply(n, n);
}

function printSquare(n) {
   var squared = square(n);
   console.log(squared);
}

printSquare(4);
```
## NOTES:
*   `call stack` is a `data structure` which `records` basically where in the program we are.



*   If we `step into` a `function`, we put something on to the `stack`, if we `return` from a `function`, we `pop` `off` from the `top` of `stack`

----
## Let's 🏃 this file  and  🔍 the `steps`
----

## 🔨 STEP 1
----
```javascript
  _________________
 |      STACK      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |      main()     | // <----- There is kind of main function,
 |_________________| //        like the file itself, we push
                     //        that on to the stack.

```
----

## 🔨 STEP 2
----
```javascript
  _________________
 |      STACK      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |  printSquare(4) |
 |      main()     | // <-----  It goes through the file "main()",
 |_________________| //         the "function defination" and once
                     //         we get to "printSquare". Since
                     //         "printSquare" is a "function call",
                     //         so we push it onto the stack.
```
----
## 🔨 STEP 3
----
```javascript
  _________________
 |      STACK      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |    square(n)    |
 |  printSquare(4) | // <-----  Inside "printSquare", we immediately
 |     main()      | //         call "square" and push it on
 |_________________| //         to the stack.

```
----
## 🔨 STEP 4
----
```javascript
  _________________
 |      STACK      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |  multiply(n, n) |
 |    square(n)    | // <-----  Inside "square", we  immediately
 |  printSquare(4) | //         call "multiply" and push it on to
 |     main()      | //         the stack.
 |_________________|

```
----
## 🔨 STEP 5
----
```javascript

// INITIAL
  _________________
 |      STACK      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |  multiply(n, n) | // <-----  "multiply" returns "a" and "b", so
 |    square(n)    | //          we "pop" off from stack.
 |  printSquare(4) |
 |     main()      |
 |_________________|


// RESULT (poof - it's gone 💥)
 _________________
|      STACK      |
|                 |
|                 |
|                 |
|                 |
|                 |
|     *poof*      |
|    square(n)    |
|  printSquare(4) |
|     main()      |
|_________________|

```
----
## 🔨 STEP 6
----
```javascript

// INITIAL
  _________________
 |      STACK      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |    square(n)    | // <-----  "square" returned "mutiply(n, n)",
 |  printSquare(4) | //          so we "pop" it off the stack.
 |     main()      |
 |_________________|


// RESULT (poof - it's gone 💥)
 _________________
|      STACK      |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|     *poof*      |
|  printSquare(4) |
|     main()      |
|_________________|

```
----
## 🔨 STEP 7
----
```javascript

// INITIAL
  _________________
 |      STACK      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |  printSquare(4) | // <----- Inside "printSquare", it calls
 |     main()      | //        "console.log(squared)", since it's a
 |_________________| //        function call we push it to the stack.


// RESULT
 _____________________
|        STACK        |
|                     |
|                     |
|                     |
|                     |
|                     |
|                     |
| console.log(squared)|
|    printSquare(4)   |
|        main()       |
|_____________________|

```
----
## 🔨 STEP 8
----
```javascript

// INITIAL
 _____________________
|        STACK        |
|                     |
|                     |
|                     |
|                     |
|                     |
|                     |
| console.log(squared)| // <-----  "console.log(squared)" returns the
|    printSquare(4)   | //         "logged square", so we "pop" it
|        main()       | //         off the stack.
|_____________________|


// RESULT (poof - it's gone 💥)
  _________________
 |      STACK      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |     *poof*      |
 |  printSquare(4) | //   <-----   Inside "printSquare", it calls
 |     main()      | //            "console.log(squared)" since it's
 |_________________| //            a function call we push
                     //            it to the stack.

```
----
## 🔨 STEP 9
----
```javascript

// INITIAL
  _________________
 |      STACK      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |  printSquare(4) | //   <-----  "printSquare(n)" has no "return",
 |     main()      | //            as it's "implicit" we "pop" it
 |_________________| //            off the stack.


// RESULT (poof - it's gone 💥)
 _________________
|      STACK      |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|     *poof*      |
|     main()      |
|_________________|

```
----
## 🔨 STEP 10
----
```javascript

// INITIAL
  _________________
 |      STACK      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |     main()      | //   <-----   Since there no "function call"
 |_________________| //            left we "pop" off "main()"
                     //            from the stack.


// RESULT (poof - it's gone 💥)
 _________________
|      STACK      |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|      *poof*     |
|_________________|

```
----

![WOOOW](https://s-media-cache-ak0.pinimg.com/originals/46/02/88/46028823ea0de856a1f7683fa24c4e7f.gif)

# More coming up soon. . . 👊

----
----
## REFERENCE
[What the heck is the event loop anyway?](https://youtu.be/8aGhZQkoFbQ)
