import faker from "faker";

let numOfProducts = `<div>Total number of products in cart are ${faker.random.number()}</div>`;

document.getElementById("cart-dev").innerHTML = numOfProducts;
