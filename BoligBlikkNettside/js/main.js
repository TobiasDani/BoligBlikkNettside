document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navigationPhone = document.getElementById("navigationPhone");
  
    hamburger.addEventListener("click", function () {
      navigationPhone.classList.toggle("active");
    });
  });
  