import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './components/app-bar.js';
import './components/hero-element.js';
import './components/main-content.js';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.querySelector('main-content');
  mainContent.restaurant = data;
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
console.log('Hello Coders! :)');
