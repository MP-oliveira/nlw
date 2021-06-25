
/* Abre e fecha o menun quando clicar no icone: hamburguer e x */ 
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Quando clicar em um itme do menu, fechar todo o menu*/ 
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  })
}

/* mudar o header da pagina quando der o scroll */ 

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header');
  const navHeight = header.offsetHeight;

  if(window.scrollY >= navHeight){
    // scroll é maior que altura do header
  
    header.classList.add('scroll')
  }else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}



/* testimonials  carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidePerview: 1,
  pagination: {
    el: '.swiper-pagination', 
  },
  mousewheel: true,
  keyboard: true,
})

/* Scrollreveal: Mostrar elementos quando der scroll na pagina */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#home .image, #home .text
   #about .image, #about .text,
   #services .header, #services .card,
   #testimonials .header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social
`, {interval: 100})


/* Botão voltar para o topo */


function backToTop() {
  const backToTopButtom = document.querySelector('.back-to-top');

  if(window.scrollY >= 560) {
    backToTopButtom.classList.add('show')
  }else {
    backToTopButtom.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
})