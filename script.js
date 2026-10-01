// =============================
// Mobile Navigation
// =============================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

  const open =
    navLinks.classList.toggle("open");


  menuBtn.setAttribute(
    "aria-expanded",
    String(open)
  );

});



// =============================
// Close menu after selecting link
// =============================

document
  .querySelectorAll(".nav-links a")
  .forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");


      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });



// =============================
// Automatic Copyright Year
// =============================

document.getElementById("year").textContent =
  new Date().getFullYear();



// =============================
// Scroll Reveal Animation
// =============================

const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );


          observer.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.12
    }

  );



// Find every element with
// the "reveal" class

document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    observer.observe(element);

  });