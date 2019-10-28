import { ApolloProvider } from 'react-apollo';
import React from 'react';

import { withData } from '../queries.js';
import client from '../apolloClient.js';

function Content(props) {
    if (props.data.loading) {
        return <p>Loading...</p>;
    }

    const { edges } = props.data.search;

    return (
        edges.map((edge) => {
            return <p key={edge.node.id}>{edge.node.name}</p>;
        })
    );
}

const ContentWithData = withData(Content);

function App(props) {
    return (
        <ApolloProvider client={client}>
            <ContentWithData />
        </ApolloProvider>
    );
}

export default App;
