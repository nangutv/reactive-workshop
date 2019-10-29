import { ApolloProvider } from 'react-apollo';
import React from 'react';

import client from '../apolloClient.js';
import Movies from './Movies';
import OurView from './primitives/View';

const containerStyle = {
    backgroundColor: '#111111',
    position: 'absolute',
    margin: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
};


function App(props) {
    return (
        <ApolloProvider client={client}>
            <OurView style={containerStyle}>
                <Movies />
            </OurView>
        </ApolloProvider>
    );
}

export default App;
