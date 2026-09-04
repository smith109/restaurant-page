import restaurantImage from '../assets/restaurant.jpg';

export function loadAboutPage() {
  const contentDiv = document.querySelector('#content');
  const aboutPage = document.createElement('div');
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');
  const textContainer = document.createElement('div');
  const heading = document.createElement('h1');
  const subheading = document.createElement('h2');
  const storyText = document.createElement('p');
  const storySubtext = document.createElement('p');

  aboutPage.classList.add('about-page');
  imageContainer.classList.add('about-image');
  textContainer.classList.add('about-text');
  storySubtext.classList.add('sub-text');

  image.src = restaurantImage;
  image.alt = 'Empty table and chairs inside restaurant';
  image.width = '550';
  image.height = '700';

  heading.textContent = 'Our Story';
  subheading.textContent = 'Good mornings, start here.';
  storyText.textContent = 
    `Mr. Smith grew up on a small farm, with his dog Luce. When the family
    lost the farm, Mr. Smith left home with a suitcase, a few family recipes
    and his best friend Luce. He eventually found work washing dishes in a 
    small restaurant. Mr. Smith worked his way up from the dish pit to the 
    kitchen learning everything he could until, years later, he became a chef.
    When he finally open a restaurant of his own, there was only one name he 
    could give it.`;
  storySubtext.textContent = 'Luce';
  
  imageContainer.append(image);
  textContainer.append(heading, subheading, storyText, storySubtext);
  aboutPage.append(imageContainer, textContainer);
  contentDiv.append(aboutPage);
}
