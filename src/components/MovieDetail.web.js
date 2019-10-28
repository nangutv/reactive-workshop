import React from 'react';

import { withDetail } from '../queries.js';

const wrapperStyle = {
    position: 'fixed',
    textAlign: 'left',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 100,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
};

const containerStyle = {
    backgroundColor: '#333333',
    width: 900,
    minHeight: 400,
    margin: 'auto',
    color: '#ffffff',
    borderRadius: 20,
};

const titleStyle = {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 20,
};

const descriptionStyle = {
    fontSize: 20,
    padding: 20,
    paddingBottom: 30,
};

const imageContainerStyle = {
    textAlign: 'center',
};

const closeButtonStyle = {
    float: 'right',
    width: 50,
    height: 50,
    fontSize: 30,
    padding: 10,
    textAlign: 'right',
};

function MovieDetail(props) {
    if (props.data.loading) {
        return null;
    }

    const { node } = props.data.search.edges[0];

    let image;
    let imageUrl;

    if (node.media.landscape) {
        imageUrl = node.media.landscape;
    } else if (node.media.screenshots && node.media.screenshots[0]) {
        imageUrl = node.media.screenshots[0];
    }

    if (imageUrl) {
        image = (
            <div style={imageContainerStyle}>
                <img src={imageUrl} alt={`${node.name} movie cover`} />
            </div>
        );
    }

    return (
        <div style={wrapperStyle}>
            <div style={containerStyle}>
                <div style={closeButtonStyle} onClick={props.onClose}>X</div>
                {image}
                <div style={titleStyle}>{node.name}</div>
                <div style={descriptionStyle}>{node.description}</div>
            </div>
        </div>
    );
}

export default withDetail(MovieDetail);
