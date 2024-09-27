import { progressBar } from "./progress-bar";
import { card } from "./card";
import projects from "./projects.json";

export class Observer {
  constructor({ skillSection, mainSection, projectSection, contactSection }) {
    this.skillSection = skillSection;
    this.mainSection = mainSection;
    this.projectSection = projectSection;
    this.contactSection = contactSection;
  }

  skillSectionObserver(left, right) {
    const observer = new IntersectionObserver(
      (entry, obs) => {
        const [ent] = entry;

        if (!ent.isIntersecting) return;
        left.style.animation = "left-fade-in 2s linear";
        right.style.animation = "right-fade-in 2s linear";
        setTimeout(() => {
          progressBar();
        }, 2000);

        obs.unobserve(this.skillSection);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(this.skillSection);
  }

  mainSectionObserver(element) {
    const observer = new IntersectionObserver(
      (entries) => {
        const [ent] = entries;

        if (!ent.isIntersecting) {
          element.style.opacity = "0";
        } else {
          element.style.opacity = "1";
          element.addEventListener("click", () => {
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

  contactSectionObserver(left, right) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        const [ent] = entries;

        if (!ent.isIntersecting) return;
        left.style.animation = "left-fade-in 2s linear";
        right.style.animation = "right-fade-in 2s linear";

        obs.unobserve(this.contactSection);
      },
      { root: null, threshold: 0 }
    );

    observer.observe(this.contactSection);
  }
}
