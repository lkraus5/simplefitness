import React, { useState } from 'react';
import './SetupPage.css'
import { listMuscleGroups, listExercises  } from '../../ui-components/graphql/queries'
import { createMesoPeriod } from '../../ui-components/graphql/mutations'


import { generateClient } from "aws-amplify/data";
// import { MesoPeriodCreateForm } from '../../ui-components'



import {
    Card,
    CardHeader,
    CardSubtitle,
    CardTitle,
    CardBody,
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

// const listExercisesData = async () => {
//     const client = generateClient();
//     let Data = await client.graphql({query: listExercises })
//     let rawdata = Data.data.listExercises
//     let Items = rawdata.items;
//     while(rawdata.nextToken != null ){
//         Data = await client.graphql({ query: listExercises, variables: { nextToken: rawdata.nextToken } });
//         rawdata = Data.data.listExercises
//         Items = Items.concat( rawdata.items )
//     }
//     console.log({Items})
//     return(Items)
// }


class SetupPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            openedCollapses: [],
            ExerciseData: [],
            MuscleGroupData: [],
            allMuscleGroups: [],
            selectedMuscleGroups:[],
        }
        this.getSetupData()
    }


    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.MostRecentMesocycle !== this.state.MostRecentMesocycle){
            console.log(this.state.MostRecentMesocycle)
        } 
    }

    getSetupData= async () => {
        const client = generateClient();
        let statusUpdateInput = {};
        let Data = await client.graphql({query: listMuscleGroups })
        let rawdata = Data.data.listMuscleGroups
        let Items = []
        Items = rawdata.items;
        while(rawdata.nextToken != null ){
            Data = await client.graphql({ query: listMuscleGroups, variables: { nextToken: rawdata.nextToken } });
            rawdata = Data.data.listMuscleGroups
            Items = Items.concat( rawdata.items )
        }
        statusUpdateInput['MuscleGroupData'] = Items
        
        statusUpdateInput['selectedMuscleGroups'] = Items.map((mg) => {
          return(mg.name)
        })

        statusUpdateInput['allMuscleGroups'] = statusUpdateInput['selectedMuscleGroups'] 

        Data = await client.graphql({query: listExercises })
        rawdata = Data.data.listExercises
        Items = []
        Items = rawdata.items;
        while(rawdata.nextToken != null ){
            Data = await client.graphql({ query: listExercises, variables: { nextToken: rawdata.nextToken } });
            rawdata = Data.data.listExercises
            Items = Items.concat( rawdata.items )
        }
        statusUpdateInput['ExerciseData'] = Items

        console.log({statusUpdateInput})
        this.setState(statusUpdateInput)

        // if (Items.length > 1) {
        //   const sortedItems = [ ...Items.sort( function (a,b){ return new Date(b.createdAt) - new Date(a.createdAt)})]
        //   this.setState({MostRecentMesocycle: sortedItems[0] })
        // } else if (Items.length == 1) {
        //   this.setState({MostRecentMesocycle: Items[0] })
        // } else if (Items.length == 0) {
        //   const newMesoPeriod = await client.graphql(graphqlOperation(createMesoPeriod, {input: { periodLength: "1" }}));
        //   console.log({newMesoPeriod})
        //   this.setState({ MostRecentMesocycle: newMesoPeriod['createMesoPeriod']  })
        // }

    }

    toggleArrValue = (value, arr) => {
      if (arr.includes(value)) {
        return arr.filter(item => item !== value);
      } else {
        return [...arr, value];
      }
    }

    selectMuscleGroups = (mgName) => {
      this.setState({selectedMuscleGroups: this.toggleArrValue(mgName, this.state.selectedMuscleGroups)})
    }

    isFullBodyActive = (allMuscleGroups, selectedMuscleGroups) => {
      if (allMuscleGroups.length == selectedMuscleGroups.length) {
        return(true)
      } else {
        return(false)
      }
    }

    // isMuscleActive = (muscle, selectedMuscleGroups) => {
    //   // console.log({muscle})
    //   // console.log({selectedMuscleGroups})
    //   let setreturn = false
    //   for (let index = 0; index < selectedMuscleGroups.length; index++) {
    //     const mg = selectedMuscleGroups[index];
    //     if (mg.name == muscle) {
    //       return(true)
    //     }
    //   }
    //   return (setreturn)
    // }


    render(){
      return(<>
            <Card>
              <CardHeader>Lets plan a workout</CardHeader>  
              <CardSubtitle>Which muscle groups are we targeting?</CardSubtitle>
              <ListGroup >
                <ListGroupItem onClick={ e => this.selectMuscleGroups('FullBody') } active={ this.isFullBodyActive(this.state.allMuscleGroups, this.state.selectedMuscleGroups) }>Full Body</ListGroupItem>
                {
                  this.state.MuscleGroupData.map((mg) => {
                    return(
                      <ListGroupItem onClick={ e => this.selectMuscleGroups(mg.name)} active={ this.state.selectedMuscleGroups.includes( mg.name) } >{mg.name}</ListGroupItem>
                    )
                  })
                }
              </ListGroup>
            </Card>
        </>)
    }
}

export default SetupPage