class MainContent extends HTMLElement {
     
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    set restaurant(restaurant){
        this._restaurant = restaurant;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            .odd {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: auto;
                justify-items: center;
                align-items: center;
                padding: 30px;
            }
            
            .odd-figure {
                width: 80%;
            }
            
            .odd-figure img {
                width: 100%;
                border: white 5px solid;
                box-shadow: 5px 5px 10px #aaaaaa;
                transition: 0.6s;
            }
            
            .odd-figure img:hover {
                transform: rotate(-5deg);
            }
            
            .odd-content { 
                width: 100%;
                text-align: right;
            }
            
            .odd-title {
                font-family: 'Nanum Gothic', sans-serif;
                font-size: 32px;    
                font-weight: bold;
                margin: 0;
            }
            
            .odd-description {
                font-size: 18px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                margin: 0;
            }
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
                .odd {
                    grid-template-columns: 1fr 1fr;
                    margin: 50px;
                }
                .odd-figure {
                    width: 100%;
                }
                .odd-title {
                    font-size: 36px; 
                }
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
                .odd-figure {
                    width: 70%;
                }
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
            <section class="content">
                <article class="odd">
                    <figure class="odd-figure">
                        <img src="${this._restaurant.pictureId}" alt="Dicoding Fact Sheet">
                    </figure>
                    <div class="odd-content">
                        <h1 class="odd-title">${this._restaurant.name}</h1>
                        <div class="review">
                            <p>${this._restaurant.city}</p>
                            <p>${this._restaurant.rating}</p>
                            <div class="rating" style="--nilai: 0.${this._restaurant.rating.replace('.','')};">
                                <div class="ratings">
                                    <div class="rating__blank"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                                    </div>
                                    <div class="rating__people"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="odd-description">${this._restaurant.description} </p>
                        <button class="button" style="box-shadow: 3px 3px 1px #aaaaaa;">Read More</button>
                    </div>
                </article>
                <article class="even">
                    <figure class="even-figure">
                        <img src="https://dicoding-restaurant-api.el.r.appspot.com/images/medium/07" alt="Dicoding Fact Sheet">
                    </figure>
                    <div class="even-content">
                        <h1 class="even-title">Bring Your Phone Cafe</h1>
                        <p class="even-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
                            facere nostrum officiis qui quidem ratione similique, soluta veniam voluptatum. </p>
                        <button class="button">Read More</button>
                    </div>
                </article>
            </section>
        `;
    }
 }
  
 customElements.define("main-content", MainContent);