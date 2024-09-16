const featuresBtn = document.querySelector(".ft");
const companyBtn = document.querySelector(".cmp");
const companyDropdown = document.querySelector(".cmp--hidden");
const featuresDropdown = document.querySelector(".ft--hidden");
const ham = document.querySelector(".ham");
const hiddenMenu = document.querySelector(".nav__menu");

featuresBtn.addEventListener("click", () => {
  featuresDropdown.classList.toggle("active");
});
companyBtn.addEventListener("click", () => {
  companyDropdown.classList.toggle("active");
});

ham.addEventListener("click", () => {
  hiddenMenu.classList.toggle("show");

  if (hiddenMenu.classList.contains("show")) {
    ham.innerHTML = `
               <img src="./images/icon-close-menu.svg" alt="">
  
     `;
  } else {
    ham.innerHTML = `
      <img src="./images/icon-menu.svg" alt="">
  
  `;
  }
  
});

