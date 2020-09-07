import React from 'react';

interface AppProps {
    lol?: string;
}

export const App: React.FC<AppProps> = () => {
    return (<div>Hello world!</div>);
}