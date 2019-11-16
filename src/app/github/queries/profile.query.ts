import { identityTag as gql } from 'identity-tag';

export interface IProfile {
  viewer: {
    login: string;
    avatarUrl: string;
    bio: string;
    location: string;
    name: string;
    url: string;
  };
}

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
