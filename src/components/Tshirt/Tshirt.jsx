import React from 'react';
import './Tshirt.css';

const Tshirt = ({tshirt, handelAddToCart}) => {
    const {picture, name, price} = tshirt
    return (
        <div className='t-shirt'>
          <img src={picture} alt="" /> 
          <h4>{name}</h4>
          <p>Price:${price}</p>
          <button onClick={()=> handelAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;