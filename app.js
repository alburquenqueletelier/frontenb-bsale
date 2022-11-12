import {indexView} from "./src/js/views/index.js";
import {cartView} from "./src/js/views/cart.js";
import { get_products } from "./src/js/api/apiGET.js";

 document.addEventListener('DOMContentLoaded', async ()=>{
    if (history.state){
        const {page, load} = history.state;
        const {tag, functionCall, args} = load;
        if (page == 'index') indexView(args);
        if (page == 'cart') cartView();
    } else {
        indexView();
        history.pushState({page: 'index', load: {tag: 'productsContainer', functionCall: 'containerCards'}}, '');
    }
    if (!localStorage.getItem('searchAutocomplete')){
        let searchAutocomplete = await get_products();
        localStorage.setItem('searchAutocomplete', JSON.stringify(searchAutocomplete));
    };
});

window.onpopstate = (event) => {
    const {page, load} = event.state;
    const {tag, functionCall, args} = load;
    if (page == 'index') {
        indexView(args);
    }
    if (page == 'cart') cartView();
};