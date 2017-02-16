---
title: 🚀 Getting started with react-storybook
date: 02/16/2017
description: Get up and running with React StoryBook
---

---

# React StoryBook 📖
> [React StoryBook](https://getstorybook.io/) is a UI component development environment for React. With that, you are able develop UI components without running your app 🙌

---

## 🔨 Step 1
```bash
$ create-react-app hello-storybook
```

## 🔨 Step 2
```bash
$ npm install -g getstorybook
```

## 🔨 Step 3
```bash
$ cd hello-storybook
$ getstorybook  # press enter
```
![🏃 getstorybook](./getstorybook.png)

## 🔨 Step 4
```bash
$ npm run storybook
```
![🏃 storybook](./run-storybook.png)

---

### 🚀  [http://localhost:9009](http://localhost:9009) in a 🌏 browser to 👀 the output

![🏃 storybook on port 9009](./running-storybook.gif)

---

## The main configuration for storybook is 🔦 in `config.js`

![hello-storybook/storybook/config.js](./hello-storybook.png)


## stories are 🔦 in `../src/stories`

![../src/stories](./stories.png)


---

## Lets try changing the button label 😄 🎉

![Adding a 🦄 to the button label in ../src/stories/index.js](./unicorn-label.gif)

## Awesome 😎, now lets try 🔧 changing the button component

![Tinkering the Button component in ../src/stories/Button.js](./tinkering-button.gif)

---

## Wait ✋, it is possible deploy your `awesome storybook` into a `static site`

<br>

## Building 📖 storybook
![build-storybook in package.json](./build-storybook.png)

```
$ npm run build-storybook

```
---

## Building react app
![build in package.json](./build-storybook.png)
```
$ npm run build
```
---

## The build folder is ready to be deployed 🚀. You can serve it locally with a static server.

<br>

```
$ yarn global add pushstate-server

$ pushstate-server build

$ open http://localhost:9000
```
---

![Stay Awesome! 😎](http://31.media.tumblr.com/35973342a8f51315023d58c249664b00/tumblr_n9hu86QyRL1sedjuto1_400.gif)



## REFERENCE

*   [STORY BOOK](https://getstorybook.io/)
*   [react](https://facebook.github.io/react/)
*   [create-react-app](https://github.com/facebookincubator/create-react-app)
