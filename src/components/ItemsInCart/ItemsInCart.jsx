import React from 'react';
import cl from './ItemsInCart.module.scss';
const ItemsInCart = ({quantity = 0 }) => {

    return  quantity > 0 ?(
        <div className={cl.itemsInCart}>
            {quantity}
        </div>
    ): null
};

export default ItemsInCart;