function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const sliderColumns = document.querySelectorAll(".column");
const c2 = document.querySelector(".c2");
const c1 = document.querySelector(".c1");
const c3 = document.querySelector(".c3");
const logo = document.querySelector(".logo");
function checkSlide(e) {
  if (window.scrollY > 332) {
    c2.classList.add("c2-active");
    c1.classList.add("c1-active");
    c3.classList.add("c3-active");
    logo.classList.add("logo-active");
  } else {
    console.log("asflnjsdg");
  }
}

function loadNav(e) {
  const h1 = document.querySelector(".h1");
  const h2 = document.querySelector(".h2");
  const h3 = document.querySelector(".h3");
  const links = document.querySelectorAll(".link-nav");
  h1.classList.add("h-active");
  h2.classList.add("h-active");
  h3.classList.add("h-active");
  links.forEach(link => {
    link.classList.add("h-active");
  });
}

window.addEventListener("scroll", debounce(checkSlide));
window.addEventListener("load", loadNav);
