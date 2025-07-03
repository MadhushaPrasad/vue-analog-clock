# Vue 3 Analog Clock Component

A simple **analog clock component** for **Vue 3**.

## 📦 Installation

**Install the package via npm:**

```bash
npm install @madhusha_99/vue3-analog-clock
```

or visit the [npm package page](https://www.npmjs.com/package/@madhusha_99/vue3-analog-clock)

---

## 🚀 Usage

### Import the component in your `main.js` or `main.ts`

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import AnalogClock from "@madhusha_99/vue3-analog-clock";
import "@madhusha_99/vue3-analog-clock/dist/style.css";

const app = createApp(App);
app.use(AnalogClock);
app.mount("#app");
```

### Use the component in your template

```html
<template>
  <div>
    <AnalogClock />
  </div>
</template>
```

---

## 🎨 Customization Options

You can customize the appearance of the analog clock component using the following props:

| Prop                          | Description                        | Default   |
| ----------------------------- | ---------------------------------- | --------- |
| `watchFaceBackground`         | Background color of the clock face | `#f9f9f9` |
| `watchDigitsColor`            | Color of the clock digits          | `#000000` |
| `watchDigitsMinuteMarksColor` | Color of minute marks              | `#929394` |
| `watchHoursHand`              | Hour hand color                    | `#232425` |
| `watchMinutesHand`            | Minute hand color                  | `#343536` |
| `watchSecondsHand`            | Seconds hand color                 | `#c00`    |

### Example

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

---

## 🧪 Demo

### Default Analog Clock

![Default-Analog-Clock](https://github.com/MadhushaPrasad/vue-analog-clock/assets/50085447/7db6707d-db25-40a3-92a6-7bcfafb5c598)

### Customized Analog Clock

![customize-analog-clock](https://github.com/MadhushaPrasad/vue-analog-clock/assets/50085447/65ab7487-efab-46cb-91d9-682634b484b8)

---

## 🌱 Contributors

[![](https://camo.githubusercontent.com/e5bdd846c2bf495454efaabb0e3ea72815dddd51492dd7366ad9cafae91f1223/68747470733a2f2f636f6e747269622e726f636b732f696d6167653f7265706f3d4d616468757368615072617361642f7675652d616e616c6f672d636c6f636b)](https://github.com/MadhushaPrasad/vue-analog-clock/graphs/contributors)

---

## 🔑 License

This package is licensed under the [MIT License](https://github.com/MadhushaPrasad/vue-analog-clock/blob/main/LICENSE)

---

## 🔍 Keywords

**Vue, Vue 3, Analog Clock, Clock Component, Vue Component**
