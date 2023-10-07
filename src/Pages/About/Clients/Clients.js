import React from 'react';
import logos from './logos';
import styles from './styles.module.css';
import images from './images';

function Clients() {
    return(
        <section className={styles.background}>
            <img className={styles.greenCircle} src={images['greenCircle']}/>
            <div className={styles.clients}>
                <h1 className={styles.clients_title}>
                    Some of our clients
                </h1>
                <img className={styles.vergeLogo} src={logos['verge']}/>        
                <img className={styles.jakartaLogo} src={logos['jakarta']}/>              
                <img className={styles.guardianLogo} src={logos['guardian']}/>                 
                <img className={styles.techRadarLogo} src={logos['techRadar']}/>                                     
                <img className={styles.gadgetsLogo} src={logos['gadgets']}/>
            </div>
        </section>
    )
}

export default Clients;