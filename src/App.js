import React from 'react';
import { Provider } from 'mobx-react';
import PostsProvider from './providers/PostsProvider';
import RootStore from './models/RootStore';
import APIService from './services/api/index';

export const services = {
    APIService: new APIService()
}

const rootStore = new RootStore();

const App = () => (
    <Provider {...rootStore.getStores()}>
        <PostsProvider />
    </Provider>
)

export default App;