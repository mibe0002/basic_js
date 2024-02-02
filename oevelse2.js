const p = document.querySelector("p");

const tid = new Date().getHours();
console.log("kl. er " + tid);

if (tid >= 5 && tid < 10) {
  console.log("Godmorgen");
} else if (tid >= 10 && tid < 18) {
  console.log("Goddag");
} else if (tid >= 18 && tid <= 24) {
  console.log("Godaften");
} else if (tid >= 0 && tid < 5) {
  console.log("Godnat");
}

// Eksempel
// const h1 = document.querySelector("h1");
// const tid = new Date().getHours();
// const tid = 12;
// console.log(tid);
// if (tid > 17) {
//   console.log("godaften");
// } else if (tid > 9) {
//   console.log("goddag");
// } else if (tid > 5) {
//   console.log("godmorgen");
// } else {
//   console.log("godnat");
// }
