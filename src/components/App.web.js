import { ApolloProvider } from 'react-apollo';
import React from 'react';

import client from '../apolloClient.js';
import Movies from './Movies';



function App(props) {
    return (
        <ApolloProvider client={client}>
            <Movies />
        </ApolloProvider>
    );
}

export default App;
