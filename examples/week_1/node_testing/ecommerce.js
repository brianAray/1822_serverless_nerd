function calculateTotal(cartItems){
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return totalPrice;
}

function createCartMessage(cartItems, calculateTotal){
    let totalPrice = calculateTotal(cartItems);

    return `Total Price is: ${totalPrice}`;
}

module.exports = {calculateTotal, createCartMessage}