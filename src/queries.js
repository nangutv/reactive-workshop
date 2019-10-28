import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { COVER_WIDTH, COVER_HEIGHT } from './constants.js';

const DETAIL_QUERY = gql`
    query getSearch($movieId: [ID]) {
        search(
            id: $movieId
        ) {
            edges {
                node {
                    id
                    description
                    name
                    media {
                        landscape(width: 800, height: 300)
                        screenshots(width: 800, height: 300)
                    }
                }
            }
        }
    }
`;

const MOVIES_QUERY = gql`
    query {
        search(
            availableOnly: true
            first: 20
            hide: INDECENT
            includeExpired: false
            type: MOVIE
        ) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                node {
                    id
                    name
                    media {
                        portrait(width: ${COVER_WIDTH}, height: ${COVER_HEIGHT})
                    }
                }
            }
        }
    }
`;

export const withDetail = graphql(
    DETAIL_QUERY,
    {
        options: (props) => ({
            variables: {
                movieId: props.movieId,
            },
        }),
    }
);
export const withMovies = graphql(MOVIES_QUERY);
