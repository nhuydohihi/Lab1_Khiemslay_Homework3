// Smooth scroll to about section
document.getElementById("explore-btn").addEventListener("click", function() {
  document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
});

// Button animation
const registerBtn = document.querySelector(".register-btn");
registerBtn.addEventListener("click", () => {
  registerBtn.textContent = "Đã đăng ký!";
  registerBtn.style.background = "#00c853";
  setTimeout(() => {
    registerBtn.textContent = "Đăng ký ngay";
    registerBtn.style.background = "#ff004c";
  }, 2000);
});
