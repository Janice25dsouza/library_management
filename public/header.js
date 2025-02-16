fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Wait until header is inserted before selecting elements
    const navToggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".links");

    navToggle.addEventListener("click", function () {
      links.classList.toggle("show-links"); // Shorter way to toggle class
    });
  });
