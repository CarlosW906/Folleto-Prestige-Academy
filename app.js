document.addEventListener("DOMContentLoaded", function() {
  const menu = document.getElementById("menu");

  window.toggleMenu = function() {
    menu.classList.toggle("active");
  }
});


function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function closeOnOutside(event, id) {
  if (event.target.id === id) {
    closeModal(id);
  }
}

function toggleAccordion(element) {
  const panel = element.nextElementSibling;
  const icon = element.querySelector(".icon");

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    icon.textContent = "+";
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    icon.textContent = "−";
  }
}

function toggleMenu(){

    document
        .getElementById("menu")
        .classList
        .toggle("active");

    document
        .getElementById("overlay")
        .classList
        .toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {

const slides = document.querySelectorAll(".carousel-slide");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let current = 0;

function showSlide(index){

    slides.forEach(slide =>
        slide.classList.remove("active")
    );

    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

});

prevBtn.addEventListener("click", () => {

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current);

});

setInterval(() => {

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

}, 5000);


});
