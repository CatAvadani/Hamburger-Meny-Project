const toggleButton = document.querySelector(".icon");
const links = document.querySelector(".links");
const nav = document.querySelector(".nav");

let isExpanded = false;
toggleButton.addEventListener("click", function () {
  if (isExpanded) {
    links.style.display = "flex";
    isExpanded = false;
  } else {
    links.style.display = "none";
    isExpanded = true;
  }
});
