/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWeather = /* GraphQL */ `
  subscription OnCreateWeather(
    $filter: ModelSubscriptionWeatherFilterInput
    $owner: String
  ) {
    onCreateWeather(filter: $filter, owner: $owner) {
      id
      name
      description
      location
      isComplete
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateWeather = /* GraphQL */ `
  subscription OnUpdateWeather(
    $filter: ModelSubscriptionWeatherFilterInput
    $owner: String
  ) {
    onUpdateWeather(filter: $filter, owner: $owner) {
      id
      name
      description
      location
      isComplete
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteWeather = /* GraphQL */ `
  subscription OnDeleteWeather(
    $filter: ModelSubscriptionWeatherFilterInput
    $owner: String
  ) {
    onDeleteWeather(filter: $filter, owner: $owner) {
      id
      name
      description
      location
      isComplete
      createdAt
      updatedAt
      owner
    }
  }
`;
