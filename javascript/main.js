import projects from "./projects.json";
import { card } from "./card";
import { progressBar } from "./progress-bar";
import { themeToggler } from "./web-theme"


function init() {
  const mainSection = document.querySelector("#main");

  const buttonElement = document.createElement('button');
  buttonElement.classList.add("top-button");
  buttonElement.innerHTML = `<ion-icon name="chevron-up-outline"></ion-icon>`
  document.body.appendChild(buttonElement);

  themeToggler();

  // observering the skill-section when it's in viewport to load skills animation
  const skillSection = document.querySelector(".skills");
  const skillSectionObserver = new IntersectionObserver(
    (entry, observer) => {
      const [ent] = entry;

      if (!ent.isIntersecting) return;
      progressBar();

      observer.unobserve(skillSection);
    },
    {
      root: null,
      threshold: 0,
    }
  );

  skillSectionObserver.observe(skillSection);

  card(projects);

  const mainSectionObserver = new IntersectionObserver((entries) => {
    const [ent] = entries;

    if (!ent.isIntersecting) {
      buttonElement.style.opacity = "0";
    } else {
      buttonElement.style.opacity = "1";
      buttonElement.addEventListener("click", () => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
      });
    }
  }, { root: null, threshold: 0 });

  mainSectionObserver.observe(mainSection);

  const header = document.querySelector(".header-section");
  const humburgerMenu = document.querySelector(".humburger-menu");
  const navbar = document.querySelector("#navbar");

  humburgerMenu.addEventListener("click", () => {
    header.classList.toggle("nav-active");
  });

  header.addEventListener('click', (e) => {
    e.stopPropagation();
    header.classList.remove("nav-active");
  });

  navbar.addEventListener('click', (e) => e.stopPropagation());
};

init();

