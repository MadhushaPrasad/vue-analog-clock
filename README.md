# Vue 3 Analog Clock Component

A simple <mark>analog clock component</mark> for <mark>Vue 3</mark>.


## Description
This package provides a <mark>Vue 3</mark> component to display an <mark>analog clock</mark>. It's lightweight, customizable, and easy to integrate into your <mark>Vue 3</mark> projects.

## Usage

### Install the package via npm:

```bash
npm install vue3-analog-clock
```
or go to npm [package link](https://www.npmjs.com/package/vue3-analog-clock)

## Import the component and register it in your main.js or main.ts file:
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import AnalogClock from 'vue3-analog-clock'
import "vue3-analog-clock/dist/style.css";

const app = createApp(App)

app.use(AnalogClock)

app.mount('#app')
```

## Use the component in your Vue templates:

```html
<template>
  <div>
    <AnalogClock />
  </div>
</template>
```

## Demo

![ezgif-1-3d019c9ad5](https://github.com/MadhushaPrasad/vue-analog-clock/assets/50085447/fe6c60e1-a631-42cc-9d93-5bd1bc7e0791)

## 🌱 Contributors
[ ![](https://camo.githubusercontent.com/e5bdd846c2bf495454efaabb0e3ea72815dddd51492dd7366ad9cafae91f1223/68747470733a2f2f636f6e747269622e726f636b732f696d6167653f7265706f3d4d616468757368615072617361642f7675652d616e616c6f672d636c6f636b) ](https://github.com/MadhushaPrasad/vue-analog-clock/graphs/contributors)

### Keywords
**Vue, Vue 3, Analog Clock, Clock Component, Vue Component**

### License
This package is licensed under the [MIT License](https://github.com/MadhushaPrasad/vue-analog-clock/blob/main/LICENSE)
