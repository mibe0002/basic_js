const img = ["#oel", "#snaps", "#sport", "#oeko"];

img.forEach((selector) => {
  const element = document.querySelector(selector);
  element.addEventListener("click", tjek);
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
