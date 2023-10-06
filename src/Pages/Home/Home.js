import React from 'react';
import Header from './Header';
import CompanyDetails from './CompanyDetails';
import CompanyReviews from './CompanyReviews';
import ReadyToGetStarted from '~/Components/ReadyToGetStarted';
import images from './images';
import styles from './styles.module.css';

function Home() {
    return(
        <main>
            <img className={styles.darkCircle} src={images['darkCircle']}/>
            <Header/>
            <CompanyDetails/>
            <CompanyReviews/>
            <ReadyToGetStarted/>
        </main>
    )
}

export default Home;