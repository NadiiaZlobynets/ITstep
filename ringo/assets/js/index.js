import menu from "./component/menu.js";
import garbage from './component/garbage.js';
import slider from "./component/slider.js";

function menuOnClick () {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
}

document.addEventListener('DOMContentLoaded', () => {
    menu();
    garbage();
    slider();
});