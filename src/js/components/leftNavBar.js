import { get_products, get_categories } from "../api/apiGET.js";

export const leftNavBar = ()=>{
    const collapse = document.createElement('nav');
    collapse.classList.add('navbar', 'navbar-expand-sm', 'sticky-top');

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
        let data = await get_products();
        console.log(data);
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
            const categories = await get_products({search: element.id, by: "category"});
            console.log(categories);
        }
        lista.appendChild(listItem);
    })
    collapse.querySelector('div').appendChild(lista);
    return collapse;
};
