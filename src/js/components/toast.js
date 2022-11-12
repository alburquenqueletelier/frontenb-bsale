export const toast = async (data)=>{
    const container = document.querySelector('.toast-container');
    container.innerHTML = `
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <img src="${data.url_image}" class="rounded me-2" alt="..." style="width:3rem;heigth:auto;object-fit:contain">
                <strong class="me-auto">${data.name}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            Producto agregado ☺
        </div>
    </div>
    `;
    const toast = await new bootstrap.Toast(container.querySelector('#liveToast'), {delay:2000});
    toast.show();
};

