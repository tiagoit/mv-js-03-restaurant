import 'bootstrap';
import './scss/style.scss';

// import { header } from './components/header';
// import { main } from './components/main';
// import { footer } from './components/footer';
// import { header, main, footer } from './components/c';
import * as c from './components/c';

function app() {
  // const element = document.createElement('div');
  // element.id = 'content';
  // element.innerHTML = 'Hello webpack 2';
  // return element;
  document.body.appendChild(c.header());
  document.body.appendChild(c.main());
  document.body.appendChild(c.footer());
}

app();
