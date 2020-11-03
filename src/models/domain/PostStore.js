import { makeAutoObservable, runInAction } from 'mobx';
import uuid from 'node-uuid'

export class PostStore {
    authorStore
    transportLayer
    posts = []
    isLoading = true

    constructor(transportLayer) {
        makeAutoObservable(this);
        // this.authorStore = authorStore;
        this.transportLayer = transportLayer;
        // this.transportLayer.onReceivePostUpdate(updatePost => this.updatePostFromServer(updatePost));
        this.loadPosts();
    }

    loadPosts() {
        this.isLoading = true;
        this.transportLayer.fetchPosts().then(fetchedPosts => {
            runInAction(() => {
                fetchedPosts.forEach(json => this.updatePostFromServer(json));
                this.isLoading = false;
            });
        });
    }

    updatePostFromServer(json) {
        let post = this.posts.find(post => post.id === json.id);
        if (!post) {
            post = new Post(this, json.id);
            this.posts.push(post);
        }
        if (json.isDeleted) {
            this.removePost(post);
        } else {
            post.updateFromJson(json);
        }
    }
}

class Post {
    id = null;
    post = '';
    // author = null;
    store = null;

    constructor(store, id = uuid.v4()) {
        makeAutoObservable(this, {
            id: false,
            store: false,
        });
        this.store = store;
        this.id = id;
    }

    updateFromJson(json) {
        this.post = json.header;
    }
}

export default Post;