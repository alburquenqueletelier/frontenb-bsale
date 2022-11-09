export const numToContable = (value) => {
    let response = Number(Number(value).toFixed()).toLocaleString('en');
    return '$'+response.replace(',','.');
};