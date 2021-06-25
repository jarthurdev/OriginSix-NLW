// HAMBÚRGER E X

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}
 
// LINKS

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

// SCROLL COM SOMBRA






//SWIPER

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination'
    },

    mousewheel: true,
    keyboard: true,
    breakpoints:{
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }

  })






//SCROLLREVEAL

const scrollReveal = ScrollReveal ({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `
#home .image, #home .text
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links,
footer .brand, footer .social 
    `
    , {interval: 100})




// scroll

function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
    
    window.addEventListener('scroll', function() {
        if(window.scrollY >= navHeight) {
            // SCROLL > HEADER
            header.classList.add('scroll')
        } else {
            // SCROLL < HEADER
            header.classList.remove('scroll')
        }
    })
}

function backToTop(){

    const backToTopButton = document.querySelector('.back-to-top')

    if(window.scrollY >= 600) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

// SCROLL FUNCTION
window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})






