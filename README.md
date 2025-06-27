# Assignment for NXRBootCamp React Basic Course

## Introduction
This app demonstrates how basic states are handled in React using two different approaches.
There are two branches that solve identical problems in different ways:

1. main - Props drilling: Parent components pass state down to child components
2. feature-singleton - Context API: All states are stored in context, and child components access the context they need

## Props Drilling vs Singleton Context
**TL;DR:** Without external library such as Zustand or Redux, props drilling is better.

### Limitations of Current Singleton Context Approach:
1. If one value of context changes, it is treated as the context itself has been changed.
2. If context changes, all components calling that context get re-rendered.
3. To solve this problem with `context`, you need to create new context for each state, which is nothing better than props drilling.


## Clone this app
In the project directory, you can run:
```bash
git clone https://github.com/ThePott/---- INSERT REPO URL ----
```
Then, change directory to cloned project and run
```bash
npm install
```

## Requirements",
* Node.js

## Exploring Different Approaches

Main branch: Experience props drilling approach
Feature-singleton branch: Experience context-based state management

```bash
git switch feature-singleton
```

## License
MIT