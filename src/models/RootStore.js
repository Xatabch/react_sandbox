import { PostStore } from './domain/PostStore';
import APIService from '../services/api/index';
 
class RootStore {
    static type = {
        POST_STORE: 'postStore'
    }

    constructor() {
        const apiService = new APIService();

        this.postStore = new PostStore(apiService);
    }

    getStores = () => ({
        [RootStore.type.POST_STORE]: this.postStore
    })
}

export default RootStore;