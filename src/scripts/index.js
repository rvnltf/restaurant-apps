import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import './components/app-bar';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#navigation'),
  content: document.querySelector('main'),
  appBar: document.querySelector('app-bar'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
