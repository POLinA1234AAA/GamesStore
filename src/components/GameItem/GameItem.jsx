// import React from 'react';
// import cl from './GameItem.module.scss';
// import GameCover from "../GameCover/GameCover";
// import GameBuy from "../GameBuy/GameBuy";
// import GameGenre from "../GameGenre/GameGenre";
// import {useNavigate} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {setCurrentGame} from "../../store/games/reducer";
// const GameItem = ({game}) => {
//     const navigate =useNavigate();
//     const dispatch = useDispatch();
//     const handleClick = () => {
//         dispatch(setCurrentGame(game));
//         navigate(`/app/${game.title}`)
//     }
//     return (
//         <div className={cl.gameItem} onClick={handleClick} >
//             <GameCover image={game.image}/>
//             <div className={cl.gameItemDetails}>
//                 <span className={cl.gameItemTitle}>{game.title}</span>
//                 <div className={cl.gameItemGenre}>
//                     {
//                         game.genres.map(genre => <GameGenre genre ={genre} key ={genre}/>)
//                     }
//                 </div>
//             </div>
//             <div className={cl.gameItemBuy}>
//                 <GameBuy game ={game}/>
//             </div>
//         </div>
//     );
// };
// export default GameItem;
import React from 'react';
import cl from './GameItem.module.scss';
import GameCover from "../GameCover/GameCover";
import GameBuy from "../GameBuy/GameBuy";
import GameGenre from "../GameGenre/GameGenre";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentGame } from "../../store/games/reducer";

const Images = [
    { id: 1, image: '/game-covers/forza_5.jpeg' },
    { id: 2, image: '/game-covers/battlefield_2042.jpg' },
    { id: 3, image: '/game-covers/life_is_strange_true_colors.jpeg' },
    { id: 4, image: '/game-covers/gta_v.jpeg' },
    { id: 5, image: '/game-covers/rainbow_siege.jpeg' },
    { id: 6, image: '/game-covers/assassins_creed_valhalla.png' },
];

const GameItem = ({ game }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentGame(game));
        navigate(`/app/${game.title}`);
    };

    return (
        <div className={cl.gameItem} onClick={handleClick}>
            <GameCover id={game.id} /> {/* Pass the id instead of image */}
            <div className={cl.gameItemDetails}>
                <span className={cl.gameItemTitle}>{game.title}</span>
                <div className={cl.gameItemGenre}>
                    {
                        game.genres.map(genre => <GameGenre genre={genre} key={genre} />)
                    }
                </div>
            </div>
            <div className={cl.gameItemBuy}>
                <GameBuy game={game} />
            </div>
        </div>
    );
};

export default GameItem;
