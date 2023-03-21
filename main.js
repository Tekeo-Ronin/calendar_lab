const flatBtn = document.querySelector(".flatBtn");
const daysContainer = document.querySelector(".calendar-days_container");

flatBtn.addEventListener("click", (e) => {
  e.preventDefault();
  daysContainer.classList.toggle("flat");
});
