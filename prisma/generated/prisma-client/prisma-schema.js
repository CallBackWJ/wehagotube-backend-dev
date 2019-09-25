module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.7). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateSchedule {
  count: Int!
}

type AggregateTimeLink {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVideo {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createSchedule(data: ScheduleCreateInput!): Schedule!
  updateSchedule(data: ScheduleUpdateInput!, where: ScheduleWhereUniqueInput!): Schedule
  updateManySchedules(data: ScheduleUpdateManyMutationInput!, where: ScheduleWhereInput): BatchPayload!
  upsertSchedule(where: ScheduleWhereUniqueInput!, create: ScheduleCreateInput!, update: ScheduleUpdateInput!): Schedule!
  deleteSchedule(where: ScheduleWhereUniqueInput!): Schedule
  deleteManySchedules(where: ScheduleWhereInput): BatchPayload!
  createTimeLink(data: TimeLinkCreateInput!): TimeLink!
  updateTimeLink(data: TimeLinkUpdateInput!, where: TimeLinkWhereUniqueInput!): TimeLink
  updateManyTimeLinks(data: TimeLinkUpdateManyMutationInput!, where: TimeLinkWhereInput): BatchPayload!
  upsertTimeLink(where: TimeLinkWhereUniqueInput!, create: TimeLinkCreateInput!, update: TimeLinkUpdateInput!): TimeLink!
  deleteTimeLink(where: TimeLinkWhereUniqueInput!): TimeLink
  deleteManyTimeLinks(where: TimeLinkWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVideo(data: VideoCreateInput!): Video!
  updateVideo(data: VideoUpdateInput!, where: VideoWhereUniqueInput!): Video
  updateManyVideos(data: VideoUpdateManyMutationInput!, where: VideoWhereInput): BatchPayload!
  upsertVideo(where: VideoWhereUniqueInput!, create: VideoCreateInput!, update: VideoUpdateInput!): Video!
  deleteVideo(where: VideoWhereUniqueInput!): Video
  deleteManyVideos(where: VideoWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  schedule(where: ScheduleWhereUniqueInput!): Schedule
  schedules(where: ScheduleWhereInput, orderBy: ScheduleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Schedule]!
  schedulesConnection(where: ScheduleWhereInput, orderBy: ScheduleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ScheduleConnection!
  timeLink(where: TimeLinkWhereUniqueInput!): TimeLink
  timeLinks(where: TimeLinkWhereInput, orderBy: TimeLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TimeLink]!
  timeLinksConnection(where: TimeLinkWhereInput, orderBy: TimeLinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TimeLinkConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  video(where: VideoWhereUniqueInput!): Video
  videos(where: VideoWhereInput, orderBy: VideoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Video]!
  videosConnection(where: VideoWhereInput, orderBy: VideoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VideoConnection!
  node(id: ID!): Node
}

type Schedule {
  id: ID!
  title: String!
  desc: String!
  thumbnail: String
  startTime: String!
  endTime: String!
}

type ScheduleConnection {
  pageInfo: PageInfo!
  edges: [ScheduleEdge]!
  aggregate: AggregateSchedule!
}

input ScheduleCreateInput {
  id: ID
  title: String!
  desc: String!
  thumbnail: String
  startTime: String!
  endTime: String!
}

type ScheduleEdge {
  node: Schedule!
  cursor: String!
}

enum ScheduleOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  desc_ASC
  desc_DESC
  thumbnail_ASC
  thumbnail_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
}

type SchedulePreviousValues {
  id: ID!
  title: String!
  desc: String!
  thumbnail: String
  startTime: String!
  endTime: String!
}

type ScheduleSubscriptionPayload {
  mutation: MutationType!
  node: Schedule
  updatedFields: [String!]
  previousValues: SchedulePreviousValues
}

input ScheduleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ScheduleWhereInput
  AND: [ScheduleSubscriptionWhereInput!]
  OR: [ScheduleSubscriptionWhereInput!]
  NOT: [ScheduleSubscriptionWhereInput!]
}

input ScheduleUpdateInput {
  title: String
  desc: String
  thumbnail: String
  startTime: String
  endTime: String
}

input ScheduleUpdateManyMutationInput {
  title: String
  desc: String
  thumbnail: String
  startTime: String
  endTime: String
}

input ScheduleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  thumbnail: String
  thumbnail_not: String
  thumbnail_in: [String!]
  thumbnail_not_in: [String!]
  thumbnail_lt: String
  thumbnail_lte: String
  thumbnail_gt: String
  thumbnail_gte: String
  thumbnail_contains: String
  thumbnail_not_contains: String
  thumbnail_starts_with: String
  thumbnail_not_starts_with: String
  thumbnail_ends_with: String
  thumbnail_not_ends_with: String
  startTime: String
  startTime_not: String
  startTime_in: [String!]
  startTime_not_in: [String!]
  startTime_lt: String
  startTime_lte: String
  startTime_gt: String
  startTime_gte: String
  startTime_contains: String
  startTime_not_contains: String
  startTime_starts_with: String
  startTime_not_starts_with: String
  startTime_ends_with: String
  startTime_not_ends_with: String
  endTime: String
  endTime_not: String
  endTime_in: [String!]
  endTime_not_in: [String!]
  endTime_lt: String
  endTime_lte: String
  endTime_gt: String
  endTime_gte: String
  endTime_contains: String
  endTime_not_contains: String
  endTime_starts_with: String
  endTime_not_starts_with: String
  endTime_ends_with: String
  endTime_not_ends_with: String
  AND: [ScheduleWhereInput!]
  OR: [ScheduleWhereInput!]
  NOT: [ScheduleWhereInput!]
}

input ScheduleWhereUniqueInput {
  id: ID
}

enum Status {
  PRIVATE
  PUBLIC
}

type Subscription {
  schedule(where: ScheduleSubscriptionWhereInput): ScheduleSubscriptionPayload
  timeLink(where: TimeLinkSubscriptionWhereInput): TimeLinkSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  video(where: VideoSubscriptionWhereInput): VideoSubscriptionPayload
}

type TimeLink {
  id: ID!
  videoId: String!
  time: Int!
  desc: String!
}

type TimeLinkConnection {
  pageInfo: PageInfo!
  edges: [TimeLinkEdge]!
  aggregate: AggregateTimeLink!
}

input TimeLinkCreateInput {
  id: ID
  videoId: String!
  time: Int!
  desc: String!
}

type TimeLinkEdge {
  node: TimeLink!
  cursor: String!
}

enum TimeLinkOrderByInput {
  id_ASC
  id_DESC
  videoId_ASC
  videoId_DESC
  time_ASC
  time_DESC
  desc_ASC
  desc_DESC
}

type TimeLinkPreviousValues {
  id: ID!
  videoId: String!
  time: Int!
  desc: String!
}

type TimeLinkSubscriptionPayload {
  mutation: MutationType!
  node: TimeLink
  updatedFields: [String!]
  previousValues: TimeLinkPreviousValues
}

input TimeLinkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TimeLinkWhereInput
  AND: [TimeLinkSubscriptionWhereInput!]
  OR: [TimeLinkSubscriptionWhereInput!]
  NOT: [TimeLinkSubscriptionWhereInput!]
}

input TimeLinkUpdateInput {
  videoId: String
  time: Int
  desc: String
}

input TimeLinkUpdateManyMutationInput {
  videoId: String
  time: Int
  desc: String
}

input TimeLinkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  videoId: String
  videoId_not: String
  videoId_in: [String!]
  videoId_not_in: [String!]
  videoId_lt: String
  videoId_lte: String
  videoId_gt: String
  videoId_gte: String
  videoId_contains: String
  videoId_not_contains: String
  videoId_starts_with: String
  videoId_not_starts_with: String
  videoId_ends_with: String
  videoId_not_ends_with: String
  time: Int
  time_not: Int
  time_in: [Int!]
  time_not_in: [Int!]
  time_lt: Int
  time_lte: Int
  time_gt: Int
  time_gte: Int
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  AND: [TimeLinkWhereInput!]
  OR: [TimeLinkWhereInput!]
  NOT: [TimeLinkWhereInput!]
}

input TimeLinkWhereUniqueInput {
  id: ID
}

enum TYPE {
  ADMIN
  USER
}

type User {
  id: ID!
  email: String!
  name: String!
  avatar: String
  accessToken: String
  permission: TYPE!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  name: String!
  avatar: String
  accessToken: String
  permission: TYPE!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  avatar_ASC
  avatar_DESC
  accessToken_ASC
  accessToken_DESC
  permission_ASC
  permission_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  name: String!
  avatar: String
  accessToken: String
  permission: TYPE!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  name: String
  avatar: String
  accessToken: String
  permission: TYPE
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  avatar: String
  accessToken: String
  permission: TYPE
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  accessToken: String
  accessToken_not: String
  accessToken_in: [String!]
  accessToken_not_in: [String!]
  accessToken_lt: String
  accessToken_lte: String
  accessToken_gt: String
  accessToken_gte: String
  accessToken_contains: String
  accessToken_not_contains: String
  accessToken_starts_with: String
  accessToken_not_starts_with: String
  accessToken_ends_with: String
  accessToken_not_ends_with: String
  permission: TYPE
  permission_not: TYPE
  permission_in: [TYPE!]
  permission_not_in: [TYPE!]
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Video {
  id: ID!
  videoId: String!
  title: String
  desc: String
  thumbnail: String!
  viewCount: Int!
  status: Status!
  createdAt: DateTime!
}

type VideoConnection {
  pageInfo: PageInfo!
  edges: [VideoEdge]!
  aggregate: AggregateVideo!
}

input VideoCreateInput {
  id: ID
  videoId: String!
  title: String
  desc: String
  thumbnail: String!
  viewCount: Int
  status: Status
}

type VideoEdge {
  node: Video!
  cursor: String!
}

enum VideoOrderByInput {
  id_ASC
  id_DESC
  videoId_ASC
  videoId_DESC
  title_ASC
  title_DESC
  desc_ASC
  desc_DESC
  thumbnail_ASC
  thumbnail_DESC
  viewCount_ASC
  viewCount_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
}

type VideoPreviousValues {
  id: ID!
  videoId: String!
  title: String
  desc: String
  thumbnail: String!
  viewCount: Int!
  status: Status!
  createdAt: DateTime!
}

type VideoSubscriptionPayload {
  mutation: MutationType!
  node: Video
  updatedFields: [String!]
  previousValues: VideoPreviousValues
}

input VideoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VideoWhereInput
  AND: [VideoSubscriptionWhereInput!]
  OR: [VideoSubscriptionWhereInput!]
  NOT: [VideoSubscriptionWhereInput!]
}

input VideoUpdateInput {
  videoId: String
  title: String
  desc: String
  thumbnail: String
  viewCount: Int
  status: Status
}

input VideoUpdateManyMutationInput {
  videoId: String
  title: String
  desc: String
  thumbnail: String
  viewCount: Int
  status: Status
}

input VideoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  videoId: String
  videoId_not: String
  videoId_in: [String!]
  videoId_not_in: [String!]
  videoId_lt: String
  videoId_lte: String
  videoId_gt: String
  videoId_gte: String
  videoId_contains: String
  videoId_not_contains: String
  videoId_starts_with: String
  videoId_not_starts_with: String
  videoId_ends_with: String
  videoId_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  thumbnail: String
  thumbnail_not: String
  thumbnail_in: [String!]
  thumbnail_not_in: [String!]
  thumbnail_lt: String
  thumbnail_lte: String
  thumbnail_gt: String
  thumbnail_gte: String
  thumbnail_contains: String
  thumbnail_not_contains: String
  thumbnail_starts_with: String
  thumbnail_not_starts_with: String
  thumbnail_ends_with: String
  thumbnail_not_ends_with: String
  viewCount: Int
  viewCount_not: Int
  viewCount_in: [Int!]
  viewCount_not_in: [Int!]
  viewCount_lt: Int
  viewCount_lte: Int
  viewCount_gt: Int
  viewCount_gte: Int
  status: Status
  status_not: Status
  status_in: [Status!]
  status_not_in: [Status!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [VideoWhereInput!]
  OR: [VideoWhereInput!]
  NOT: [VideoWhereInput!]
}

input VideoWhereUniqueInput {
  id: ID
  videoId: String
}
`
      }
    