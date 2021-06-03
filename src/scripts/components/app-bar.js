class AppBar extends HTMLElement {
     
    constructor() {
        super();
    }
  
    connectedCallback(){
        this.render();
            
        window.addEventListener("scroll", ()=>{
            this.classList.toggle("sticky", window.scrollY>200);
        });

        const menu = this.querySelector("#menu");
        const hero = document.querySelector('hero-element');
        const main = document.querySelector('main');
        const drawer = this.querySelector('#navigation');
        
        menu.addEventListener('click', event => {
            drawer.classList.toggle('open');
            this.classList.toggle('header');
            event.stopPropagation();
        });
        
        hero.addEventListener('click', () => {
            drawer.classList.remove('open');
            this.classList.remove('header');
        });
        
        main.addEventListener('click', () => {
            drawer.classList.remove('open');
            this.classList.remove('header');
        });
    }
    render() {
        this.innerHTML = `
        
        <a href="/" class="logo"><img  src="./images/logo/logo.png" alt="Logo Peto"></a>
        <a href="#" id="menu" class="menu" aria-label="navigation-menu">☰</a>
        <nav id="navigation" class="navbar">
            <ul class="nav">
                <li class="nav-item"><a href="" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Favorite</a></li>
                <li class="nav-item"><a href="https://www.linkedin.com/in/rvnltf/" class="nav-link" target="_blank">About Us</a></li>
            </ul>
        </nav>
        `;
    }
 }
  
 customElements.define("app-bar", AppBar);