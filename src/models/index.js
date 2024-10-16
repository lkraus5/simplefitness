// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Exercise, Workout, Session, Set, WorkoutPeriod, MesoPeriod } = initSchema(schema);

export {
  Exercise,
  Workout,
  Session,
  Set,
  WorkoutPeriod,
  MesoPeriod
};