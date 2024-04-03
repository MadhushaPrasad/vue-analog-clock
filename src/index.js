import AnalogClock from "./components/analog-clock/AnalogClock.vue";

export default {
  install: (app, options) => {
    app.component("AnalogClock", AnalogClock);
  },
};
