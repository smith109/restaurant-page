export function loadHomePage() {
  const contentDiv = document.querySelector('#content');
  const homePage = document.createElement('div');
  const hero = document.createElement('div');
  const heading = document.createElement('h1');
  const description = document.createElement('p');

  homePage.classList.add('home-page');
  hero.classList.add('hero');

  heading.textContent = 'Luce';
  description.textContent = 
    'Owned and operated by the Smith family since 1987. Where generations of tradition meet culinary artistry. Indulge in a menu that changes daily, offering a taste of elegant simplicity.';

  hero.append(heading, description);
  homePage.append(hero);
  contentDiv.append(homePage);
}
