//Check fi there is color in localStorage
let mainColor = localStorage.getItem("color-option");
if (localStorage.getItem("color-option") !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.querySelectorAll(".colors-list li").forEach((ele) => {
    ele.classList.remove("active");

    if (ele.dataset.color === mainColor) {
      ele.classList.add("active");
    }
  });
}
// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let links = document.querySelector(".links");
let settingBox = document.querySelector(".setting-box");

toggleBtn.onclick = (e) => {
  e.stopPropagation();
  toggleBtn.classList.toggle("menu-active");

  links.classList.toggle("open");
};

document.body.onclick = (e) => {
  // clone menu list oncliclk
  if (
    e.target !== toggleBtn &&
    e.target !== links &&
    toggleBtn.classList.contains("menu-active")
  ) {
    toggleBtn.classList.remove("menu-active");

    links.classList.remove("open");
  }
  if (e.target === document.querySelector(".pop-overlay")) {
    document.querySelector(".pop-box").remove();
    e.target.remove();
  }
};
links.onclick = (e) => {
  e.stopPropagation();
};



// Animate the bullets
let allBullets = document.querySelectorAll(".nav-bullets .bullet");
moveSection(allBullets);


// Animate header links
let allLinks = document.querySelectorAll(".header-area .links span");
moveSection(allLinks);

// function move to any section
function moveSection(allElements) {
  allElements.forEach((e) => {
    e.addEventListener("click", (el) => {
      document.querySelector(el.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}


function handleActiveClasses(element) {
  element.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    ele.classList.remove("active");
  });
  element.target.classList.add("active");
}

$(function () {
  "use strict";
  $(".toggle-setting").on("click", function(){
    $(this).find("i").toggleClass("fa-spin");
    $(this).parent().toggleClass("hide-setting");
  })
});



// Switch Colors
const colorsList = document.querySelectorAll(".color-options li");

colorsList.forEach((li) => {
  li.addEventListener("click", (el) => {
    document.documentElement.style.setProperty(
      "--main-color",
      el.target.dataset.theme
    );

    // Add color to localStorage
    localStorage.setItem("color-option", el.target.dataset.theme);

    // Remove active class
    handleActiveClasses(el);
  });
});
