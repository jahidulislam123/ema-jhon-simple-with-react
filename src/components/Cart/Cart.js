import React from 'react';
import './Cart.css'

const Cart = (props ) => {
    // console.log(props );
    const{cart}=props;
    console.log(cart);
    let total=0;
    let shippint=0;
    let quantity=0;
    for(const product of cart){
        quantity=quantity + product.quantity;
        total=total+product.price*product.quantity;
        shippint=shippint+product.shipping;
        
    }
    // console.log(quantity);
    const tax=parseFloat((total*10/100).toFixed(2));
    // tax.toFixed(4);
    const grandTotal =(total+shippint+tax).toFixed(2);
    return (
        <div className='cart' >
            <h4>Order Summary</h4>
                <p>uniqe Items: {cart.length}</p>
                <p>Quantity : {quantity}</p>
                <p>Total Price:${total}</p>
                <p>Total Shipping:${shippint}</p>
                <p>Tax :${tax}</p>
                <h5>Grand Total : ${grandTotal}</h5>
        </div>
    );
};

export default Cart;