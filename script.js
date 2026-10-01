const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formMessage").textContent =
    "Thanks! Your message has been received. Connect the form to a backend or email service to receive submissions.";
  e.target.reset();
});

document.getElementById("cvBtn").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Add your CV file and change this button link to your CV filename.");
});
