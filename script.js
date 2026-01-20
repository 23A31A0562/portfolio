console.log("script.js loaded ✅");
const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => {
    observer.observe(section);
});

document.querySelectorAll(".cert-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
        const item = btn.parentElement;
        item.classList.toggle("active");
    });
});

emailjs.init("2F68ABKWCRc2O9IoZ");

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  status.style.color = "#555";
  status.textContent = "Sending message...";
  
  emailjs.sendForm(
    "service_ja64g3q",
    "template_no7xt03",
    this
  ).then(
    () => {
      status.style.color = "green";
      status.textContent = "Message sent successfully! I’ll get back to you soon.";
      form.reset();
    },
    (error) => {
      status.style.color = "red";
      status.textContent = "Something went wrong. Please try again later.";
      console.error(error);
    }
  );
});
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});


