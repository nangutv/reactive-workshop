import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { COVER_WIDTH, COVER_HEIGHT } from './constants.js';

const QUERY = gql`
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

export const withData = graphql(QUERY);
