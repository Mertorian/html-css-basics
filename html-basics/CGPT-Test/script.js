// Adding a simple click event to the header for interactivity
const header = document.querySelector("header");

header.addEventListener("click", () => {
  alert("Hello! This is Mert Tercan's profile.");
});

// ... (existing code as before) ...

// Switch between pages when the buttons are clicked
const profileButton = document.getElementById("profileButton");
const contactButton = document.getElementById("contactButton");

profileButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

contactButton.addEventListener("click", () => {
  window.location.href = "contact.html";
});
