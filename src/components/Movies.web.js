import React from 'react';

import { withData } from '../queries.js';
import { COVER_WIDTH, COVER_HEIGHT } from '../constants.js';

const containerStyle = {
    padding: 20,
    textAlign: 'center',
};

const movieContainerStyle = {
    display: 'inline-block',
    height: COVER_HEIGHT,
    margin: 10,
    marginTop: 40,
    width: COVER_WIDTH,
};

const titleStyle = {
    color: '#ffffff',
    display: 'inline-block',
    fontFamily: 'sans-serif',
    fontSize: 20,
    height: 25,
    marginTop: 10,
    overflow: 'hidden',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: COVER_WIDTH,
};

const loadingStyle = {
    color: '#ffffff',
    fontFamily: 'sans-serif',
    fontSize: 50,
};

function renderMovie(movie) {
    return (
        <div key={movie.id} style={movieContainerStyle}>
            <img src={movie.media.portrait} alt={`${movie.name} movie cover`} />
            <span style={titleStyle}>{movie.name}</span>
        </div>
    );
}

function Movies(props) {
    let content;

    if (props.data.loading) {
        content = <span style={loadingStyle}>Loading...</span>;
    } else {
        const { edges } = props.data.search;

        content = edges.map((edge) => {
            return renderMovie(edge.node);
        });
    }

    return (
        <div style={containerStyle}>
            {content}
        </div>
    );
}


export default withData(Movies);
