import { loading } from "../utils/utils.js";
import { cartView } from "../views/cart.js";

export const cardCart = (data)=>{
    const {product, amount} = data;
    let auxProduct = product;
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '30rem';
    card.innerHTML = `
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${product.url_image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <div class="d-flex justify-content-evenly align-items-center m-auto">
                </div>
            </div>
        </div>
    </div>
    `;
    const panel = card.querySelector('.d-flex.justify-content-evenly.align-items-center.m-auto');
    for (let i=0; i<2; i++){
        let button = document.createElement('button');
        if (i == 0){
            button.classList.add('btn', 'btn-outline-danger');
            button.innerHTML = '-';
            button.onclick = ()=>{
                var cart = JSON.parse(localStorage.getItem('cart'));
                cart = cart.map(({product, amount})=>{
                    if (product.id == auxProduct.id){
                        amount--;
                    };
                    if (amount > 0) return {product: product, amount: amount}
                }).filter(item=> {
                    if (item) return item;
                });
                localStorage.setItem('cart', JSON.stringify(cart));
                cartView();
            }
            panel.appendChild(button);
        } else {
            const amountInfo = document.createElement('p');
            amountInfo.classList.add('text-warning', 'd-flex', 'mt-2', 'px-3', 'border', 'border-1', 'amount-product');
            amountInfo.innerHTML = amount;
            button.classList.add('btn', 'btn-outline-success');
            button.innerHTML = '+';
            button.onclick = ()=>{
                var cart = JSON.parse(localStorage.getItem('cart'));
                let response = cart.map(({product, amount})=>{
                    if (product.id == auxProduct.id){
                        amount++;
                    };
                    if (amount > 0) return {product: product, amount: amount}
                }).filter(item=> {
                    if (item) return item;
                });
                localStorage.setItem('cart', JSON.stringify(response));
                cartView();
            };
            panel.appendChild(amountInfo);
            panel.appendChild(button);
        };

    }
    return card;
};