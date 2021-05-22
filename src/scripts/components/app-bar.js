class AppBar extends HTMLElement {
     
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
            
        window.addEventListener("scroll", ()=>{
            this.classList.toggle("sticky", window.scrollY>200);
        });

        const menu = this.shadowDOM.querySelector("#menu");
        const hero = document.querySelector('hero-element');
        const main = document.querySelector('main');
        const drawer = this.shadowDOM.querySelector('#navigation');
        
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
        this.shadowDOM.innerHTML = `
        <style>
        :host(.sticky) {
            background: #f7f2ed;
            box-shadow: 0 1px 5px grey;
        }
        :host(.sticky) .logo img {
            width: 70px;
        }
        :host(.sticky) .menu {
            color: #2d2d28;
            font-size: 32px;
            margin: 0 20px;
        }
        :host{
            display: block;
            z-index: 10;
            position: fixed;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: 0.6s;
        }
        .logo img {
            width: 100px;
            transition: 0.6s;
            margin: 0 10px;
        }
        .menu {
            display: block;
            color: #f7f2ed;
            font-size: 36px;
            text-decoration: none;
            margin: 0 30px;
        }
        .navbar {
            width: 100%;
        }
        .nav {
            width: 100%;
            padding: 0;
            margin: 0;
        }
        .nav-item {
            display: inline-block;
            list-style: none;
            box-sizing: border-box;
            text-align: center;
            line-height: 24px;
            padding: 9px;
        }
        .nav-link {
            position: relative;
            text-decoration: none;
            margin: 0 20px;
            color: #2d2d28 ;
            letter-spacing: 1px;
            font-size: 20px;
            transition: 0.6s;
        }
        @media screen and (max-width: 699px) {  
            .navbar {
                display: none;
                z-index: 10;
                background-color: #f7f2ed;
                max-height: 0;
                position: absolute;
                transition: max-height 2s ease;
                overflow: hidden;
            }
            .open {
                display: block;
                max-height: 135px;
                transform: translate(0, 100px);
                transition: max-height 2s ease;
                box-shadow: 1px 1px 3px grey;
            }
            .nav-item {
                display: list-item;
                border-bottom: 1px solid #E0E0E0;
                width: 100%;
            }
            :host(.header) {
                background-color: #f7f2ed;
            }
            :host(.header) .menu {
                color: #2d2d28;
            }
        }
        @media screen and (min-width: 700px) {
            :host(.sticky) .logo img {
                width: 80px;
            }
            :host(.sticky) .navbar .nav .nav-item .nav-link {
                color: #2d2d28;
            }
            :host(.sticky) .navbar .nav .nav-item .nav-link:hover {
                color: #ff9e16;
            }
            :host(.sticky) nav ul li a:after {
                background-color: #ff9e16;
            }
            :host(.sticky)  nav ul li a:hover {
                color: #ff9e16;
            }
            :host(.sticky) nav ul li a:hover:after {
                background-color: #ff9e16; 
            }
            .menu {
                display: none;
            }
            .logo img {
                width: 120px;
                transition: 0.6s;
                margin: 0 30px;
            }
            .navbar {
                text-align: right;
            }
            .navbar {
                color: #f7f2ed;
            }
            .nav-link {
                color: #f7f2ed;
            }
            .nav-link:hover {
                color: #ff9e16; 
            }
            .nav-link:after {
                content: '';
                position: absolute;
                width: 100%;
                transform: scaleX(0);
                height: 2px;
                bottom: -5px;
                left: 0px;
                color: #ff9e16; 
                background-color: #ff9e16 ;
                transform-origin: bottom right;
                transition: transform 0.25s ease-out;
            }
            .nav-link:hover:after {
                transform: scaleX(1);
                transform-origin: bottom left;
            }
        }
        </style>

        <a href="#" class="logo"><img  src="./images/logo/logo.png" alt="Logo Peto"></a>
        <a href="#" id="menu" class="menu">☰</a>
        <nav id="navigation" class="navbar">
            <ul class="nav">
                <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Favorite</a></li>
                <li class="nav-item"><a href="#" class="nav-link">About Us</a></li>
            </ul>
        </nav>
        `;
    }
 }
  
 customElements.define("app-bar", AppBar);