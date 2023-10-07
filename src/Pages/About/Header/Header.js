import React from 'react';
import styles from './styles.module.css';
import images from './images';

function Header() {
    return(
        <header className={styles.background}>
            <img className={styles.pinkCircle} src={images['pinkCircle']}/>
            <section className={styles.header}>
                <h1 className={styles.header_title}>
                    About
                </h1>
                <div className={styles.header_desc}>
                    <hr/>
                    <p>
                        We help companies build dynamic teams 
                        made up of top global talent. 
                        Using our network of passionate 
                        professionals we drive innovation 
                        and deliver incredible outcomes. 
                        Talented, diverse teams shape the 
                        best products and experiences. 
                        We’ll bring those teams to you.
                    </p>
                </div>
            </section>            
        </header>

    )
}

export default Header;