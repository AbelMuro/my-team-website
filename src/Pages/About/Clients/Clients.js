import React from 'react';
import logos from './logos';
import styles from './styles.module.css';
import images from './images';
import {motion} from 'framer-motion';
import {imageVariants, iconVariants} from './Variants';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function Clients() {
    const mobile = useMediaQuery('(max-width: 620px)');

    return(
        <section className={styles.background}>
            <motion.img 
                className={styles.greenCircle} 
                src={images['greenCircle']}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 1, margin: mobile ? '' : '-35px'}}
                variants={imageVariants}/>
            <motion.div 
                className={styles.clients}                 
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 0.6}}
                transition={{staggerChildren: 0.4}}>
                <motion.h1 
                    className={styles.clients_title}
                    variants={iconVariants}>
                    Some of our clients
                </motion.h1>
                <motion.img 
                    className={styles.vergeLogo} 
                    src={logos['verge']}
                    variants={iconVariants}/>        
                <motion.img 
                    className={styles.jakartaLogo} 
                    src={logos['jakarta']}
                    variants={iconVariants}/>              
                <motion.img 
                    className={styles.guardianLogo} 
                    src={logos['guardian']}
                    variants={iconVariants}/>                 
                <motion.img 
                    className={styles.techRadarLogo} 
                    src={logos['techRadar']}
                    variants={iconVariants}/>                                     
                <motion.img 
                    className={styles.gadgetsLogo} 
                    src={logos['gadgets']}
                    variants={iconVariants}/>
            </motion.div>
        </section>
    )
}

export default Clients;