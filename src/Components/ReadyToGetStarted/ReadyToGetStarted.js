import React from 'react';
import styles from './styles.module.css';
import images from './images';
import {titleVariants, buttonVariants, imageVariants} from './Variants';
import {motion} from 'framer-motion';

function ReadyToGetStarted() {

    return(
        <section className={styles.background}>
            <motion.img 
                className={styles.darkCircle} 
                src={images['darkCircle']}
                initial='hidden'
                whileInView='show'
                viewport={{once: true}}
                variants={imageVariants}/>
            <motion.div 
                className={styles.content}                 
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 1}}>
                    <motion.h1 variants={titleVariants}>
                        Ready to get started?
                    </motion.h1>
                    <motion.button variants={buttonVariants}>
                        contact us
                    </motion.button>
            </motion.div>
        </section>
    )
}

export default ReadyToGetStarted;