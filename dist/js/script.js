const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const navToggleClose = document.querySelector(".nav__close");

navToggle.addEventListener("click", () => {
  nav.setAttribute("data-visible", true);
  navToggle.setAttribute("aria-expanded", true);
});

navToggleClose.addEventListener("click", () => {
  nav.setAttribute("data-visible", false);
  navToggle.setAttribute("aria-expanded", false);
});

function changewidth() {
  const skillsBar = document.querySelectorAll(".tools__bar");
  for (let i = 0; i < skillsBar.length; i++) {
    const barWidth = skillsBar[i].getAttribute('bar-width');
    skillsBar[i].style.setProperty('--width', barWidth);
  }
}

changewidth()

const customCheckBox = document.querySelector(".checkmark");
const initialCheckBox = document.getElementById("checkbox");

customCheckBox.addEventListener("click", () => {
  let condition = initialCheckBox.getAttribute("checked") === "true";
  console.log(condition);
  initialCheckBox.setAttribute("checked", `${!condition}`);
  console.log(condition);
});

