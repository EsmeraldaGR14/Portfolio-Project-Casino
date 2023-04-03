const form = document.querySelector("form");
const singlePlayer = document.getElementById("single-player");
const tutorial = document.getElementById("tutorial");

const rules = document.getElementById("rules");
const rulesPopup = document.getElementById("rules-popup");
console.log(rulesPopup);
// rulesPopup.classList.toggle("remove");
const rulesCloseButton = document.getElementById("rules-close-button");
const tutorialCloseButton = document.getElementById("tutorial-close-button");

const tutorialPopup = document.getElementById("tutorial-popup");

tutorial.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("tutorial");
  activePopup();
});

rules.addEventListener("click", (event) => {
  event.preventDefault();
  activePopup();
});

tutorialCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  closeButton();
});

rulesCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  closeButton();
});

function activePopup() {
  let overlay = document.getElementById("overlay");
  overlay.classList.add("active");
  rulesPopup.classList.add("active");
  tutorialPopup.classList.add("active");
}

function closeButton() {
  let overlay = document.getElementById("overlay");
  overlay.classList.remove("active");
  rulesPopup.classList.remove("active");
  tutorialPopup.classList.remove("active");
}
