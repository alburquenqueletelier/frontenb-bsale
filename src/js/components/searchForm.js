import { get_products } from "../api/apiGET.js";
import { loading } from "../utils/utils.js";
import { containerCards } from "./containerCards.js";

export const searchForm = ()=>{
    
    const form = document.createElement('form');
    form.classList.add('d-flex', 'justify-content-center');
    form.innerHTML = `
        <div class="form-floating">
            <input type="text" id="floatingInput" class="form-control" placeholder="Busca por nombre" style="width:16rem"/>
            <label for="floatingInput">Nombre producto</label>
        </div>
        <button type="submit" class="btn"><img class="icon-carro" src="https://cdn-icons-png.flaticon.com/512/639/639375.png" alt="lupa" /> </button>
    `;
    form.onsubmit = async(event)=>{
        event.preventDefault();
        let search = event.target[0].value;
        let autocomplete = JSON.parse(localStorage.getItem('searchAutocomplete'));
        console.log(search);
        // const products = await get_products({search: search, by: 'name'});
        var products = autocomplete.filter(prod=>prod.name.toUpperCase().includes(search.toUpperCase()));
        // var products = JSON.parse(localStorage.getItem('searchAutocomplete')).filter(name=>name.toUpperCase().includes(search.toUpperCase));
        console.log(products);
        if(products.length > 0){
            loading('productsContainer',containerCards, products);
        } else {
            console.log('no se encontro el producto');
        }
    }
    return form;
};