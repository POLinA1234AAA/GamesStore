import React from 'react';
import cl from './GameGenre.module.scss';
const GameGenre = ({genre}) => {
    return (
        <span className={cl.gameGenre}>{genre}</span>
    );
};

export default GameGenre;