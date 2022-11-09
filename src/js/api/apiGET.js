import { apiUrl } from "../../config.js";

export const get_categories = async ({search: value, by: attribute} = {}) => { // attribute = id or name - value = int for id, string for name
    // if (id && name) throw new Error('Buscar solo por ID o solo por nombre');
    // id = id ? id : "";
    // name = name ? name : "";
    // const resp = await fetch(apiUrl+'category' +(id ? `?id=${id}` : "") + (name ? `?name=${name}` : "")); 
    let resp, data;
    if (attribute && value){
        resp = await fetch(apiUrl+`category?${attribute}=${value}`);
        data = await resp.json();
    } else {
        resp = await fetch(apiUrl+'category');
        data = await resp.json();
    }
    return data;
};

export const get_products = async ({search: value, by: attribute} = {}) =>{
    // if ((id && name ) || (id && category) || (name && category) || (id && name && category)) throw new Error('Buscar solo por ID o solo por nombre o por categoria');
    // id = id ? id : "";
    // name = name ? name : "";
    // category = category ? category : "";
    let resp, data;
    if (value && attribute){
        resp = await fetch(apiUrl + `product?${attribute}=${value}`);
        data = await resp.json();
    } else {
        resp = await fetch(apiUrl+'product'); 
        data = await resp.json();
    }
    return data;
};