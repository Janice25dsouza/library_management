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

    // Now that header is loaded, add modal event listeners
    const modal = document.getElementById("loginModal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.querySelector(".close"); // Fixed selector

    if (openModalBtn && modal && closeModalBtn) {
      openModalBtn.addEventListener("click", function () {
        modal.style.display = "flex";
      });

      closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });

      window.addEventListener("click", function (e) {
        if (e.target === modal) {
          modal.style.display = "none"; // Close modal when clicking outside
        }
      });
    }

    const modal2 = document.getElementById("signUpModal");
    const openModalBtn2 = document.getElementById("openModal2");
    const closeModalBtn2 = document.querySelector(".close2");

    if(openModalBtn2 && modal2 && closeModalBtn2){
      openModalBtn2.addEventListener("click",function(){
        modal2.style.display="flex";
      });
      closeModalBtn2.addEventListener("click", function () {
        modal2.style.display = "none";
      });
      window.addEventListener("click", function (e) {
        if (e.target === modal2) {
          modal2.style.display = "none"; // Close modal when clicking outside
        }
      });
    }
  })
  .catch(error => console.error("Error loading header:", error));
