import projects from "./projects.json";
import { card } from "./card";
import { progressBar } from "./progress-bar";

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

const header = document.querySelector(".header-section");
const humburgerMenu = document.querySelector(".humburger-menu");

humburgerMenu.addEventListener("click", () => {
  header.classList.toggle("nav-active");
});
