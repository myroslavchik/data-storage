//menu button

const hamburger = document.querySelector('.nav-container');
const menu = document.querySelector('.topnav');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  })


//animation scroll

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

//up button

const BTNUP = document.querySelector('.btn__up');
BTNUP.addEventListener('click', toUp);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    BTNUP.style.display = "flex";
  } else {
    BTNUP.style.display = "none";
  }
}

function toUp () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

