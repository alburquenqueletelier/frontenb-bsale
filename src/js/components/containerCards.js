import { productCard } from "./productCard.js";
export const containerCards = (data) => {
    const containerCards = document.createElement('div');
    containerCards.classList.add('row', 'justify-content-center');
    data.forEach(item=>{
        let col = document.createElement('div');
        col.classList.add('col-auto', 'my-1');
        let producto = productCard(item);
        col.appendChild(producto);
        containerCards.appendChild(col);
    });
    return containerCards;
};