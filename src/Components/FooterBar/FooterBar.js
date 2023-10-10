import React from 'react';
import icons from '~/Common/icons';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import {variants} from './Variants';

function FooterBar() {
    const navigate = useNavigate();

    const handleLink = (e) => {
        const link = e.target.getAttribute('data-link');
        window.scrollTo(0, 0);
        navigate(link);
    }

    return(
        <footer className={styles.footer}>
            <motion.div className={styles.footer_content}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 0.6}}
                transition={{staggerChildren: 0.3}}>
                <motion.img 
                    className={styles.footer_logo} 
                    variants={variants}
                    src={icons['logo']}/>
                <motion.address 
                    className={styles.footer_address}
                    variants={variants}>
                        987 Hillcrest Lane <br/>
                        Irvine, CA<br/>
                        California 92714<br/>
                        Call Us : 949-833-7432
                </motion.address>
                <motion.ul 
                    className={styles.footer_socialLinks}
                    transition={{staggerChildren: 0.2, staggerDirection: 'reverse'}}>
                    <motion.li variants={variants}></motion.li>
                    <motion.li variants={variants}></motion.li>
                    <motion.li variants={variants}></motion.li>
                </motion.ul>
                <motion.ul 
                    className={styles.footer_links}
                    transition={{staggerChildren: 0.2}}>
                    <motion.li data-link='/' onClick={handleLink} variants={variants}>
                        home
                    </motion.li>
                    <motion.li data-link='/about' onClick={handleLink} variants={variants}>
                        about
                    </motion.li>
                </motion.ul>  
                <motion.small 
                    className={styles.footer_copyright}
                    variants={variants}>
                        Copyright 2020. All Rights Reserved
                </motion.small>              
            </motion.div>
        </footer>
    )
}

export default FooterBar;