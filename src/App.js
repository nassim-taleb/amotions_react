import logo from './logo.svg';
import './App.css';
import React, { Component, useState} from 'react';
import axios from 'axios';
import { Modal, Button, Form, Table, FormFile, Container, Navbar, Nav} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, Router, BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';

function App() {
    return (
      <div>
          <div className="row">
              <div className="col-md-12">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Amotions</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          {/* <Nav.Link href="/admin">Admin</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
           <Route exact path="/" component={Home}/>
           {/* <Route path="/admin" component={Admin}/> */}
     </Switch>
     </div>
 </div>
</div>
    )
}

export default App;
