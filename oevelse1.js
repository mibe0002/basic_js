const img = ["#oel", "#snaps", "#sport", "#oeko"];

img.forEach((selector) => {
  const imgElement = document.querySelector(selector);
  imgElement.addEventListener("click", tjek);
});

function tjek(event) {
  //   console.log("Du har klikket på billedet");

  const clickedImg = event.currentTarget.id;

  if (clickedImg == "oel" || clickedImg == "snaps") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}

// Eksempel
// const oel = document.querySelector("img[alt=oel]");
// const snaps = document.querySelector("img[alt=snaps]");
// const sport = document.querySelector("img[alt=sport]");
// const oeko = document.querySelector("img[alt=oeko]");

// oel.addEventListener("click", tjek);
// snaps.addEventListener("click", tjek);
// sport.addEventListener("click", tjek);
// oeko.addEventListener("click", tjek);

// function tjek() {
//   console.log(this.alt);
//   if (this.alt == "oel" || this.alt == "snaps") {
//     console.log("indeholder alkohol");
//   } else {
//     console.log("alkoholfri");
//   }
// }
