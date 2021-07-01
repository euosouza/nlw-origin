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

linksMenu.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    toggle.classList.remove('on');
    menu.classList.remove('show');
  })
});

const linksAncora = document.querySelectorAll('a[href^="#"');

linksAncora.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const headerHeight = header.offsetHeight;

    const to = getScrollTopByHref(event.target) - headerHeight;
    scrollToPosition(to)

  })
});

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Comportamento padrao do browser
  // window.scroll({
  //   top: to,
  //   behavior: "smooth"
  // })

  smoothScrollTo(0, to, 1000)
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};


// Carousel

const controls = document.querySelector("#controls"); //balls
const sliders = document.querySelectorAll(".slider"); // quant
let atual = 0;
const slider = document.querySelector("#atual"); // image

let id = 0;
sliders.forEach(element => {
  const div = document.createElement('div');
  div.setAttribute("id", id++);
  div.classList.add('control');
  controls.appendChild(div);
});

document.getElementById("0").classList.add('active');

const elementControl = document.querySelectorAll(".control"); //pos

elementControl.forEach(element => {
  element.addEventListener('click', (event) => {
    atual = element.id
    moveSlide()
  })
});

window.addEventListener('resize', () => {
  setTimeout(() => {    
    if (window.innerWidth > 767) {
      atual = sliders.length - 1;
    }
    moveSlide();
  }, 500)

})

function getSliderWidth() {
  
  return (- document.querySelector("#atual").offsetWidth - 21) * atual
}

function moveSlide() {
  if (atual >= sliders.length) {
    atual = 0;
  } else if (atual < 0) {
    atual = sliders.length - 1;
  }

  document.querySelector(".control.active").classList.remove('active');
  slider.style.marginLeft = getSliderWidth() + 'px';
  document.getElementById(atual).classList.add('active');
}

moveSlide();






