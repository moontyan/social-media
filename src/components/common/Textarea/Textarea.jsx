import React from 'react'
import styles from './Textarea.module.css'

function Textarea({input, meta, ...props}) {
    return (
        <div className={meta.touched && meta.error ? styles.formValidation : null}>
            {meta.touched && meta.error ? <span>{meta.error}</span> : null}
            <textarea {...input} {...props}></textarea>
        </div>
    )
}

export default Textarea;