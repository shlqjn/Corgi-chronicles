function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

//corgi fun facts
function showFact() {
  let facts = [
    "Corgis were originally bred to herd cattle—imagine those tiny legs moving cows!",
    "Queen Elizabeth II had more than 30 corgis in her lifetime.",
    "Corgis have double-layered coats and are *professional* shedders.",
    "Despite their stubby legs, corgis are super fast and love to zoom!",
    "Their ears are like radar dishes—one bark and every squirrel in the zip code knows.",
  ];

  let randomNumber = Math.floor(Math.random() * facts.length);
  let randomFact = facts[randomNumber];

  document.getElementById("corgiFact").textContent = randomFact;
}
