import React, { useEffect, useState } from 'react';
import styles from './Slider.module.scss'; // Adjust the path to your Slider.module.scss file

const Images = [
    { id: 1, image: '/game-covers/forza_5.jpeg', backgroundColor: '#497eb4' },
    { id: 2, image: '/game-covers/battlefield_2042.jpg', backgroundColor: '#1eccb9' },
    { id: 3, image: '/game-covers/life_is_strange_true_colors.jpeg', backgroundColor: '#fd0afe' },
    { id: 4, image: '/game-covers/gta_v.jpeg', backgroundColor: '#5dd6f0' },
    { id: 5, image: '/game-covers/rainbow_siege.jpeg', backgroundColor: '#dfc896' },
    { id: 6, image: '/game-covers/assassins_creed_valhalla.png', backgroundColor: '#93a5af' },
];

const Slider = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [activeSection, setActiveSection] = useState(1);
    const [showHeading, setShowHeading] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = parseInt(entry.target.getAttribute('data-id'));
                        setActiveSection(sectionId);
                        setIsIntersecting(true);
                        setShowHeading(sectionId === 1); // Show heading only for the first section
                    }
                });
            },
            {
                threshold: 0.5, // Adjust this threshold as needed
            }
        );

        Images.forEach((game) => {
            observer.observe(document.getElementById(`game-${game.id}`));
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className={styles.sliderContainer}>
            {showHeading && <h1 className={styles.chooseYours}>CHOOSE YOURS</h1>}
            <div className={styles.sliderTrack}>
                {Images.map((game) => (
                    <div
                        key={game.id}
                        className={`${styles.sliderSection} ${isIntersecting ? styles.sliderAnimate : ''}`}
                        id={`game-${game.id}`}
                        data-id={game.id} // Store section id as data attribute
                        style={{ backgroundColor: activeSection === game.id ? game.backgroundColor : '' }}
                    >
                        <img className={`${styles.sliderImg} ${isIntersecting ? styles.sliderAnimate : ''}`} src={game.image} alt={`Game ${game.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;