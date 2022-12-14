import { numToContable } from "../utils/utils.js";
import { toast } from "./toast.js";

export const productCard = (data) => {

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            if (cart.filter(item=>item.product.id == product.id).length == 0){
                cart = [...cart, {product:product, amount:1}];
                localStorage.setItem('cart', JSON.stringify(cart));
                toast(data);
            }
        } else {
            localStorage.setItem('cart', JSON.stringify([{product:product, amount:1}]));
            toast(data);
        };
    };

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '16rem';
    card.style.height = '100%';

    const image = document.createElement('img');
    image.classList.add('card-img-top')
    image.src = data.url_image;
    image.alt = 'product-image';
    card.appendChild(image);

    const bodyCard = document.createElement('div');
    bodyCard.classList.add('card-body');
    let finalPrice = data.discount > 0 ? data.price * (100 - data.discount) / 100 : "";
    bodyCard.innerHTML = `
        <h5 class="card-title">${data.name}</h5>
        <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-text text-success ${data.discount > 0 ? 'text-decoration-line-through' : ""}">${numToContable(data.price)}</h5>
            <h5 class="card-text text-danger">${data.discount > 0 ? ('%' + data.discount) : ""}</h5>
            <h5 class="card-text">${data.discount > 0 ? numToContable(finalPrice) : ""}</h5>
            <button type="button" class="btn">
                <img src="https://cdn.pixabay.com/photo/2017/07/08/19/32/symbol-2485372_960_720.png" alt="logo-carro" class="icon-carro" />
            </button>
        </div>
    `;
    card.appendChild(bodyCard);
    bodyCard.querySelector('button').onclick = () => addToCart(data);
    return card;
};
