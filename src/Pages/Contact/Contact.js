import React from 'react';
import Form from './Form';
import images from './images';
import styles from './styles.module.css';

function Contact() {
    return(
        <main className={styles.container}>
            <img className={styles.darkCircle} src={images['darkCircle']}/>
            <img className={styles.pinkCircle} src={images['pinkCircle']}/>
            <div className={styles.contact}>
                <section className={styles.contact_intro}>
                    <h1>
                        Contact
                    </h1>
                    <h2>
                        Ask us about
                    </h2>
                    <ul>
                        <li>
                            The quality of our talent network
                        </li>
                        <li>
                            Usage & implementation of our software
                        </li>
                        <li>
                            How we help drive innovation
                        </li>
                    </ul>
                </section>
                <Form/>
            </div>
        </main>

        )
}

export default Contact;
