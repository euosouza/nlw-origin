const toggle = document.querySelector('#toggle');
const menu = document.querySelector('#menu');
const header = document.querySelector('#header');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('on');
  menu.classList.toggle('show');
})

// Ajustando bug do menu quando á redimensionamento manual da tela
window.addEventListener('resize', () => {
  menu.classList.add('resize');
  toggle.classList.remove('on');
  menu.classList.remove('show');

  setTimeout(() => {
    menu.classList.remove('resize');
  }, 10)
})

// Adicionando sombra no header
window.addEventListener('scroll', () => {
  window.pageYOffset > header.offsetHeight ?
    header.classList.add('shadow') : header.classList.remove('shadow');
})

const linksMenu = document.querySelectorAll('.nav-link');


linksMenu.forEach(element => {
  element.addEventListener('click', () => {
    toggle.classList.remove('on');
    menu.classList.remove('show');
  })
});

