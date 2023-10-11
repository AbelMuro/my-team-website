import React from 'react';
import styles from './styles.module.css';
import icons from './icons';
import images from './images';
import {motion} from 'framer-motion';
import {imageVariants, descVariants, detailVariants} from './Variants';


function CompanyDetails() {

    return(
        <div className={styles.background} >
            <motion.img 
                className={styles.pinkCircle} 
                src={images['pinkCircle']} 
                initial='hidden' 
                whileInView='show' 
                variants={imageVariants}
                viewport={{once: true, amount: 0.6}}/>
            <motion.img 
                className={styles.darkCircle} 
                src={images['darkCircle']} 
                initial='hidden' 
                whileInView='show' 
                variants={imageVariants}
                viewport={{once: true, amount: 0.6}}/>
            <motion.img 
                className={styles.darkSquare} 
                src={images['darkSquare']} 
                initial='hidden' 
                whileInView='show' 
                variants={imageVariants}
                viewport={{once: true, amount: 0.6}}/>

            <section className={styles.company}>
                <motion.div 
                    className={styles.company_desc} 
                    initial='hidden' 
                    whileInView='show' 
                    variants={descVariants}
                    viewport={{once: true, amount: 0.6}}>
                        <hr/>
                        <h1>
                            Build & manage distributed teams like no one else.
                        </h1>
                </motion.div>
                <div className={styles.company_details}>
                    <motion.img 
                        src={icons['person']} 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.6}}/>
                    <motion.h1 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.6}}>
                        Experienced Individuals
                    </motion.h1>
                    <motion.p 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.6}}>
                            Our network is made up of highly 
                            experienced professionals 
                            who are passionate about what they do.
                    </motion.p>
                    <motion.img 
                        src={icons['cog']} 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.6}}/>
                    <motion.h1 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.6}}>
                        Easy to Implement
                    </motion.h1>
                    <motion.p 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.6}}>
                            Our processes have been refined over 
                            years of implementation meaning our 
                            teams always deliver.
                    </motion.p>
                    <motion.img 
                        src={icons['chart']} 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.6}}/>
                    <motion.h1 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.6}}>
                        Enhanced Productivity
                    </motion.h1>
                    <motion.p 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.6}}>
                            Our customized platform with 
                            in-built analytics helps you 
                            manage your distributed teams.
                    </motion.p>
                </div>
            </section>            
        </div>
    )
}

export default CompanyDetails;