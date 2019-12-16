import 'bootstrap';
import './scss/style.scss';
import * as c from './components/c';

// Change the current tab
const tabSelector = (tabId) => {
  const componentName = tabId.replace('-tab', '');
  document.getElementById('active-tab').innerHTML = c[componentName]();
};

const app = () => {
  // Include body partials
  document.body.appendChild(c.header());
  document.body.appendChild(c.main());
  document.body.appendChild(c.footer());

  // Add event listener to all items on the tabs nav
  document.querySelectorAll('.tab-link').forEach((el) => {
    el.addEventListener('click', (ev) => tabSelector(el.id));
  });
};

app();
