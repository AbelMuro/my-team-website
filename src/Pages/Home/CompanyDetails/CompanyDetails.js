import React from 'react';
import styles from './styles.module.css';
import icons from './icons';
import images from './images';
import {motion} from 'framer-motion';


//i will need to use photoshop and cut one of the images in half, i also need to find out whats wrong with the title text
function CompanyDetails() {


    const imageVariants = {
        hidden: {
            scale: 0,
        },
        show: {
            scale: 1,
            transition: {type: 'spring', damping: 6, stiffness: 150}
        }
    }

    const descVariants = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4
            }
        }
    }

    const detailVariants = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4
            }
        }
    }

    return(
        <div className={styles.background} >
            <motion.img 
                className={styles.pinkCircle} 
                src={images['pinkCircle']} 
                initial='hidden' 
                whileInView='show' 
                variants={imageVariants}
                viewport={{once: true, amount: 0.8}}/>
            <motion.img 
                className={styles.darkCircle} 
                src={images['darkCircle']} 
                initial='hidden' 
                whileInView='show' 
                variants={imageVariants}
                viewport={{once: true}}/>
            <motion.img 
                className={styles.darkSquare} 
                src={images['darkSquare']} 
                initial='hidden' 
                whileInView='show' 
                variants={imageVariants}
                viewport={{once: true, amount: 0.8}}/>
            <section className={styles.company}>
                <motion.div 
                    className={styles.company_desc} 
                    initial='hidden' 
                    whileInView='show' 
                    variants={descVariants}
                    viewport={{once: true, amount: 0.8}}>
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
                        viewport={{once: true, amount: 0.8}}/>
                    <motion.h1 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.8}}>
                        Experienced Individuals
                    </motion.h1>
                    <motion.p 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.8}}>
                            Our network is made up of highly 
                            experienced professionals 
                            who are passionate about what they do.
                    </motion.p>
                    <motion.img 
                        src={icons['cog']} 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.8}}/>
                    <motion.h1 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.8}}>
                        Easy to Implement
                    </motion.h1>
                    <motion.p 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.8}}>
                            Our processes have been refined over 
                            years of implementation meaning our 
                            teams always deliver.
                    </motion.p>
                    <motion.img 
                        src={icons['chart']} 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.8}}/>
                    <motion.h1 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.8}}>
                        Enhanced Productivity
                    </motion.h1>
                    <motion.p 
                        initial='hidden' 
                        whileInView='show' 
                        variants={detailVariants}
                        viewport={{once: true, amount: 0.8}}>
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