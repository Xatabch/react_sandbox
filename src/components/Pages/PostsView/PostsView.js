import React from 'react';

export const PostsView = ({
    posts
}) => {
    return (
        <div>
            {posts.map(post => <div key={post.id}>{post.post}</div>)}
        </div>
    );
};
