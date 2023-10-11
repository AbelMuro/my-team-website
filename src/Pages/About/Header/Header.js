import React from 'react';
import styles from './styles.module.css';
import images from './images';
import {motion} from 'framer-motion';
import {titleVariants, descVariants, imageVariants} from './Variants';

function Header() {
    return(
        <motion.header 
            className={styles.background}
            initial='hidden'
            whileInView='show'
            viewport={{once: true}}
            transition={{staggerChildren: 0.4}}>
            <motion.img className={styles.pinkCircle} src={images['pinkCircle']} variants={imageVariants}/>
            <section className={styles.header}>
                <motion.h1 className={styles.header_title} variants={titleVariants}>
                    About
                </motion.h1>
                <div className={styles.header_desc}>
                    <motion.hr variants={descVariants}/>
                    <motion.p variants={descVariants}>
                        We help companies build dynamic teams 
                        made up of top global talent. 
                        Using our network of passionate 
                        professionals we drive innovation 
                        and deliver incredible outcomes. 
                        Talented, diverse teams shape the 
                        best products and experiences. 
                        We’ll bring those teams to you.
                    </motion.p>
                </div>
            </section>            
        </motion.header>

    )
}

export default Header;