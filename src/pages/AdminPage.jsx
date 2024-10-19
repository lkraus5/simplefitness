import './AdminPage.css'
import { listExercises, listMesoPeriods  } from '../../ui-components/graphql/queries'

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


class AdminPage extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          openedCollapses: [],
          MostRecentMesocycle: {},
      }
      this.getListExercises()
  }


    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.MostRecentMesocycle !== this.state.MostRecentMesocycle){
            console.log(this.state.MostRecentMesocycle)
        } 
    }

    getListExercises = async () => {
        const client = generateClient();
        let Data = await client.graphql({query: listExercises })
        let rawdata = Data.data.listExercises
        let Items = []
        Items = rawdata.items;
        while(rawdata.nextToken != null ){
            Data = await client.graphql({ query: listExercises, variables: { nextToken: rawdata.nextToken } });
            rawdata = Data.data.listExercises
            Items = Items.concat( rawdata.items )
        }
        if (Items.length == 1) {
          this.useState({MostRecentMesocycle: Items })
        } else if (Items.length > 1) {
          const sortedItems = [ ...Items.sort( function (a,b){ return new Date(b.createdAt) - new Date(a.createdAt)})]
          this.useState({MostRecentMesocycle: sortedItems })
        }
    }


    render(){
      return(<>
        Meso Page Here
        </>)
    }
}

export default AdminPage