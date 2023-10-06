import React from 'react';
import {motion, useCycle} from 'framer-motion';
import styles from './styles.module.css';
import icons from '~/Common/icons';
import { useNavigate } from 'react-router-dom';

function MobileNavBar() {
    const navigate = useNavigate();
    const [open, setOpen] = useCycle(false, true);

    const overlayVariants = {
        hidden: {
            clipPath: 'circle(0px at 400px 60px)',
            transition: {when: 'afterChildren', duration: 0.5},
        },
        show: {
            clipPath: 'circle(100%)',
            transition: {when: 'beforeChildren', duration: 0.7, staggerChildren: 0.2}
        }
    }

    const menuVariants = {
        hidden: {
            clipPath: 'circle(0px at 200px 60px)',
            transition: {when: 'afterChildren', duration: 0.5},
        },
        show: {
            clipPath: 'circle(100%)',
            transition: {when: 'beforeChildren', duration: 0.7, staggerChildren: 0.2}
        }
    }

    const linkVariants = {
        hidden: {
            y: -100,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1
        }
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleLink = (e) => {
        const link = e.target.getAttribute('data-link');
        navigate(link);
    }


    return(
        <>
            <nav className={styles.nav}>
                <img className={styles.nav_logo} src={icons['logo']}/>
                <button className={styles.menuButton} onClick={handleOpen}>
                    <div className={styles.menuIcon}></div>
                </button>
            </nav>  
            <motion.div className={styles.overlay} initial={false} animate={open ? 'show' : 'hidden'} variants={overlayVariants}>
                <motion.div className={styles.menu} variants={menuVariants}>
                    <motion.div className={styles.menu_close} onClick={handleOpen} variants={linkVariants}></motion.div>
                    <ul className={styles.menu_links}>
                        <motion.li className={styles.menu_link} variants={linkVariants} data-link='/' onClick={handleLink}>
                            home
                        </motion.li>
                        <motion.li className={styles.menu_link} variants={linkVariants} data-link='/about' onClick={handleLink}>
                            about
                        </motion.li>
                    </ul>
                    <motion.button className={styles.contact} variants={linkVariants} data-link='/contact' onClick={handleLink}>
                        contact us
                    </motion.button>
                </motion.div>              
            </motion.div>    

        </>

    )
}

export default MobileNavBar;