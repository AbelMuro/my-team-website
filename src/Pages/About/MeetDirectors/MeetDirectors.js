import React from 'react';
import images from './images';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import {imageVariants, cardVariants, titleVariants} from './Variants';

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
            <motion.img 
                className={styles.darkCircle} 
                src={images['darkCircle']}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 0.6}}
                variants={imageVariants}/>
            <motion.img 
                className={styles.square} 
                src={images['square']}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 0.6}}
                variants={imageVariants}/>
            <section className={styles.directors}>
                <motion.h1 
                    className={styles.directors_title} 
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: true, amount: 0.4}}
                    variants={titleVariants}>
                    Meet the directors
                </motion.h1>
                <motion.div 
                    className={styles.director_card} 
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: true, amount: 0.6}}
                    variants={cardVariants}>
                    <div className={styles.card_front}>
                        <motion.img src={images['nikita']} variants={cardVariants}/>
                        <motion.h2 variants={cardVariants}>
                            Nikita Marks
                        </motion.h2>
                        <motion.i variants={cardVariants}>
                            Founder & CEO
                        </motion.i>
                        <motion.button onClick={flipCardToBack} variants={cardVariants}>
                            +
                        </motion.button>
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
                            <img className={styles.cross} src={images['close']}/>
                        </button>
                    </div>    
                </motion.div>
                <motion.div 
                    className={styles.director_card} 
                    initial='hidden'
                    whileInView='show'      
                    viewport={{once: true, amount: 0.6}}              
                    variants={cardVariants}>
                    <div className={styles.card_front}>
                        <motion.img src={images['christian']} variants={cardVariants}/>
                        <motion.h2 variants={cardVariants}>
                            Cristian Duncan
                        </motion.h2>
                        <motion.i variants={cardVariants}>
                            Co-founder & COO
                        </motion.i>
                        <motion.button onClick={flipCardToBack} variants={cardVariants}>
                            +
                        </motion.button>
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
                            <img className={styles.cross} src={images['close']}/>
                        </button>
                    </div>  
                </motion.div>
                <motion.div 
                    className={styles.director_card} 
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: true, amount: 0.6}}
                    variants={cardVariants}>
                    <div className={styles.card_front}>
                        <motion.img src={images['cruz']} variants={cardVariants}/>
                        <motion.h2 variants={cardVariants}>
                            Cruz Hamer
                        </motion.h2>
                        <motion.i variants={cardVariants}>
                            Co-founder & CTO
                        </motion.i>
                        <motion.button onClick={flipCardToBack} variants={cardVariants}>
                            +
                        </motion.button>
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
                            <img className={styles.cross} src={images['close']}/>
                        </button>
                    </div>  
                </motion.div>
                <motion.div 
                    className={styles.director_card} 
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: true, amount: 0.6}}
                    variants={cardVariants}>
                    <div className={styles.card_front}>
                        <motion.img src={images['drake']} variants={cardVariants}/>
                        <motion.h2 variants={cardVariants}>
                            Drake Heaton
                        </motion.h2>
                        <motion.i variants={cardVariants}>
                            Business Development Lead
                        </motion.i>
                        <motion.button onClick={flipCardToBack} variants={cardVariants}>
                            +
                        </motion.button>                        
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
                            <img className={styles.cross} src={images['close']}/>
                        </button>
                    </div>  
                </motion.div>
                <motion.div 
                    className={styles.director_card} 
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: true, amount: 0.6}}
                    variants={cardVariants}>
                    <div className={styles.card_front}>
                        <motion.img src={images['griffin']} variants={cardVariants}/>
                        <motion.h2 variants={cardVariants}>
                            Griffin Wise
                        </motion.h2>
                        <motion.i variants={cardVariants}>
                            Lead Marketing
                        </motion.i>
                        <motion.button onClick={flipCardToBack} variants={cardVariants}>
                            +
                        </motion.button>                        
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
                            <img className={styles.cross} src={images['close']}/>
                        </button>
                    </div>  
                </motion.div>
                <motion.div 
                    className={styles.director_card} 
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: true, amount: 0.6}}
                    variants={cardVariants}>
                    <div className={styles.card_front}>
                        <motion.img src={images['aden']} variants={cardVariants}/>
                        <motion.h2 variants={cardVariants}>
                            Aden Allan
                        </motion.h2>
                        <motion.i variants={cardVariants}>
                            Head of Talent
                        </motion.i>
                        <motion.button onClick={flipCardToBack} variants={cardVariants}>
                            +
                        </motion.button>
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
                            <img className={styles.cross} src={images['close']}/>
                        </button>
                    </div>  
                </motion.div>
            </section>
        </div>

    )
}

export default MeetDirectors;