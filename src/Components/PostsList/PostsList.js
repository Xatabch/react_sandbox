import React from 'react';
import styles from './PostsList.css';

import Post from '../Post/Post';

export default function PostsList({ posts }) {
    return (
        <div className={styles.postList}>
            {posts.map((post, i) => 
                <Post key={`p-${i}`} title={post.title} subtitle={post.subtitle}/>
            )}
        </div>
    )
}