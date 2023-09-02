import cl from './CartMenu.module.scss';
import React from 'react';
import {calcTotalPrice} from "../Utils/Utils";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

const CartMenu = ({items, onClick}) => {
    return (
        <div className={cl.cartMenu}>
            <div>
                {
                    items.length > 0 ? items.map(game =>
                        <CartItem
                            key={game.title}
                            price ={game.price}
                            title ={game.title}
                            id = {game.id}
                        />) : "Cart is empty"
                }
            </div>
            {
                items.length > 0 ?
                    <div className={cl.cartMenuArrange}>
                        <div className={cl.cartMenuTotalPrice}>
                            <span>total:</span>
                            <span>{calcTotalPrice(items)} $</span>
                        </div>
                        <Button type = "primary" size="m" onClick={onClick} >
                            Checkout
                        </Button>
                    </div>
                    : null
            }
        </div>
    );
};

export default CartMenu;