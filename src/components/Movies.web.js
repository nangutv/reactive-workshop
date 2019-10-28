import React, { PureComponent } from 'react';

import { withMovies } from '../queries.js';
import { COVER_WIDTH, COVER_HEIGHT } from '../constants.js';
import MovieDetail from './MovieDetail';

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

class Movies extends PureComponent {
    _openMovieDetail = (movieId) => {
        this.setState({ movieId });
    };

    _onMovieDetailClose = () => {
        this.setState({ movieId: null });
    };

    _renderMovie(movie) {
        return (
            <div key={movie.id} style={movieContainerStyle} onClick={() => this._openMovieDetail(movie.id)}>
                <img src={movie.media.portrait} alt={`${movie.name} movie cover`} />
                <span style={titleStyle}>{movie.name}</span>
            </div>
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
            content = <span style={loadingStyle}>Loading...</span>;
        } else {
            const { edges } = props.data.search;

            content = edges.map((edge) => {
                return this._renderMovie(edge.node);
            });
        }

        return (
            <div style={containerStyle}>
                {content}
                {movieDetail}
            </div>
        );
    }
}

export default withMovies(Movies);
