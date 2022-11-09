import {apiUrl} from "./src/config.js";
import {get_categories, get_products} from "./src/js/api/apiGET.js";
import {main} from "./src/js/views/main.js";

document.addEventListener('DOMContentLoaded', async ()=>{

    const menu = document.querySelector('#left');
    const lista = document.createElement('ul');
    lista.classList.add('list-group');
    const allProducts = document.createElement('li');
    allProducts.classList.add('list-group-item', 'search-category');
    allProducts.innerText = 'Todos';
    allProducts.onclick = async () => {
        let data = await get_products();
        console.log(data.slice(0,10));
    }
    lista.appendChild(allProducts);
    const data = await get_categories();
    
    data.forEach(element=>{
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'search-category');
        listItem.innerText = element.name;
        listItem.onclick = async () => {
            const data = await get_products({search: element.id, by: "category"});
            console.log(data);
        }
        lista.appendChild(listItem);
    })
    menu.appendChild(lista);

    const products = await get_products(5);
    const prueba = document.createElement('ul');
    let largo = products.length > 10 ? 10 : products.length;
    for (let i=0; i<largo; i++){
        const listaPrueba = document.createElement('li');
        listaPrueba.innerText = products[i].name;
        prueba.appendChild(listaPrueba);
    }
    document.querySelector('#body').appendChild(prueba);
    
});