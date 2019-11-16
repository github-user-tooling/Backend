// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  favorite: (where?: FavoriteWhereInput) => Promise<boolean>;
  notes: (where?: NotesWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  favorite: (where: FavoriteWhereUniqueInput) => FavoriteNullablePromise;
  favorites: (args?: {
    where?: FavoriteWhereInput;
    orderBy?: FavoriteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Favorite>;
  favoritesConnection: (args?: {
    where?: FavoriteWhereInput;
    orderBy?: FavoriteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FavoriteConnectionPromise;
  notes: (where: NotesWhereUniqueInput) => NotesNullablePromise;
  noteses: (args?: {
    where?: NotesWhereInput;
    orderBy?: NotesOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Notes>;
  notesesConnection: (args?: {
    where?: NotesWhereInput;
    orderBy?: NotesOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => NotesConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createFavorite: (data: FavoriteCreateInput) => FavoritePromise;
  updateFavorite: (args: {
    data: FavoriteUpdateInput;
    where: FavoriteWhereUniqueInput;
  }) => FavoritePromise;
  updateManyFavorites: (args: {
    data: FavoriteUpdateManyMutationInput;
    where?: FavoriteWhereInput;
  }) => BatchPayloadPromise;
  upsertFavorite: (args: {
    where: FavoriteWhereUniqueInput;
    create: FavoriteCreateInput;
    update: FavoriteUpdateInput;
  }) => FavoritePromise;
  deleteFavorite: (where: FavoriteWhereUniqueInput) => FavoritePromise;
  deleteManyFavorites: (where?: FavoriteWhereInput) => BatchPayloadPromise;
  createNotes: (data: NotesCreateInput) => NotesPromise;
  updateNotes: (args: {
    data: NotesUpdateInput;
    where: NotesWhereUniqueInput;
  }) => NotesPromise;
  updateManyNoteses: (args: {
    data: NotesUpdateManyMutationInput;
    where?: NotesWhereInput;
  }) => BatchPayloadPromise;
  upsertNotes: (args: {
    where: NotesWhereUniqueInput;
    create: NotesCreateInput;
    update: NotesUpdateInput;
  }) => NotesPromise;
  deleteNotes: (where: NotesWhereUniqueInput) => NotesPromise;
  deleteManyNoteses: (where?: NotesWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  favorite: (
    where?: FavoriteSubscriptionWhereInput
  ) => FavoriteSubscriptionPayloadSubscription;
  notes: (
    where?: NotesSubscriptionWhereInput
  ) => NotesSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type NotesOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "body_ASC"
  | "body_DESC";

export type FavoriteOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "login_ASC"
  | "login_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "githubID_ASC"
  | "githubID_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type FavoriteWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  login?: Maybe<String>;
}>;

export interface NotesWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  body?: Maybe<String>;
  body_not?: Maybe<String>;
  body_in?: Maybe<String[] | String>;
  body_not_in?: Maybe<String[] | String>;
  body_lt?: Maybe<String>;
  body_lte?: Maybe<String>;
  body_gt?: Maybe<String>;
  body_gte?: Maybe<String>;
  body_contains?: Maybe<String>;
  body_not_contains?: Maybe<String>;
  body_starts_with?: Maybe<String>;
  body_not_starts_with?: Maybe<String>;
  body_ends_with?: Maybe<String>;
  body_not_ends_with?: Maybe<String>;
  AND?: Maybe<NotesWhereInput[] | NotesWhereInput>;
  OR?: Maybe<NotesWhereInput[] | NotesWhereInput>;
  NOT?: Maybe<NotesWhereInput[] | NotesWhereInput>;
}

export interface FavoriteWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  login?: Maybe<String>;
  login_not?: Maybe<String>;
  login_in?: Maybe<String[] | String>;
  login_not_in?: Maybe<String[] | String>;
  login_lt?: Maybe<String>;
  login_lte?: Maybe<String>;
  login_gt?: Maybe<String>;
  login_gte?: Maybe<String>;
  login_contains?: Maybe<String>;
  login_not_contains?: Maybe<String>;
  login_starts_with?: Maybe<String>;
  login_not_starts_with?: Maybe<String>;
  login_ends_with?: Maybe<String>;
  login_not_ends_with?: Maybe<String>;
  notes_every?: Maybe<NotesWhereInput>;
  notes_some?: Maybe<NotesWhereInput>;
  notes_none?: Maybe<NotesWhereInput>;
  AND?: Maybe<FavoriteWhereInput[] | FavoriteWhereInput>;
  OR?: Maybe<FavoriteWhereInput[] | FavoriteWhereInput>;
  NOT?: Maybe<FavoriteWhereInput[] | FavoriteWhereInput>;
}

export type NotesWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  githubID?: Maybe<String>;
}>;

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  githubID?: Maybe<String>;
  githubID_not?: Maybe<String>;
  githubID_in?: Maybe<String[] | String>;
  githubID_not_in?: Maybe<String[] | String>;
  githubID_lt?: Maybe<String>;
  githubID_lte?: Maybe<String>;
  githubID_gt?: Maybe<String>;
  githubID_gte?: Maybe<String>;
  githubID_contains?: Maybe<String>;
  githubID_not_contains?: Maybe<String>;
  githubID_starts_with?: Maybe<String>;
  githubID_not_starts_with?: Maybe<String>;
  githubID_ends_with?: Maybe<String>;
  githubID_not_ends_with?: Maybe<String>;
  favorites_every?: Maybe<FavoriteWhereInput>;
  favorites_some?: Maybe<FavoriteWhereInput>;
  favorites_none?: Maybe<FavoriteWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface FavoriteCreateInput {
  id?: Maybe<ID_Input>;
  login: String;
  notes?: Maybe<NotesCreateManyInput>;
}

export interface NotesCreateManyInput {
  create?: Maybe<NotesCreateInput[] | NotesCreateInput>;
  connect?: Maybe<NotesWhereUniqueInput[] | NotesWhereUniqueInput>;
}

export interface NotesCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  body: String;
}

export interface FavoriteUpdateInput {
  login?: Maybe<String>;
  notes?: Maybe<NotesUpdateManyInput>;
}

export interface NotesUpdateManyInput {
  create?: Maybe<NotesCreateInput[] | NotesCreateInput>;
  update?: Maybe<
    | NotesUpdateWithWhereUniqueNestedInput[]
    | NotesUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | NotesUpsertWithWhereUniqueNestedInput[]
    | NotesUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<NotesWhereUniqueInput[] | NotesWhereUniqueInput>;
  connect?: Maybe<NotesWhereUniqueInput[] | NotesWhereUniqueInput>;
  set?: Maybe<NotesWhereUniqueInput[] | NotesWhereUniqueInput>;
  disconnect?: Maybe<NotesWhereUniqueInput[] | NotesWhereUniqueInput>;
  deleteMany?: Maybe<NotesScalarWhereInput[] | NotesScalarWhereInput>;
  updateMany?: Maybe<
    NotesUpdateManyWithWhereNestedInput[] | NotesUpdateManyWithWhereNestedInput
  >;
}

export interface NotesUpdateWithWhereUniqueNestedInput {
  where: NotesWhereUniqueInput;
  data: NotesUpdateDataInput;
}

export interface NotesUpdateDataInput {
  title?: Maybe<String>;
  body?: Maybe<String>;
}

export interface NotesUpsertWithWhereUniqueNestedInput {
  where: NotesWhereUniqueInput;
  update: NotesUpdateDataInput;
  create: NotesCreateInput;
}

export interface NotesScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  body?: Maybe<String>;
  body_not?: Maybe<String>;
  body_in?: Maybe<String[] | String>;
  body_not_in?: Maybe<String[] | String>;
  body_lt?: Maybe<String>;
  body_lte?: Maybe<String>;
  body_gt?: Maybe<String>;
  body_gte?: Maybe<String>;
  body_contains?: Maybe<String>;
  body_not_contains?: Maybe<String>;
  body_starts_with?: Maybe<String>;
  body_not_starts_with?: Maybe<String>;
  body_ends_with?: Maybe<String>;
  body_not_ends_with?: Maybe<String>;
  AND?: Maybe<NotesScalarWhereInput[] | NotesScalarWhereInput>;
  OR?: Maybe<NotesScalarWhereInput[] | NotesScalarWhereInput>;
  NOT?: Maybe<NotesScalarWhereInput[] | NotesScalarWhereInput>;
}

export interface NotesUpdateManyWithWhereNestedInput {
  where: NotesScalarWhereInput;
  data: NotesUpdateManyDataInput;
}

export interface NotesUpdateManyDataInput {
  title?: Maybe<String>;
  body?: Maybe<String>;
}

export interface FavoriteUpdateManyMutationInput {
  login?: Maybe<String>;
}

export interface NotesUpdateInput {
  title?: Maybe<String>;
  body?: Maybe<String>;
}

export interface NotesUpdateManyMutationInput {
  title?: Maybe<String>;
  body?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  githubID: String;
  favorites?: Maybe<FavoriteCreateManyInput>;
}

export interface FavoriteCreateManyInput {
  create?: Maybe<FavoriteCreateInput[] | FavoriteCreateInput>;
  connect?: Maybe<FavoriteWhereUniqueInput[] | FavoriteWhereUniqueInput>;
}

export interface UserUpdateInput {
  githubID?: Maybe<String>;
  favorites?: Maybe<FavoriteUpdateManyInput>;
}

export interface FavoriteUpdateManyInput {
  create?: Maybe<FavoriteCreateInput[] | FavoriteCreateInput>;
  update?: Maybe<
    | FavoriteUpdateWithWhereUniqueNestedInput[]
    | FavoriteUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | FavoriteUpsertWithWhereUniqueNestedInput[]
    | FavoriteUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<FavoriteWhereUniqueInput[] | FavoriteWhereUniqueInput>;
  connect?: Maybe<FavoriteWhereUniqueInput[] | FavoriteWhereUniqueInput>;
  set?: Maybe<FavoriteWhereUniqueInput[] | FavoriteWhereUniqueInput>;
  disconnect?: Maybe<FavoriteWhereUniqueInput[] | FavoriteWhereUniqueInput>;
  deleteMany?: Maybe<FavoriteScalarWhereInput[] | FavoriteScalarWhereInput>;
  updateMany?: Maybe<
    | FavoriteUpdateManyWithWhereNestedInput[]
    | FavoriteUpdateManyWithWhereNestedInput
  >;
}

export interface FavoriteUpdateWithWhereUniqueNestedInput {
  where: FavoriteWhereUniqueInput;
  data: FavoriteUpdateDataInput;
}

export interface FavoriteUpdateDataInput {
  login?: Maybe<String>;
  notes?: Maybe<NotesUpdateManyInput>;
}

export interface FavoriteUpsertWithWhereUniqueNestedInput {
  where: FavoriteWhereUniqueInput;
  update: FavoriteUpdateDataInput;
  create: FavoriteCreateInput;
}

export interface FavoriteScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  login?: Maybe<String>;
  login_not?: Maybe<String>;
  login_in?: Maybe<String[] | String>;
  login_not_in?: Maybe<String[] | String>;
  login_lt?: Maybe<String>;
  login_lte?: Maybe<String>;
  login_gt?: Maybe<String>;
  login_gte?: Maybe<String>;
  login_contains?: Maybe<String>;
  login_not_contains?: Maybe<String>;
  login_starts_with?: Maybe<String>;
  login_not_starts_with?: Maybe<String>;
  login_ends_with?: Maybe<String>;
  login_not_ends_with?: Maybe<String>;
  AND?: Maybe<FavoriteScalarWhereInput[] | FavoriteScalarWhereInput>;
  OR?: Maybe<FavoriteScalarWhereInput[] | FavoriteScalarWhereInput>;
  NOT?: Maybe<FavoriteScalarWhereInput[] | FavoriteScalarWhereInput>;
}

export interface FavoriteUpdateManyWithWhereNestedInput {
  where: FavoriteScalarWhereInput;
  data: FavoriteUpdateManyDataInput;
}

export interface FavoriteUpdateManyDataInput {
  login?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  githubID?: Maybe<String>;
}

export interface FavoriteSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<FavoriteWhereInput>;
  AND?: Maybe<
    FavoriteSubscriptionWhereInput[] | FavoriteSubscriptionWhereInput
  >;
  OR?: Maybe<FavoriteSubscriptionWhereInput[] | FavoriteSubscriptionWhereInput>;
  NOT?: Maybe<
    FavoriteSubscriptionWhereInput[] | FavoriteSubscriptionWhereInput
  >;
}

export interface NotesSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<NotesWhereInput>;
  AND?: Maybe<NotesSubscriptionWhereInput[] | NotesSubscriptionWhereInput>;
  OR?: Maybe<NotesSubscriptionWhereInput[] | NotesSubscriptionWhereInput>;
  NOT?: Maybe<NotesSubscriptionWhereInput[] | NotesSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Favorite {
  id: ID_Output;
  login: String;
}

export interface FavoritePromise extends Promise<Favorite>, Fragmentable {
  id: () => Promise<ID_Output>;
  login: () => Promise<String>;
  notes: <T = FragmentableArray<Notes>>(args?: {
    where?: NotesWhereInput;
    orderBy?: NotesOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface FavoriteSubscription
  extends Promise<AsyncIterator<Favorite>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  login: () => Promise<AsyncIterator<String>>;
  notes: <T = Promise<AsyncIterator<NotesSubscription>>>(args?: {
    where?: NotesWhereInput;
    orderBy?: NotesOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface FavoriteNullablePromise
  extends Promise<Favorite | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  login: () => Promise<String>;
  notes: <T = FragmentableArray<Notes>>(args?: {
    where?: NotesWhereInput;
    orderBy?: NotesOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface Notes {
  id: ID_Output;
  title: String;
  body: String;
}

export interface NotesPromise extends Promise<Notes>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  body: () => Promise<String>;
}

export interface NotesSubscription
  extends Promise<AsyncIterator<Notes>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  body: () => Promise<AsyncIterator<String>>;
}

export interface NotesNullablePromise
  extends Promise<Notes | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  body: () => Promise<String>;
}

export interface FavoriteConnection {
  pageInfo: PageInfo;
  edges: FavoriteEdge[];
}

export interface FavoriteConnectionPromise
  extends Promise<FavoriteConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<FavoriteEdge>>() => T;
  aggregate: <T = AggregateFavoritePromise>() => T;
}

export interface FavoriteConnectionSubscription
  extends Promise<AsyncIterator<FavoriteConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<FavoriteEdgeSubscription>>>() => T;
  aggregate: <T = AggregateFavoriteSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface FavoriteEdge {
  node: Favorite;
  cursor: String;
}

export interface FavoriteEdgePromise
  extends Promise<FavoriteEdge>,
    Fragmentable {
  node: <T = FavoritePromise>() => T;
  cursor: () => Promise<String>;
}

export interface FavoriteEdgeSubscription
  extends Promise<AsyncIterator<FavoriteEdge>>,
    Fragmentable {
  node: <T = FavoriteSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateFavorite {
  count: Int;
}

export interface AggregateFavoritePromise
  extends Promise<AggregateFavorite>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateFavoriteSubscription
  extends Promise<AsyncIterator<AggregateFavorite>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface NotesConnection {
  pageInfo: PageInfo;
  edges: NotesEdge[];
}

export interface NotesConnectionPromise
  extends Promise<NotesConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<NotesEdge>>() => T;
  aggregate: <T = AggregateNotesPromise>() => T;
}

export interface NotesConnectionSubscription
  extends Promise<AsyncIterator<NotesConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<NotesEdgeSubscription>>>() => T;
  aggregate: <T = AggregateNotesSubscription>() => T;
}

export interface NotesEdge {
  node: Notes;
  cursor: String;
}

export interface NotesEdgePromise extends Promise<NotesEdge>, Fragmentable {
  node: <T = NotesPromise>() => T;
  cursor: () => Promise<String>;
}

export interface NotesEdgeSubscription
  extends Promise<AsyncIterator<NotesEdge>>,
    Fragmentable {
  node: <T = NotesSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateNotes {
  count: Int;
}

export interface AggregateNotesPromise
  extends Promise<AggregateNotes>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateNotesSubscription
  extends Promise<AsyncIterator<AggregateNotes>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  githubID: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  githubID: () => Promise<String>;
  favorites: <T = FragmentableArray<Favorite>>(args?: {
    where?: FavoriteWhereInput;
    orderBy?: FavoriteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  githubID: () => Promise<AsyncIterator<String>>;
  favorites: <T = Promise<AsyncIterator<FavoriteSubscription>>>(args?: {
    where?: FavoriteWhereInput;
    orderBy?: FavoriteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  githubID: () => Promise<String>;
  favorites: <T = FragmentableArray<Favorite>>(args?: {
    where?: FavoriteWhereInput;
    orderBy?: FavoriteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface FavoriteSubscriptionPayload {
  mutation: MutationType;
  node: Favorite;
  updatedFields: String[];
  previousValues: FavoritePreviousValues;
}

export interface FavoriteSubscriptionPayloadPromise
  extends Promise<FavoriteSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = FavoritePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = FavoritePreviousValuesPromise>() => T;
}

export interface FavoriteSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<FavoriteSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = FavoriteSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = FavoritePreviousValuesSubscription>() => T;
}

export interface FavoritePreviousValues {
  id: ID_Output;
  login: String;
}

export interface FavoritePreviousValuesPromise
  extends Promise<FavoritePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  login: () => Promise<String>;
}

export interface FavoritePreviousValuesSubscription
  extends Promise<AsyncIterator<FavoritePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  login: () => Promise<AsyncIterator<String>>;
}

export interface NotesSubscriptionPayload {
  mutation: MutationType;
  node: Notes;
  updatedFields: String[];
  previousValues: NotesPreviousValues;
}

export interface NotesSubscriptionPayloadPromise
  extends Promise<NotesSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = NotesPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = NotesPreviousValuesPromise>() => T;
}

export interface NotesSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<NotesSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = NotesSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = NotesPreviousValuesSubscription>() => T;
}

export interface NotesPreviousValues {
  id: ID_Output;
  title: String;
  body: String;
}

export interface NotesPreviousValuesPromise
  extends Promise<NotesPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  body: () => Promise<String>;
}

export interface NotesPreviousValuesSubscription
  extends Promise<AsyncIterator<NotesPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  body: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  githubID: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  githubID: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  githubID: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Favorite",
    embedded: false
  },
  {
    name: "Notes",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA"]}`,
  secret: `${process.env["SECRET"]}`
});
export const prisma = new Prisma();
