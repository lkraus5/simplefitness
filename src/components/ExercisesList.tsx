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


useEffect(() => {
    ListExercises()
}, [])

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
    // console.log(Items)
    setExercises(Items)
    const exerciseList = Items.map((exercise: Object) => {
        return(
            <React.Fragment>
                <ListGroupItem>
                    {exercise}
                </ListGroupItem>
            </React.Fragment>
        )
    })

    // return(<>
    // <ListGroup>
    //     {exerciseList}
    // </ListGroup>
    // </>)
    // setExercises(exerciseList)
    setExercises(exerciseList)
}


export default function ExercisesList() {
    // console.log(exercises)
    // const exerciseList = GetExercises()
    // GetExercises()
    return(<>
    <ListGroup>
        {exercises}
    </ListGroup>
    </>)

}

