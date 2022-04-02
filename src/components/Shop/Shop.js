import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]);

    // useEffect( () =>{
    //     // console.log('products load before fetch')
    //     fetch('products.json')
    //     .then(res=> res.json())
    //     .then(data => setProducts(data))
    //     // console.log("products lodedeed");
    // }, []);

    const [products,setProducts]=useProducts();

    const[cart,setCart]=useCart(products)

    const handleAddToCart = (selectedproduct) =>{
        // console.log(product);
        let newCart=[];
        const exists = cart.find(product=>product.id===selectedproduct.id);
        if(!exists){
            selectedproduct.quantity=1;
            newCart=[...cart,selectedproduct];
        }
        // do not do this: cart.push(product);
        // const newCart = [...cart, selectedproduct];
        else{
            const rest =cart.filter(product=>product.id!==selectedproduct.id)
            exists.quantity=exists.quantity+1;
            newCart=[...rest,exists];
            
        }
        setCart(newCart);
        addToDb(selectedproduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} >
                    <Link to="/orders"><button>Order Reveiw</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;