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
import MesoPage from './pages/MesoPage';
import AdminPage from './pages/AdminPage'
// const client = generateClient<Schema>();

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('MesoPage');
  const toggle = () => setIsOpen(!isOpen);

  
  return (
    <Authenticator loginMechanisms={['username']}>
      {({ signOut }) => <>
        <Navbar>
            <NavbarBrand href="/">BuffMoose</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem><NavLink onClick={setCurrentPage('MesoPage')} >MesoCycle</NavLink></NavItem>
                    <NavItem><NavLink onClick={setCurrentPage('AdminPage')}>Admin</NavLink></NavItem>
                    <hr />
                    <NavItem><NavLink onClick={signOut}>Sign out</NavLink></NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        { currentPage === 'MesoPage' && <MesoPage /> }
        { currentPage === 'AdminPage' && <AdminPage /> }
      </>}
    </Authenticator>
  )

}

