// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Weather } = initSchema(schema);

export {
  Weather
};