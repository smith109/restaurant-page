import { getMenu } from './getMenu.js';

function createMenuItems(menuData = []) {
  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');

  menuData.forEach((menuItem) => {
    const item = document.createElement('div');
    const itemHeader = document.createElement('div');
    const itemName = document.createElement('h2');
    const itemPrice = document.createElement('span');
    const itemDescription = document.createElement('p');
    const { getName, getPrice, getDescription } = menuItem;

    item.classList.add('menu-item');
    itemHeader.classList.add('header');

    itemName.textContent = getName();
    itemPrice.textContent = getPrice();
    itemDescription.textContent = getDescription();

    itemHeader.append(itemName, itemPrice);
    item.append(itemHeader, itemDescription);
    menuItems.append(item);
  });

  return menuItems;
}

export function loadMenuPage() {
  const contentDiv = document.querySelector('#content');
  const menuPage = document.createElement('div');
  const menuHeader = document.createElement('div');
  const heading = document.createElement('h1');
  const subheading = document.createElement('p');
  const menuItems = createMenuItems(getMenu());

  menuPage.classList.add('menu-page');
  menuHeader.classList.add('header');

  heading.textContent = 'Our Menu';
  subheading.textContent = 'Made with fresh, locally sourced ingredients.';

  menuHeader.append(heading, subheading);
  menuPage.append(menuHeader, menuItems);
  contentDiv.append(menuPage);
}
