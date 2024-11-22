import createElement from "../../createElement.js";

export default function loadHome() {
  const heroDiv = createElement(
    'div',
    { class: 'hero' },
    createElement('h1', {}, 'Rêverie Café'),
    createElement('p', {}, 'Discover the art of coffee')
  );

  const aboutDiv = createElement(
    'div',
    { class: 'section' },
    createElement('h2', {}, 'About Us'),
    createElement('p', {},
      'We are passionate about bringing the art of coffee to life. Join us for freshly brewed coffee, delicious pastries, and a cozy workspace to spark your creativity.'
    )
  );

  document.querySelector('#content').append(heroDiv, aboutDiv);
}