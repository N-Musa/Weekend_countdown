const btn = document.querySelector("button")
const p = document.querySelector("p")

const currentDay = moment().format("dddd")
//console.log(currentDay);
var a = moment();
var b = moment([2007, 0, 28])

//console.log(a.diff(b, "days"))

console.log(moment().isoWeekday());