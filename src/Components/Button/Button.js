import React from 'react';
import styles from './Button.module.css';

export const Button = ({buttonText}) => (
    <button className={styles.base}>{buttonText}</button>
);