import { ApolloProvider } from 'react-apollo';
import React from 'react';

import client from '../apolloClient.js';
import Movies from './Movies';
import OurView from './primitives/View';

const containerStyle = {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: "row",
    position: 'absolute',
    margin: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#111111',
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
