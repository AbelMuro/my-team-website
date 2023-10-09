import React from 'react';
import MobileNavBar from './MobileNavBar';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import { useNavigate } from 'react-router-dom';
import icons from '~/Common/icons';
import styles from './styles.module.css';
import {motion} from 'framer-motion'

function NavBar() {
    const navigate = useNavigate();
    const mobile = useMediaQuery('(max-width: 620px)');

    const linkVariants = {
        hidden: {
            opacity: 0,
            y: -100
        },
        show: {
            opacity: 1,
            y: 0,
        }
    }

    const handleLink = (e) => {
        const link = e.target.getAttribute('data-link');
        navigate(link);
    }

    return mobile ? <MobileNavBar/> :
        <motion.nav className={styles.nav} initial={'hidden'} whileInView={'show'} viewport={{once: true}} transition={{staggerChildren: 0.4}}>
            <ul className={styles.nav_links}>
                <motion.li className={styles.nav_link} variants={linkVariants}>
                    <img className={styles.nav_logo} src={icons['logo']}/>
                </motion.li>
                <motion.li className={styles.nav_link} variants={linkVariants} data-link='/' onClick={handleLink}>
                    home
                </motion.li>
                <motion.li className={styles.nav_link} variants={linkVariants} data-link='/about' onClick={handleLink}>
                    about
                </motion.li>
            </ul>
            <motion.button className={styles.nav_contact_button} variants={linkVariants} data-link='/contact' onClick={handleLink}>
                contact us
            </motion.button>
        </motion.nav>
    
}

export default NavBar;