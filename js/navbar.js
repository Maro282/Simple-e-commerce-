// ==================Marwan==========================
// exporting cart icon counter to cartpage.js to
//  handle it's textContent when adding product

export const cartCounter = document.getElementById("cartCount");
// ==================End Marwan =====================

document.addEventListener("DOMContentLoaded", () => {
  let navLinks = document.getElementById("navLinks");
  let loginBtn = document.getElementById("loginBtn");
  let logoutBtn = document.getElementById("logoutBtn");

  let currentPage = window.location.pathname.split("/").pop();
  let loggedIn = localStorage.getItem("loggedIn");

  // Navbar Links
  if (navLinks) {
    if (currentPage === "login.html" || currentPage === "register.html") {
      navLinks.innerHTML = "";
    } else {
      if (loggedIn === "true") {
        navLinks.innerHTML = `
          <li class="nav-item"><a class="nav-link custom-link" href="index.html">PRODUCTS</a></li>
          <li class="nav-item"><a class="nav-link custom-link" href="#">SHOP</a></li>
          <li class="nav-item"><a class="nav-link custom-link" href="#">WEDDINGS</a></li>
          <li class="nav-item"><a class="nav-link custom-link" href="#">SERVICES</a></li>
          <li class="nav-item"><a class="nav-link custom-link" href="#">CONTACT</a></li>
        `;
      } else {
        navLinks.innerHTML = "";
      }
    }
  }

  // Login / Logout buttons
  if (loggedIn === "true") {
    if (loginBtn) loginBtn.classList.add("d-none");
    if (logoutBtn) {
      logoutBtn.classList.remove("d-none");
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("loggedIn");
        alert("You have logged out!");
        window.location.href = "index.html";
      });
    }
  } else {
    if (loginBtn) loginBtn.classList.remove("d-none");
    if (logoutBtn) logoutBtn.classList.add("d-none");
  }

  // Toggle Password
  document.querySelectorAll(".toggle-password").forEach((icon) => {
    icon.addEventListener("click", () => {
      let targetId = icon.getAttribute("data-target");
      let input = document.getElementById(targetId);
      if (!input) return;

      if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      }
    });
  });

  // Login
  let loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let emailInput = document.getElementById("username").value.trim();
      let passwordInput = document.getElementById("password").value;

      let storedUser = JSON.parse(localStorage.getItem("userData"));
      if (
        storedUser &&
        emailInput === storedUser.email &&
        passwordInput === storedUser.password
      ) {
        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "index.html";
      } else {
        alert("Invalid login. Please check your email and password.");
      }
    });
  }

  let registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let newUsername = document.getElementById("newUsername").value.trim();
      let newEmail = document.getElementById("newEmail").value.trim();
      let newPassword = document.getElementById("newPassword").value;

      if (!newUsername || !newEmail || !newPassword) {
        alert("Please fill all fields.");
        return;
      }

      if (newPassword.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
      }

      let userData = {
        username: newUsername,
        email: newEmail,
        password: newPassword,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Registration successful! Please login.");
      window.location.href = "login.html";
    });
  }

  // Search Toggle
  let searchIcon = document.querySelector(".search-icon");
  let searchContainer = document.querySelector(".search-container");

  if (searchIcon && searchContainer) {
    searchIcon.addEventListener("click", () => {
      searchContainer.classList.toggle("active");
      let input = searchContainer.querySelector(".search-input");
      if (input) input.focus();
    });
  }
});
