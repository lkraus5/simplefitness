import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerExercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exercise, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly targetedMuscles?: (string | null)[] | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exercise, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly targetedMuscles?: (string | null)[] | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Exercise = LazyLoading extends LazyLoadingDisabled ? EagerExercise : LazyExercise

export declare const Exercise: (new (init: ModelInit<Exercise>) => Exercise) & {
  copyOf(source: Exercise, mutator: (draft: MutableModel<Exercise>) => MutableModel<Exercise> | void): Exercise;
}

type EagerWorkout = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workout, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly exerciseids?: (string | null)[] | null;
  readonly exercises?: (Exercise | null)[] | null;
  readonly description?: string | null;
  readonly sessions?: (Session | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkout = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workout, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly exerciseids?: (string | null)[] | null;
  readonly exercises: AsyncCollection<Exercise>;
  readonly description?: string | null;
  readonly sessions: AsyncCollection<Session>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Workout = LazyLoading extends LazyLoadingDisabled ? EagerWorkout : LazyWorkout

export declare const Workout: (new (init: ModelInit<Workout>) => Workout) & {
  copyOf(source: Workout, mutator: (draft: MutableModel<Workout>) => MutableModel<Workout> | void): Workout;
}

type EagerSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
  };
  readonly id: string;
  readonly workout?: string | null;
  readonly fueledFeeling?: string | null;
  readonly muscleFeeling?: string | null;
  readonly sets?: (Set | null)[] | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazySession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
  };
  readonly id: string;
  readonly workout?: string | null;
  readonly fueledFeeling?: string | null;
  readonly muscleFeeling?: string | null;
  readonly sets: AsyncCollection<Set>;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type Session = LazyLoading extends LazyLoadingDisabled ? EagerSession : LazySession

export declare const Session: (new (init: ModelInit<Session>) => Session) & {
  copyOf(source: Session, mutator: (draft: MutableModel<Session>) => MutableModel<Session> | void): Session;
}

type EagerSet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Set, 'id'>;
  };
  readonly id: string;
  readonly session?: string | null;
  readonly exerciseid?: string | null;
  readonly exercise?: Exercise | null;
  readonly reps?: string | null;
  readonly weight?: string | null;
  readonly repsInReserve?: string | null;
  readonly rangeOfMotion?: string | null;
  readonly feeling?: string | null;
  readonly effort?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazySet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Set, 'id'>;
  };
  readonly id: string;
  readonly session?: string | null;
  readonly exerciseid?: string | null;
  readonly exercise: AsyncItem<Exercise | undefined>;
  readonly reps?: string | null;
  readonly weight?: string | null;
  readonly repsInReserve?: string | null;
  readonly rangeOfMotion?: string | null;
  readonly feeling?: string | null;
  readonly effort?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type Set = LazyLoading extends LazyLoadingDisabled ? EagerSet : LazySet

export declare const Set: (new (init: ModelInit<Set>) => Set) & {
  copyOf(source: Set, mutator: (draft: MutableModel<Set>) => MutableModel<Set> | void): Set;
}

type EagerWorkoutPeriod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WorkoutPeriod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly workoutids?: (string | null)[] | null;
  readonly workouts?: (Workout | null)[] | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkoutPeriod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WorkoutPeriod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly workoutids?: (string | null)[] | null;
  readonly workouts: AsyncCollection<Workout>;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WorkoutPeriod = LazyLoading extends LazyLoadingDisabled ? EagerWorkoutPeriod : LazyWorkoutPeriod

export declare const WorkoutPeriod: (new (init: ModelInit<WorkoutPeriod>) => WorkoutPeriod) & {
  copyOf(source: WorkoutPeriod, mutator: (draft: MutableModel<WorkoutPeriod>) => MutableModel<WorkoutPeriod> | void): WorkoutPeriod;
}

type EagerMesoPeriod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MesoPeriod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly workoutPeriodIds?: (string | null)[] | null;
  readonly workoutPeriods?: (WorkoutPeriod | null)[] | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMesoPeriod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MesoPeriod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly workoutPeriodIds?: (string | null)[] | null;
  readonly workoutPeriods: AsyncCollection<WorkoutPeriod>;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MesoPeriod = LazyLoading extends LazyLoadingDisabled ? EagerMesoPeriod : LazyMesoPeriod

export declare const MesoPeriod: (new (init: ModelInit<MesoPeriod>) => MesoPeriod) & {
  copyOf(source: MesoPeriod, mutator: (draft: MutableModel<MesoPeriod>) => MutableModel<MesoPeriod> | void): MesoPeriod;
}