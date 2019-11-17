import { identityTag as gql } from 'identity-tag';

export interface IFollowers {
  viewer: {
    following: {
      nodes: IUser[];
    };
  };
}

export interface IUser {
  id: string;
  login: string;
  url: string;
  avatarUrl: string;
  name: string;
}

export const followers = gql`
  {
    viewer {
      following(first: 20) {
        nodes {
          id
          login
          url
          avatarUrl
          name
        }
      }
    }
  }
`;
