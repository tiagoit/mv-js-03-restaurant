const footer = () => {
  const el = document.createElement('footer');
  el.class = 'text-muted';
  el.innerHTML = `
    <div class="container">
      <p class="float-right"><a href="#">Back to top</a></p>
      <p>Nice Restaurant Single Page Aplication</p>
    </div>
  `;
  return el;
};

export default footer;
