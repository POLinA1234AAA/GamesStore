
// import React from 'react';
// import cl from './GameCover.module.scss';
// const GameCover = ({image =""}) => {
//     return (
//         <div className={cl.gameCover} style={{backgroundImage: `url(${image})`}}></div>
//     );
// };
//
// export default GameCover;

// import React from 'react';
// import cl from './GameCover.module.scss';
//
// const Images = [
//     { id: 1, image: '/game-covers/forza_5.jpeg'},
//     { id: 2, image: '/game-covers/battlefield_2042.jpg' },
//     { id: 3, image: '/game-covers/life_is_strange_true_colors.jpeg'},
//     { id: 4, image: '/game-covers/gta_v.jpeg' },
//     { id: 5, image: '/game-covers/rainbow_siege.jpeg' },
//     { id: 6, image: '/game-covers/assassins_creed_valhalla.png' },
// ];
//
// const GameCover = ({ id }) => {
//     const image = Images.find(item => item.id === id)?.image;
//
//     return (
//         <div className={cl.gameCover} style={{ backgroundImage: `url(${image})` }}></div>
//     );
// };
//
// export default GameCover;
// import React from 'react';
// import cl from './GameCover.module.scss';
//
// const GameCover = ({ id }) => {
//     // Generate the image URL based on a pattern
//     const Images = [
//     { id: 1, image: '/game-covers/forza_5.jpeg'},
//     { id: 2, image: '/game-covers/battlefield_2042.jpg' },
//     { id: 3, image: '/game-covers/life_is_strange_true_colors.jpeg'},
//     { id: 4, image: '/game-covers/gta_v.jpeg' },
//     { id: 5, image: '/game-covers/rainbow_siege.jpeg' },
//     { id: 6, image: '/game-covers/assassins_creed_valhalla.png' },
// ];
//     const image = `/game-covers/game_${id}.jpeg`;
//
//     return (
//         <div className={cl.gameCover} style={{ backgroundImage: `url(${image})` }}></div>
//     );
// };
//
// export default GameCover;
import React from 'react';
import cl from './GameCover.module.scss';

const Images = [
    { id: 1, image: '/game-covers/forza_5.jpeg' },
    { id: 2, image: '/game-covers/battlefield_2042.jpg' },
    { id: 3, image: '/game-covers/life_is_strange_true_colors.jpeg' },
    { id: 4, image: '/game-covers/gta_v.jpeg' },
    { id: 5, image: '/game-covers/rainbow_siege.jpeg' },
    { id: 6, image: '/game-covers/assassins_creed_valhalla.png' },
];

const GameCover = ({ id }) => {
    // Ensure id is a valid number within the range 1 to 6
    const validId = Math.min(Math.max(id || 1, 1), 6);
    const image = Images.find(item => item.id === validId)?.image;

    return (
        <div className={cl.gameCover} style={{ backgroundImage: `url(${image})` }}></div>
    );
};

export default GameCover;
// import React from 'react';
// import cl from './GameCover.module.scss';
//
// const Images = [
//     { id: 1, image: '/game-covers/forza_5.jpeg' },
//     { id: 2, image: '/game-covers/battlefield_2042.jpg' },
//     { id: 3, image: '/game-covers/life_is_strange_true_colors.jpeg' },
//     { id: 4, image: '/game-covers/gta_v.jpeg' },
//     { id: 5, image: '/game-covers/rainbow_siege.jpeg' },
//     { id: 6, image: '/game-covers/assassins_creed_valhalla.png' },
// ];
//
// const GameCover = ({ index }) => {
//     // Ensure index is within the range of 0 to Images.length - 1
//     const validIndex = Math.min(Math.max(index || 0, 0), Images.length - 1);
//     const image = Images[validIndex].image;
//
//     return (
//         <div className={cl.gameCover} style={{ backgroundImage: `url(${image})` }}></div>
//     );
// };
//
// export default GameCover;
// import React from 'react';
// import cl from './GameCover.module.scss';
//
// const Images = [
//     { id: 1, image: '/game-covers/forza_5.jpeg' },
//     { id: 2, image: '/game-covers/battlefield_2042.jpg' },
//     { id: 3, image: '/game-covers/life_is_strange_true_colors.jpeg' },
//     { id: 4, image: '/game-covers/gta_v.jpeg' },
//     { id: 5, image: '/game-covers/rainbow_siege.jpeg' },
//     { id: 6, image: '/game-covers/assassins_creed_valhalla.png' },
// ];
//
// const GameCover = ({ id }) => {
//     const game = Images.find(item => item.id === id);
//
//     if (!game) {
//         return null; // Return null if no matching game is found
//     }
//
//     return (
//         <div className={cl.gameCover} style={{ backgroundImage: `url(${game.image})` }}>
//             {/* Optionally, you can add alt text for accessibility */}
//             <img src={game.image} alt={`Game ${id}`} style={{ display: 'none' }} />
//         </div>
//     );
// };
//
// export default GameCover;

