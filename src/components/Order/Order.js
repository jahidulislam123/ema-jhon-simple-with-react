import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Reviewitem from '../ReveiItem/Reviewitem';

const Order = () => {

    const [products,setProducts]=useProducts();
    const [cart,setCart]=useCart(products);
    const handleRemoveProduct=product=>{
        const rest =cart.filter(pd=>pd.id!==product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className='shop-container' >
            <div className='review-item-container' >
                 {
                  cart.map(product=><Reviewitem
                  key={product.id}
                  product={product}
                  handleRemoveProduct={handleRemoveProduct}
                  
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