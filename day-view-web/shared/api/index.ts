import { Client } from '@/shared/axios';
import {
  AddScheduleParamType,
  ChannelRes,
  ChannelSelectType,
  CreateChannelParamType,
  MyChannelRecodeRes,
  PatchChannelType,
  PatchUserParams,
  PutChannelParamType,
  RecordInChannel,
  RecordInSubscribeParam,
  SearchChannelParamType,
  SearchChannelRes,
  Token,
  UserRes,
} from '@/shared/types/api';

export const getAccessToken = async () => {
  const res = await new Client('/api/v1/auth/refresh').get<Token>();
  return res;
};

export const getUser = async () => {
  const res = await new Client('/api/members/me').get<UserRes>();
  return res;
};

export const patchUser = async (patchUserParams: PatchUserParams) => {
  const { nickname, birthday, profileImageUrl } = patchUserParams;

  const res = await new Client('/api/members/me').patch({
    nickname,
    birthday,
    profileImageUrl,
  });

  return res;
};

export const getChannel = async (channelSelectType: ChannelSelectType) => {
  const res = await new Client(`/api/channels/${channelSelectType}`).get<{
    data: ChannelRes[];
  }>();
  return res;
};

export const createChannel = async (
  createChannelParam: CreateChannelParamType
) => {
  const res = await new Client(`/api/channels`).post(createChannelParam);
  return res;
};

export const subscribeChannel = async (channelId: number) => {
  const res = await new Client(`/api/channels/${channelId}/subscribes`).post();
  return res;
};

export const unsubscribeChannel = async (subscribeId: number) => {
  const res = await new Client(`/api/subscribes/${subscribeId}`).delete();
  return res;
};

export const patchChannel = async (patchChannelParams: PatchChannelType) => {
  const { subscribeId, showYn, color } = patchChannelParams;
  const res = await new Client(`/api/subscribes/${subscribeId}`).patch({
    showYn,
    color,
  });
  return res;
};

/** 채널명 수정 */
export const putChannel = async (putChannelParams: PutChannelParamType) => {
  const { channelId, name } = putChannelParams;
  const res = await new Client(`/api/channels/${channelId}`).put({
    name,
  });
  return res;
};

export const addSchedule = async (addScheduleParam: AddScheduleParamType) => {
  const { channelId, ...params } = addScheduleParam;
  const res = await new Client(
    `/api/channels/${channelId}/records`
  ).post<AddScheduleParamType>(params);

  return res;
};

export const getSearchChannel = async (
  createChannelParam: SearchChannelParamType
) => {
  const res = await new Client(`/api/channels
`).get<SearchChannelRes>(createChannelParam);
  return res;
};

export const getRecordInChannel = async ({
  channelId,
}: {
  channelId: number;
}) => {
  const res = await new Client(`/api/channels/${channelId.toString()}/records
`).get<RecordInChannel[]>();
  return res;
};

export const getRecordInSubscribe = async (params: RecordInSubscribeParam) => {
  const res = await new Client(
    '/api/subscribe/me/records'
  ).get<MyChannelRecodeRes>(params);
  return res;
};
