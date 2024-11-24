import MenuItem from "./menuItem.js";

const menu = [
  new MenuItem(
    'Pumpkin Spice Latte',
    'Espresso, steamed milk, and pumpkin spice flavor',
    '$4.50',
    'Seasonal Favorites'
  ),

  new MenuItem(
    'Salted Caramel Mocha',
    'Rich mocha with a hint of salted caramel',
    '$4.75',
    'Seasonal Favorites'
  ),

  new MenuItem(
    'Espresso',
    'A rich, velvety shot of bold espresso',
    '$2.00',
    'Coffee'
  ),

  new MenuItem(
    'Americano',
    'Espresso with hot water',
    '$2.50',
    'Coffee'
  ),

  new MenuItem(
    'Cappuccino',
    'Espresso, steamed milk and foam',
    '$3.50',
    'Coffee'
  ),

  new MenuItem(
    'Chai Latte',
    'Black tea with spices and steamed milk',
    '$3.75',
    'Tea'
  ),

  new MenuItem(
    'Matcha Latte',
    'Japanese green tea with steamed milk',
    '$4.00',
    'Tea'
  ),

  new MenuItem(
    'Chocolate Chip Cookie',
    'Warm and gooey with chucks of chocolate',
    '$1.75',
    'Pastries'
  ),

  new MenuItem(
    'Blueberry Muffin',
    'Fresh and fluffy with juicy blueberries',
    '$2.00',
    'Pastries'
  ),

  new MenuItem(
    'Cinnamon Roll',
    'Soft, spiraled dough with cinnamon sugar and cream cheese glaze',
    '$2.50',
    'Pastries'
  ),
];

export const groupedMenu = menu.reduce((obj, item) => {
  if (!obj[item.category]) {
    obj[item.category] = [];
  }

  obj[item.category].push(item);
  return obj;
}, {});