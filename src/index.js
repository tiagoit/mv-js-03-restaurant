import 'bootstrap';
import './scss/style.scss';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello webpack 2';

  return element;
}

document.body.appendChild(component());
