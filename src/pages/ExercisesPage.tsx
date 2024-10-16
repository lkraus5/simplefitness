import { Link } from "react-router-dom";
import './ExercisesPage.css'
// import {
//   Button
// } from "reactstrap";
// import { generateClient } from "aws-amplify/data";
import ExerciseCreateForm from "../../ui-components/ExerciseCreateForm"
import ExercisesList from "../components/ExercisesList"
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

export default function ExercisesPage() {
    return(<>
        <main className='appMain'>
            <div className='Sidebar'>
                <ListGroup className='sidebarListGroup' flush>
                    <Link to="/"><ListGroupItem className='sidebarObjSize sidebarListGroupItem'>Manage Exercises</ListGroupItem></Link>
                </ListGroup>
            </div>
            <div className='MainPanel'>
                <div>
                    <ExerciseCreateForm />
                </div>
                <div>
                    <ExercisesList />
                </div>
            </div>
        </main>
    </>)

}

