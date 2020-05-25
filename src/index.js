import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './Containers/App';
import 'normalize.css';
import {getFCP} from 'web-vitals';

Sentry.init({dsn: "https://5556d1476bd048978cf71508fa0208c8@o397203.ingest.sentry.io/5251478"});

// Measure and log the current FCP value,
// any time it's ready to be reported.
getFCP(console.log);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)