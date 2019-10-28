import React from 'react';

import { withData } from '../queries.js';

function Movies(props) {
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


export default withData(Movies);
