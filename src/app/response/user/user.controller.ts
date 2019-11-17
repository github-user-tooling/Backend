import { Controller, Get, Post, Param, Body } from '@nestjs/common';

import { Note } from '@prisma';
import { IActiveUser, ICalendarDTO, ITendenciesDTO, CreateNoteDTO } from 'models';
import { IProfile, IUser } from 'github/queries';

import { User } from 'common/decorators';
import { GithubService } from 'github/github.service';
import { NotesService } from 'notes/notes.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly github: GithubService,
    private readonly notesService: NotesService
  ) {}

  @Get('/profile')
  public async getProfile(
    @User() { accessToken, githubID }: IActiveUser
  ): Promise<IProfile['node']> {
    return await this.github.profile(accessToken, githubID);
  }

  @Get('/:id/profile')
  public async getSpecificProfile(
    @User() { accessToken }: IActiveUser,
    @Param('id') id: string
  ): Promise<IProfile['node']> {
    return await this.github.profile(accessToken, id);
  }

  @Get('/calendar')
  public async getCalendar(@User() { accessToken, githubID }: IActiveUser): Promise<ICalendarDTO> {
    return await this.github.calendar(accessToken, githubID);
  }

  @Get('/:id/calendar')
  public async getSpecificCalendar(
    @User() { accessToken }: IActiveUser,
    @Param('id') id: string
  ): Promise<ICalendarDTO> {
    return await this.github.calendar(accessToken, id);
  }

  @Get('/following')
  public async getFollowing(@User() { accessToken, githubID }: IActiveUser): Promise<IUser[]> {
    return await this.github.following(accessToken, githubID, true);
  }

  @Get('/:id/following')
  public async getSpecificFollowing(
    @User() { accessToken }: IActiveUser,
    @Param('id') id: string
  ): Promise<IUser[]> {
    return await this.github.following(accessToken, id, false);
  }

  @Get('/tendencies')
  public async getTendencies(
    @User() { accessToken, githubID }: IActiveUser
  ): Promise<ITendenciesDTO> {
    return await this.github.tendencies(accessToken, githubID);
  }

  @Get('/:id/tendencies')
  public async getSpecificTendencies(
    @User() { accessToken }: IActiveUser,
    @Param('id') id: string
  ): Promise<ITendenciesDTO> {
    return await this.github.tendencies(accessToken, id);
  }

  @Get('/:id/notes')
  public async getNotes(@User() { id }: IActiveUser, @Param('id') forID: string): Promise<Note[]> {
    return await this.notesService.getNotes(id, forID);
  }

  @Post('/:id/notes')
  public async createNote(
    @User() { id }: IActiveUser,
    @Param('id') forID: string,
    @Body() note: CreateNoteDTO
  ): Promise<Note> {
    return await this.notesService.createNote(id, forID, note);
  }
}
