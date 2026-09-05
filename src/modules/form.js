export class Form {
  #fields = [];

  addField({label, element, ...inputAttributes}) {
    this.#fields.push({ label, element, ...inputAttributes });
  }

  getFields() {
    return [...this.#fields];
  }
}

function createFormGroup(labelText, element, inputAttributes = {}) {
  const formGroup = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement(element);

  Object.entries(inputAttributes).forEach(([key, value]) => {
    input.setAttribute(key, value);
  });

  formGroup.classList.add('form-group');

  label.htmlFor = input.id;
  label.textContent = labelText;

  formGroup.append(label, input);
  return formGroup;
}

export function createForm(className, formFields = []) {
  const form = document.createElement('form');
  const submitGroup = document.createElement('div');
  const submitBtn = document.createElement('button');

  form.action = '#';
  form.method = 'get';
  submitBtn.type = 'submit';
  
  form.classList.add(className);
  submitGroup.classList.add('form-group');

  submitBtn.textContent = 'Send Message';

  formFields.forEach((field) => {
    const { label, element, ...inputAttributes } = field;
    const formGroup = createFormGroup(label, element, inputAttributes);
    form.append(formGroup);
  });

  submitGroup.append(submitBtn);
  form.append(submitGroup);
  return form;
}
