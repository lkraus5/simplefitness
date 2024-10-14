import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
// const schema = a.schema({
//   Todo: a
//     .model({
//       content: a.string(),
//     })
//     .authorization((allow) => [allow.publicApiKey()]),
// });

const schema = `type Exercise @model  @auth(rules: [ {allow: private, provider: userPools, operations: [read]}, { allow: private, provider: iam}])  {
  id: ID!
  name: String!
  targetedMuscles: [String]
  description: String
}

type Workout @model @auth(rules: [ {allow: owner}, { allow: private, provider: iam}]) {
  id: ID!
  name: String!
  exerciseids: [ID]
  exercises: [Exercise] @hasMany(fields: ["exerciseids"])
  description: String
  sessions: [Session] @hasMany(indexName:"sessionByWorkout", fields:["id"])
}

type Session @model @auth(rules: [ {allow: owner}, { allow: private, provider: iam}]) {
  id: ID!
  workout: ID @index(name: "sessionByWorkout", sortKeyFields: ["createdAt"])
  fueledFeeling: String
  muscleFeeling: String
  sets: [Set] @hasMany(indexName:"setBySessionAndExercise", fields:["id"])
  createdAt: String!
  updatedAt: String!
}

type Set @model @auth(rules: [ {allow: owner}, { allow: private, provider: iam}]) {
  id: ID!
  session: ID @index(name: "setBySessionAndExercise", sortKeyFields: ["exerciseid", "createdAt"]) @index(name: "setBySession", sortKeyFields: ["createdAt"])
  exerciseid: ID @index(name: "setByExerciseAndSession", sortKeyFields: ["session", "createdAt"]) @index(name: "setByExercise", sortKeyFields: ["createdAt"])
  exercise: Exercise @hasOne(fields: ["exerciseid"])
  reps: String
  weight: String
  repsInReserve: String
  rangeOfMotion: String
  feeling: String
  effort: String
  createdAt: String!
  updatedAt: String!
}

type WorkoutPeriod @model @auth(rules: [ {allow: owner}, { allow: private, provider: iam}]) {
  id: ID!
  name: String!
  workoutids: [ID]
  workouts: [Workout] @hasMany(fields: ["workoutids"])
  description: String
}

type MesoPeriod @model @auth(rules: [ {allow: owner}, { allow: private, provider: iam}]) {
  id: ID!
  name: String!
  workoutPeriodIds: [ID]
  workoutPeriods: [WorkoutPeriod] @hasMany(fields: ["workoutPeriodIds"])
  description: String
}`


export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
