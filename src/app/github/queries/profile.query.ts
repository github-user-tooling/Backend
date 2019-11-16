import { identityTag as gql } from 'identity-tag';

export const profile = gql`
  {
    viewer {
      login
      avatarUrl
      bio
      location
      name
      url
    }
  }
`;
