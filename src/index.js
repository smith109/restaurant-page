import { loadHomePage } from './modules/loadHomePage.js';
import { loadMenuPage } from './modules/loadMenuPage.js';
import { loadAboutPage } from './modules/loadAboutPage.js';
import { loadContactPage } from './modules/loadContactPage.js';

const navBtns = document.querySelector('.nav-btns');
navBtns.addEventListener('click', loadSelectedPage);

function setActiveBtn(button) {
  const activeBtn = document.querySelector('.active');
  activeBtn.classList.remove('active');
  button.classList.add('active');
}

function loadSelectedPage(event) {
  const contentDiv = document.querySelector('#content');
  const button = event.target.closest('button');

  if (!button) return;

  contentDiv.replaceChildren();
  setActiveBtn(button);

  if (button.classList.contains('home-btn')) {
    loadHomePage();
  }

  if (button.classList.contains('menu-btn')) {
    loadMenuPage();
  }

  if (button.classList.contains('about-btn')) {
    loadAboutPage();
  }

  if (button.classList.contains('contact-btn')) {
    loadContactPage();
  }
}

loadHomePage();
