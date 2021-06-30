const toggle = document.querySelector('#toggle');
const menu = document.querySelector('#menu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('on');
  menu.classList.toggle('show');
})

// Ajustando bug do menu quando á redimensionamento manual da tela
window.addEventListener('resize', () => {
  if (window.innerWidth === 767) {
    toggle.classList.remove('on');
    menu.classList.remove('show');
    menu.classList.add('resize')
  }
  else {
    menu.classList.remove('resize')
  }
})