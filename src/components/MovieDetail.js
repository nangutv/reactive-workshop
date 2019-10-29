import React from 'react';

import { withDetail } from '../queries.js';
import MovieDetailStyle from './MovieDetail.style.js';
import OurView from './primitives/View';
import OurImage from './primitives/Image';

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
            <OurView style={MovieDetailStyle.imageContainerStyle}>
                <OurImage url={imageUrl} alt={`${node.name} movie cover`} />
            </OurView>
        );
    }

    return (
        <OurView style={MovieDetailStyle.wrapperStyle}>
            <OurView style={MovieDetailStyle.containerStyle}>
                <OurView style={MovieDetailStyle.closeButtonStyle} onClick={props.onClose}>X</OurView>
                {image}
                <OurView style={MovieDetailStyle.titleStyle}>{node.name}</OurView>
                <OurView style={MovieDetailStyle.descriptionStyle}>{node.description}</OurView>
            </OurView>
        </OurView>
    );
}

export default withDetail(MovieDetail);
