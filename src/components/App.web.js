import { ApolloProvider } from 'react-apollo';
import React from 'react';

import client from '../apolloClient.js';
import Movies from './Movies';

const containerStyle = {
    backgroundColor: '#111111',
    position: 'absolute',
    width: '100%',
    minHeight: '100%',
    margin: 0,
    top: 0,
    left: 0,
};


function App(props) {
    return (
        <ApolloProvider client={client}>
            <div style={containerStyle}>
                <Movies />
            </div>
        </ApolloProvider>
    );
}

export default App;
