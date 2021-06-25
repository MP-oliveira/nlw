
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
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {

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
  breakpoints: {
    767: {
     slidesPerView: 2,
     setWrapperSize: true  
    }
  }
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

const backToTopButtom = document.querySelector('.back-to-top');

function backToTop() {

  if(window.scrollY >= 560) {
    backToTopButtom.classList.add('show')
  }else {
    backToTopButtom.classList.remove('show')
  }
}
/* Menu ativo  conforme a seção  visivel na pagina */

const sections = document.querySelector('main section[id');
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if(checkpointStart && checkpointEnd){
      document
        .querySelector('nav ul li a[href+=' + sectionId + '] ')
        .classList.add('active')

    }else {
      document
        .querySelector('nav ul li a[href+=' + sectionId + '] ')
        .classList.remove('active')
    }
  }
}


/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
})