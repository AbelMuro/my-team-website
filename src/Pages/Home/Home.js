import React from 'react';
import Header from './Header';
import CompanyDetails from './CompanyDetails';
import CompanyReviews from './CompanyReviews';
import ReadyToGetStarted from '~/Components/ReadyToGetStarted';
import images from './images';
import styles from './styles.module.css';
import {motion} from 'framer-motion';

function Home() {

    const variants = {
        hidden: {
            scale: 0
        },
        show: {
            scale: 1,
            transition: {type: 'spring', damping: 6, stiffness: 150, delay: 0.4}
        }
    }


    return(
        <main>
            <motion.img 
                className={styles.darkCircle} 
                src={images['darkCircle']}
                initial={'hidden'}
                animate={'show'}
                variants={variants}/>
            <Header/>
            <CompanyDetails/>
            <CompanyReviews/>
            <ReadyToGetStarted/>
        </main>
    )
}

export default Home;