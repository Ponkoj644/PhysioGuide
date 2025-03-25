// Preloader start //

function hidePreloader(delay = 1000) {
  document.addEventListener("DOMContentLoaded", function () {
    // Ensure the body is visible before anything
    document.body.style.opacity = "1";

    setTimeout(function () {
      const preloader = document.getElementById("preloader");

      if (preloader) {
        preloader.classList.add("fade-out");

        preloader.addEventListener("transitionend", function () {
          preloader.remove();
          document.body.classList.add("page-visible");
        });
      }
    }, delay);
  });
}
// Call the function
hidePreloader();

// Preloader end //
