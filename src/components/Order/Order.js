import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Order = () => {

    const [products,setProducts]=useProducts();
    const [cart,setCart]=useCart(products);
    return (
        <div>
            <h3>this is order vai</h3>
            <h2>this is  a products{products.length}</h2>
            <p>Cart has {cart.length}</p>
        </div>
    );
};

export default Order;