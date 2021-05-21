class MainContent extends HTMLElement {
     
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <section class="content">
                <article class="odd">
                    <figure class="odd-figure">
                        <img src="https://dicoding-restaurant-api.el.r.appspot.com/images/medium/41" alt="Dicoding Fact Sheet">
                    </figure>
                    <div class="odd-content">
                        <h1 class="odd-title">Bring Your Phone Cafe</h1>
                        <div class="review">
                            <p>Medan</p>
                            <p>4.3</p>
                            <div class="rating" style="--nilai: 0.42;">
                                <div class="ratings">
                                    <div class="rating__blank"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                                    </div>
                                    <div class="rating__people"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="odd-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
                            facere nostrum officiis qui quidem ratione similique, soluta veniam voluptatum. </p>
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