import { IUserNode } from 'github/queries';

export interface IUserDTO extends Omit<IUserNode, 'repos' | 'commits' | 'followers' | 'following'> {
  repoCount: number;
  commitCount: number;
  followerCount: number;
  followingCount: number;
}
