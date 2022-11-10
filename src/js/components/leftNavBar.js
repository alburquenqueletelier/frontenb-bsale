import { get_products, get_categories } from "../api/apiGET.js";
import { containerCards } from "./containerCards.js";

export const leftNavBar = ()=>{
    const collapse = document.createElement('nav');
    collapse.classList.add('navbar', 'navbar-expand-sm', 'sticky-top', 'mx-2');

    collapse.innerHTML = `
    <button class="navbar-toggler mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
    `;

    const lista = document.createElement('ul');
    lista.classList.add('navbar-nav', 'flex-column', 'my-auto', 'list-group');
    const allProducts = document.createElement('li');
    allProducts.classList.add('nav-item', 'list-group-item', 'search-category'); //
    allProducts.innerText = 'Todos';
    allProducts.onclick = async () => {
        const productsContainer = document.querySelector('#productsContainer');
        productsContainer.innerHTML = "";
        let data = JSON.parse(localStorage.getItem('products')) || await get_products();
        const showProducts = containerCards(data);
        productsContainer.appendChild(showProducts);
    }
    lista.appendChild(allProducts);

    var categories = "";
    if (localStorage.getItem('categories')){
        categories = JSON.parse(localStorage.getItem('categories'));
    } else {
        categories = get_categories();
        localStorage.setItem('categories', JSON.stringify(categories));
    }
    
    categories.forEach(element=>{
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'nav-item', 'search-category');
        listItem.innerText = element.name;
        listItem.onclick = async () => {
            const productsContainer = document.querySelector('#productsContainer');
            productsContainer.innerHTML = `
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            `;
            let data = JSON.parse(localStorage.getItem('products')) || await get_products({search: element.id, by: "category"});
            data = data.filter(product => product.category == element.id);
            const showProducts = containerCards(data);
            productsContainer.innerHTML = "";
            productsContainer.appendChild(showProducts);
            // const categories = await get_products({search: element.id, by: "category"});
            // console.log(categories);
            console.log('pase por lista= ', element.id);
        }
        lista.appendChild(listItem);
    })
    collapse.querySelector('div').appendChild(lista);
    return collapse;
};
