import React from 'react';
import MobileNavBar from './MobileNavBar';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import icons from '~/Common/icons';
import styles from './styles.module.css';

function NavBar() {
    const mobile = useMediaQuery('(max-width: 620px)');

    return mobile ? <MobileNavBar/> :
        <nav className={styles.nav}>
            <ul className={styles.nav_links}>
                <li className={styles.nav_link}>
                    <img className={styles.nav_logo} src={icons['logo']}/>
                </li>
                <li className={styles.nav_link}>
                    home
                </li>
                <li className={styles.nav_link}>
                    about
                </li>
            </ul>
            <button className={styles.nav_contact_button}>
                contact us
            </button>
        </nav>
    
}

export default NavBar;