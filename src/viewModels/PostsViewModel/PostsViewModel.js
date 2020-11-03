import { makeAutoObservable } from 'mobx';

class PostViewModel {
    constructor(postStore) {
        makeAutoObservable(this);
        this.store = postStore;
    }

    getPosts() {
        return this.store.posts;
    }
}

export default PostViewModel;