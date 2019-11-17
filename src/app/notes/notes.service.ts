import { Injectable, BadRequestException } from '@nestjs/common';

import { Note, Follow } from '@prisma';
import { CreateNoteDTO } from 'models';
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

  public async getNotes(ownerID: string, forID: string): Promise<Note[]> {
    const forConnectionID = await this.confirmFollowOwnership(ownerID, forID);
    return this.prisma.client.notes({ where: { for: { id: forConnectionID } } });
  }

  public async getNote(ownerID: string, noteID: string): Promise<Note> {
    await this.confirmNoteOwnership(ownerID, noteID);
    return this.prisma.client.note({ id: noteID });
  }

  public async createNote(ownerID: string, forID: string, create: CreateNoteDTO): Promise<Note> {
    const forConnectionID = await this.confirmFollowOwnership(ownerID, forID);
    return this.prisma.client.createNote({ ...create, for: { connect: { id: forConnectionID } } });
  }

  public async updateNote(ownerID: string, noteID: string, update: CreateNoteDTO): Promise<Note> {
    await this.confirmNoteOwnership(ownerID, noteID);
    return this.prisma.client.updateNote({ data: update, where: { id: noteID } });
  }

  public async removeNote(ownerID: string, noteID: string): Promise<Note> {
    await this.confirmNoteOwnership(ownerID, noteID);
    return this.prisma.client.deleteNote({ id: noteID });
  }

  private async confirmFollowOwnership(ownerID: string, forID: string): Promise<string> {
    const { pageInfo, edges } = await this.prisma.client.followsConnection({
      where: { githubID: forID, followed: { id: ownerID } },
    });

    if (!pageInfo.endCursor) throw new BadRequestException();
    return edges[0].node.id;
  }

  private async confirmNoteOwnership(ownerID: string, noteID: string): Promise<string> {
    const { pageInfo, edges } = await this.prisma.client.notesConnection({
      where: { id: noteID, for: { followed: { id: ownerID } } },
    });

    if (!pageInfo.endCursor) throw new BadRequestException();
    return edges[0].node.id;
  }
}
