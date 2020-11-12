import React from 'react';
import {Button} from '../../Components/Button/Button';

export default class App extends React.Component {
    render() {
        return (
            <>
                <div>Hello world!</div>
                <Button buttonText={'click'} />
            </>
        );
    }
}