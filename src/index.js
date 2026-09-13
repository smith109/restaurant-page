import { loadHomePage } from './modules/loadHomePage.js';
import { loadMenuPage } from './modules/loadMenuPage.js';
import { loadAboutPage } from './modules/loadAboutPage.js';
import { loadContactPage } from './modules/loadContactPage.js';
import './css/styles.css';

const pages = {
  home: loadHomePage,
  menu: loadMenuPage,
  about: loadAboutPage,
  contact: loadContactPage,
};

const navBtns = document.querySelector('.nav-btns');
navBtns.addEventListener('click', handleNavigation);

function setActiveBtn(button) {
  const activeBtn = document.querySelector('.active');
  activeBtn?.classList.remove('active');
  button.classList.add('active');
}

function handleNavigation(event) {
  const contentDiv = document.querySelector('#content');
  const button = event.target.closest('button');

  if (!button) return;

  const pageKey = button.dataset.page;
  const loadPage = pages[pageKey];

  if (loadPage) {
    contentDiv.replaceChildren();
    setActiveBtn(button);
    loadPage();
  }
}

loadHomePage();
