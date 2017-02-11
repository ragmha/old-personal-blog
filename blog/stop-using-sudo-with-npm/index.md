---
title: ✋ Stop Using `sudo` with `npm`!!!
date: 02/11/2017
description: Using `sudo` with `npm` messes up your permission
---

## tldr;

### 🔧 Here is a quick fix 👇

```bash
$ sudo chown -R $(whoami) ~/node*                #  ~/node_modules

$ sudo chown -R $(whoami) ~/.node*               #  .node-gyp

$ sudo chown -R $(whoami) ~/.npm*                # .npm .npmrc

$ sudo chown -R $(whoami) /usr/local/*/*node*    # node node_modules

$ sudo chown -R $(whoami) /usr/local/*/*npm*     # npm
```

## Why ? 😕

> Well using sudo messes up your `permissions` and makes it so that `non-sudo` installations won't work (i.e. in your `~/.npm`).

![Stay Awesome! 😎](http://31.media.tumblr.com/35973342a8f51315023d58c249664b00/tumblr_n9hu86QyRL1sedjuto1_400.gif)
