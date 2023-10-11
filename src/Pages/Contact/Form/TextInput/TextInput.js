import React, {useRef, useState, useEffect} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import { inputVariants } from './Variants';

function TextInput({type, placeholder}) {
    const [text, setText] = useState('');
    const errorMessageRef = useRef();
    const invalidEmailRef = useRef();
    const inputRef = useRef();


    const emptyErrorStyling = (display) => {
        errorMessageRef.current.style.display = display ? 'block' : '';
        inputRef.current.style.borderBottomColor = display ? '#F67E7E' : '';
        inputRef.current.style.color = display ? '#F67E7E' : '';
        inputRef.current.style.setProperty('--placeholder', display ? 'rgba(246, 126, 126, 0.6)' : 'rgba(255, 255, 255, 0.6)');        
    }

    const invalidEmailStyling = (display) => {
        invalidEmailRef.current.style.display = display ? 'block' : '';
        inputRef.current.style.borderBottomColor = display ? '#F67E7E' : '';
        inputRef.current.style.color = display ? '#F67E7E' : '';
        inputRef.current.style.setProperty('--placeholder', display ? 'rgba(246, 126, 126, 0.6)' : 'rgba(255, 255, 255, 0.6)');
    }


    const handleChange = (e) => {
        e.target.setCustomValidity('');
        setText(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        const typeMismatch = e.target.validity.typeMismatch;

        if(isEmpty)
            emptyErrorStyling(true);
        
        else if(typeMismatch)
            invalidEmailStyling(true) 
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        const isEmpty = e.target.validity.valueMissing;
        if(isEmpty)
            emptyErrorStyling(true);
        else 
            invalidEmailStyling(false)
    }

    useEffect(() => {
        emptyErrorStyling(false);
        invalidEmailStyling(false);
    }, [text])

    return(
        <motion.fieldset className={styles.container} variants={inputVariants}>
            <input 
                type={type} 
                value={text}
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                placeholder={placeholder} 
                className={styles.input} 
                ref={inputRef}
                required/>
            <div className={styles.errorMessage} ref={errorMessageRef}>
                This field is required
            </div>
            <div className={styles.errorMessage} ref={invalidEmailRef}>
                Not valid email
            </div>
        </motion.fieldset>
    )
}

export default TextInput;