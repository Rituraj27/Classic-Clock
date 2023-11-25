"use strict";

const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = function () {
  const now = new Date();
  const second = now.getSeconds();
  const secondsDegree = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  //   console.log(second);

  const minute = now.getMinutes();
  const minuteDegrees = (minute / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  //   console.log(hour);
};

setInterval(setDate, 1000);
