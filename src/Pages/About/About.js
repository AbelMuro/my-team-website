import React from 'react';
import Header from './Header';
import MeetDirectors from './MeetDirectors';
import Clients from './Clients';
import ReadyToGetStarted from '~/Components/ReadyToGetStarted';
import styles from './styles.module.css';

function About() {
    return(
        <main>
            <Header/>
            <MeetDirectors/>
            <Clients/>
            <ReadyToGetStarted/>
        </main>
    )
}

export default About;