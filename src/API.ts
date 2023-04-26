/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWeatherInput = {
  id?: string | null,
  username: string,
  description?: string | null,
  location: string,
  isComplete: boolean,
  isDeleted?: boolean | null,
  _version?: number | null,
};

export type ModelWeatherConditionInput = {
  username?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  isComplete?: ModelBooleanInput | null,
  isDeleted?: ModelBooleanInput | null,
  and?: Array< ModelWeatherConditionInput | null > | null,
  or?: Array< ModelWeatherConditionInput | null > | null,
  not?: ModelWeatherConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Weather = {
  __typename: "Weather",
  id: string,
  username: string,
  description?: string | null,
  location: string,
  isComplete: boolean,
  isDeleted?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateWeatherInput = {
  id: string,
  username?: string | null,
  description?: string | null,
  location?: string | null,
  isComplete?: boolean | null,
  isDeleted?: boolean | null,
  _version?: number | null,
};

export type DeleteWeatherInput = {
  id: string,
  _version?: number | null,
};

export type ModelWeatherFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  isComplete?: ModelBooleanInput | null,
  isDeleted?: ModelBooleanInput | null,
  and?: Array< ModelWeatherFilterInput | null > | null,
  or?: Array< ModelWeatherFilterInput | null > | null,
  not?: ModelWeatherFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelWeatherConnection = {
  __typename: "ModelWeatherConnection",
  items:  Array<Weather | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionWeatherFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  isComplete?: ModelSubscriptionBooleanInput | null,
  isDeleted?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionWeatherFilterInput | null > | null,
  or?: Array< ModelSubscriptionWeatherFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateWeatherMutationVariables = {
  input: CreateWeatherInput,
  condition?: ModelWeatherConditionInput | null,
};

export type CreateWeatherMutation = {
  createWeather?:  {
    __typename: "Weather",
    id: string,
    username: string,
    description?: string | null,
    location: string,
    isComplete: boolean,
    isDeleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateWeatherMutationVariables = {
  input: UpdateWeatherInput,
  condition?: ModelWeatherConditionInput | null,
};

export type UpdateWeatherMutation = {
  updateWeather?:  {
    __typename: "Weather",
    id: string,
    username: string,
    description?: string | null,
    location: string,
    isComplete: boolean,
    isDeleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteWeatherMutationVariables = {
  input: DeleteWeatherInput,
  condition?: ModelWeatherConditionInput | null,
};

export type DeleteWeatherMutation = {
  deleteWeather?:  {
    __typename: "Weather",
    id: string,
    username: string,
    description?: string | null,
    location: string,
    isComplete: boolean,
    isDeleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetWeatherQueryVariables = {
  id: string,
};

export type GetWeatherQuery = {
  getWeather?:  {
    __typename: "Weather",
    id: string,
    username: string,
    description?: string | null,
    location: string,
    isComplete: boolean,
    isDeleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListWeathersQueryVariables = {
  filter?: ModelWeatherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWeathersQuery = {
  listWeathers?:  {
    __typename: "ModelWeatherConnection",
    items:  Array< {
      __typename: "Weather",
      id: string,
      username: string,
      description?: string | null,
      location: string,
      isComplete: boolean,
      isDeleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWeathersQueryVariables = {
  filter?: ModelWeatherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWeathersQuery = {
  syncWeathers?:  {
    __typename: "ModelWeatherConnection",
    items:  Array< {
      __typename: "Weather",
      id: string,
      username: string,
      description?: string | null,
      location: string,
      isComplete: boolean,
      isDeleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateWeatherSubscriptionVariables = {
  filter?: ModelSubscriptionWeatherFilterInput | null,
  owner?: string | null,
};

export type OnCreateWeatherSubscription = {
  onCreateWeather?:  {
    __typename: "Weather",
    id: string,
    username: string,
    description?: string | null,
    location: string,
    isComplete: boolean,
    isDeleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateWeatherSubscriptionVariables = {
  filter?: ModelSubscriptionWeatherFilterInput | null,
  owner?: string | null,
};

export type OnUpdateWeatherSubscription = {
  onUpdateWeather?:  {
    __typename: "Weather",
    id: string,
    username: string,
    description?: string | null,
    location: string,
    isComplete: boolean,
    isDeleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteWeatherSubscriptionVariables = {
  filter?: ModelSubscriptionWeatherFilterInput | null,
  owner?: string | null,
};

export type OnDeleteWeatherSubscription = {
  onDeleteWeather?:  {
    __typename: "Weather",
    id: string,
    username: string,
    description?: string | null,
    location: string,
    isComplete: boolean,
    isDeleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
