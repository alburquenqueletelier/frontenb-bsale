import {apiUrl} from "./src/config.js";
import {get_categories, get_products} from "./src/js/api/apiGET.js";
import {main} from "./src/js/views/main.js";
import {leftNavBar} from "./src/js/components/leftNavBar.js";


document.addEventListener('DOMContentLoaded', async ()=>{

    const menu = document.querySelector('#left');
    const lista = leftNavBar();
    menu.appendChild(lista);
    var products = "";
    if (localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    } else {
        products = await get_products();
        localStorage.setItem('products', JSON.stringify(products));
    }
    const showProducts = main(products); 
    document.querySelector('#body').appendChild(showProducts);
});