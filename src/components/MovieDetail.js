import React from 'react';
// import { BackHandler } from 'react-native';

import { withDetail } from '../queries.js';
import MovieDetailStyle from './MovieDetail.style.js';
import OurView from './primitives/View';
import OurImage from './primitives/Image';
import OurText from './primitives/Text';

function MovieDetail(props) {
    if (props.data.loading) {
        return null;
    }

    // BackHandler.addEventListener('hardwareBackPress', function() {
    //     if (props.onClose) {
    //         props.onClose();
    //         return true;
    //     }

    //     return false;

    // });

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
                <OurImage url={imageUrl} alt={`${node.name} detail cover`} style={{width: 400, height: 200}} />
            </OurView>
        );
    }

    return (
        <OurView style={MovieDetailStyle.wrapperStyle}>
            <OurView style={MovieDetailStyle.containerStyle}>
                <OurView onClick={props.onClose}>
                    <OurText style={MovieDetailStyle.closeButtonStyle}>X</OurText>
                </OurView>
                {image}
                <OurText style={MovieDetailStyle.titleStyle}>{node.name}</OurText>
                <OurText style={MovieDetailStyle.descriptionStyle}>{node.description}</OurText>
            </OurView>
        </OurView>
    );
}

export default withDetail(MovieDetail);
