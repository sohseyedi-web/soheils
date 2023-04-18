const items = document.querySelectorAll(".tabline-container__top-item");
const content = document.querySelectorAll(".tabline-container__body-content");
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("active-item"));
    item.classList.add("active-item");

    content.forEach((l) => l.classList.remove("active-box"));
    content[index].classList.add("active-box");
  });
});

// code for tabs

const header = document.querySelectorAll(
  ".tabline-container__body-content__resume-experience__top"
);
const footer = document.querySelectorAll(
  ".tabline-container__body-content__resume-experience__footer"
);
const lists = document.querySelectorAll(
  ".tabline-container__body-content__resume-experience"
);
header.forEach((item, index) => {
  item.addEventListener("click", () => {
    lists[index].classList.toggle("active-acc");
    footer[index].classList.toggle("active-details");
  });
});
