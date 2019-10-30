import React from 'react';
import { Modal } from 'react-native';

import { withDetail } from '../queries.js';
import MovieDetailStyle from './MovieDetail.style.js';
import MovieDetailBase from './MovieDetailBase.js';
import OurView from './primitives/View';

function MovieDetail(props) {
    if (props.data.loading) {
        return null;
    }

    return (
        <Modal
            transparent={true}
            onRequestClose={props.onClose}
        >
            <OurView style={MovieDetailStyle.wrapperStyle}>
                <MovieDetailBase { ...props } />
            </OurView>
        </Modal>
    );
}

export default withDetail(MovieDetail);
