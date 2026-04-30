const images = document.querySelectorAll('.project-img img')
let i = 0

function changeImage() {
  let next = (i + 1) % images.length

  images[next].classList.add('active')
  images[i].classList.remove('active')

  i = next
}

setInterval(changeImage, 3000)

$(document).ready(function() {
  $('.mobile-btn').on('click', function (){ 
    $('.mobile-menu').toggleClass('active')
    $('.mobile-btn').find('i').toggleClass('fa-x')
  })
});
