"use strict";
const year = document.querySelector(".year");
const yearData = document.querySelector(".emptyYears");
year.addEventListener("input", function () {
  const yearValue = year.value;
  // console.log(yearValue);
  const birthDate = new Date(`${yearValue}-01-15`);
  console.log(birthDate);
  const currentDate = new Date();
  console.log(currentDate);
  // console.log(year);
  const difference = currentDate - birthDate;
  console.log(difference);
  const ageDate = new Date(difference);
  console.log(ageDate);
  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDay();

  console.log(years);
  console.log(months);
  console.log(days);

  yearData.textContent = years;
});

const day = document.querySelector(".day");
const dayData = document.querySelector(".emptyDays");
day.addEventListener("input", function () {
  const dayValue = day.value;
  // check later
  const birthDate = new Date(`${dayValue}`);
  console.log(birthDate);
  const currentDate = new Date();
  console.log(currentDate);
  const difference = currentDate - birthDate;
  console.log(difference);
  const ageDate = new Date(difference);
  console.log(ageDate);
  const days = ageDate.getUTCDay();
  console.log(days);
  dayData.textContent = days;
});

const month = document.querySelector(".month");
const monthData = document.querySelector(".emptyMonths");
month.addEventListener("input", function () {
  const monthValue = month.value;
  // check later
  const birthDate = new Date(`${monthValue}`);
  console.log(birthDate);
  const currentDate = new Date();
  console.log(currentDate);
  const difference = currentDate - birthDate;
  console.log(difference);
  const ageDate = new Date(difference);
  console.log(ageDate);
  const months = ageDate.getUTCMonth();
  console.log(months);
  monthData.textContent = months;
});
