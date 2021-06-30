const toggle = document.querySelector('#toggle');
const menu = document.querySelector('#menu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('on');
  menu.classList.toggle('show');
})

// Ajustando bug do menu quando á redimensionamento manual da tela
window.addEventListener('resize', () => {
  menu.classList.add('resize');
  toggle.classList.remove('on');
  menu.classList.remove('show');

  setTimeout(() =>{
    menu.classList.remove('resize');
  },10)  
})
