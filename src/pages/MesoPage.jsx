import React, { useState } from 'react';
import './MesoPage.css'
import { listExercises, listMesoPeriods  } from '../../ui-components/graphql/queries'

import { generateClient } from "aws-amplify/data";
import { MesoPeriodCreateForm } from '../../ui-components'



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


class MesoPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            openedCollapses: [],
            MostRecentMesocycle: {},
        }
        this.getListMesoPeriods()
    }


    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.MostRecentMesocycle !== this.state.MostRecentMesocycle){
            console.log(this.state.MostRecentMesocycle)
        } 
    }

    getListMesoPeriods = async () => {
        const client = generateClient();
        let Data = await client.graphql({query: listMesoPeriods })
        let rawdata = Data.data.listMesoPeriods
        let Items = []
        Items = rawdata.items;
        while(rawdata.nextToken != null ){
            Data = await client.graphql({ query: listMesoPeriods, variables: { nextToken: rawdata.nextToken } });
            rawdata = Data.data.listMesoPeriods
            Items = Items.concat( rawdata.items )
        }
        if (Items.length > 0) {
          const sortedItems = [ ...Items.sort( function (a,b){ return new Date(b.createdAt) - new Date(a.createdAt)})]
          this.useState({MostRecentMesocycle: sortedItems[0] })
        }
    }


    render(){
      return(<>
          { !this.state.MostRecentMesocycle['id'] &&
            <MesoPeriodCreateForm />
          }
          
          { this.state.MostRecentMesocycle['id'] &&
            this.state.MostRecentMesocycle.id
          }
        </>)
    }
}

export default MesoPage