<template>
  <div id="watch">
    <div class="frame-face"></div>
    <ul class="minute-marks">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="digits">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
    </ul>
    <div class="hours-hand"></div>
    <div class="minutes-hand"></div>
    <div class="seconds-hand"></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  watchFaceBackground: {
    type: String,
    default: "#f9f9f9",
  },
  watchDigitsColor: {
    type: String,
    default: "#000000",
  },
  watchDigitsMinuteMarksColor: {
    type: String,
    default: "#929394",
  },
  watchHoursHand: {
    type: String,
    default: "#232425",
  },
  watchMinutesHand: {
    type: String,
    default: "#343536",
  },
  watchSecondsHand: {
    type: String,
    default: "#c00",
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
#watch {
  font-size: 1em;
  position: relative;
  width: fit-content;
  height: fit-content;
}
#watch .frame-face {
  position: relative;
  width: 30em;
  height: 30em;
  margin: 2em auto;
  border-radius: 15em;
  background: -webkit-linear-gradient(
    top,
    v-bind(watchFaceBackground),
    v-bind(watchFaceBackground)
  );
  background: -moz-linear-gradient(
    top,
    v-bind(watchFaceBackground),
    v-bind(watchFaceBackground)
  );
  background: linear-gradient(
    to bottom,
    v-bind(watchFaceBackground),
    v-bind(watchFaceBackground)
  );
  box-shadow: rgba(0, 0, 0, 0.8) 0.5em 0.5em 4em;
}
#watch .frame-face:before {
  content: "";
  width: 29.4em;
  height: 29.4em;
  border-radius: 14.7em;
  position: absolute;
  top: 0.3em;
  left: 0.3em;
  background: -webkit-linear-gradient(
      135deg,
      v-bind(watchFaceBackground) 0%,
      v-bind(watchFaceBackground) 50%,
      v-bind(watchFaceBackground) 51%,
      v-bind(watchFaceBackground) 100%
    ),
    -webkit-radial-gradient(center, ellipse cover, v-bind(watchFaceBackground)
          0%, rgba v-bind(watchFaceBackground) 65%, v-bind(watchFaceBackground)
          66%, v-bind(watchFaceBackground) 100%);
  background: -moz-linear-gradient(
      135deg,
      v-bind(watchFaceBackground) 0%,
      v-bind(watchFaceBackground) 50%,
      v-bind(watchFaceBackground) 51%,
      v-bind(watchFaceBackground) 100%
    ),
    -moz-radial-gradient(center, ellipse cover, v-bind(watchFaceBackground) 0%, v-bind(
            watchFaceBackground
          )
          65%, v-bind(watchFaceBackground) 66%, v-bind(watchFaceBackground) 100%);
  background: linear-gradient(
      135deg,
      v-bind(watchFaceBackground) 0%,
      v-bind(watchFaceBackground) 50%,
      v-bind(watchFaceBackground) 51%,
      v-bind(watchFaceBackground) 100%
    ),
    radial-gradient(
      ellipse at center,
      v-bind(watchFaceBackground) 0%,
      v-bind(watchFaceBackground) 65%,
      v-bind(watchFaceBackground) 66%,
      v-bind(watchFaceBackground) 100%
    );
}
#watch .frame-face:after {
  content: "";
  width: 28em;
  height: 28em;
  border-radius: 14.2em;
  position: absolute;
  top: 0.9em;
  left: 0.9em;
  box-shadow: inset rgba(0, 0, 0, 0.2) 0.2em 0.2em 1em;
  border: 0.1em solid rgba(0, 0, 0, 0.2);
  background: -webkit-linear-gradient(
    top,
    v-bind(watchFaceBackground),
    v-bind(watchFaceBackground)
  );
  background: -moz-linear-gradient(
    top,
    v-bind(watchFaceBackground),
    v-bind(watchFaceBackground)
  );
  background: linear-gradient(
    to bottom,
    v-bind(watchFaceBackground),
    v-bind(watchFaceBackground)
  );
}
#watch .minute-marks li {
  display: block;
  width: 0.2em;
  height: 0.6em;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -0.4em 0 0 -0.1em;
  background: v-bind(watchDigitsMinuteMarksColor);
}
#watch .minute-marks li:first-child {
  transform: rotate(6deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(2) {
  transform: rotate(12deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(3) {
  transform: rotate(18deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(4) {
  transform: rotate(24deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(5) {
  transform: rotate(36deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(6) {
  transform: rotate(42deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(7) {
  transform: rotate(48deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(8) {
  transform: rotate(54deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(9) {
  transform: rotate(66deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(10) {
  transform: rotate(72deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(11) {
  transform: rotate(78deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(12) {
  transform: rotate(84deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(13) {
  transform: rotate(96deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(14) {
  transform: rotate(102deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(15) {
  transform: rotate(108deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(16) {
  transform: rotate(114deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(17) {
  transform: rotate(126deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(18) {
  transform: rotate(132deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(19) {
  transform: rotate(138deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(20) {
  transform: rotate(144deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(21) {
  transform: rotate(156deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(22) {
  transform: rotate(162deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(23) {
  transform: rotate(168deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(24) {
  transform: rotate(174deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(25) {
  transform: rotate(186deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(26) {
  transform: rotate(192deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(27) {
  transform: rotate(198deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(28) {
  transform: rotate(204deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(29) {
  transform: rotate(216deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(30) {
  transform: rotate(222deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(31) {
  transform: rotate(228deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(32) {
  transform: rotate(234deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(33) {
  transform: rotate(246deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(34) {
  transform: rotate(252deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(35) {
  transform: rotate(258deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(36) {
  transform: rotate(264deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(37) {
  transform: rotate(276deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(38) {
  transform: rotate(282deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(39) {
  transform: rotate(288deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(40) {
  transform: rotate(294deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(41) {
  transform: rotate(306deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(42) {
  transform: rotate(312deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(43) {
  transform: rotate(318deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(44) {
  transform: rotate(324deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(45) {
  transform: rotate(336deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(46) {
  transform: rotate(342deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(47) {
  transform: rotate(348deg) translateY(-12.7em);
}
#watch .minute-marks li:nth-child(48) {
  transform: rotate(354deg) translateY(-12.7em);
}
#watch .digits {
  width: 30em;
  height: 30em;
  border-radius: 15em;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -15em;
  color: v-bind(watchDigitsColor);
}
#watch .digits li {
  font-size: 1.6em;
  display: block;
  width: 1.6em;
  height: 1.6em;
  position: absolute;
  top: 50%;
  left: 50%;
  line-height: 1.6em;
  text-align: center;
  margin: -0.8em 0 0 -0.8em;
  font-weight: bold;
}
#watch .digits li:nth-child(1) {
  transform: translate(3.9em, -6.9em);
}
#watch .digits li:nth-child(2) {
  transform: translate(6.9em, -4em);
}
#watch .digits li:nth-child(3) {
  transform: translate(8em, 0);
}
#watch .digits li:nth-child(4) {
  transform: translate(6.8em, 4em);
}
#watch .digits li:nth-child(5) {
  transform: translate(3.9em, 6.9em);
}
#watch .digits li:nth-child(6) {
  transform: translate(0, 8em);
}
#watch .digits li:nth-child(7) {
  transform: translate(-3.9em, 6.9em);
}
#watch .digits li:nth-child(8) {
  transform: translate(-6.8em, 4em);
}
#watch .digits li:nth-child(9) {
  transform: translate(-8em, 0);
}
#watch .digits li:nth-child(10) {
  transform: translate(-6.9em, -4em);
}
#watch .digits li:nth-child(11) {
  transform: translate(-3.9em, -6.9em);
}
#watch .digits li:nth-child(12) {
  transform: translate(0, -8em);
}
#watch .digits:before {
  content: "";
  width: 1.6em;
  height: 1.6em;
  border-radius: 0.8em;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -0.8em 0 0 -0.8em;
  background: #121314;
}
#watch .digits:after {
  content: "";
  width: 4em;
  height: 4em;
  border-radius: 2.2em;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -2.1em 0 0 -2.1em;
  border: 0.1em solid #c6c6c6;
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(200, 200, 200, 0),
    rgba(190, 190, 190, 1) 90%,
    rgba(130, 130, 130, 1) 100%
  );
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(200, 200, 200, 0),
    rgba(190, 190, 190, 1) 90%,
    rgba(130, 130, 130, 1) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(200, 200, 200, 0),
    rgba(190, 190, 190, 1) 90%,
    rgba(130, 130, 130, 1) 100%
  );
}
@keyframes hours {
  to {
    transform: rotate(335deg);
  }
}
#watch .hours-hand {
  width: 0.8em;
  height: 7em;
  border-radius: 0 0 0.9em 0.9em;
  background: v-bind(watchHoursHand);
  position: absolute;
  bottom: 50%;
  left: 50%;
  margin: 0 0 -0.8em -0.4em;
  box-shadow: #232425 0 0 2px;
  transform-origin: 0.4em 6.2em;
  transform: rotate(-25deg);
  animation: hours 43200s linear 0s infinite;
}
#watch .hours-hand:before {
  content: "";
  background: inherit;
  width: 1.8em;
  height: 0.8em;
  border-radius: 0 0 0.8em 0.8em;
  box-shadow: #232425 0 0 1px;
  position: absolute;
  top: -0.7em;
  left: -0.5em;
}
#watch .hours-hand:after {
  content: "";
  width: 0;
  height: 0;
  border: 0.9em solid v-bind(watchHoursHand);
  border-width: 0 0.9em 2.4em 0.9em;
  border-left-color: transparent;
  border-right-color: transparent;
  position: absolute;
  top: -3.1em;
  left: -0.5em;
}
@keyframes minutes {
  to {
    transform: rotate(422deg);
  }
}
#watch .minutes-hand {
  width: 0.8em;
  height: 12.5em;
  border-radius: 0.5em;
  background: v-bind(watchMinutesHand);
  position: absolute;
  bottom: 50%;
  left: 50%;
  margin: 0 0 -1.5em -0.4em;
  box-shadow: #343536 0 0 2px;
  transform-origin: 0.4em 11em;
  transform: rotate(62deg);
  animation: minutes 3600s linear 0s infinite;
}
@keyframes seconds {
  to {
    transform: rotate(480deg);
  }
}
#watch .seconds-hand {
  width: 0.2em;
  height: 14em;
  border-radius: 0.1em 0.1em 0 0/10em 10em 0 0;
  background: v-bind(watchSecondsHand);
  position: absolute;
  bottom: 50%;
  left: 50%;
  margin: 0 0 -2em -0.1em;
  box-shadow: rgba(0, 0, 0, 0.8) 0 0 0.2em;
  transform-origin: 0.1em 12em;
  transform: rotate(120deg);
  animation: seconds 60s steps(60, end) 0s infinite;
}
#watch .seconds-hand:after {
  content: "";
  width: 1.4em;
  height: 1.4em;
  border-radius: 0.7em;
  background: inherit;
  position: absolute;
  left: -0.65em;
  bottom: 1.35em;
}
#watch .seconds-hand:before {
  content: "";
  width: 0.8em;
  height: 3em;
  border-radius: 0.2em 0.2em 0.4em 0.4em/0.2em 0.2em 2em 2em;
  box-shadow: rgba(0, 0, 0, 0.8) 0 0 0.2em;
  background: inherit;
  position: absolute;
  left: -0.35em;
  bottom: -3em;
}
#watch .digital-wrap {
  width: 9em;
  height: 3em;
  border: 0.1em solid #222;
  border-radius: 0.2em;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 3em 0 0 -4.5em;
  overflow: hidden;
  background: #4c4c4c;
  background: -webkit-linear-gradient(top, #4c4c4c 0%, #0f0f0f 100%);
  background: -moz-linear-gradient(top, #4c4c4c 0%, #0f0f0f 100%);
  background: -ms-linear-gradient(top, #4c4c4c 0%, #0f0f0f 100%);
  background: -o-linear-gradient(top, #4c4c4c 0%, #0f0f0f 100%);
  background: linear-gradient(to bottom, #4c4c4c 0%, #0f0f0f 100%);
}
#watch .digital-wrap ul {
  float: left;
  width: 2.85em;
  height: 3em;
  border-right: 0.1em solid #000;
  color: #ddd;
  font-family: Consolas, monaco, monospace;
}
#watch .digital-wrap ul:last-child {
  border: none;
}
#watch .digital-wrap li {
  font-size: 1.5em;
  line-height: 2;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  left: 1px;
}
#watch .digit-minutes li {
  animation: dsm 3600s steps(60, end) 0s infinite;
}
#watch .digit-seconds li {
  animation: dsm 60s steps(60, end) 0s infinite;
}
@keyframes dsm {
  to {
    transform: translateY(-120em);
  }
}
</style>