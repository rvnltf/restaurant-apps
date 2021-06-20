class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        
        <a href="/" class="logo"><img  src="./images/logo/logo.png" alt="Logo Peto"></a>
        <button id="menu" class="menu" aria-label="navigation-menu">☰</button>
        <nav id="navigation" class="navbar">
            <ul class="nav">
                <li class="nav-item"><a href="#/home" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="#/favorite" class="nav-link">Favorite</a></li>
                <li class="nav-item"><a href="https://www.linkedin.com/in/rvnltf/" class="nav-link" target="_blank">About Us</a></li>
            </ul>
        </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
