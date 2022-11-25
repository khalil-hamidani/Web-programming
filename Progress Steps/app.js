const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const progress = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");

let active = 1;
//! next
nextBtn.addEventListener("click", () => {
  active++;
  if (active > 4) {
    active = 4;
  }
  update();
});
//! prev
prevBtn.addEventListener("click", () => {
  active--;
  if (active < 1) {
    active = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < active) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const activeCircles = document.querySelectorAll(".active");
  progress.style.width = ((activeCircles.length - 1) / 3) * 100 + "%";
  if (active === 1) {
    prevBtn.setAttribute("disabled", "");
  } else if (active === 4) {
    nextBtn.setAttribute("disabled", "");
  } else {
    prevBtn.removeAttribute("disabled");
    nextBtn.removeAttribute("disabled");
  }
}
