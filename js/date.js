const years = document.querySelector(".years");
const months = document.querySelector(".months");
const days = document.querySelector(".days");
const weekdays = document.querySelector(".weekdays");

function makeCalender() {
  const now = new Date();
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const day = now.getDay();
  years.innerText = `${year} - ${month} - ${date}`;

  weekdays.innerText = `${week[day]}`;
}

makeCalender();
