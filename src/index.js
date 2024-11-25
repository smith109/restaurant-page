import loadHome from "./components/home/loadHome.js"
import loadMenu from "./components/menu/loadMenu.js";
import loadContact from "./components/contact/loadContact.js";

const nav = document.querySelector('nav');
nav.addEventListener('click', switchPageComponent);


function switchPageComponent(e) {
  const target = e.target;
  const content = document.querySelector('#content');
  if (target.tagName !== 'BUTTON') return;

  content.replaceChildren();

  if (target.textContent === 'Home') {
    loadHome();
  }
  if (target.textContent === 'Menu') {
    loadMenu();
  }
  if (target.textContent === 'Contact') {
    loadContact();
  }
}

loadHome();