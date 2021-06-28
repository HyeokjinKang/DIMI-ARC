document.addEventListener("DOMContentLoaded", (event) => {
  //setTimeout(() => {
  loadingContainer.classList.add("fadeOut");
  setTimeout(() => {
    loadingContainer.style.display = "none";
  }, 1000);
  //}, 1000);
});

const screen = (n) => {
  document
    .getElementsByClassName("menuSelected")[0]
    .classList.remove("menuSelected");
  document.getElementsByClassName("menu")[n].classList.add("menuSelected");
  document.getElementsByClassName("show")[0].classList.remove("show");
  document.getElementsByClassName("containers")[n].classList.add("show");
};
