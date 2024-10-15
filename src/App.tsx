import { Authenticator } from '@aws-amplify/ui-react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import {
  Button
} from "reactstrap";
// import { generateClient } from "aws-amplify/data";
// import ExerciseCreateForm from "../ui-components/ExerciseCreateForm"
import SetupPage from './pages/Setup';
// const client = generateClient<Schema>();

export default function App() {
  // const [workouts, setWorkouts] = useState<Array<Schema["Workout"]["type"]>>([]);


  return (
    <Authenticator loginMechanisms={['username']}>
      {({ signOut }) => <>
        <Router>
          <nav className='mainNavbar'>
            {/* <img src="/mooserun2Logo-smaller-transparent.png" alt="image" style={{height: "60px", width: "60px", top: "14px", left: "10px"}} /> */}


            <Button className='signOutButton' onClick={signOut}>Sign out</Button>
          </nav>
          <main className='appMain'>
            <Routes>
              <Route path="/" element={<SetupPage />} />
            </Routes>
          </main>
        </Router>
      </>}
    </Authenticator>
  )

}

