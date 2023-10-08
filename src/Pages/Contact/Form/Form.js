import React from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import styles from './styles.module.css';

function Form() {

    const handleSubmit = (e) => {
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <TextInput type='text' placeholder='Name'/>
            <TextInput type='email' placeholder='Email Address'/>
            <TextInput type='text' placeholder='Company Name'/>
            <TextInput type='text' placeholder='Title'/>
            <TextArea/>
            <input type='submit' className={styles.submit}/>
        </form>
    )
}

export default Form;