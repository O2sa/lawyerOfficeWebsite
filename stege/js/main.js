
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
