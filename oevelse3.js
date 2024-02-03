const knap = document.querySelector("button");
knap.addEventListener("click", tjek);
let tal = Math.floor(Math.random() * 10);
let forsøg = 0;

function tjek() {
  forsøg++;
  console.log(tal);
  const input = document.querySelector("#tal").value;

  if (tal == input) {
    confirm(input + " Rigtigt! " + "Antal forsøg: " + forsøg + " Vil du prøve igen?");
    tal = Math.floor(Math.random() * 10);
  } else if (input > tal) {
    confirm("Forkert gæt, for højt prøv igen");
  } else if (input < tal) {
    confirm("Forkert gæt, for lavt prøv igen");
  }
}

// Eksempel
// const knap = document.querySelector("button");
// knap.addEventListener("click", test);
// let tal = Math.floor(Math.random() * 10);

// function test() {
//   console.log(tal);
//   const input = document.querySelector("#tal").value;
//   if (tal == input) {
//     confirm(input + " er RIGTIGT!. Vil du prøve med et nyt tal?");
//     tal = Math.floor(Math.random() * 10);
//   } else if (input < tal) {
//     confirm(input + " er for lavt!. Prøv igen");
//   } else {
//     confirm(input + " er for højt!. Prøv igen");
//   }
// }
