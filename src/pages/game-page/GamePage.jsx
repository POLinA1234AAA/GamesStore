import cl from './GamePage.module.scss';
import React from 'react';
import {useSelector} from "react-redux";
import GameCover from "../../components/GameCover/GameCover";
import GameGenre from "../../components/GameGenre/GameGenre";
import GameBuy from "../../components/GameBuy/GameBuy";

const GamePage = () => {
    const game = useSelector(state => state.games.currentGame);

    if(!game) return null


    return (
        <div className={cl.gamePage}>
            <h1 className={cl.gamePageTitle}>{game.title}</h1>
            <div className={cl.gamePageContent}>
                <div className={cl.gamePageLeft}>
                    <iframe
                        width = "90%"
                        height= "400px"
                        src={game.video}
                        title="Youtube Video Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                    </iframe>
                </div>
                <div className={cl.gamePageRight}>
                    <GameCover image={game.image}/>
                    <p>{game.description}</p>
                    <p className="secondary-text"> Popular tags :</p>
                    { game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>)}
                    <div className={cl.gamePageBuyGame}>
                        <GameBuy game={game}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePage;