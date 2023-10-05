import React from 'react';
import styles from './styles.module.css';
import images from './images';

function CompanyReviews() {
    return(
        <div className={styles.background}>
            <img className={styles.darkCircle} src={images['darkCircle']}/>
            <section className={styles.company}>
                <h1 className={styles.company_title}>
                    Delivering real results for top companies. 
                    Some of our <span>success stories.</span>
                </h1>
                <div className={styles.company_review}>
                    <img src={images['quotes']}/>
                    <q>
                        The team perfectly fit the 
                        specialized skill set required. 
                        They focused on the most essential 
                        features helping us launch the 
                        platform eight months faster than 
                        planned.
                    </q>
                    <h2>
                        Kady Baker
                    </h2>
                    <i>
                        Product Manager at Bookmark
                    </i>
                    <img className={styles.avatar} src={images['kady']}/>
                </div>
                <div className={styles.company_review}>
                    <img src={images['quotes']}/>
                    <q>
                        We needed to automate our 
                        entire onboarding process. 
                        The team came in and built 
                        out the whole journey. 
                        Since going live, user 
                        retention has gone 
                        through the roof!”
                    </q>
                    <h2>
                        Aiysha Reese
                    </h2>
                    <i>
                        Founder of Manage
                    </i>
                    <img className={styles.avatar} src={images['aiysha']}/>
                </div>
                <div className={styles.company_review}>
                    <img src={images['quotes']}/>
                    <q>
                        Amazing. Our team helped us build an app that 
                        delivered a new experience for hiring a physio, 
                        The launch was an instant success with 
                        100k downloads in the first month.
                    </q>
                    <h2>
                        Arthur Clarke
                    </h2>
                    <i>
                        Co-founder of MyPhysio
                    </i>
                    <img className={styles.avatar} src={images['arthur']}/>
                </div>
            </section>            
        </div>
 
    )
}

export default CompanyReviews;