/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWeather = /* GraphQL */ `
  query GetWeather($id: ID!) {
    getWeather(id: $id) {
      id
      username
      description
      location
      isComplete
      isDeleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listWeathers = /* GraphQL */ `
  query ListWeathers(
    $filter: ModelWeatherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeathers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        description
        location
        isComplete
        isDeleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWeathers = /* GraphQL */ `
  query SyncWeathers(
    $filter: ModelWeatherFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWeathers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        description
        location
        isComplete
        isDeleted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
