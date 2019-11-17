import { identityTag as gql } from 'identity-tag';

export interface IFollow {
  followUser: {
    user: {
      viewerIsFollowing: boolean;
    };
  };
}

export const follow = gql`
  mutation follow($id: ID!) {
    followUser(input: { userId: $id }) {
      user {
        viewerIsFollowing
      }
    }
  }
`;
