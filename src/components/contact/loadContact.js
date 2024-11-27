import createElement from "../../createElement.js";
import './contact.css';

function createFormInput(type, id, rows, cols) {
  if (type === 'textarea') {
    return createElement(
      'textarea',
      { type, id, for: id, rows, cols }
    );
  };

  if (type === 'submit') {
    return createElement(
      'button',
      { type },
      'Send message'
    );
  };

  return createElement(
    'input',
    { type, id, for: id }
  );
}

function createFormRow(labelText, inputType, inputId, rows, cols) {
  if (!labelText && inputType === 'submit') {
    return createElement(
      'div',
      { class: 'form-row' },
      createFormInput(inputType)
    );
  };

  return createElement(
    'div',
    { class: 'form-row' },
    createElement('label', { for: inputId }, labelText),
    createFormInput(inputType, inputId, rows, cols),
  );
}

export default function loadContact() {
  const header = createElement(
    'div',
    { class: 'header' },
    createElement('h1', {}, 'Contact Us'),
    createElement('p', {}, "We'd love to hear from you!"),
  );

  const infoSection = createElement(
    'div',
    { class: 'info-section' },
    createElement('h2', {}, 'Get in Touch'),
    createElement('p', {}, 'Address: 123 Coffee Street, Bean City CO'),
    createElement('p', {}, 'Email: hello@reveriecafe.com'),
    createElement('p', {}, 'Phone: (123) 456-7890'),
  );

  const form = createElement(
    'form',
    { action: '#' },
    createElement('h2', {}, 'Send Us a Message'),
    createFormRow('Name', 'text', 'name'),
    createFormRow('Email Address', 'email', 'email'),
    createFormRow('Message', 'textarea', 'message', 5, 30),
    createFormRow('', 'submit')
  );

  const contactSection = createElement(
    'div',
    { class: 'contact-section' },
    infoSection,
    form
  );

  document.querySelector('#content').append(header, contactSection);
}