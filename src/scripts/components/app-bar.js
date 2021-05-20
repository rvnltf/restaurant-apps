class AppBar extends HTMLElement {
     
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <style>
        header {
            display: block;
            z-index: 10;
            position: fixed;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: 0.6s;
        }
        
        header.sticky {
            background: #f7f2ed;
        }
        
        header .logo img {
            width: 100px;
            transition: 0.6s;
            margin: 0 10px;
        }
        
        header.sticky .logo img {
            width: 70px;
        }
        
        .menu {
            display: block;
            color: #f7f2ed;
            font-size: 36px;
            text-decoration: none;
            margin: 0 30px;
        }
        
        header.sticky .menu {
            color: #2d2d28;
            font-size: 32px;
            margin: 0 20px;
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
        </style>

        <header>
            <a href="#" class="logo"><img  src="./images/logo/logo.png" alt="Logo Peto"></a>
            <a href="#" id="menu" class="menu">☰</a>
            <nav id="navigation" class="navbar">
                <ul class="nav">
                    <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Favorite</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">About Us</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
 }
  
 customElements.define("app-bar", AppBar);