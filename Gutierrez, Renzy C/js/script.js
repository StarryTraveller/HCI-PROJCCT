const hamburger = document.getElementsByClassName("hamburger")[0];
const mobileNavs = document.getElementsByClassName("nav-links")[0];

hamburger.addEventListener("click", () => {
  mobileNavs.classList.toggle("active");
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function downloadCV() {
  // Get the image source
  var cvSrc = document.getElementById("cvImage").src;

  // Create a temporary anchor element
  var link = document.createElement("a");
  link.href = cvSrc;
  link.download = "assets2/resume.pdf";

  // Append the anchor to the body and trigger the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
