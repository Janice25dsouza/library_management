fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Wait until the header is loaded before adding event listeners
    const navToggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".links");

    if (navToggle && links) {
      navToggle.addEventListener("click", function () {
        links.classList.toggle("show-links");
      });
    }
  })
  .catch(error => console.error("Error loading header:", error));
