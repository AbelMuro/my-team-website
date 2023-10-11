import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import {inputVariants} from './Variants';

function TextArea() {
    const [text, setText] = useState('');
    const inputRef = useRef();
    const errorMessageRef = useRef();

    const emptyErrorStyling = (display) => {
        errorMessageRef.current.style.display = display ? 'block' : '';
        inputRef.current.style.borderBottomColor = display ? '#F67E7E' : '';
        inputRef.current.style.color = display ? '#F67E7E' : '';
        inputRef.current.style.setProperty('--placeholder', display ? 'rgba(246, 126, 126, 0.6)' : 'rgba(255, 255, 255, 0.6)');          
    }
      

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            emptyErrorStyling(true);
    }

    const handleInvalid = (e) => {
        emptyErrorStyling(true);
    }

    useEffect(() => {
        emptyErrorStyling(false);
    }, [text])


    return(
        <motion.fieldset className={styles.container} variants={inputVariants}>
            <textarea 
                name='textarea' 
                value={text}
                onBlur={handleBlur}
                onChange={handleChange}
                onInvalid={handleInvalid}
                className={styles.textarea} 
                placeholder='Message'
                ref={inputRef}
                required 
                />       
            <div className={styles.errorMessage} ref={errorMessageRef}>
                This field is required
            </div>
        </motion.fieldset>

    )
}

export default TextArea;