/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWeatherInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  location?: string | null,
  isComplete?: string | null,
};

export type ModelWeatherConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  isComplete?: ModelStringInput | null,
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

export type Weather = {
  __typename: "Weather",
  id: string,
  name: string,
  description?: string | null,
  location?: string | null,
  isComplete?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateWeatherInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  location?: string | null,
  isComplete?: string | null,
};

export type DeleteWeatherInput = {
  id: string,
};

export type ModelWeatherFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  isComplete?: ModelStringInput | null,
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
};

export type ModelSubscriptionWeatherFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  isComplete?: ModelSubscriptionStringInput | null,
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

export type CreateWeatherMutationVariables = {
  input: CreateWeatherInput,
  condition?: ModelWeatherConditionInput | null,
};

export type CreateWeatherMutation = {
  createWeather?:  {
    __typename: "Weather",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    isComplete?: string | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    description?: string | null,
    location?: string | null,
    isComplete?: string | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    description?: string | null,
    location?: string | null,
    isComplete?: string | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    description?: string | null,
    location?: string | null,
    isComplete?: string | null,
    createdAt: string,
    updatedAt: string,
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
      name: string,
      description?: string | null,
      location?: string | null,
      isComplete?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
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
    name: string,
    description?: string | null,
    location?: string | null,
    isComplete?: string | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    description?: string | null,
    location?: string | null,
    isComplete?: string | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    description?: string | null,
    location?: string | null,
    isComplete?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
