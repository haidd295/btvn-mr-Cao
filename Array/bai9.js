const order = {
    'cart': [
        { id: 1, name: "ao dai", amount: 5, price: 100000 },
        { id: 2, name: "ao coc", amount: 2, price: 200000 },
        { id: 3, name: "quan dai", amount: 3, price: 150000 },
        { id: 4, name: "quan coc", amount: 4, price: 130000 },
    ],
    'customer': 'Name',
    'address': '12 Giai Phong Street'
};
// total price: 1800000
// total amount: 14



order.cart.reduce(function (a, b) {
    return { price: a.price + b.price };
})


// console.log(order.cart.reduce((a, b) => ({ price: a.price + b.price })));
console.log(price);