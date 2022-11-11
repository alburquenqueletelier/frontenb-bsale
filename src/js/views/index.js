import {apiUrl} from "../../config.js";
import {get_categories, get_products} from "../api/apiGET.js";
import {containerCards} from "../components/containerCards.js";
import {leftNavBar} from "../components/leftNavBar.js";
import { loading } from "../utils/utils.js";

export const indexView = async (state)=>{
// document.addEventListener('DOMContentLoaded', async ()=>{
loading('leftNav', leftNavBar);
// const menu = document.querySelector('#left');
// const lista = leftNavBar();
// menu.appendChild(lista);

var products = "";
if (state){
    products = state;
    // const {page, load} = state;
    // const {tag, functionCall, args} = load;
} else if (localStorage.getItem('products')){
    products = JSON.parse(localStorage.getItem('products'));
} else {
    products = await get_products();
    localStorage.setItem('products', JSON.stringify(products));
};
loading('productsContainer',containerCards, products);
history.pushState({page: 'index', load: {tag: state ? state.load.tag : '', functionCall: state ? state.load.functionCall : '', args: state ? state.load.args : null}}, '');
// const showProducts = containerCards(products); 
// productsContainer.innerHTML = '';
// productsContainer.appendChild(showProducts);
// });
};