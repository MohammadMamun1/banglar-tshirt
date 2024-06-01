import React from 'react';

const Tshirt = ({tshirt}) => {
    const {picture, name, price} = tshirt
    return (
        <div>
          <img src={picture} alt="" /> 
        </div>
    );
};

export default Tshirt;