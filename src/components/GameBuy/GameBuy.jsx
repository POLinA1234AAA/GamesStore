import cl from './GameBuy.module.jsx.scss';
import React from 'react';
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../../store/cart/reducer";

const GameBuy = ({game}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);

    const isItemInCart = items.some(item => item.id === game.id);
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart){
            dispatch(deleteItemFromCart(game.id))
        }else {
            dispatch(setItemInCart(game));
        }


    }
    return (
        <div>
            <span className={cl.gameBuyPrice}>{game.price} $</span>
            <Button
                onClick={handleClick}
                type= { isItemInCart ? 'secondary': 'primary' }
            >
                {isItemInCart ? ' Delete item' : 'To Cart'}
            </Button>
        </div>
    );
};

export default GameBuy;