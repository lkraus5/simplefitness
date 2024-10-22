import React, { useState } from 'react';
import './SetupPage.css'
import { listMuscleGroups, listExercises  } from '../../ui-components/graphql/queries'
import { createMesoPeriod, createWorkoutPeriod } from '../../ui-components/graphql/mutations'


import { generateClient } from "aws-amplify/data";
// import { MesoPeriodCreateForm } from '../../ui-components'



import {
    Card,
    CardHeader,
    CardSubtitle,
    CardTitle,
    CardBody,
    Row,
    Col,
    Table,
    Button,
    Input,
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
    Label
  } from "reactstrap";




class SetupPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            setupStage: 0,
            openedCollapses: [],
            ExerciseData: [],
            MuscleGroupData: [],
            allMuscleGroups: [],
            selectedMuscleGroups:[],
            MesoDescription: "",
            FirstStartDate: null,
        }
        this.getSetupData()
        
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.MostRecentMesocycle !== this.state.MostRecentMesocycle){
            console.log(this.state.MostRecentMesocycle)
        } 
    }



    getLastSunday = () => {
      const today = new Date();
      const dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, etc.
      const daysSinceSunday = dayOfWeek === 0 ? 7 : dayOfWeek; 
      const lastSunday = new Date(today);
      lastSunday.setDate(today.getDate() - daysSinceSunday);
      this.setState({FirstStartDate: lastSunday})
      return lastSunday;
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
    setFullBodyActive = () => {
      if (this.isFullBodyActive(this.state.allMuscleGroups, this.state.selectedMuscleGroups)) {
        this.setState({selectedMuscleGroups: [] })
      } else {
        this.setState({selectedMuscleGroups: this.state.allMuscleGroups })
      }
      
    }

    submitMesoPeriodSetup = async (state) => {
      // console.log(state.selectedMuscleGroups)
      // console.log(state.MesoDescription)
      let modelFields = {}
      modelFields['muscleGroupIds'] = this.state.MuscleGroupData.filter((mg) => { if (state.selectedMuscleGroups.includes(mg.name)){ return(mg )  } }).map((mg) => {return(mg['id'])} )
      modelFields['description'] = state.MesoDescription
      let workoutPeriodInput = {}
      console.log({modelFields})

      const client = generateClient();
      try {
        Object.entries(modelFields).forEach(([key, value]) => { if (typeof value === "string" && value === "") { modelFields[key] = null; } });
        const newMesoPeriodResponse = await client.graphql({ query: createMesoPeriod.replaceAll("__typename", ""), variables: { input: { ...modelFields, }, }, })


        
        workoutPeriodInput['id'] = newMesoPeriodResponse['data']['createMesoPeriod']['id']
        workoutPeriodInput['dayOneDate'] = this.getLastSunday()
        const newWorkoutPeriodResponse = await client.graphql({ query: createWorkoutPeriod.replaceAll("__typename", ""), variables: { input: { ...workoutPeriodInput, }, }, })

        console.log({newWorkoutPeriodResponse})
        this.setState({selectedMesoPeriod: newMesoPeriodResponse['data']['createMesoPeriod'],
          mesoWorkoutPeriods: [ newWorkoutPeriodResponse['data']['createWorkoutPeriod'] ],
          setupStage: 1
        })
      } catch (err) {
          if (err) {
            console.log(err)
          }
        }
    }

    render(){
      return(<>
            <Card>
              
              { this.state.setupStage == 0 && <>
                <CardHeader>Lets plan a workout</CardHeader>  
                <CardSubtitle>Which muscle groups are we targeting?</CardSubtitle>
                <CardBody>
                    <Row>
                      <Col>
                        <ListGroup >
                          <ListGroupItem onClick={ e => this.setFullBodyActive('FullBody') }> <Input type="checkbox" checked={ this.isFullBodyActive(this.state.allMuscleGroups, this.state.selectedMuscleGroups) } />  Full Body</ListGroupItem>
                          {  this.state.MuscleGroupData.map((mg) => {return(<ListGroupItem onClick={ e => this.selectMuscleGroups(mg.name)} ><Input type="checkbox" checked={this.state.selectedMuscleGroups.includes( mg.name)} />  {mg.name}</ListGroupItem>)})  }
                        </ListGroup>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>
                        <Input className='descriptionInput' type="textarea" placeholder="Elaborate your goals for the next few weeks" onChange={ e => this.setState({MesoDescription: e.target.value  }) }/>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>
                        <Button onClick={e => this.submitMesoPeriodSetup(this.state)} success>Next</Button>
                      </Col>
                    </Row>
                </CardBody>
              </>}
              { this.state.setupStage == 1 && <>
                <CardHeader>Select which days you would like to work out.</CardHeader>  
                <CardBody>
                    <Row>
                      <Col>
                        <Table >
                          <tr>
                            <tr>
                              <td>Week 1</td>
                              <td> { this.state.FirstStartDate.toLocaleString().split(',')[0] } </td>
                            </tr>
                            <tr>
                              <td>Sunday </td>
                              <td><Button>Add Workout</Button></td>
                            </tr>
                            <tr>
                              <td>Monday </td>
                              <td><Button>Add Workout</Button></td>
                            </tr>
                            <tr>
                              <td>Tuesday </td>
                              <td><Button>Add Workout</Button></td>
                            </tr>
                            <tr>
                              <td>Wednesday  </td>
                              <td><Button>Add Workout</Button></td>
                            </tr>
                            <tr>
                              <td>Thursday </td>
                              <td><Button>Add Workout</Button></td>
                            </tr>
                            <tr>
                              <td>Friday </td>
                              <td><Button>Add Workout</Button></td>
                            </tr>
                            <tr>
                              <td>Saturday </td>
                              <td><Button>Add Workout</Button></td>
                            </tr>
                            
                          </tr>
                          <tr>
                            <td><Button>Add Week</Button></td>
                          </tr>
                        </Table>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      </Col>
                    </Row>
                </CardBody>
              </>}
            </Card>
        </>)
    }
}

export default SetupPage