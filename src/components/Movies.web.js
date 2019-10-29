import React, { PureComponent } from 'react';

import { withMovies } from '../queries.js';
import MovieDetail from './MovieDetail';
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
            <div key={movie.id} style={MoviesStyle.movieContainerStyle} onClick={() => this._openMovieDetail(movie.id)}>
                <img src={movie.media.portrait} alt={`${movie.name} movie cover`} />
                <span style={MoviesStyle.titleStyle}>{movie.name}</span>
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
            content = <span style={MoviesStyle.loadingStyle}>Loading...</span>;
        } else {
            const { edges } = props.data.search;

            content = edges.map((edge) => {
                return this._renderMovie(edge.node);
            });
        }

        return (
            <div style={MoviesStyle.containerStyle}>
                {content}
                {movieDetail}
            </div>
        );
    }
}

export default withMovies(Movies);
