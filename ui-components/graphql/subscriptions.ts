/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onCreateExercise(filter: $filter) {
      createdAt
      description
      id
      name
      targetedMuscles
      updatedAt
      __typename
    }
  }
`;
export const onCreateMesoPeriod = /* GraphQL */ `
  subscription OnCreateMesoPeriod(
    $filter: ModelSubscriptionMesoPeriodFilterInput
    $owner: String
  ) {
    onCreateMesoPeriod(filter: $filter, owner: $owner) {
      createdAt
      description
      id
      owner
      periodLength
      updatedAt
      workoutPeriods {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onCreateSession(filter: $filter, owner: $owner) {
      createdAt
      fueledFeeling
      id
      muscleFeeling
      owner
      sets {
        nextToken
        __typename
      }
      updatedAt
      workout
      __typename
    }
  }
`;
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet(
    $filter: ModelSubscriptionSetFilterInput
    $owner: String
  ) {
    onCreateSet(filter: $filter, owner: $owner) {
      createdAt
      effort
      exercise {
        createdAt
        description
        id
        name
        targetedMuscles
        updatedAt
        __typename
      }
      exerciseid
      feeling
      id
      owner
      rangeOfMotion
      reps
      repsInReserve
      session
      updatedAt
      weight
      __typename
    }
  }
`;
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout(
    $filter: ModelSubscriptionWorkoutFilterInput
    $owner: String
  ) {
    onCreateWorkout(filter: $filter, owner: $owner) {
      createdAt
      description
      exerciseids
      exercises {
        nextToken
        __typename
      }
      id
      name
      owner
      sessions {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onCreateWorkoutPeriod = /* GraphQL */ `
  subscription OnCreateWorkoutPeriod(
    $filter: ModelSubscriptionWorkoutPeriodFilterInput
    $owner: String
  ) {
    onCreateWorkoutPeriod(filter: $filter, owner: $owner) {
      createdAt
      description
      id
      mesoPeriod
      name
      owner
      updatedAt
      workoutids
      workouts {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onDeleteExercise(filter: $filter) {
      createdAt
      description
      id
      name
      targetedMuscles
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMesoPeriod = /* GraphQL */ `
  subscription OnDeleteMesoPeriod(
    $filter: ModelSubscriptionMesoPeriodFilterInput
    $owner: String
  ) {
    onDeleteMesoPeriod(filter: $filter, owner: $owner) {
      createdAt
      description
      id
      owner
      periodLength
      updatedAt
      workoutPeriods {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onDeleteSession(filter: $filter, owner: $owner) {
      createdAt
      fueledFeeling
      id
      muscleFeeling
      owner
      sets {
        nextToken
        __typename
      }
      updatedAt
      workout
      __typename
    }
  }
`;
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet(
    $filter: ModelSubscriptionSetFilterInput
    $owner: String
  ) {
    onDeleteSet(filter: $filter, owner: $owner) {
      createdAt
      effort
      exercise {
        createdAt
        description
        id
        name
        targetedMuscles
        updatedAt
        __typename
      }
      exerciseid
      feeling
      id
      owner
      rangeOfMotion
      reps
      repsInReserve
      session
      updatedAt
      weight
      __typename
    }
  }
`;
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout(
    $filter: ModelSubscriptionWorkoutFilterInput
    $owner: String
  ) {
    onDeleteWorkout(filter: $filter, owner: $owner) {
      createdAt
      description
      exerciseids
      exercises {
        nextToken
        __typename
      }
      id
      name
      owner
      sessions {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onDeleteWorkoutPeriod = /* GraphQL */ `
  subscription OnDeleteWorkoutPeriod(
    $filter: ModelSubscriptionWorkoutPeriodFilterInput
    $owner: String
  ) {
    onDeleteWorkoutPeriod(filter: $filter, owner: $owner) {
      createdAt
      description
      id
      mesoPeriod
      name
      owner
      updatedAt
      workoutids
      workouts {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onUpdateExercise(filter: $filter) {
      createdAt
      description
      id
      name
      targetedMuscles
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMesoPeriod = /* GraphQL */ `
  subscription OnUpdateMesoPeriod(
    $filter: ModelSubscriptionMesoPeriodFilterInput
    $owner: String
  ) {
    onUpdateMesoPeriod(filter: $filter, owner: $owner) {
      createdAt
      description
      id
      owner
      periodLength
      updatedAt
      workoutPeriods {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onUpdateSession(filter: $filter, owner: $owner) {
      createdAt
      fueledFeeling
      id
      muscleFeeling
      owner
      sets {
        nextToken
        __typename
      }
      updatedAt
      workout
      __typename
    }
  }
`;
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet(
    $filter: ModelSubscriptionSetFilterInput
    $owner: String
  ) {
    onUpdateSet(filter: $filter, owner: $owner) {
      createdAt
      effort
      exercise {
        createdAt
        description
        id
        name
        targetedMuscles
        updatedAt
        __typename
      }
      exerciseid
      feeling
      id
      owner
      rangeOfMotion
      reps
      repsInReserve
      session
      updatedAt
      weight
      __typename
    }
  }
`;
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout(
    $filter: ModelSubscriptionWorkoutFilterInput
    $owner: String
  ) {
    onUpdateWorkout(filter: $filter, owner: $owner) {
      createdAt
      description
      exerciseids
      exercises {
        nextToken
        __typename
      }
      id
      name
      owner
      sessions {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onUpdateWorkoutPeriod = /* GraphQL */ `
  subscription OnUpdateWorkoutPeriod(
    $filter: ModelSubscriptionWorkoutPeriodFilterInput
    $owner: String
  ) {
    onUpdateWorkoutPeriod(filter: $filter, owner: $owner) {
      createdAt
      description
      id
      mesoPeriod
      name
      owner
      updatedAt
      workoutids
      workouts {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
