import CONFIG from '../globals/config';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <ul id="cards">
		<li class="card" id="card_1">
			<div class="card__content">
				<div>
					<h2>Card One</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p><a href="#top" class="btn btn--accent">Read more</a></p>
				</div>
				<figure>
					<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg" alt="Image description">
				</figure>
			</div>
		</li>
		<li class="card" id="card_2">
			<div class="card__content">
				<div>
					<h2>Card Two</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p><a href="#top" class="btn btn--accent">Read more</a></p>
				</div>
				<figure>
					<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg" alt="Image description">
				</figure>
			</div>
		</li>
		<li class="card" id="card_3">
			<div class="card__content">
				<div>
					<h2>Card Three</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p><a href="#top" class="btn btn--accent">Read more</a></p>
				</div>
				<figure>
					<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg" alt="Image description">
				</figure>
			</div>
		</li>
		<li class="card" id="card_4">
			<div class="card__content">
				<div>
					<h2>Card Four</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p><a href="#top" class="btn btn--accent">Read more</a></p>
				</div>
				<figure>
					<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg" alt="Image description">
				</figure>
			</div>
		</li>
	</ul>
        `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
