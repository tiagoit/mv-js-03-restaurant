const header = () => {
  const el = document.createElement('header');
  el.innerHTML = `
    <div class="collapse bg-dark" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-white">About</h4>
            <p class="text-muted">Nice restaurant: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio impedit commodi dignissimos architecto pariatur totam vero? Quis, ab est fugiat aliquam aut ad at veritatis quisquam? Dolore, soluta ab.</p>
          </div>
          <div class="col-sm-4 offset-md-1 py-4">
            <h4 class="text-white">Contact</h4>
            <ul class="list-unstyled">
              <li><a href="#" class="text-white">Follow on Twitter</a></li>
              <li><a href="#" class="text-white">Like on Facebook</a></li>
              <li><a href="#" class="text-white">Email me</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar navbar-dark bg-dark shadow-sm mb-2">
      <div class="container d-flex justify-content-between">
        <a href="#" class="navbar-brand d-flex align-items-center">
          <strong>Restaurant Page</strong>
        </a>
        <a href="#" class="btn btn-light my-2 tab-link" id="home-tab">Home</a>  
        <a href="#" class="btn btn-light my-2 tab-link" id="menu-tab">Menu</a>
        <a href="#" class="btn btn-light my-2 tab-link" id="contact-tab">Contact</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  `;
  return el;
};

export default header;
