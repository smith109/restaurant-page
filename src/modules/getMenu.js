const menu = [];
export const getMenu = () => [...menu];

function createMenuItem(name, price, description) {
  return {
    getName: () => name,
    getPrice: () => price,
    getDescription: () => description
  };
}

function addToMenu(name, price, description) {
  const menuItem = createMenuItem(name, price, description);
  menu.push(menuItem);
}

addToMenu(
  'Bread Basket',
  '$6',
  'An assortment of fresh fruits, baked bread and muffins.'
);

addToMenu(
  'Breakfast Burrito',
  '$8',
  'Scrambled eggs, cheddar cheese, bacon and potatoes wrapped in a flour tortilla.'
);

addToMenu(
  'Blueberry Pancakes',
  '$10',
  'Fluffy pancakes served with butter, maple syrup and fresh berries.'
);

addToMenu(
  'Classic Breakfast Plate',
  '$12',
  'Two waffles served with eggs, bacon and seasonal fruit.'
);

addToMenu(
  'Strawberry French Toast',
  '$14',
  'Thick brioche topped with strawberries, cream cheese and cinnamon.'
);

addToMenu(
  'Steak & Eggs',
  '$16',
  'Grilled sirloin served with sunny side up eggs and toasted sourdough.'
);
