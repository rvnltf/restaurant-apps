import CONFIG from "../globals/config";

class evenItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const rating = this._restaurant.rating.toString();
    this.innerHTML = `
            <style>
            .review {
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }
            .review p {
                padding: 0 2px;
                color: gray;
                font-size: 13px;
            }
            .rating {
                display: inline-block;
                overflow: hidden;
                position: relative;
                vertical-align: middle;
            }
            .ratings {
                position: relative;
            }
            .rating .star {
                box-sizing: border-box;
                font-family: FontAwesome;
                font-size: 14px;
                margin: 0 -.1em;
                position: relative;
            }
            .rating .star:before, .rating .star:after {
                display: inline-block;
                padding: .05em .15em;
                vertical-align: top;
                transition: all .25s;
            }
            .rating .star:before {
                content: "\\f005";
                position: relative;
            }
            .rating__blank, .rating__people, .rating__you {
                box-sizing: border-box;
                white-space: nowrap;
                transition: all 1s;
            }
            .rating__people, .rating__you {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
            }
            .rating__blank .star:before {
                color: #ddd;
            }
            .rating__blank .star:after {
                color: #0003;
            }
            .rating__people {
                width: calc(100% * (var(--nilai)*2));
                overflow: hidden;
            }
            .rating__people .star:before {
                color: #ffbf00;
            }
            .rating__people .star:after {
                color: #0003;
            }
            .button {
                min-width: 44px;
                min-height: 44px;
                font-family: 'Nanum Gothic', sans-serif;
                font-weight: bold;
                text-transform: uppercase;
                margin-top: 32px;
                cursor: pointer;
                padding: 13px 25px;
                color: #2d2d28;
                border: 2px solid #2d2d28 ;
                background-color: #f7f2ed;
                border-radius: 8px;
                transition: 0.6s;
            }
            .button:hover {
                background-color: #ff9e16;
            }
            .even {
                width: 100%;
                position: relative;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: auto;
                grid-auto-flow: dense;
                overflow: hidden;
            }
            
            .even-figure {
                opacity: 1;
                display: block;
                transition: 0.6s ease;
                backface-visibility: hidden;
                grid-column: 2;
                position: relative;
                margin: 0;
            }
            
            .even-figure img {
                width: 120%;
            }
            
            .even-content { 
                transition: 0.6s ease;
                opacity: 0;
                position: absolute;
                padding: 20px;
                grid-column: 1;
            }
            
            .even:hover .even-content{
                height: auto;
                opacity: 1;
                background-color: rgba(45, 45, 40, 0.5);
            }
            
            .even-title {
                font-family: 'Nanum Gothic', sans-serif;
                font-size: 32px;
                font-weight: bold;
                color: #f7f2ed;
            }
            
            .even-description {
                font-size: 18px;
                margin-top: 12px;
                color: #f7f2ed;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
            }
            
            @media screen and (min-width: 500px) {
                .even {
                    max-height: 300px;
                    grid-template-columns: 1fr 1fr;
                }
                .even-figure img {
                    width: 150%;
                }
                .even-title {
                    font-size: 36px; 
                }
                .even-content {
                    opacity: 1;
                    position: relative;
                    background-color: #2d2d28;
                    padding: 50px;
                }
                .event-description {
                    overflow: visible;
                }
                .even:hover .even-content{
                    background-color: #2d2d28;
                }
            }
            
            @media screen and (min-width: 700px) {
                .even-figure img {
                    width: 120%;
                }
                .review p {
                    font-size: 14px;
                }
                .rating .star {
                    font-size: 16px;
                }
            }
            </style>
                <article class="even">
                    <figure class="even-figure">
                        <img src="${CONFIG.BASE_IMAGE_URL_SMALL + this._restaurant.pictureId}" alt="Picture of ${this._restaurant.city}">
                    </figure>
                    <div class="even-content">
                        <h1 class="even-title">${this._restaurant.name}</h1>
                        <div class="review">
                            <p>${this._restaurant.city}</p>
                            <p>${rating}</p>
                            <div class="rating" style="--nilai: 0.${rating.replace('.', '')};">
                                <div class="ratings">
                                    <div class="rating__blank"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                                    </div>
                                    <div class="rating__people"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="even-description">${this._restaurant.description}</p>
                        <button class="button" aria-label="read more">Read More</button>
                    </div>
                </article>
        `;
  }
}

customElements.define('even-item', evenItem);
