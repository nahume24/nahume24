// =============================
// Mobile Navigation
// =============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");

    menuBtn.setAttribute(
      "aria-expanded",
      String(open)
    );

    menuBtn.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation"
    );
  });

  document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation");
      });
    });
}


// =============================
// Automatic Copyright Year
// =============================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// =============================
// Scroll Reveal Animation
// =============================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}
