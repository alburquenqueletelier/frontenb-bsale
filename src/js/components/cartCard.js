export const cardCart = (data)=>{
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '30rem';
    card.innerHTML = `
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${data.url_image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <div class="d-flex flex-column m-auto">
                <button type="button" class="btn btn-outline-danger>
                    -
                </button>
                <p>1</p>
                <button type="button" class="btn btn-outline-primary>
                </button>
            </div>
            </div>
        </div>
    </div>
    `;
    return card;
};