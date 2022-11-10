import { cardCart } from "./cartCard";

export const containerCart = ()=>{
    var cartStorega = JSON.parse(localStorage.getItem('cart'));
    const response = document.createElement('div');
    cartStorega.forEach(item=>{
        let card = cardCart(item);
        response.appendChild(card);
    });
    return response;
};