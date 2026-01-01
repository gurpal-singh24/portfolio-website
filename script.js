// ===== ELEMENTS =====
const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");
const submitBtn = form.querySelector("button");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// ===== HELPER FUNCTIONS =====
function showMessage(text, type) {
  messageBox.textContent = text;
  messageBox.className = type;

  setTimeout(() => {
    messageBox.textContent = "";
    messageBox.className = "";
  }, 3000);
}

function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// ===== FORM SUBMIT =====
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector("#name").value.trim();
  const email = form.querySelector("#email").value.trim();
  const message = form.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    showMessage("Please fill all fields!", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showMessage("Please enter a valid email!", "error");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  setTimeout(() => {
    showMessage("Message sent successfully!", "success");
    form.reset();

    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  }, 1500);
});

// ===== MOBILE MENU =====
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu on link click
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


const darkBtn = document.getElementById("darkToggle");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
