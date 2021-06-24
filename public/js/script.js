document.addEventListener("DOMContentLoaded", (event) => {
  //setTimeout(() => {
  loadingContainer.classList.add("fadeOut");
  setTimeout(() => {
    loadingContainer.style.display = "none";
  }, 1000);
  //}, 1000);
});
