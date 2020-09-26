import { gql } from '@apollo/client';

export const ALL_PHOTOS_QUERY = gql`
  {
    photos {
        albumId
        id
        title
        subtitle
        url
        thumbnailUrl
    }
  }
`;
