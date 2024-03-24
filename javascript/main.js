import { progressBar } from "./progress-bar";

const linkList = document.querySelectorAll(".link-list");
const icons = document.querySelectorAll(".icons");

for (let i = 0; i < linkList.length; i++) {
  linkList[i].addEventListener("mouseover", () => {
    linkList[i].classList.add("active");
    linkList[i].style.width = "90%";
    icons[i].style.color = "#fff";
  });

  linkList[i].addEventListener("mouseout", () => {
    linkList[i].classList.remove("active");
    linkList[i].style.width = "40%";
    icons[i].style.color = "#000";
  });
}

progressBar();
