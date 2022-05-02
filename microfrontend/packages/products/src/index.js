import faker from 'faker';

console.log("Products Loaded!!!")
const devProduct = document.querySelector("#dev-products");

let productList = '';
for (let i = 0; i < 3; i++) {
    const product = faker.commerce.productName();
    productList += `<div>${product}</div>`
}

devProduct.innerHTML = productList;