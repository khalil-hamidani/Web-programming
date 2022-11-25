let panels = document.querySelectorAll(".panel");

for (const panel of panels) {
  panel.addEventListener("click", () => {
    for (const panel of panels) {
      panel.classList.remove("active");
    }
    panel.classList.add("active");
  });
}
