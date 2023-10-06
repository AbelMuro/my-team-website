import React from 'react';
import images from './images';
import styles from './styles.module.css';


//i will need to create two cards in a container, front card and the back card, i will just need to flip both cards
function MeetDirectors() {

    const handleClick = (e) => {
        const card = e.target.parentElement;
        card.style.transform = 'rotate3d(0, 1, 0, 180deg)';
    }

    return(
        <div className={styles.background}>
            <section className={styles.directors}>
                <h1 className={styles.directors_title}>
                    Meet the directors
                </h1>
                <div className={styles.director_card}>
                    <div className={styles.front}>
                        <img src={images['nikita']}/>
                        <h2>
                            Nikita Marks
                        </h2>
                        <i>
                            Founder & CEO
                        </i>
                        <button onClick={handleClick}>
                            +
                        </button>
                    </div>      
                </div>
                <div className={styles.director_card}>
                    <div className={styles.front}>
                        <img src={images['christian']}/>
                        <h2>
                            Cristian Duncan
                        </h2>
                        <i>
                            Co-founder & COO
                        </i>
                        <button onClick={handleClick}>
                            +
                        </button>
                    </div>
                </div>
                <div className={styles.director_card}>
                    <div className={styles.front}>
                        <img src={images['cruz']}/>
                        <h2>
                            Cruz Hamer
                        </h2>
                        <i>
                            Co-founder & CTO
                        </i>
                        <button onClick={handleClick}>
                            +
                        </button>
                    </div>
                </div>
                <div className={styles.director_card}>
                    <div className={styles.front}>
                        <img src={images['drake']}/>
                        <h2>
                            Drake Heaton
                        </h2>
                        <i>
                            Business Development Lead
                        </i>
                        <button onClick={handleClick}>
                            +
                        </button>                        
                    </div>
                </div>
                <div className={styles.director_card}>
                    <div className={styles.front}>
                        <img src={images['griffin']}/>
                        <h2>
                            Griffin Wise
                        </h2>
                        <i>
                            Lead Marketing
                        </i>
                        <button onClick={handleClick}>
                            +
                        </button>                        
                    </div>
                </div>
                <div className={styles.director_card}>
                    <div className={styles.front}>
                        <img src={images['aden']}/>
                        <h2>
                            Aden Allan
                        </h2>
                        <i>
                            Head of Talent
                        </i>
                        <button onClick={handleClick}>
                            +
                        </button>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default MeetDirectors;