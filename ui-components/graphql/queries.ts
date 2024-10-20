/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
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
export const getMesoPeriod = /* GraphQL */ `
  query GetMesoPeriod($id: ID!) {
    getMesoPeriod(id: $id) {
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
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
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
export const getSet = /* GraphQL */ `
  query GetSet($id: ID!) {
    getSet(id: $id) {
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
export const getWorkout = /* GraphQL */ `
  query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
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
export const getWorkoutPeriod = /* GraphQL */ `
  query GetWorkoutPeriod($id: ID!) {
    getWorkoutPeriod(id: $id) {
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
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        description
        id
        name
        targetedMuscles
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listMesoPeriods = /* GraphQL */ `
  query ListMesoPeriods(
    $filter: ModelMesoPeriodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMesoPeriods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        description
        id
        owner
        periodLength
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        fueledFeeling
        id
        muscleFeeling
        owner
        updatedAt
        workout
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listSets = /* GraphQL */ `
  query ListSets(
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        effort
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
      nextToken
      __typename
    }
  }
`;
export const listWorkoutPeriods = /* GraphQL */ `
  query ListWorkoutPeriods(
    $filter: ModelWorkoutPeriodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkoutPeriods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        description
        id
        mesoPeriod
        name
        owner
        updatedAt
        workoutids
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listWorkouts = /* GraphQL */ `
  query ListWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        description
        exerciseids
        id
        name
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sessionsByWorkoutAndCreatedAt = /* GraphQL */ `
  query SessionsByWorkoutAndCreatedAt(
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
    $workout: ID!
  ) {
    sessionsByWorkoutAndCreatedAt(
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
      workout: $workout
    ) {
      items {
        createdAt
        fueledFeeling
        id
        muscleFeeling
        owner
        updatedAt
        workout
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const setsByExerciseidAndCreatedAt = /* GraphQL */ `
  query SetsByExerciseidAndCreatedAt(
    $createdAt: ModelStringKeyConditionInput
    $exerciseid: ID!
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    setsByExerciseidAndCreatedAt(
      createdAt: $createdAt
      exerciseid: $exerciseid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        effort
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
      nextToken
      __typename
    }
  }
`;
export const setsByExerciseidAndSessionAndCreatedAt = /* GraphQL */ `
  query SetsByExerciseidAndSessionAndCreatedAt(
    $exerciseid: ID!
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
    $sessionCreatedAt: ModelSetSetByExerciseAndSessionCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
  ) {
    setsByExerciseidAndSessionAndCreatedAt(
      exerciseid: $exerciseid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sessionCreatedAt: $sessionCreatedAt
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        effort
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
      nextToken
      __typename
    }
  }
`;
export const setsBySessionAndCreatedAt = /* GraphQL */ `
  query SetsBySessionAndCreatedAt(
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
    $session: ID!
    $sortDirection: ModelSortDirection
  ) {
    setsBySessionAndCreatedAt(
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      session: $session
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        effort
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
      nextToken
      __typename
    }
  }
`;
export const setsBySessionAndExerciseidAndCreatedAt = /* GraphQL */ `
  query SetsBySessionAndExerciseidAndCreatedAt(
    $exerciseidCreatedAt: ModelSetSetBySessionAndExerciseCompositeKeyConditionInput
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
    $session: ID!
    $sortDirection: ModelSortDirection
  ) {
    setsBySessionAndExerciseidAndCreatedAt(
      exerciseidCreatedAt: $exerciseidCreatedAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      session: $session
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        effort
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
      nextToken
      __typename
    }
  }
`;
export const workoutPeriodsByMesoPeriodAndCreatedAt = /* GraphQL */ `
  query WorkoutPeriodsByMesoPeriodAndCreatedAt(
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelWorkoutPeriodFilterInput
    $limit: Int
    $mesoPeriod: ID!
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    workoutPeriodsByMesoPeriodAndCreatedAt(
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      mesoPeriod: $mesoPeriod
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        description
        id
        mesoPeriod
        name
        owner
        updatedAt
        workoutids
        __typename
      }
      nextToken
      __typename
    }
  }
`;
