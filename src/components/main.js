import Banner from '../assets/mexican-food.jpg';

export const main = () => {
  const el = document.createElement('main');
  el.role = 'main';
  el.innerHTML = `
    <section class="jumbotron text-center">
      <div class="container">
        <img src="${Banner}" alt="mexican food">
        <h1>Amazing Restaurant</h1>
        <p class="lead text-muted">Mexican cuisine has several influences at play. Asian legacies from 15,000 years ago, indigenous Aztec and Mayan and Zapotec and Nahuatl, Spanish, of course, then another wave of modern Asians, many Jews, many Arabs — kicked out of Spain by Ferdinand and Isabella — and then odd diaspora, such as Lebanese getting squeezed by the Brits, Ottomans, and Arabs in The Great War, who brought them tacos al pastor, once Mexicans changed the shawarma technique from lamb to pork. So they have a truly multi-cultural culinary heritage.</p>
        <p>
          <a href="#" class="btn btn-primary my-2">Main call to action</a>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </section>
  `;
  return el;
};
