// Mobile Toggle
const btn = document.getElementById("menuBtn");
const mobile = document.getElementById("mobileNav");
const menuI = document.getElementById("menuIcon");
const closeI = document.getElementById("closeIcon");

btn?.addEventListener("click", () => {
  mobile.classList.toggle("hidden");
  menuI.classList.toggle("hidden");
  closeI.classList.toggle("hidden");
});

// Portfolio filters
const filters = Array.from(document.querySelectorAll(".pf-filter"));
const cards = Array.from(document.querySelectorAll(".pf-card"));
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.filter;
    cards.forEach((c) => {
      c.classList.toggle("hidden", cat !== "all" && c.dataset.cat !== cat);
    });
  });
});

// Case study
const modal = document.getElementById("caseModal");
const modalImg = document.getElementById("caseImg");
const modalDesc = document.getElementById("caseDesc");
const modalTitle = document.getElementById("caseTitle");
document.querySelectorAll(".js-case").forEach((btn) => {
  btn.addEventListener("click", () => {
    modalImg.src = btn.dataset.img || "";
    modalImg.alt = btn.dataset.title || "Case study image";
    modalDesc.textContent = btn.dataset.desc || "";
    modalTitle.textContent = btn.dataset.title || "Case study";
    modal.classList.remove("hidden");
    modal.focus();
  });
});
document
  .getElementById("caseClose")
  ?.addEventListener("click", () => modal.classList.add("hidden"));
modal?.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.classList.add("hidden");
});

// Testimonial slider
const tTrack = document.getElementById("tTrack");
const tSlides = Array.from(tTrack?.querySelectorAll("[data-slide]") || []);
function currentSlideIndex() {
  const midpoint = tTrack.scrollLeft + tTrack.clientWidth / 2;
  let best = 0;
  bestDist = Infinity;
  tSlides.forEach((el, i) => {
    const center = el.offsetLeft + el.offsetWidth / 2;
    const d = Math.abs(center - midpoint);
    if (d < bestDist) {
      best = i;
      bestDist = d;
    }
  });
  return best;
}
function go(delta) {
  if (!tSlides.length) return;
  const i = (currentSlideIndex() + delta + tSlides.length) % tSlides.length;
  tSlides[i].scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });
}
document.getElementById("prevTesti")?.addEventListener("click", () => go(-1));
document.getElementById("nextTesti")?.addEventListener("click", () => go(1));
// keaboard support on the track
tTrack?.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") go(1);
  if (e.key === "ArrowLeft") go(-1);
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();
