import React from 'react';
import styles from './styles.module.css';
import images from './images';
import {motion} from 'framer-motion';
import {textVariants, imageVariants} from './Variants';

function CompanyReviews() {

    return(
        <div className={styles.background}>
            <motion.img 
                className={styles.darkCircle} 
                src={images['darkCircle']} 
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: true, amount: 0.6}} 
                variants={imageVariants}/>
            <section className={styles.company}>
                <motion.h1 
                    className={styles.company_title} 
                    initial='hidden' 
                    whileInView='show' 
                    viewport={{once: true, amount: 0.6}} 
                    variants={textVariants}>
                    Delivering real results for top companies. 
                    Some of our <span>success stories.</span>
                </motion.h1>
                <motion.div 
                    className={styles.company_review} 
                    initial='hidden' 
                    whileInView='show' 
                    viewport={{once: true, amount: 0.6}} 
                    variants={textVariants}>
                    <motion.img 
                        src={images['quotes']} 
                        initial='hidden' 
                        whileInView='show' 
                        viewport={{once: true, amount: 0.6}} 
                        variants={textVariants}/>
                    <motion.q 
                        initial='hidden' 
                        whileInView='show' 
                        viewport={{once: true, amount: 0.6}} 
                        variants={textVariants}>
                            The team perfectly fit the 
                            specialized skill set required. 
                            They focused on the most essential 
                            features helping us launch the 
                            platform eight months faster than 
                            planned.
                    </motion.q>
                    <motion.h2 
                        initial='hidden' 
                        whileInView='show' 
                        viewport={{once: true, amount: 0.6}} 
                        variants={textVariants}>
                        Kady Baker
                    </motion.h2>
                    <motion.i 
                        initial='hidden' 
                        whileInView='show' 
                        viewport={{once: true, amount: 0.6}} 
                        variants={textVariants}>
                        Product Manager at Bookmark
                    </motion.i>
                    <motion.img 
                        className={styles.avatar} 
                        src={images['kady']} 
                        initial='hidden' 
                        whileInView='show'
                        viewport={{once: true, amount: 0.6}} 
                        variants={textVariants}/>
                </motion.div>
                <motion.div 
                    className={styles.company_review} 
                    initial='hidden' whileInView='show' 
                    viewport={{once: true, amount: 0.6}} 
                    variants={textVariants}>
                    <motion.img src={images['quotes']} variants={textVariants}/>
                    <motion.q variants={textVariants}>
                        We needed to automate our 
                        entire onboarding process. 
                        The team came in and built 
                        out the whole journey. 
                        Since going live, user 
                        retention has gone 
                        through the roof!”
                    </motion.q>
                    <motion.h2 variants={textVariants}>
                        Aiysha Reese
                    </motion.h2>
                    <motion.i variants={textVariants}>
                        Founder of Manage
                    </motion.i>
                    <motion.img className={styles.avatar} src={images['aiysha']} variants={textVariants}/>
                </motion.div>
                <motion.div 
                    className={styles.company_review} 
                    initial='hidden' 
                    whileInView='show' 
                    viewport={{once: true, amount: 0.6}} 
                    variants={textVariants}>
                    <motion.img src={images['quotes']} variants={textVariants}/>
                    <motion.q variants={textVariants}>
                        Amazing. Our team helped us build an app that 
                        delivered a new experience for hiring a physio, 
                        The launch was an instant success with 
                        100k downloads in the first month.
                    </motion.q>
                    <motion.h2 variants={textVariants}>
                        Arthur Clarke
                    </motion.h2>
                    <motion.i variants={textVariants}>
                        Co-founder of MyPhysio
                    </motion.i>
                    <motion.img className={styles.avatar} src={images['arthur']} variants={textVariants}/>
                </motion.div>
            </section>            
        </div>
 
    )
}

export default CompanyReviews;