import React from 'react';
import styles from './styles.module.css';
import images from './images';

function ReadyToGetStarted() {
    return(
        <section className={styles.background}>
            <img className={styles.darkCircle} src={images['darkCircle']}/>
            <div className={styles.content}>
                <h1>
                    Ready to get started?
                </h1>
                <button>
                    contact us
                </button>
            </div>
        </section>
    )
}

export default ReadyToGetStarted;