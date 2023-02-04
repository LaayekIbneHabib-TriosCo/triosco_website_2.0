// BACKGROUND OVERLAY
function update(e) {
  let x = e.clientX || e.touches[0].clientX;
  let y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
}

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);
// END

// MENU
let button_open = document.querySelector(".button-open");
let button_close = document.querySelector(".button-close");
let nav = document.querySelector(".nav");

document.querySelector(".burger-menu").addEventListener("click", function () {
  if (nav.style.display === "none") {
    nav.style.display = "block";
    button_open.style.display = "none";
    button_close.style.display = "block";
  } else {
    nav.style.display = "none";
    button_open.style.display = "block";
    button_close.style.display = "none";
  }
});
// END

// SECTION 1
const sectionOne = document.querySelector(".section-1");
const observerOne = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        nav.style.display = "none";
        button_open.style.display = "block";
        button_close.style.display = "none";
        document.querySelector(".header").style.borderBottom = "0";
      } else {
        nav.style.display = "block";
        button_open.style.display = "none";
        button_close.style.display = "block";
        document.querySelector(".header").style.borderBottom =
          "0.25rem solid var(--yellow)";
      }
    });
  },
  { threshold: 1 }
);
observerOne.observe(sectionOne);
// END

// SECTION 4
const section4 = document.querySelector(".section-4");
const observer4 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(".section-title").innerHTML = " | CREATE";
      } else {
        document.querySelector(".section-title").innerHTML = "";
      }
    });
  },
  { threshold: 1 }
);
observer4.observe(section4);
// END

// SECTION 5
const section5 = document.querySelector(".section-5");
const observer5 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(".section-title").innerHTML = " | CONNECT";
      } else {
        document.querySelector(".section-title").innerHTML = "";
      }
    });
  },
  { threshold: 1 }
);
observer5.observe(section5);
// END

// SECTION 6
const section6 = document.querySelector(".section-6");
const observer6 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(".section-title").innerHTML = " | TRANSCEND";
      } else {
        document.querySelector(".section-title").innerHTML = "";
      }
    });
  },
  { threshold: 1 }
);
observer6.observe(section6);
// END

// SECTION 4 CREATE
const item_1 = document.querySelector(".item-1");
const item_2 = document.querySelector(".item-2");
const item_3 = document.querySelector(".item-3");
const preview_1 = document.querySelector(".preview-1");
const preview_2 = document.querySelector(".preview-2");
const preview_3 = document.querySelector(".preview-3");

item_1.addEventListener("mouseover", function () {
  preview_1.style.display = "block";
});

item_1.addEventListener("mouseleave", function () {
  preview_1.style.display = "none";
});
//
item_2.addEventListener("mouseover", function () {
  preview_2.style.display = "block";
});

item_2.addEventListener("mouseleave", function () {
  preview_2.style.display = "none";
});
//
item_3.addEventListener("mouseover", function () {
  preview_3.style.display = "block";
});

item_3.addEventListener("mouseleave", function () {
  preview_3.style.display = "none";
});
//

// SECTION 5 CONNECT
const item_1B = document.querySelector(".item-1B");
const item_2B = document.querySelector(".item-2B");
const item_3B = document.querySelector(".item-3B");
const preview_1B = document.querySelector(".preview-1B");
const preview_2B = document.querySelector(".preview-2B");
const preview_3B = document.querySelector(".preview-3B");

item_1B.addEventListener("mouseover", function () {
  preview_1B.style.display = "block";
});

item_1B.addEventListener("mouseleave", function () {
  preview_1B.style.display = "none";
});
//
item_2B.addEventListener("mouseover", function () {
  preview_2B.style.display = "block";
});

item_2B.addEventListener("mouseleave", function () {
  preview_2B.style.display = "none";
});
//
item_3B.addEventListener("mouseover", function () {
  preview_3B.style.display = "block";
});

item_3B.addEventListener("mouseleave", function () {
  preview_3B.style.display = "none";
});
//

// SECTION 6 TRANSCEND
const item_1C = document.querySelector(".item-1C");
const item_2C = document.querySelector(".item-2C");
const item_3C = document.querySelector(".item-3C");
const preview_1C = document.querySelector(".preview-1C");
const preview_2C = document.querySelector(".preview-2C");
const preview_3C = document.querySelector(".preview-3C");

item_1C.addEventListener("mouseover", function () {
  preview_1C.style.display = "block";
});

item_1C.addEventListener("mouseleave", function () {
  preview_1C.style.display = "none";
});
//
item_2C.addEventListener("mouseover", function () {
  preview_2C.style.display = "block";
});

item_2C.addEventListener("mouseleave", function () {
  preview_2C.style.display = "none";
});
//
item_3C.addEventListener("mouseover", function () {
  preview_3C.style.display = "block";
});

item_3C.addEventListener("mouseleave", function () {
  preview_3C.style.display = "none";
});
//