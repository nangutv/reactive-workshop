import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
    query {
        search(
            availableOnly: true
            first: 10
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
                }
            }
        }
    }
`;

export const withData = graphql(QUERY);
