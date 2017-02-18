---
title: 📁 Creating Multiple Directories
date: 02/06/2017
description: Quciker way to create multiple dirs...
---

## Creates 50 directories from Ex1-Ex50
```bash
mkdir Ex{1..50}
```
---

## Each of the directories will hold 50 times exx1-50
```bash
mkdir -p Ex{1..50}/exx{1..50}
```
---

## 26 directories from a12345 👉 z12345
```bash
mkdir {a-z}12345
```
---

## Comma separated(,) list makes dirs 1, 2 and 3.
```bash
mkdir {1,2,3}
```
---

## Current date as a directory and 1,2,3 in it.
```bash
mkdir -p `date '+%y%m%d'`/{1,2,3}
```
---

## Current user as a directory and 1,2,3 in it.
```bash
mkdir -p $USER/{1,2,3}
```
---
![Stay Awesome! 😎](http://31.media.tumblr.com/35973342a8f51315023d58c249664b00/tumblr_n9hu86QyRL1sedjuto1_400.gif)

---
