import React from 'react';
import icons from '~/Common/icons';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

function FooterBar() {
    const navigate = useNavigate();

    const handleLink = (e) => {
        const link = e.target.getAttribute('data-link');
        window.scrollTo(0, 0);
        navigate(link);
    }

    return(
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <img className={styles.footer_logo} src={icons['logo']}/>
                <address className={styles.footer_address}>
                    987 Hillcrest Lane <br/>
                    Irvine, CA<br/>
                    California 92714<br/>
                    Call Us : 949-833-7432
                </address>
                <ul className={styles.footer_socialLinks}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul className={styles.footer_links}>
                    <li data-link='/' onClick={handleLink}>
                        home
                    </li>
                    <li data-link='/about' onClick={handleLink}>
                        about
                    </li>
                </ul>  
                <small className={styles.footer_copyright}>
                    Copyright 2020. All Rights Reserved
                </small>              
            </div>
        </footer>
    )
}

export default FooterBar;