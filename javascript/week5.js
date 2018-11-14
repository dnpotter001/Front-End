"use-strict";

const theForm = document.getElementById("the-form");
const theDate = document.getElementById("datePicker");
const getDate = document.querySelector('input[type="date"]');
const dateDisplay = document.getElementById("showDate");

let today = new Date();
dateDisplay.innerText = today.toDateString();

theDate.addEventListener("change", () => {
  let d = new Date(getDate.value);
  dateDisplay.innerText = d.toDateString();
});

const theColor = document.getElementById("color");
const theColorBox = document.getElementById("the-value");

theColor.addEventListener("change", () => {
  let newColor = theColor.value;
  theColorBox.style.backgroundColor = newColor;
})

const theSlider = document.getElementById('slider');

theSlider.addEventListener("input", () => {
  let newWidth = theSlider.value;
  theColorBox.style.width = newWidth + "%";
})
