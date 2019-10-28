import { ApolloProvider } from 'react-apollo';
import { Text } from 'react-native';
import React from 'react';

import { withData } from '../queries.js';
import client from '../apolloClient.js';

function Content(props) {
    if (props.data.loading ) {
        return <Text>Loading...</Text>;
    }

    const { edges } = props.data.search;

    return (
        edges.map((edge) => {
            return <Text key={edge.node.id}>{edge.node.name}</Text>;
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
