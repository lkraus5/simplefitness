
import './Setup.css'
// import {
//   Button
// } from "reactstrap";
// import { generateClient } from "aws-amplify/data";
import ExerciseCreateForm from "../../ui-components/ExerciseCreateForm"
// const client = generateClient<Schema>();

export default function SetupPage() {
    return (
        <div className='computeExecutionMainPanel'>
            <div>
                <ExerciseCreateForm />
            </div>
        </div>
    )

}

