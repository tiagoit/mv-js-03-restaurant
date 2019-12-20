import Banner from '../assets/mexican-food.jpg';

const home = () => {
  const el = document.createElement('header');
  el.innerHTML = `
    <section class="jumbotron text-center">
      <div class="container">
        <img src="${Banner}" alt="mexican food">
        <h1>Amazing Restaurant</h1>
        <p class="lead text-muted">Mexican cuisine has several influences at play. Asian legacies from 15,000 years ago, indigenous Aztec and Mayan and Zapotec and Nahuatl, Spanish, of course, then another wave of modern Asians, many Jews, many Arabs — kicked out of Spain by Ferdinand and Isabella — and then odd diaspora, such as Lebanese.</p>
      </div>
    </section>
    <div class="container" id="active-tab"></div>
  `;
  return el;
};

export default home;
