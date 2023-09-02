import GameItem from "../../components/GameItem/GameItem";
import React from 'react';
import cl from './HomePage.module.scss';
import Slider from "../../components/Slider/Slider";
const GAMES = [
    {
        image: 'game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Race', 'Simulator', 'Open world'],
        price: 70,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "An endless kaleidoscope of Horizon adventures awaits you! Take exciting trips through the incredibly beautiful and unique world of Mexico while driving the greatest cars in history. Start your Horizon adventure today by adding the game to your wishlist!"
    },
    {
        image: 'game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Action', 'Shooter', 'War'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 60,
        id: 2,
        description: "Battlefield™ 2042 is a first-person shooter that brings the series back to epic battlefield legends. In a chaotic future, adapt and thrive on an ever-changing battlefield with your squad and arsenal of the latest technology."
    },
    {
        image: 'game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres:['Deep story', 'Protagonist'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 40,
        id: 3,
        description: 'Alex Chen hides his “curse” from everyone - the supernatural ability to read the strong emotions of others and influence them. But when her brother dies - allegedly in an accident - Alex uses her to find out the truth.'
    },
    {
        image: 'game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Open world', 'Action'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 20,
        id: 4,
        description: 'Grand Theft Auto V for PC allows players to explore the iconic world of Los Santos and Blaine County in resolutions up to 4k and above at 60 frames per second.'
    },
    {
        image: 'game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Tactics', 'Shooter'],
        price: 25,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Siege is a sequel to the acclaimed first-person shooter developed by Ubisoft Montreal.'
    },
    {
        image: 'game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Parkour', 'RPG', 'Open world'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 35,
        id: 6,
        description: 'Assassin\'s Creed Valhalla is a multi-platform action/RPG video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth installment in the Assassin\'s Creed series.'
    },
]
const HomePage = () => {
    return (
        <div className={cl.homePage}>
            <Slider/>
            {GAMES.map(game => <GameItem game ={game} key ={game.id}/>)}
        </div>
    );
};

export default HomePage;