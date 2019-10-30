import React from 'react';

import { withDetail } from '../queries.js';
import MovieDetailStyle from './MovieDetail.style.js';
import OurView from './primitives/View';
import MovieDetailBase from './MovieDetailBase.js';

function MovieDetail(props) {
    if (props.data.loading) {
        return null;
    }

    return (
        <OurView style={MovieDetailStyle.wrapperStyle}>
            <MovieDetailBase { ...props } />
        </OurView>
    );
}

export default withDetail(MovieDetail);
