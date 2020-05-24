import React from 'react';
import styles from './Button.css';

export default function Button({ text, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>{text}</button>
    )
};
