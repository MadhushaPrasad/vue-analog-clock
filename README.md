# Vue 3 Analog Clock Component

A simple **analog clock component** for **Vue 3**.

## Description

This package provides a **Vue 3** component to display an **analog clock**. It's lightweight, customizable, and easy to integrate into your **Vue 3** projects.

## Usage

### Install the package via npm:

```bash
npm install vue3-analog-clock
```

or go to npm <a href="https://www.npmjs.com/package/vue3-analog-clock" target="_blank">package link</a>

## Import the component and register it in your main.js or main.ts file:

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import AnalogClock from "vue3-analog-clock";
import "vue3-analog-clock/dist/style.css";

const app = createApp(App);

app.use(AnalogClock);

app.mount("#app");
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

Default Analog Clock

![Default-Analog-Clock](https://github.com/MadhushaPrasad/vue-analog-clock/assets/50085447/7db6707d-db25-40a3-92a6-7bcfafb5c598)

Customize Analog Clock

![customize-analog-clock](https://github.com/MadhushaPrasad/vue-analog-clock/assets/50085447/65ab7487-efab-46cb-91d9-682634b484b8)

## Customization Options

You can customize the appearance of the analog clock component using the following props:

- `watchFaceBackground`: Background color of the clock face. Default: `#f9f9f9`.
- `watchDigitsColor`: Color of the clock digits. Default: `#000000`.
- `watchDigitsMinuteMarksColor`: Color of the minute marks on the clock face. Default: `#929394`.
- `watchHoursHand`: Color of the hour hand. Default: `#232425`.
- `watchMinutesHand`: Color of the minute hand. Default: `#343536`.
- `watchSecondsHand`: Color of the seconds hand. Default: `#c00`.

To customize the clock colors, simply pass the desired color values as props when using the component in your Vue templates:

```html
<template>
  <div>
    <AnalogClock
      watchFaceBackground="#673F69"
      watchDigitsColor="#FFFFFF"
      watchDigitsMinuteMarksColor="#FFFFFF"
      watchHoursHand="#FFAF45"
      watchMinutesHand="#FB6D48"
      watchSecondsHand="#E72929"
    />
  </div>
</template>
```

## 🌱 Contributors

[ ![](https://camo.githubusercontent.com/e5bdd846c2bf495454efaabb0e3ea72815dddd51492dd7366ad9cafae91f1223/68747470733a2f2f636f6e747269622e726f636b732f696d6167653f7265706f3d4d616468757368615072617361642f7675652d616e616c6f672d636c6f636b) ](https://github.com/MadhushaPrasad/vue-analog-clock/graphs/contributors)

### Keywords

**Vue, Vue 3, Analog Clock, Clock Component, Vue Component**

### License

This package is licensed under the [MIT License](https://github.com/MadhushaPrasad/vue-analog-clock/blob/main/LICENSE)
