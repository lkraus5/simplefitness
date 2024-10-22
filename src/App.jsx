import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Authenticator } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
// import { generateClient } from "aws-amplify/data";
// import ExerciseCreateForm from "../ui-components/ExerciseCreateForm"
import SetupPage from './pages/SetupPage';
// import AdminPage from './pages/AdminPage'
// const client = generateClient<Schema>();

function Page(input){
  let page = <></>
  if (input === 'MesoPage') {
    page = <MesoPage />
  } 
  return(page)
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('MesoPage');
  const toggle = () => { setIsOpen(!isOpen)};
  const setPageMeso = () => { setCurrentPage('MesoPage');
    setIsOpen(!isOpen);
  };
  const setPageAdmin = () => { setCurrentPage('AdminPage')
    setIsOpen(!isOpen)
  };
  // const showPage = (pagename) => { 
  //   console.log(pagename)
  //   setCurrentPage(pagename) }


  
  return (
    <Authenticator loginMechanisms={['username']}>
      {({ signOut }) => <>
        <Navbar>
            <NavbarBrand href="/">BuffMoose</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse className='navDropdown dropdownBox' isOpen={isOpen} navbar>
                <Nav className="me-auto navDropdown" navbar>
                    <NavItem className='navDropdownItem btn' active={ currentPage == 'MesoPage' } onClick={ setPageMeso  } >MesoCycle</NavItem>
                    <NavItem className='navDropdownItem btn' active={ currentPage == 'AdminPage' } onClick={ setPageAdmin } >Admin</NavItem>
                    <hr />
                    <NavItem className='navDropdownItem btn' onClick={signOut}>Sign out</NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <div className='MainPanel'>
            {/* <Page input={currentPage} /> */}
            {/* <SetupPage /> */}
            { currentPage && currentPage == 'MesoPage' && <SetupPage /> }
            {/* { currentPage && currentPage == 'AdminPage' && <AdminPage /> } */}
        </div>
      </>}
    </Authenticator>
  )

}

