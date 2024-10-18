import React from "react";
import { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
import './ExercisesList.css'
import { generateClient } from "aws-amplify/api";
import { listExercises } from "../../ui-components/graphql/queries";
import {  ListGroup, ListGroupItem } from "reactstrap";


// async getInstanceTypes(){

    // console.log({InstanceTypeItems})
    // this.setState({instanceTypes: InstanceTypeItems})
    // this.sortInstanceTypes(InstanceTypeItems)
// }



const [ exercises, setExercises ] = useState('')


// useEffect(() => {
//     ListExercises()
// }, [])

const ListExercises = async () => {
    const client = generateClient();
    let Data = await client.graphql({query: listExercises })
    let rawdata = JSON.parse(JSON.parse(JSON.stringify(Data)).data.listExercises)
    let Items = rawdata.items;
    while(rawdata.nextToken != null ){
        Data = await client.graphql({ query: listExercises, variables: { nextToken: rawdata.nextToken } });
        rawdata = JSON.parse(JSON.parse(JSON.stringify(Data)).data.listExercises)
        Items = Items.concat( rawdata.items )
    }
    console.log(Items)
    setExercises(Items)
}

const renderExercises = data => {
    if (data !== null) {
        try {
            return(
                data.map((exercise) => {
                    return(
                        <ListGroupItem>
                            {exercise}
                        </ListGroupItem>
                    )
                })
            )
        } catch (error) {
            console.log(error)
        }
    }
}


export default async function ExercisesList() {
    const {
        clearOnSuccess = true,
        onSuccess,
        onError,
        onSubmit,
        onValidate,
        onChange,
        overrides,
        ...rest
    } = props;
    const initialValues = {
        exercises: [],
        exerciseListItems: []
    };
    const [exercises, setExercises] = React.useState(initialValues.exercises );
    const [exerciseListItems, setexerciseListItems] = React.useState(initialValues.description);
    const [errors, setErrors] = React.useState({});


    const resetStateValues = () => {
        setExercises(initialValues.exercises);
        setexerciseListItems(initialValues.exerciseListItems);
        // setCurrentExerciseidsValue("");
        // setDescription(initialValues.description);
        setErrors({});
    };

    const getExercises = async () => {
        const client = generateClient();
        let Data = await client.graphql({query: listExercises })
        let rawdata = JSON.parse(JSON.parse(JSON.stringify(Data)).data.listExercises)
        let Items = rawdata.items;
        while(rawdata.nextToken != null ){
            Data = await client.graphql({ query: listExercises, variables: { nextToken: rawdata.nextToken } });
            rawdata = JSON.parse(JSON.parse(JSON.stringify(Data)).data.listExercises)
            Items = Items.concat( rawdata.items )
        }
        // console.log(Items)
        setExercises(Items)
        setexerciseListItems(data.map((exercise) => {
            return(
                <ListGroupItem>
                    {exercise}
                </ListGroupItem>
            )
        }))
    }




}

