import React from 'react';
import Form from './Form';
import images from './images';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import {imageVariants, textVariants} from './Variants';

function Contact() {
    return(
        <main className={styles.container}>
            <motion.img 
                className={styles.darkCircle} 
                src={images['darkCircle']}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 0.6}}
                variants={imageVariants}/>
            <motion.img 
                className={styles.pinkCircle} 
                src={images['pinkCircle']}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 0.2}}
                variants={imageVariants}/>
            <div className={styles.contact}>
                <motion.section 
                    className={styles.contact_intro}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: true, amount: 0.6}}
                    transition={{staggerChildren: 0.4}}>
                    <motion.h1 variants={textVariants}>
                        Contact
                    </motion.h1>
                    <motion.h2 variants={textVariants}>
                        Ask us about
                    </motion.h2>
                    <ul>
                        <motion.li variants={textVariants}>
                            The quality of our talent network
                        </motion.li>
                        <motion.li variants={textVariants}>
                            Usage & implementation of our software
                        </motion.li>
                        <motion.li variants={textVariants}>
                            How we help drive innovation
                        </motion.li>
                    </ul>
                </motion.section>
                <Form/>
            </div>
        </main>

        )
}

export default Contact;
