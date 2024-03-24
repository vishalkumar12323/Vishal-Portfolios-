const barLine = document.querySelectorAll(".progress-bar");
export function progressBar() {
  barLine.forEach((element) => {
    let startWidth = 0;
    let endWidth = element.dataset.size;

    function loading() {
      if (startWidth >= endWidth) {
        clearInterval(intervalTime);
      } else {
        startWidth++;
        element.firstElementChild.style.width = `${endWidth}%`;
      }
    }
    const intervalTime = setInterval(loading, 500);
  });
}
