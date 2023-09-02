// import React from 'react';
// import cl from './OrderItem.module.scss';
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import {useDispatch} from "react-redux";
// import GameCover from "../GameCover/GameCover";
// import {deleteItemFromCart} from "../../store/cart/reducer";
// const OrderItem = ({game}) => {
//     const dispatch = useDispatch();
//     // const handleClick =
//
//     const handleDeleteClick = () => {
//         dispatch(deleteItemFromCart(game.id))
//     }
//     return (
//         <div className={cl.orderItem}>
//             <div className={cl.orderItemCover}>
//                 <GameCover image={ game.image }/>
//             </div>
//             <div className={cl.orderItemTitle}>
//                 <span> { game.title } </span>
//             </div>
//             <div className={cl.orderItemPrice}>
//                 <span>{ game.price } $.</span>
//                 <AiOutlineCloseCircle
//                     size={24}
//                     className="cart-item__delete-icon"
//                     onClick={handleDeleteClick}
//                 />
//             </div>
//         </div>
//     )
// }
//
// export default OrderItem;
import React from 'react';
import cl from './OrderItem.module.scss';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import GameCover from "../GameCover/GameCover";
import { deleteItemFromCart } from "../../store/cart/reducer";

const Images = [
    { id: 1, image: '/game-covers/forza_5.jpeg' },
    { id: 2, image: '/game-covers/battlefield_2042.jpg' },
    { id: 3, image: '/game-covers/life_is_strange_true_colors.jpeg' },
    { id: 4, image: '/game-covers/gta_v.jpeg' },
    { id: 5, image: '/game-covers/rainbow_siege.jpeg' },
    { id: 6, image: '/game-covers/assassins_creed_valhalla.png' },
];

const OrderItem = ({ game }) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(game.id));
    };

    const gameImage = Images.find(item => item.id === game.id)?.image;

    return (
        <div className={cl.orderItem}>
            <div className={cl.orderItemCover}>
                <GameCover id={game.id} /> {/* Pass the id instead of image */}
            </div>
            <div className={cl.orderItemTitle}>
                <span> {game.title} </span>
            </div>
            <div className={cl.orderItemPrice}>
                <span>{game.price} $.</span>
                <AiOutlineCloseCircle
                    size={24}
                    className="cart-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div>
    );
};

export default OrderItem;
