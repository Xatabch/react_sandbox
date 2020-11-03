import React from 'react';
import { inject } from 'mobx-react';
import PostsViewController from '../components/Controllers/PostsViewController/PostsViewController';
import PostViewModel from '../viewModels/PostsViewModel/PostsViewModel';
import RootStore from '../models/RootStore';

@inject(RootStore.type.POST_STORE)
class PostsProvider extends React.Component {
    constructor(props) {
        super(props);
        const postStore = props[RootStore.type.POST_STORE];

        this.viewModel = new PostViewModel(postStore);
    }

    render() {
        return (<PostsViewController viewModel={this.viewModel} />);
    }
}

export default PostsProvider;