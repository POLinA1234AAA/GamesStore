import React from 'react';
import cl from './CartItem.module.scss';
const CartItem = ({
                      title,
                      price,
                      id,
                  }) => {
    return (
        <div className={cl.cartItem}>
            <span>{ title }</span>
            <div className={cl.cartItemPrice}>
                <span>{ price } $</span>
            </div>
        </div>
    );
};

export default CartItem;