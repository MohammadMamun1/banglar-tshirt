import React from 'react';

const Cart = ({cart, handelRemoveToCart}) => {
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >{tshirt.name} <button onClick={()=> handelRemoveToCart(tshirt._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;