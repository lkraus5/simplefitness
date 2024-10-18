import React, { useState } from 'react';
// import { Schema } from '../models';
import './MesoPage.css'
import { listExercises  } from '../../ui-components/graphql/queries'
// import {
//   Button
// } from "reactstrap";
import { generateClient } from "aws-amplify/data";
// import WorkoutCreateForm from "../../ui-components/WorkoutCreateForm"



import {
    // Card,
    // CardHeader,
    // CardTitle,
    // CardBody,
    // Row,
    // Col,
    // Table,
    // Button,
    // Input,
    ListGroup,
    ListGroupItem,
    // Dropdown,
    // DropdownItem,
    // DropdownMenu,
    // DropdownToggle,
    // Nav,
    // Modal,
    // ModalHeader,
    // ModalBody,
    // ModalFooter,
    // Form,
    // FormGroup,
    // Label,
  } from "reactstrap";

// const { data: exercises, errors } = await client.models.Exercise.list();
// console.log(data)

const listExercisesData = async () => {
    const client = generateClient();
    let Data = await client.graphql({query: listExercises })
    let rawdata = Data.data.listExercises
    let Items = rawdata.items;
    while(rawdata.nextToken != null ){
        Data = await client.graphql({ query: listExercises, variables: { nextToken: rawdata.nextToken } });
        rawdata = Data.data.listExercises
        Items = Items.concat( rawdata.items )
    }
    console.log({Items})
    return(Items)
}


  export default function MesoPage() {
    return(<>
    Meso Page Here
    </>)
}