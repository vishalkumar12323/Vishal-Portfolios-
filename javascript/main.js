import projects from "./projects.json";
import { card } from "./card";
import { progressBar } from "./progress-bar";

// create animated navbar
const linkList = document.querySelectorAll(".link-list");
const icons = document.querySelectorAll(".icons");
const links = document.querySelectorAll(".link span");

const humburgerMenu = document.querySelector(".humburger-menu");
const header = document.querySelector(".header-section");
const bar = document.querySelector(".hero-section .bar");
const close = document.querySelector(".hero-section .close");

for (let i = 0; i < linkList.length; i++) {
  linkList[i].addEventListener("mouseover", () => {
    linkList[i].classList.add("active");
    linkList[i].style.width = "90%";
    icons[i].style.color = `#fff`;
    links[i].style.color = "#fff";
  });

  linkList[i].addEventListener("mouseout", () => {
    linkList[i].classList.remove("active");
    linkList[i].style.width = "40%";
    icons[i].style.color = "#0563bb";
    links[i].style.color = "transparent";
  });
}

// observering the skill-section when it's in viewport to load skills animation
const skillSection = document.querySelector(".skills");
const skillSectionObserver = new IntersectionObserver(
  (entry, observer) => {
    const [ent] = entry;

    if (!ent.isIntersecting) return;
    // progressBar();

    observer.unobserve(skillSection);
  },
  {
    root: null,
    threshold: 0,
  }
);

skillSectionObserver.observe(skillSection);
// card(projects);

humburgerMenu.addEventListener("click", () => {
  header.classList.toggle("toggler");
  bar.classList.toggle("barToggler");
});
