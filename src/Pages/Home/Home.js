import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import CompanyDetails from './CompanyDetails';
import CompanyReviews from './CompanyReviews';
import ReadyToGetStarted from './ReadyToGetStarted';
import images from './images';
import styles from './styles.module.css';

function Home() {
    return(
        <main>
            <img className={styles.darkCircle} src={images['darkCircle']}/>
            <NavBar/>     
            <Header/>
            <CompanyDetails/>
            <CompanyReviews/>
            <ReadyToGetStarted/>
        </main>
    )
}

export default Home;