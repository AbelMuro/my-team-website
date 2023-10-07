import React from 'react';
import images from './images';
import styles from './styles.module.css';

function MeetDirectors() {

    const flipCardToBack = (e) => {
        const frontCard = e.target.parentElement;
        const backCard = e.target.parentElement.nextElementSibling
        frontCard.style.transform = 'rotate3d(0, 1, 0, 180deg)';
        backCard.style.transform = 'rotate3d(0, 1, 0, 0deg)';
    }

    const flipCardToFront = (e) => {
        const frontCard = e.target.parentElement;
        const backCard = e.target.parentElement.previousElementSibling
        frontCard.style.transform = '';
        backCard.style.transform = '';
    }

    return(
        <div className={styles.background}>
            <img className={styles.darkCircle} src={images['darkCircle']}/>
            <img className={styles.square} src={images['square']}/>
            <section className={styles.directors}>
                <h1 className={styles.directors_title}>
                    Meet the directors
                </h1>
                <div className={styles.director_card}>
                    <div className={styles.card_front}>
                        <img src={images['nikita']}/>
                        <h2>
                            Nikita Marks
                        </h2>
                        <i>
                            Founder & CEO
                        </i>
                        <button onClick={flipCardToBack}>
                            +
                        </button>
                    </div>  
                    <div className={styles.card_back}>
                        <h2>
                            Nikita Marks 
                        </h2>
                        <q>
                            It always amazes me how much talent 
                            there is in every corner of the globe
                        </q>
                        <ul className={styles.socialLinks}>
                            <li></li>
                            <li></li>
                        </ul>
                        <button onClick={flipCardToFront}>
                            x
                        </button>
                    </div>    
                </div>
                <div className={styles.director_card}>
                    <div className={styles.card_front}>
                        <img src={images['christian']}/>
                        <h2>
                            Cristian Duncan
                        </h2>
                        <i>
                            Co-founder & COO
                        </i>
                        <button onClick={flipCardToBack}>
                            +
                        </button>
                    </div>
                    <div className={styles.card_back}>
                        <h2>
                            Cristian Duncan
                        </h2>
                        <q>
                            Distributed teams required unique processes. 
                            You need to approach work in a new way.
                        </q>
                        <ul className={styles.socialLinks}>
                            <li></li>
                            <li></li>
                        </ul>
                        <button onClick={flipCardToFront}>
                            x
                        </button>
                    </div>  
                </div>
                <div className={styles.director_card}>
                    <div className={styles.card_front}>
                        <img src={images['cruz']}/>
                        <h2>
                            Cruz Hamer
                        </h2>
                        <i>
                            Co-founder & CTO
                        </i>
                        <button onClick={flipCardToBack}>
                            +
                        </button>
                    </div>
                    <div className={styles.card_back}>
                        <h2>
                            Cruz Hamer
                        </h2>
                        <q>
                            Technology is at the forefront of enabling distributed teams. 
                            That's where we come in.
                        </q>
                        <ul className={styles.socialLinks}>
                            <li></li>
                            <li></li>
                        </ul>
                        <button onClick={flipCardToFront}>
                            x
                        </button>
                    </div>  
                </div>
                <div className={styles.director_card}>
                    <div className={styles.card_front}>
                        <img src={images['drake']}/>
                        <h2>
                            Drake Heaton
                        </h2>
                        <i>
                            Business Development Lead
                        </i>
                        <button onClick={flipCardToBack}>
                            +
                        </button>                        
                    </div>
                    <div className={styles.card_back}>
                        <h2>
                            Drake Heaton
                        </h2>
                        <q>
                            Hiring similar people from similar 
                            backgrounds is a surefire way to 
                            stunt innovation.
                        </q>
                        <ul className={styles.socialLinks}>
                            <li></li>
                            <li></li>
                        </ul>
                        <button onClick={flipCardToFront}>
                            x
                        </button>
                    </div>  
                </div>
                <div className={styles.director_card}>
                    <div className={styles.card_front}>
                        <img src={images['griffin']}/>
                        <h2>
                            Griffin Wise
                        </h2>
                        <i>
                            Lead Marketing
                        </i>
                        <button onClick={flipCardToBack}>
                            +
                        </button>                        
                    </div>
                    <div className={styles.card_back}>
                        <h2>
                            Griffin Wise
                        </h2>
                        <q>
                            Unique perspectives shape unique products, 
                            which is what you need to survive these days.
                        </q>
                        <ul className={styles.socialLinks}>
                            <li></li>
                            <li></li>
                        </ul>
                        <button onClick={flipCardToFront}>
                            x
                        </button>
                    </div>  
                </div>
                <div className={styles.director_card}>
                    <div className={styles.card_front}>
                        <img src={images['aden']}/>
                        <h2>
                            Aden Allan
                        </h2>
                        <i>
                            Head of Talent
                        </i>
                        <button onClick={flipCardToBack}>
                            +
                        </button>
                    </div>
                    <div className={styles.card_back}>
                        <h2>
                            Aden Allan
                        </h2>
                        <q>
                            Empowered teams create truly amazing products. 
                            Set the north star and let them follow it.
                        </q>
                        <ul className={styles.socialLinks}>
                            <li></li>
                            <li></li>
                        </ul>
                        <button onClick={flipCardToFront}>
                            x
                        </button>
                    </div>  
                </div>
            </section>
        </div>

    )
}

export default MeetDirectors;