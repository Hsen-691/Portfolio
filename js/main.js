const titles = [
  "Computer & Communication Engineer",
  "Network Engineer",
  "Backend Developer",
  "Telecommunications Specialist",
  "IT Infrastructure Specialist",
];
let ti = 0,
  ci = 0,
  del = false;
const el = document.querySelector("#typed");
function type() {
  const w = titles[ti];
  el.textContent = w.slice(0, ci);
  if (!del && ci < w.length) ci++;
  else if (del && ci > 0) ci--;
  else {
    del = !del;
    if (!del) ti = (ti + 1) % titles.length;
    setTimeout(type, del ? 1100 : 250);
    return;
  }
  setTimeout(type, del ? 35 : 70);
}
type();
const menu = document.querySelector(".menu-btn"),
  links = document.querySelector(".nav ul");
menu.onclick = () => links.classList.toggle("open");
document
  .querySelectorAll(".nav a")
  .forEach((a) => (a.onclick = () => links.classList.remove("open")));
const obs = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((e) => obs.observe(e));
const sections = [...document.querySelectorAll("section[id]")],
  navLinks = [...document.querySelectorAll(".nav a.link")];
addEventListener("scroll", () => {
  let id = "home";
  sections.forEach((s) => {
    if (scrollY >= s.offsetTop - 180) id = s.id;
  });
  navLinks.forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === "#" + id),
  );
});
