var prevScrollpos = window.pageYOffset;
let slideIndex = 1;
showSlides(slideIndex);
let menu = document.querySelector('#menu');
let menu_bar = document.querySelector('#btn-toggle');
const cerrar = document.querySelector('#close-btn');
let mybutton = document.getElementById("myBtn");
const btnConoceMas = document.querySelector('#btn-ConoceMas');
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}



// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    if (document.querySelector(".carousel")) {
        let slideshowPage = document.querySelector(".carousel");
        if (slideshowPage.classList.contains("carousel")) {
            let slides = slideshowPage.querySelectorAll(".mySlides");
            if (n > slides.length) {
            slideIndex = 1
            };
            if (n < 1) {
            slideIndex = slides.length
            };
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        };
        slides[slideIndex-1].style.display = "block";
        }
    }
}


setInterval(function() {
  plusSlides(1)
}, 8500);


window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  scrollFunction();
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";

 
  } else {
    document.getElementById("header").style.top = "-200px";
    menu.classList.remove("btn-togler-event");
  }
  prevScrollpos = currentScrollPos;
}

menu_bar.addEventListener('click',function(){
    menu.classList.toggle('btn-togler-event')
});

cerrar.addEventListener('click', () => {
    menu.classList.remove('btn-togler-event');
})

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
btnConoceMas.addEventListener('click',() => {
  window.open("https://wa.me/+5491133211647", '_blank');
})
function clickWp() {
  window.open("https://wa.me/+5491133211647", '_blank');
}

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
  menu.classList.toggle('btn-togler-event');
}));




