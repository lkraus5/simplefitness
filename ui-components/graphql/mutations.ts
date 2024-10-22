/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $condition: ModelExerciseConditionInput
    $input: CreateExerciseInput!
  ) {
    createExercise(condition: $condition, input: $input) {
      createdAt
      description
      id
      name
      targetedMuscles {
        nextToken
        __typename
      }
      targetedMusclesIds
      updatedAt
      __typename
    }
  }
`;
export const createMesoPeriod = /* GraphQL */ `
  mutation CreateMesoPeriod(
    $condition: ModelMesoPeriodConditionInput
    $input: CreateMesoPeriodInput!
  ) {
    createMesoPeriod(condition: $condition, input: $input) {
      createdAt
      description
      id
      muscleGroupIds
      muscleGroups {
        nextToken
        __typename
      }
      owner
      updatedAt
      workoutPeriods {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const createMuscleGroup = /* GraphQL */ `
  mutation CreateMuscleGroup(
    $condition: ModelMuscleGroupConditionInput
    $input: CreateMuscleGroupInput!
  ) {
    createMuscleGroup(condition: $condition, input: $input) {
      createdAt
      description
      id
      metadata
      name
      updatedAt
      __typename
    }
  }
`;
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $condition: ModelSessionConditionInput
    $input: CreateSessionInput!
  ) {
    createSession(condition: $condition, input: $input) {
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
export const createSet = /* GraphQL */ `
  mutation CreateSet(
    $condition: ModelSetConditionInput
    $input: CreateSetInput!
  ) {
    createSet(condition: $condition, input: $input) {
      createdAt
      effort
      exercise {
        createdAt
        description
        id
        name
        targetedMusclesIds
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
export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout(
    $condition: ModelWorkoutConditionInput
    $input: CreateWorkoutInput!
  ) {
    createWorkout(condition: $condition, input: $input) {
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
export const createWorkoutPeriod = /* GraphQL */ `
  mutation CreateWorkoutPeriod(
    $condition: ModelWorkoutPeriodConditionInput
    $input: CreateWorkoutPeriodInput!
  ) {
    createWorkoutPeriod(condition: $condition, input: $input) {
      createdAt
      dayOneDate
      description
      id
      mesoPeriod
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
export const createWorkoutTemplate = /* GraphQL */ `
  mutation CreateWorkoutTemplate(
    $condition: ModelWorkoutTemplateConditionInput
    $input: CreateWorkoutTemplateInput!
  ) {
    createWorkoutTemplate(condition: $condition, input: $input) {
      createdAt
      description
      exerciseids
      exercises {
        nextToken
        __typename
      }
      id
      name
      updatedAt
      __typename
    }
  }
`;
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $condition: ModelExerciseConditionInput
    $input: DeleteExerciseInput!
  ) {
    deleteExercise(condition: $condition, input: $input) {
      createdAt
      description
      id
      name
      targetedMuscles {
        nextToken
        __typename
      }
      targetedMusclesIds
      updatedAt
      __typename
    }
  }
`;
export const deleteMesoPeriod = /* GraphQL */ `
  mutation DeleteMesoPeriod(
    $condition: ModelMesoPeriodConditionInput
    $input: DeleteMesoPeriodInput!
  ) {
    deleteMesoPeriod(condition: $condition, input: $input) {
      createdAt
      description
      id
      muscleGroupIds
      muscleGroups {
        nextToken
        __typename
      }
      owner
      updatedAt
      workoutPeriods {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const deleteMuscleGroup = /* GraphQL */ `
  mutation DeleteMuscleGroup(
    $condition: ModelMuscleGroupConditionInput
    $input: DeleteMuscleGroupInput!
  ) {
    deleteMuscleGroup(condition: $condition, input: $input) {
      createdAt
      description
      id
      metadata
      name
      updatedAt
      __typename
    }
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $condition: ModelSessionConditionInput
    $input: DeleteSessionInput!
  ) {
    deleteSession(condition: $condition, input: $input) {
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
export const deleteSet = /* GraphQL */ `
  mutation DeleteSet(
    $condition: ModelSetConditionInput
    $input: DeleteSetInput!
  ) {
    deleteSet(condition: $condition, input: $input) {
      createdAt
      effort
      exercise {
        createdAt
        description
        id
        name
        targetedMusclesIds
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
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout(
    $condition: ModelWorkoutConditionInput
    $input: DeleteWorkoutInput!
  ) {
    deleteWorkout(condition: $condition, input: $input) {
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
export const deleteWorkoutPeriod = /* GraphQL */ `
  mutation DeleteWorkoutPeriod(
    $condition: ModelWorkoutPeriodConditionInput
    $input: DeleteWorkoutPeriodInput!
  ) {
    deleteWorkoutPeriod(condition: $condition, input: $input) {
      createdAt
      dayOneDate
      description
      id
      mesoPeriod
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
export const deleteWorkoutTemplate = /* GraphQL */ `
  mutation DeleteWorkoutTemplate(
    $condition: ModelWorkoutTemplateConditionInput
    $input: DeleteWorkoutTemplateInput!
  ) {
    deleteWorkoutTemplate(condition: $condition, input: $input) {
      createdAt
      description
      exerciseids
      exercises {
        nextToken
        __typename
      }
      id
      name
      updatedAt
      __typename
    }
  }
`;
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $condition: ModelExerciseConditionInput
    $input: UpdateExerciseInput!
  ) {
    updateExercise(condition: $condition, input: $input) {
      createdAt
      description
      id
      name
      targetedMuscles {
        nextToken
        __typename
      }
      targetedMusclesIds
      updatedAt
      __typename
    }
  }
`;
export const updateMesoPeriod = /* GraphQL */ `
  mutation UpdateMesoPeriod(
    $condition: ModelMesoPeriodConditionInput
    $input: UpdateMesoPeriodInput!
  ) {
    updateMesoPeriod(condition: $condition, input: $input) {
      createdAt
      description
      id
      muscleGroupIds
      muscleGroups {
        nextToken
        __typename
      }
      owner
      updatedAt
      workoutPeriods {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const updateMuscleGroup = /* GraphQL */ `
  mutation UpdateMuscleGroup(
    $condition: ModelMuscleGroupConditionInput
    $input: UpdateMuscleGroupInput!
  ) {
    updateMuscleGroup(condition: $condition, input: $input) {
      createdAt
      description
      id
      metadata
      name
      updatedAt
      __typename
    }
  }
`;
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $condition: ModelSessionConditionInput
    $input: UpdateSessionInput!
  ) {
    updateSession(condition: $condition, input: $input) {
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
export const updateSet = /* GraphQL */ `
  mutation UpdateSet(
    $condition: ModelSetConditionInput
    $input: UpdateSetInput!
  ) {
    updateSet(condition: $condition, input: $input) {
      createdAt
      effort
      exercise {
        createdAt
        description
        id
        name
        targetedMusclesIds
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
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout(
    $condition: ModelWorkoutConditionInput
    $input: UpdateWorkoutInput!
  ) {
    updateWorkout(condition: $condition, input: $input) {
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
export const updateWorkoutPeriod = /* GraphQL */ `
  mutation UpdateWorkoutPeriod(
    $condition: ModelWorkoutPeriodConditionInput
    $input: UpdateWorkoutPeriodInput!
  ) {
    updateWorkoutPeriod(condition: $condition, input: $input) {
      createdAt
      dayOneDate
      description
      id
      mesoPeriod
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
export const updateWorkoutTemplate = /* GraphQL */ `
  mutation UpdateWorkoutTemplate(
    $condition: ModelWorkoutTemplateConditionInput
    $input: UpdateWorkoutTemplateInput!
  ) {
    updateWorkoutTemplate(condition: $condition, input: $input) {
      createdAt
      description
      exerciseids
      exercises {
        nextToken
        __typename
      }
      id
      name
      updatedAt
      __typename
    }
  }
`;
