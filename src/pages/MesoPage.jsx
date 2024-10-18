// import { Link } from "react-router-dom";

import { ResponsiveNavbar } from '../components'
import './MesoPage.css'
// import {
//   Button
// } from "reactstrap";
// import { generateClient } from "aws-amplify/data";
// import WorkoutCreateForm from "../../ui-components/WorkoutCreateForm"
import {
  Exercise,
  Workout,
  Session,
  Set,
  WorkoutPeriod,
  MesoPeriod
} from '../models'


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

// const ListExercises = async () => {
//     const client = generateClient();
//     let Data = await client.graphql({query: listExercises })
//     let rawdata = JSON.parse(JSON.parse(JSON.stringify(Data)).data.listExercises)
//     let Items = rawdata.items;
//     while(rawdata.nextToken != null ){
//         Data = await client.graphql({ query: listExercises, variables: { nextToken: rawdata.nextToken } });
//         rawdata = JSON.parse(JSON.parse(JSON.stringify(Data)).data.listExercises)
//         Items = Items.concat( rawdata.items )
//     }
//     return(Items)
// }

  export default function MesoPage() {
    return(<>
        <ResponsiveNavbar />
    </>)
}