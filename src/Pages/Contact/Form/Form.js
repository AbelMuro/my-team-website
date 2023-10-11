import React from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import {buttonVariants} from './Variants';

function Form() {

    const handleSubmit = (e) => {
    }

    return(
        <motion.form 
            className={styles.form} 
            onSubmit={handleSubmit}
            initial='hidden'
            whileInView='show'
            viewport={{once: true, amount: 0.4}}
            transition={{staggerChildren: 0.4}}>
                <TextInput type='text' placeholder='Name'/>
                <TextInput type='email' placeholder='Email Address'/>
                <TextInput type='text' placeholder='Company Name'/>
                <TextInput type='text' placeholder='Title'/>
                <TextArea/>
                <motion.input type='submit' className={styles.submit} variants={buttonVariants}/>
        </motion.form>
    )
}

export default Form;