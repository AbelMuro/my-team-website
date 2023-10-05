import React from 'react';
import styles from './styles.module.css';

function Header() {
    return(
        <header className={styles.header}>
            <h1 className={styles.header_title}>
                Find the best <span>talent</span>
            </h1>
            <div className={styles.header_desc}>
                <hr/>
                <p>
                    Finding the right people and building 
                    high performing teams can be hard. 
                    Most companies aren’t tapping into 
                    the abundance of global talent. 
                    We’re about to change that.
                </p>
            </div>
        </header>
    )
}

export default Header;