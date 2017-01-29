---
title: Removing duplicates from "Open With" Mac OSX
date: 01/29/2017
description: Remove Duplicates from the “Open With” Right-Click Menu in Mac OS X
---

**tldr;**

```bash
/System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/\
LaunchServices.framework/Versions/A/Support/\
lsregister -kill -r -domain local -domain user
```

## Creating an alias

```bash
 $ nano .bash_profile
```

```bash
alias fixow='/System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/Support/lsregister -kill -r -domain local -domain user;killall Finder;echo "Open With has been rebuilt, Finder will relaunch"'
```
```bash
 $ fix row
```
