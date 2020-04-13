import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from './Routes'
import './App.css';

function App() {
  
  return (
    <div className="App container-fluid">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Company</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>          
          <Nav>
            <LinkContainer to="/home"><NavItem>Home</NavItem></LinkContainer>
            <LinkContainer to="/transaction"><NavItem>Transaction</NavItem></LinkContainer>          
          </Nav>
          <Nav pullRight>            
            <LinkContainer to="/Logout"><NavItem>Logout</NavItem></LinkContainer>          
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
      <Routes></Routes>
    </div>
  );
}

export default App;
