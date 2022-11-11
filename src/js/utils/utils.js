export const numToContable = (value) => {
    let response = Number(Number(value).toFixed()).toLocaleString('en');
    return '$'+response.replace(',','.');
};

export const productsByCategory = (category, data) =>{
    return data.filter(product=>product.category == category);
}

export const loading = async (tag, callback, args)=>{
    const componentTag = document.querySelector(`#${tag}`);
    componentTag.innerHTML = `
    <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    `;
    const response = await callback(args);
    componentTag.innerHTML = "";
    componentTag.appendChild(response);
};