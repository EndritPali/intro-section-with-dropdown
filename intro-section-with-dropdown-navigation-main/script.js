const featuresBtn = document.querySelector(".ft");
const companyBtn = document.querySelector(".cmp");
const companyDropdown = document.querySelector(".cmp--hidden");
const featuresDropdown = document.querySelector(".ft--hidden");

featuresBtn.addEventListener("click", () => {
  featuresDropdown.classList.toggle('active')
});
companyBtn.addEventListener("click", () => {
  companyDropdown.classList.toggle('active')
});
