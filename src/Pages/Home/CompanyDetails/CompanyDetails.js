import React from 'react';
import styles from './styles.module.css';
import icons from './icons';
import images from './images';

function CompanyDetails() {
    return(
        <div className={styles.background}>
            <img className={styles.pinkCircle} src={images['pinkCircle']}/>
            <img className={styles.darkCircle} src={images['darkCircle']}/>
            <img className={styles.darkSquare} src={images['darkSquare']}/>
            <section className={styles.company}>
                <div className={styles.company_desc}>
                    <hr/>
                    <h1>
                        Build & manage distributed teams like no one else.
                    </h1>
                </div>

                <div className={styles.company_details}>
                    <img src={icons['person']}/>
                    <h1>
                        Experienced Individuals
                    </h1>
                    <p>
                        Our network is made up of highly 
                        experienced professionals 
                        who are passionate about what they do.
                    </p>
                    <img src={icons['cog']}/>
                    <h1>
                        Easy to Implement
                    </h1>
                    <p>
                        Our processes have been refined over 
                        years of implementation meaning our 
                        teams always deliver.
                    </p>
                    <img src={icons['chart']}/>
                    <h1>
                        Enhanced Productivity
                    </h1>
                    <p>
                        Our customized platform with 
                        in-built analytics helps you 
                        manage your distributed teams.
                    </p>
                </div>
            </section>            
        </div>
    )
}

export default CompanyDetails;