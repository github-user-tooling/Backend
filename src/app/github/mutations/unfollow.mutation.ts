import { identityTag as gql } from 'identity-tag';

export interface IUnfollow {
  unfollowUser: {
    user: {
      viewerIsFollowing: boolean;
    };
  };
}

export const unfollow = gql`
  mutation unfollow($id: ID!) {
    unfollowUser(input: { userId: $id }) {
      user {
        viewerIsFollowing
      }
    }
  }
`;
