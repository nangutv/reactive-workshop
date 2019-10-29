import React, { PureComponent } from 'react';

import { withMovies } from '../queries.js';
import MovieDetail from './MovieDetail';
import OurView from './primitives/View';
import OurText from './primitives/Text';
import OurImage from './primitives/Image';
import OurScrollView from './primitives/ScrollView';
import MoviesStyle from './Movies.style.js';

class Movies extends PureComponent {
    _openMovieDetail = (movieId) => {
        this.setState({ movieId });
    };

    _onMovieDetailClose = () => {
        this.setState({ movieId: null });
    };

    _renderMovie(movie) {
        return (
            <OurView key={movie.id} style={MoviesStyle.movieContainerStyle} onClick={() => this._openMovieDetail(movie.id)}>
                <OurImage url={movie.media.portrait} alt={`${movie.name} movie cover`} style={MoviesStyle.imageSize} />
                <OurText style={MoviesStyle.titleStyle}>{movie.name}</OurText>
            </OurView>
        );
    }

    render() {
        const {props} = this;
        let content;
        let movieDetail;

        if (this.state && this.state.movieId != null) {
            movieDetail = <MovieDetail movieId={this.state.movieId} onClose={this._onMovieDetailClose} />;
        }

        if (props.data.loading) {
            content = <OurText style={MoviesStyle.loadingStyle}>Loading...</OurText>;
        } else {
            const { edges } = props.data.search;

            content = edges.map((edge) => {
                return this._renderMovie(edge.node);
            });
        }

        return (
            <OurScrollView style={{ width: '100%', height: '100%'}}>
                <OurView style={MoviesStyle.containerStyle}>
                    {content}
                    {movieDetail}
                </OurView>
            </OurScrollView>
        );
    }
}

export default withMovies(Movies);
