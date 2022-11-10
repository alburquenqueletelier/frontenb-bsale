import {apiUrl} from "../../config.js";
import {get_categories, get_products} from "../api/apiGET.js";
import {containerCards} from "../components/containerCards.js";
import {leftNavBar} from "../components/leftNavBar.js";
import { loading } from "../utils/utils.js";

export const indexView = async ()=>{
// document.addEventListener('DOMContentLoaded', async ()=>{
loading('leftNav', leftNavBar);
// const menu = document.querySelector('#left');
// const lista = leftNavBar();
// menu.appendChild(lista);

var products = "";
if (localStorage.getItem('products')){
    products = JSON.parse(localStorage.getItem('products'));
} else {
    products = await get_products();
    localStorage.setItem('products', JSON.stringify(products));
};
loading('productsContainer',containerCards, products);
// const showProducts = containerCards(products); 
// productsContainer.innerHTML = '';
// productsContainer.appendChild(showProducts);
// });
};