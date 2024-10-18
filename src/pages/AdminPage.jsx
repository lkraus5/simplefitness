import './AdminPage.css'
import React, { useState, Suspense } from 'react';
import { listExercises  } from '../../ui-components/graphql/queries'
import { generateClient } from "aws-amplify/data";



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
    // console.log({Items})
    return(Items)
}

const ExerciseList = () => {
  const [exercises] = useState();
  if (exercises.length() > 0) {
    return(exercises.map((exercise) => {
      return(<>
        <li>
          {exercise.name}
        </li>
      </>)
    }))
  } else {
    return(<></>)
  }
  
}


  export default function AdminPage() {
    const [exercises, setExercises] = useState(['']);
    setExercises(listExercisesData())

    
    return(<>
        <ExerciseList />
    </>)
}