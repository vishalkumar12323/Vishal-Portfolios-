import { Observer } from "./observer-api";

function init() {
  const s_left = document.querySelector(".s-left");
  const s_right = document.querySelector(".s-right");
  const c_left = document.querySelector(".c-left");
  const c_right = document.querySelector(".c-right");
  const mainSection = document.querySelector("#main");
  const skillSection = document.querySelector(".skills");
  const projectSection = document.querySelector(".project-section");
  const contactSection = document.querySelector(".contact-section");
  const observer = new Observer({
    skillSection,
    mainSection,
    projectSection,
    contactSection,
  });

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("top-button");
  buttonElement.innerHTML = `<ion-icon name="chevron-up-outline"></ion-icon>`;
  document.body.appendChild(buttonElement);

  // observering the sections when it's in viewport to load and execute js code.
  observer.skillSectionObserver(s_left, s_right);
  observer.mainSectionObserver(buttonElement);
  observer.projectSectionObserver();
  observer.contactSectionObserver(c_left, c_right);

  const header = document.querySelector(".header-section");
  const humburgerMenu = document.querySelector(".menu-bar");
  const navbar = document.querySelector("#navbar");

  humburgerMenu.addEventListener("click", () => {
    header.classList.toggle("nav-active");
  });

  header.addEventListener("click", (e) => {
    e.stopPropagation();
    header.classList.remove("nav-active");
  });

  navbar.addEventListener("click", (e) => e.stopPropagation());
}

init();
