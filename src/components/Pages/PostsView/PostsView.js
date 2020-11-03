import React from 'react';
import { observer } from 'mobx-react-lite'

export const PostsView = ({
    posts
}) => {
    return (
        <div>
            {posts.map(post => <div key={post.id}>{post.post}</div>)}
        </div>
    );
};
