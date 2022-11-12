import { productCard } from "./productCard.js";
import { searchForm } from "./searchForm.js";
export const containerCards = (data) => {
    const containerCards = document.createElement('div');
    containerCards.classList.add('row', 'justify-content-center');
    const form = searchForm();
    containerCards.appendChild(form);
    data.forEach(item=>{
        let col = document.createElement('div');
        col.classList.add('col-auto', 'my-1');
        let producto = productCard(item);
        col.appendChild(producto);
        containerCards.appendChild(col);
    });
    return containerCards;
};