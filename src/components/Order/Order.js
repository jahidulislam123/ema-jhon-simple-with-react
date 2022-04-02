import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Reviewitem from '../ReveiItem/Reviewitem';

const Order = () => {

    const [products,setProducts]=useProducts();
    const [cart,setCart]=useCart(products);
    return (
        <div className='shop-container' >
            <div className='review-item-container' >
                 {
                  cart.map(product=><Reviewitem
                  key={product.id}
                  product={product}
                  
                  ></Reviewitem>)
                } 

            </div>
            <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>
           
        </div>
    );
};

export default Order;