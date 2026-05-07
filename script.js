const images = document.querySelectorAll('.project-img img')
let i = 0

function changeImage() {
  let next = (i + 1) % images.length

  images[next].classList.add('active')
  images[i].classList.remove('active')

  i = next
}

setInterval(changeImage, 3000)

const slides = document.querySelectorAll('.slider-box')
const nextButton = document.getElementById('next')
const prevButton = document.getElementById('prev')
const dots = document.querySelectorAll('.nav-btn-links')

let slideActive = 0

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'))
  dots[slideActive].classList.add('active')
}


nextButton.addEventListener('click', () => {
  slides[slideActive].classList.remove('active')
  slideActive = (slideActive + 1) % slides.length
  slides[slideActive].classList.add('active')
   updateDots()
})

prevButton.addEventListener('click', () => {
  slides[slideActive].classList.remove('active')
  slideActive = (slideActive - 1 + slides.length) % slides.length
  slides[slideActive].classList.add('active')
   updateDots()
})

$(document).ready(function() {
  $('.mobile-btn').on('click', function (){ 
    $('.mobile-menu').toggleClass('active')
    $('.mobile-btn').find('i').toggleClass('fa-x')
  })
});
