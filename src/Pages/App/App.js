import React, { Component } from 'react';
import { connect } from 'react-redux';
// import 'normalize.css';

// Components
import { Timeline } from '../../Components/Timeline/Timeline';
import { Column } from '../../Components/Column/Column';

// Selectors
import * as counterSelectors from '../../Stores/countReducer/reducer';
import * as authSelectors from '../../Stores/authReducer/reducer';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Timeline />
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