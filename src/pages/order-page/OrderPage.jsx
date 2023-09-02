import React from 'react';
import cl from './OrderPage.module.scss';
import { useSelector} from "react-redux";
import {calcTotalPrice} from "../../components/Utils/Utils";
import OrderItem from "../../components/OrderItem/OrderItem";


const OrderPage = () => {
    const items = useSelector((state) => state.cart.itemsInCart);

    if(items.length < 1) {
        return <h1 style={{display: "flex" , justifyContent: 'center'}}>Your cart is empty</h1>
    }

    return (
        <div>
            <div  className={cl.orderPage}>
                <div className={cl.orderPageLeft} >
                    { items.map(game => <OrderItem game={game}/>)}
                </div>



            </div>
            <div className={cl.orderPageRight}>
                <span>{ items.length } item for {calcTotalPrice(items)} $.</span>
            </div>
        </div>
    )
};

export default OrderPage;