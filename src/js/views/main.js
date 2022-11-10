import { productCard } from "../components/productCard.js";
export const main = (data) => {
    const containerCards = document.createElement('div');
    containerCards.classList.add('row');
    data.forEach(item=>{
        let col = document.createElement('div');
        col.classList.add('col-auto', 'my-1');
        let producto = productCard(item);
        col.appendChild(producto);
        containerCards.appendChild(col);
    });
    body.appendChild(containerCards);
    return containerCards;
};