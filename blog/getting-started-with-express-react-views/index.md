---
title: 🚀 Getting started with express-react-views
date: 01/24/2017
description: Get up and running with express & react
---

I am currently taking [M101JS](https://university.mongodb.com/courses/M101JS/about) this year and having enough experience with [React](https://facebook.github.io/react/).
I've decided to use [express-react-views](https://github.com/reactjs/express-react-views) for some of the challenges during the 8 week course.There are of course other server-side view solution [ejs](http://www.embeddedjs.com/), [pug](https://pugjs.org/api/getting-started.html) or [handlebars](https://github.com/barc/express-hbs).



## Step 1
Create a directory named `myapp`
```javascipt
$ mkdir myapp
```

## Step 2
change to the directory and run `npm init`
```javascipt
$ cd myapp
$ npm init
```

## Step 3
Install the required **dependencies** `express`, `express-react-views`, `react` and `react-dom`

```javascipt
$ npm install --save express express-react-views react react-dom

```
## Step 4
In the `myapp` directory, create a file named `app.js` and add the following code:

```javascipt
const express = require('express');
const { createEngine } = require('express-react-views');

const app = express();
const port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', createEngine());

app.get('/', (req, res, next) => {
  res.render('index.jsx', { name: 'world' });
});

app.listen(
  port,
  () => console.log(`\uD83C\uDF0F running at http://localhost:${port}`)
);

```

## Step 6
In the `myapp` directory, create a `views` directory with a views template named `index.jsx`

```
$ mkdir views
$ cd views
$ touch index.jsx
```
and add the following code:
```
const React = require('react');

class HelloWorld extends React.Component {
  render() {
    return <div> Hello {this.props.name} </div>;
  }
}

module.exports = HelloWorld;
```
## Step 7

Run the app from `myapp` directory with the following command:

```javascipt
$ node app.js
```

Then, load http://localhost:3000/ in a browser to see the output.
