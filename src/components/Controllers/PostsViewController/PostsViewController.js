import React from 'react';
import { PostsView } from '../../pages/PostsView/PostsView';
import { observer } from 'mobx-react-lite'

export const PostsViewController = observer(({
    viewModel,
}) => {
    const getPosts = () => {
        return viewModel.getPosts().slice();
    }

    return (
        <PostsView posts={getPosts()} />
    );
})

export default PostsViewController;
