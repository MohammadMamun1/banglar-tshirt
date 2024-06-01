import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';


const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([]);

    const handelAddToCart = tshirt =>{
      const exist = cart.find(tshirt => tshirt._id === tshirt._id);
      if(exist){
        toast('You Have Already Addeded This T-Shirt')
      }
      else{
        const newCart = [...cart , tshirt];
        setCart(newCart);
      }
      
    }
    const handelRemoveToCart = id =>{
      const remaining = cart.filter(tshirt => tshirt._id !== id);
      setCart(remaining);
    }
      
    return (
        <div className='home-container'>
         <div className='tshirts-container'>
         {
            tshirts.map(tshirt => <Tshirt
            key={tshirt._id}
            tshirt ={tshirt}
            handelAddToCart ={handelAddToCart}
            ></Tshirt>)
          }
         </div>
         <div className="cart-container">
            <Cart cart={cart}
                  handelRemoveToCart ={handelRemoveToCart}
            ></Cart>
         </div>
        </div>
    );
};

export default Home;