import dishes from '../data/menu.json';
import makeDihesMarkup from '../templates/dish.hbs';

const listMenu = document.querySelector('.js-menu');

listMenu.innerHTML = makeDihesMarkup(dishes);
