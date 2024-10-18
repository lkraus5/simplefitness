import { Authenticator } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import {
  Button
} from "reactstrap";
// import { generateClient } from "aws-amplify/data";
// import ExerciseCreateForm from "../ui-components/ExerciseCreateForm"
import MesoPage from './pages/MesoPage';
// const client = generateClient<Schema>();

export default function App() {

  
  return (
    <Authenticator loginMechanisms={['username']}>
      {({ signOut }) => <>
        <Router>
          <nav className='mainNavbar'>
            <Button className='signOutButton' onClick={signOut}>Sign out</Button>
          </nav>
            <Routes>
              <Route path="/" element={<MesoPage />} />
            </Routes>
        </Router>
      </>}
    </Authenticator>
  )

}
