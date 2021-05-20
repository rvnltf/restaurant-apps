import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './components/app-bar.js';

console.log('Hello Coders! :)');

window.addEventListener("scroll", ()=>{
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0);
})

const menu = document.querySelector('#menu');
const hero = document.querySelector('.jumbotron');
const header = document.querySelector('header');
const main = document.querySelector('main');
const drawer = document.querySelector('#navigation');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    header.classList.toggle('header');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
    header.classList.remove('header');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
    header.classList.remove('header');
});