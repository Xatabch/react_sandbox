import React from 'react';
import styles from './Post.css';

export default function Post({ title, subtitle }) {
    return (
        <div className={styles.post}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
        </div>
    )
};
