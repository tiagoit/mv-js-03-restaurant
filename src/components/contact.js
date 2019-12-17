const contact = () => {
  const el = document.createElement('main');
  el.innerHTML = `
    <section class="form">
      <div class="container">
        <div class="row" id="contact">
          <div class="col">
            <form>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com">
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" rows="3"></textarea>
              </div>
              <input type="submit" value="Send" class="btn btn-primary">
            </form>
          </div>
        </div>
      </div>
    </section>`;
  return el;
};

export default contact;
