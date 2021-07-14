// import foto from '../../public/images/heros/hero-image_4.jpg';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        .jumbotron {
            display: flex;
            align-items: center;
            min-height: 500px;
            width: 100%;
            padding: 30px;
            background-image: url("./images/heros/hero-image_4-small.jpg");
            background-repeat:no-repeat;
            background-position: center;
            background-size: cover;
            color: #f7f2ed;
            transition: 0.6s;
        }
        .hero {
            max-width: 500px;
            padding: 20px;
        }
        .hero-title {
            color: #f7f2ed;
            font-weight: 500;
            font-size: 46px;
            transition: 0.6s;
        }
        
        .hero-tagline {
            color: #f7f2ed;
            margin-top: 10px;
            line-height: 25px;
        }
        @media screen and (min-width: 500px) {
            .hero-title {
                font-size: 60px;
            }
            .hero-tagline {
                font-size: 18px;
            }
        }
        @media screen and (min-width: 700px) {
            .jumbotron{
                background-image: url("./images/heros/hero-image_4-large.jpg");
            }
            .hero {
                max-width: 900px;
                padding: 40px;
            }
            :host {
                min-height: 500px;
            }
            .hero-title {
                font-size: 72px;
            }
            .hero-tagline {
                font-size: 22px;
            }
        }
        </style>
        <div class="jumbotron">
            <div class="hero">
                <h1 class="hero-title">Savory dish to share</h1>
                <p class="hero-tagline">In this way such herbs may be had throughout the season with almost the full flavour of the fresh herb.</p>
            </div>
        </div>
        `;
  }
}

customElements.define('hero-element', HeroElement);
