import {apiUrl} from "../../config.js";
import {get_categories, get_products} from "../api/apiGET.js";
import {containerCards} from "../components/containerCards.js";
import {leftNavBar} from "../components/leftNavBar.js";
import { loading } from "../utils/utils.js";

export const indexView = async (state)=>{
    // <div id="main" class="d-sm-flex flex-sm-row flex-column">
    //         <div id="leftNav" class="border-end border-1">
    //         </div>
    //         <div id="productsContainer" class="p-1 bg-light"></div>
    //     </div>
    if (!document.querySelector('#main')){
        const main = document.createElement('div');
        main.classList.add('d-sm-flex', 'flex-sm-row', 'flex-column');
        main.innerHTML = `
            <div id="leftNav" class="border-end border-1"></div>
            <div id="productsContainer" class="p-1 bg-light"></div>
        `;
        document.querySelector('.container-fluid').insertBefore(main, document.querySelector('footer'));
    };
    
    var products = "";
    if (state){
        products = state;
    } else if (localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    } else {
        products = await get_products();
        localStorage.setItem('products', JSON.stringify(products));
    };
    loading('leftNav', leftNavBar);
    loading('productsContainer',containerCards, products);
    history.pushState({page: 'index', load: {tag: state ? state.load.tag : '', functionCall: state ? state.load.functionCall : '', args: state ? state.load.args : null}}, '');
};