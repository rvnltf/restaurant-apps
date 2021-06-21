import CONFIG from '../globals/config';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .parallax {
        display:block;
        background-image: url("${CONFIG.BASE_IMAGE_URL_LARGE + this._restaurant.pictureId}");
        width: 100%;
        height: 100%;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .caption {
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      text-align: center;
      color: #000;
    }
    </style>
    <div class="parallax">
      <div class="caption">
        <span class="border">SCROLL DOWN</span>
      </div>
    </div>
    <div style="color: #777;background-color:white;text-align:center;padding:50px 80px;text-align: justify;">
    <h3 style="text-align:center;">Parallax Demo</h3>
    <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
  </div>
  <div class="parallax">
    <div class="caption">
      <span class="border">SCROLL DOWN</span>
    </div>
  </div>
    
        `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
