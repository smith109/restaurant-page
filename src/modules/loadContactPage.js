import { Form, createForm } from './form.js';

const contactForm = new Form();

export function loadContactPage() {
  const contentDiv = document.querySelector('#content');
  const contactPage = document.createElement('div');
  const imageContainer = document.createElement('div');
  const formContainer = document.createElement('div');
  const heading = document.createElement('h1');
  const subheading = document.createElement('h2');
  const subtext = document.createElement('p');
  const form = createForm('contact-form', contactForm.getFields());

  contactPage.classList.add('contact-page');
  imageContainer.classList.add('contact-image');
  formContainer.classList.add('form-container');

  heading.textContent = 'Contact';
  subheading.textContent = "Let's Talk";
  subtext.textContent = 
    `Have a question, planning a visit or need catering for an event?
     We will help point you in the right direction.`;

  formContainer.append(heading, subheading, subtext, form);
  contactPage.append(imageContainer, formContainer);
  contentDiv.append(contactPage);
}

contactForm.addField({
  label: 'Name',
  element: 'input',
  type: 'text',
  id: 'name',
  name: 'name',
  placeholder: 'Enter your name',
  autocomplete: 'name',
  required: true
});

contactForm.addField({
  label: 'Email',
  element: 'input',
  type: 'email',
  id: 'email',
  name: 'email',
  placeholder: 'you@email.com',
  autocomplete: 'email',
  required: true
});

contactForm.addField({
  label: 'Subject',
  element: 'input',
  type: 'text',
  id: 'subject',
  name: 'subject',
  placeholder: 'How can we help?',
  autocomplete: 'off',
  required: true
});

contactForm.addField({
  label: 'Message',
  element: 'textarea',
  id: 'message',
  name: 'message',
  rows: '5',
  placeholder: 'ok, tell us a little more...',
  autocomplete: 'off',
  required: true
});
