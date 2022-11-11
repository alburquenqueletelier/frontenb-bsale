import { get_products, get_categories } from "../api/apiGET.js";
import { loading } from "../utils/utils.js";
import { containerCards } from "./containerCards.js";

export const leftNavBar = async ()=>{
    const navBar = document.createElement('div');
    navBar.classList.add('m-1', 'pt-2', 'sticky-top');
    navBar.innerHTML = `
        <button type="button" class="btn d-flex m-auto" id="toCartView">
            <img src="https://cdn-icons-png.flaticon.com/512/3082/3082031.png" class="cart-icon" alt="Carro" />
        </button>
        <h4 class="text-center bg-white rounded pb-1" style="color: #000046">Categorias</h4>
    `;
    const collapse = document.createElement('nav');
    collapse.classList.add('navbar', 'navbar-expand-sm', 'mx-2', 'justify-content-center');

    collapse.innerHTML = `
    <button class="navbar-toggler mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
    `;

    const lista = document.createElement('ul');
    lista.classList.add('navbar-nav', 'flex-column', 'list-group');
    const allProducts = document.createElement('li');
    allProducts.classList.add('nav-item', 'list-group-item', 'search-category'); //
    allProducts.innerText = 'Todos';
    allProducts.onclick = async () => {
        const url = new URL(window.location);
        let data = JSON.parse(localStorage.getItem('products')) || await get_products();
        loading('productsContainer', containerCards, data);
        history.pushState({page: 'index', load: {tag:'productsContainer', functionCall: 'containerCards', args: data}}, '');
        // const productsContainer = document.querySelector('#productsContainer');
        // productsContainer.innerHTML = "";
        // const showProducts = containerCards(data);
        // productsContainer.appendChild(showProducts);
    }
    lista.appendChild(allProducts);

    var categories = "";
    if (localStorage.getItem('categories')){
        categories = JSON.parse(localStorage.getItem('categories'));
    } else {
        categories = await get_categories();
        localStorage.setItem('categories', JSON.stringify(categories));
    }
    
    categories.forEach(element=>{
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'nav-item', 'search-category');
        listItem.innerText = element.name[0].toUpperCase() + element.name.substring(1); // Capitalize 
        listItem.onclick = async () => {
            let data = JSON.parse(localStorage.getItem('products')) || await get_products({search: element.id, by: "category"});
            data = data.filter(product => product.category == element.id);
            loading('productsContainer', containerCards, data);
            history.pushState({page: 'index', load: {tag:'productsContainer', functionCall: 'containerCards', args: data}}, '');
        }
        lista.appendChild(listItem);
    })
    collapse.querySelector('div').appendChild(lista);
    navBar.appendChild(collapse);
    return navBar;
};
