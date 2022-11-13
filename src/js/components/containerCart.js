import { numToContable } from "../utils/utils.js";
import { cardCart } from "./cartCard.js";

export const containerCart = ()=>{
    var cartStorega = JSON.parse(localStorage.getItem('cart'));
    const response = document.createElement('div');
    response.classList.add('row');
    if (cartStorega && cartStorega.length>0){
        const containerCards = document.createElement('div');
        containerCards.classList.add('col');
        cartStorega.forEach(item =>{
            let card = cardCart(item);
            containerCards.appendChild(card);
        });
        const bill = document.createElement('div');
        bill.classList.add('col', 'd-flex', 'flex-column', 'justify-content-center');
        bill.innerHTML = `
            <h3>Detalle Compra</h3>
            <ul class="list-group"></ul>
            <hr>
            <h4></h4>
        `;
        var total = 0;
        cartStorega.forEach(({product,amount}=item)=>{
            let li = document.createElement('li');
            li.classList.add('list-group-item');
            li.innerHTML = `
                ${product.name} x ${amount} = ${numToContable(amount*product.price)}
            `;
            bill.querySelector('ul').appendChild(li);
            total+=amount*product.price;
        });
        bill.querySelector('h4').innerText = `Total = ${numToContable(total)}`;
        response.appendChild(containerCards);
        response.appendChild(bill);
    } else {
        response.innerHTML = `
        <h1 class="text-center d-flex m-auto align-self-center">
        No tienes productos. Busca tus favoritos ☺
        </h1>

        `;
    }
    return response;
};