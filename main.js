const date = "20231001"
const time_period = "q"

const { URL, URLSearchParams } = require("url");
const base = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank");

base.search = new URLSearchParams({
  date: date,
  period: time_period
}).toString();

base.search += "&json"

console.log(base.toString());