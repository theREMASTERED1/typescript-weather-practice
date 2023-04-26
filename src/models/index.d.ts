import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerWeather = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Weather, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly description?: string | null;
  readonly location: string;
  readonly isComplete: boolean;
  readonly isDeleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWeather = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Weather, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly description?: string | null;
  readonly location: string;
  readonly isComplete: boolean;
  readonly isDeleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Weather = LazyLoading extends LazyLoadingDisabled ? EagerWeather : LazyWeather

export declare const Weather: (new (init: ModelInit<Weather>) => Weather) & {
  copyOf(source: Weather, mutator: (draft: MutableModel<Weather>) => MutableModel<Weather> | void): Weather;
}