import { Injectable } from '@nestjs/common';

import { IUser } from 'github/queries';
import { differences } from 'utils';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private readonly prisma: PrismaService) {}

  public async createFollow(follower: string, following: string) {
    await this.prisma.client.createFollow({
      followed: { connect: { githubID: follower } },
      githubID: following,
    });
  }

  public async removeFollow(follower: string, following: string) {
    const [{ id }] = await this.prisma.client.follows({
      where: { githubID: following, followed: { githubID: follower } },
    });

    await this.prisma.client.deleteFollow({ id });
  }

  public async syncFollows(follower: string, followingUsers: IUser[]) {
    const dbFollowings = await this.getDBFollowings(follower);
    const followings = followingUsers.map((user) => user.id);
    differences(dbFollowings, followings, (following) => this.removeFollow(follower, following));
    differences(followings, dbFollowings, (following) => this.createFollow(follower, following));
  }

  public async getDBFollowings(follower: string) {
    const list = await this.prisma.client.follows({
      where: { followed: { githubID: follower } },
    });
    return list.map((follow) => follow.githubID);
  }
}
