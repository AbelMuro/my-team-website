import React from 'react';
import MobileNavBar from './MobileNavBar';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import { useNavigate } from 'react-router-dom';
import icons from '~/Common/icons';
import styles from './styles.module.css';

function NavBar() {
    const navigate = useNavigate();
    const mobile = useMediaQuery('(max-width: 620px)');


    const handleLink = (e) => {
        const link = e.target.getAttribute('data-link');
        navigate(link);
    }

    return mobile ? <MobileNavBar/> :
        <nav className={styles.nav}>
            <ul className={styles.nav_links}>
                <li className={styles.nav_link}>
                    <img className={styles.nav_logo} src={icons['logo']}/>
                </li>
                <li className={styles.nav_link} data-link='/' onClick={handleLink}>
                    home
                </li>
                <li className={styles.nav_link} data-link='/about' onClick={handleLink}>
                    about
                </li>
            </ul>
            <button className={styles.nav_contact_button} data-link='/contact' onClick={handleLink}>
                contact us
            </button>
        </nav>
    
}

export default NavBar;