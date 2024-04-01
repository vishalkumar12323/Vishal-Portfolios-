const cardContainer = document.querySelector("#cardContainer");
const cardTemplate = document.querySelector("#cardTemplate");
export function card(projects) {
  if (!projects) return;
  projects.forEach((item) => {
    const { id, name, img, githubLink, previewLink, description } = item;

    const element = document.importNode(cardTemplate.content, true);

    element.querySelector(".img").src = img;
    element.querySelector(".img").alt = `${name} project image`;
    element.querySelector(".name").textContent = name;
    element.querySelector(".description").textContent = description;
    element.querySelector(".github").href = githubLink;
    element.querySelector(".preview-link").href = previewLink;

    cardContainer.append(element);
  });
}
