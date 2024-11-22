export default function createElement(tagName, attributes, ...children) {
  const element = document.createElement(tagName);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  };

  children.forEach(child => {
    if (typeof child === 'string') {
      element.textContent = child;
    } else {
      element.append(child);
    }
  });

  return element;
}