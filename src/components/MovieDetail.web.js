import React from 'react';

import { withDetail } from '../queries.js';
import MovieDetailStyle from './MovieDetail.style.js';

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
            <div style={MovieDetailStyle.imageContainerStyle}>
                <img src={imageUrl} alt={`${node.name} movie cover`} />
            </div>
        );
    }

    return (
        <div style={MovieDetailStyle.wrapperStyle}>
            <div style={MovieDetailStyle.containerStyle}>
                <div style={MovieDetailStyle.closeButtonStyle} onClick={props.onClose}>X</div>
                {image}
                <div style={MovieDetailStyle.titleStyle}>{node.name}</div>
                <div style={MovieDetailStyle.descriptionStyle}>{node.description}</div>
            </div>
        </div>
    );
}

export default withDetail(MovieDetail);
