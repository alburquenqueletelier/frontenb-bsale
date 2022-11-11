import { cardCart } from "./cartCard.js";

export const containerCart = ()=>{
    var cartStorega = JSON.parse(localStorage.getItem('cart'));
    const response = document.createElement('div');
    if (cartStorega && cartStorega.length>0){
        cartStorega.forEach(item =>{
            let card = cardCart(item);
            response.appendChild(card);
        });
    } else {
        response.innerHTML = `
        <h1 class="text-center d-flex m-auto align-self-center">
        No tienes productos en el carro :( 
        </h1>
        <p class="text-center">Agregalos aca</p>
        `;
    }
    return response;
};