import React from 'react';

// Components
import PostsList from '../Components/PostsList/PostsList';
import Button from '../Components/Button/Button';

// API
import API from '../Service/API';

// Styles
import styles from './App.css'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }

        this.getPosts = this.getPosts.bind(this);
    }

    // Данное приложение не направлено на хорошее написание
    // Короче простите...
    async getPosts() {
        const response = await API.getPosts();

        this.setState({
            posts: response.data.posts
        });
    }


    render() {
        return (
            <div className={styles.app}>
                <Button text="Получить посты" onClick={this.getPosts}/>
                <PostsList posts={this.state.posts}/>
            </div>
        );
    }
}