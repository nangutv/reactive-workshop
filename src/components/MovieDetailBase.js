import React from 'react';

import { withDetail } from '../queries.js';
import MovieDetailStyle from './MovieDetail.style.js';
import OurView from './primitives/View';
import OurImage from './primitives/Image';
import OurText from './primitives/Text';

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
                <OurImage url={imageUrl} alt={`${node.name} detail cover`} style={MovieDetailStyle.imageStyle} />
            </OurView>
        );
    }

    return (
        <OurView style={MovieDetailStyle.containerStyle}>
            <OurView onClick={props.onClose} style={MovieDetailStyle.closeButtonContainerStyle}>
                <OurText style={MovieDetailStyle.closeButtonStyle}>X</OurText>
            </OurView>
            {image}
            <OurText style={MovieDetailStyle.titleStyle}>{node.name}</OurText>
            <OurText style={MovieDetailStyle.descriptionStyle}>{node.description}</OurText>
        </OurView>
    );
}

export default withDetail(MovieDetail);
