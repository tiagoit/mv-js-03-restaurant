import 'bootstrap';
import './scss/style.scss';
import * as c from './components/c';

// Change the current route
const router = (route) => {
  document.querySelector('router-outlet').innerHTML = '';
  document.querySelector('router-outlet').appendChild(c[route]());
};

const app = () => {
  document.body.appendChild(c.header());
  document.body.appendChild(document.createElement('router-outlet'));
  document.body.appendChild(c.footer());
  router('home');

  // Add event listener to all items on the tabs nav
  document.querySelectorAll('.tab-link').forEach((el) => {
    el.addEventListener('click', (ev) => router(el.id.replace('-tab', '')));
  });
};

app();
