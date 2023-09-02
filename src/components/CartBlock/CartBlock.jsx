import React, {useState , useCallback} from 'react';
import cl from './CartBlock.module.scss';
import { BiCartAlt } from 'react-icons/bi';
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../Utils/Utils";
import CartMenu from "../CartMenu/CartMenu";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import {useNavigate} from "react-router-dom";

const CardBlock = () => {
    const items =useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items)
    const navigate = useNavigate();
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false);
        navigate('/order');
    },[navigate]);


    return (
        <div className={cl.cartBlock}>
            <ItemsInCart quantity={items.length}/>
            <BiCartAlt className={cl.cartIcon}  onClick={() => setIsCartMenuVisible (!isCartMenuVisible)}/>
            { totalPrice > 0 ? <span className={`${cl.cartBlock} ${cl.totalPrice}`}>{totalPrice} $</span> : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}


        </div>
    );
};

export default CardBlock;