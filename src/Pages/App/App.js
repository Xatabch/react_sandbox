import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as counterSelectors from '../../Stores/countReducer/reducer';
import * as authSelectors from '../../Stores/authReducer/reducer';

class App extends Component {
    onIncrementClick() {
        this.props.dispatch({type: 'INCREMENT'});
    }

    onAuthClick() {
        this.props.dispatch({type: 'LOGIN_REQUEST', user: 'Ivan', passsword: '123'});
    }

    render() {
        return (
            <div className="app">
                <div className="counter">{this.props.counter}</div>
                <button onClick={this.onIncrementClick.bind(this)}>Increment</button>
                <button onClick={this.onAuthClick.bind(this)}>Auth</button>
                {this.props.isAuthSuccess ? <div className="authSuccess">Success Auth</div> : ""}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: counterSelectors.getCounter(state),
        isAuthSuccess: authSelectors.isAuthSuccess(state)
    }
}

export default connect(mapStateToProps)(App);