import { progressBar } from "./progress-bar";
import { card } from "./card";
import projects from "./projects.json";

export class Observer {
  constructor({ skillSection, mainSection, projectSection }) {
    this.skillSection = skillSection;
    this.mainSection = mainSection;
    this.projectSection = projectSection;
  }

  skillSectionObserver() {
    const observer = new IntersectionObserver(
      (entry, obs) => {
        const [ent] = entry;

        if (!ent.isIntersecting) return;
        progressBar();

        obs.unobserve(this.skillSection);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(this.skillSection);
  }

  mainSectionObserver(button) {
    const observer = new IntersectionObserver(
      (entries) => {
        const [ent] = entries;

        if (!ent.isIntersecting) {
          button.style.opacity = "0";
        } else {
          button.style.opacity = "1";
          button.addEventListener("click", () => {
            window.scrollTo({ behavior: "smooth", top: 0 });
          });
        }
      },
      { root: null, threshold: 0 }
    );

    observer.observe(this.mainSection);
  }

  projectSectionObserver() {
    const observer = new IntersectionObserver(
      (entry, obs) => {
        const [ent] = entry;

        if (!ent.isIntersecting) return;
        card(projects);

        obs.unobserve(this.projectSection);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(this.projectSection);
  }
}
