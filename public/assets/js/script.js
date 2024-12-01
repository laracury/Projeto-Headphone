function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  let iconElement = document.querySelector('.icon');

  if (menuMobile.classList.contains('open')) {

    menuMobile.classList.remove('open');
    iconElement.innerHTML = `<i class="bi bi-list"></i>`;

  } else {
    
    menuMobile.classList.add('open');
    iconElement.innerHTML = `<i class="bi bi-x-lg"></i>`;
  }
}

