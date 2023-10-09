import React from 'react';
import styles from './styles.module.css';
import images from './images';
import {motion} from 'framer-motion';

function CompanyReviews() {

    const variants = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {staggerChildren: 0.4, duration: 0.4}
        }
    }

    const imageVariants = {
        hidden: {
            scale: 0
        },
        show: {
            scale: 1,
            transition: {
                type: 'spring',
                damping: 6,
                stiffness: 150,
            }
        }
    }

    return(
        <div className={styles.background}>
            <motion.img className={styles.darkCircle} src={images['darkCircle']} initial='hidden' whileInView={'show'} variants={imageVariants}/>
            <section className={styles.company}>
                <motion.h1 className={styles.company_title} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.8}} variants={variants}>
                    Delivering real results for top companies. 
                    Some of our <span>success stories.</span>
                </motion.h1>
                <motion.div className={styles.company_review} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.8}} variants={variants}>
                    <motion.img src={images['quotes']} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.8}} variants={variants}/>
                    <motion.q initial='hidden' whileInView='show' viewport={{once: true, amount: 0.8}} variants={variants}>
                        The team perfectly fit the 
                        specialized skill set required. 
                        They focused on the most essential 
                        features helping us launch the 
                        platform eight months faster than 
                        planned.
                    </motion.q>
                    <motion.h2 initial='hidden' whileInView='show' viewport={{once: true, amount: 0.8}} variants={variants}>
                        Kady Baker
                    </motion.h2>
                    <motion.i initial='hidden' whileInView='show' viewport={{once: true, amount: 0.8}} variants={variants}>
                        Product Manager at Bookmark
                    </motion.i>
                    <motion.img className={styles.avatar} src={images['kady']} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.8}} variants={variants}/>
                </motion.div>
                <motion.div className={styles.company_review} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.8}} variants={variants}>
                    <motion.img src={images['quotes']} variants={variants}/>
                    <motion.q variants={variants}>
                        We needed to automate our 
                        entire onboarding process. 
                        The team came in and built 
                        out the whole journey. 
                        Since going live, user 
                        retention has gone 
                        through the roof!”
                    </motion.q>
                    <motion.h2 variants={variants}>
                        Aiysha Reese
                    </motion.h2>
                    <motion.i variants={variants}>
                        Founder of Manage
                    </motion.i>
                    <motion.img className={styles.avatar} src={images['aiysha']} variants={variants}/>
                </motion.div>
                <motion.div className={styles.company_review} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.8}} variants={variants}>
                    <motion.img src={images['quotes']} variants={variants}/>
                    <motion.q variants={variants}>
                        Amazing. Our team helped us build an app that 
                        delivered a new experience for hiring a physio, 
                        The launch was an instant success with 
                        100k downloads in the first month.
                    </motion.q>
                    <motion.h2 variants={variants}>
                        Arthur Clarke
                    </motion.h2>
                    <motion.i variants={variants}>
                        Co-founder of MyPhysio
                    </motion.i>
                    <motion.img className={styles.avatar} src={images['arthur']} variants={variants}/>
                </motion.div>
            </section>            
        </div>
 
    )
}

export default CompanyReviews;