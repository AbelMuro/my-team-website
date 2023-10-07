import React from 'react';
import styles from './styles.module.css';

//this is where i left off
function Contact() {
    return(
            <main className={styles.contact}>
                <section className={styles.contant_intro}>
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
            </main>
        )
}