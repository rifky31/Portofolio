let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "55px",
  duration: 2600,
  delay: 500,
  reset: true,
});

sr.reveal(".hero-text h4, .heading, .about-img", { delay: 200, origin: "top" });
sr.reveal(".hero-text, .about-content, .education-box", {
  delay: 200,
  origin: "bottom",
});
sr.reveal(".hero-text h1, .icons, .title", { delay: 200, origin: "left" });
sr.reveal(".scroll-down, .input-box, .textarea-field, .btn-box", {
  delay: 500,
  origin: "right",
});
