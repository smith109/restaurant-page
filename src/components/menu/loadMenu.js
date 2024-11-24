import createElement from "../../createElement.js";
import { groupedMenu } from "./menuData.js";

function renderMenuItem(item) {
  return createElement(
    'div',
    { class: 'menu-item' },
    createElement('p', {}, item.name),
    createElement('p', {}, item.description),
    createElement('p', {}, item.price),
  );
}

function renderMenuCategory(categoryName, items) {
  const menuCategory = createElement(
    'div',
    { class: 'menu-category' },
    createElement('h2', {}, categoryName)
  );

  items.forEach(item => {
    const menuItem = renderMenuItem(item);
    menuCategory.append(menuItem);
  });

  return menuCategory;
}

function renderMenu() {
  const menuSection = createElement('div', { class: 'menu-section' });

  Object.entries(groupedMenu).forEach(([categoryName, items]) => {
    const menuCategory = renderMenuCategory(categoryName, items);
    menuSection.append(menuCategory);
  });

  return menuSection;
}

export default function loadMenu() {
  const header = createElement(
    'div',
    { class: 'header' },
    createElement('h1', {}, 'Our Menu'),
    createElement('p', {}, 'Coffee is always a good idea')
  );

  document.querySelector('#content').append(header, renderMenu());
}