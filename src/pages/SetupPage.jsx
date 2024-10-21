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
            startDateOptions: <></>
        }
        this.getSetupData()
        this.renderWeekSelect()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.MostRecentMesocycle !== this.state.MostRecentMesocycle){
            console.log(this.state.MostRecentMesocycle)
        } 
    }

    renderWeekSelect = (date = new Date()) => {
      const today = new Date(date);
      const daysUntilNextSunday = 7 - today.getDay();
      const nextSundayDate = new Date(today);
      nextSundayDate.setDate(today.getDate() + daysUntilNextSunday);

      const secondSundayDate = new Date()
      secondSundayDate.setDate(secondSundayDate.getDate() + daysUntilNextSunday +  7)
      const thirdSundayDate = new Date()
      thirdSundayDate.setDate(thirdSundayDate.getDate() + daysUntilNextSunday + 14)
      console.log(nextSundayDate)
      this.setState({ startDateOptions: <>
        <option value={nextSundayDate}>
          {nextSundayDate}
        </option>
        <option value={secondSundayDate}>
          {secondSundayDate}
        </option>
        <option value={thirdSundayDate}>
          {thirdSundayDate}
        </option>
      </>})
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
      console.log({modelFields})

      const client = generateClient();
      try {
        Object.entries(modelFields).forEach(([key, value]) => { if (typeof value === "string" && value === "") { modelFields[key] = null; } });
        const newMesoPeriodResponse = await client.graphql({ query: createMesoPeriod.replaceAll("__typename", ""), variables: { input: { ...modelFields, }, }, })
        console.log({newMesoPeriodResponse})
        this.setState({selectedMesoPeriod: newMesoPeriodResponse['data']['createMesoPeriod'],
          setupStage: 1
        })} catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            console.log(messages)
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
                      <Col className='col-6'>
                        <ListGroup >
                          <ListGroupItem onClick={ e => this.setFullBodyActive('FullBody') }> <Input type="checkbox" checked={ this.isFullBodyActive(this.state.allMuscleGroups, this.state.selectedMuscleGroups) } />  Full Body</ListGroupItem>
                          {  this.state.MuscleGroupData.map((mg) => {return(<ListGroupItem onClick={ e => this.selectMuscleGroups(mg.name)} ><Input type="checkbox" checked={this.state.selectedMuscleGroups.includes( mg.name)} />  {mg.name}</ListGroupItem>)})  }
                        </ListGroup>
                      </Col>
                      <Col className='col-6'>
                        <Label for="startDateSelect">Select Start Date:</Label>
                        <Input type="select" name="select" id="startDateSelect">
                          {this.state.startDateOptions }
                        </Input> 
                        <br />
                        <Input className='descriptionInput' type="textarea" placeholder="Elaborate your goals for the next few weeks" onChange={ e => this.setState({MesoDescription: e.target.value  }) }/>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button onClick={e => this.submitMesoPeriodSetup(this.state)} success>Next</Button>
                      </Col>
                    </Row>
                </CardBody>
              </>}
              { this.state.setupStage == 1 && <>
                <CardHeader>Lets pick some exercises</CardHeader>  
                <CardBody>
                    <Row>
                      <Col className='col-6'>
                        <Table >
                          <tr>
                            <tr>
                              <td>Week 1</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><Button>Add Workout Session</Button></td>
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