import React from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import {titleVariants, descVariants} from './Variants';

function Header() {
    return(
        <motion.header 
            className={styles.header} 
            initial='hidden' 
            whileInView='show' 
            viewport={{once: true}} 
            transition={{staggerChildren: 0.6}}>
            <motion.h1 className={styles.header_title} variants={titleVariants}>
                Find the best <span>talent</span>
            </motion.h1>
            <motion.div className={styles.header_desc} variants={descVariants}>
                <hr/>
                <p>
                    Finding the right people and building 
                    high performing teams can be hard. 
                    Most companies aren’t tapping into 
                    the abundance of global talent. 
                    We’re about to change that.
                </p>
            </motion.div>
        </motion.header>
    )
}

export default Header;