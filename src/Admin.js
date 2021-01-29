import logo from './logo.svg';
import './App.css';
import React, { Component, useState} from 'react';
import axios from 'axios';
import { Modal, Button, Form, Table, FormFile, Container } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Router, BrowserRouter, Switch, Route, Link} from 'react-router-dom';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_data_from_db: [],
      email: '',
      description: '',
      participants: '',
      selected_session_ts: '',
      show_edit_form: false,
      columns: [
         {
           dataField: "start_time_formatted",
           text: "Time",
           sort: true
         },
         {
           dataField: "duration_minutes",
           text: "Duration (minutes)",
           sort: true
         },
         {
           dataField: "event_description",
           text: "Event description",
           sort: true
         },
         {
           dataField: "num_spots",
           text: "Spots Left",
           sort: true
         },
         {
           dataField: "edit",
           text: "",
           formatter: this.linkEdit,
           sort: true
         }
       ],
    };

    this.handleClose = this.handleClose.bind(this);
    this.get_session_info = this.get_session_info.bind(this);

  }

  handleClose() {
    this.setState({['show_edit_form'] : false});
  }

  onRegisterFormSubmit(e) {
    e.preventDefault();
    console.log("hello" + this.state.firstName + ' ' + this.state.lastName + ' ' + this.state.email, + ' ' + this.state.selected_session_ts);
    this.handleClose()
    // this.get_session_info()
  };

  onEditChanged(row) {
    this.setState({['show_edit_form'] : true});
    this.setState({['selected_session_ts'] : row['start_time']});
    // this.get_session_info();
    // this.description = this.all_data_from_db[row['start_time']]

    console.log(row, row['start_time'], 'hi', typeof(this.all_data_from_db));
  };

  handleChange(e) {
   const target = e.target;
   const name = target.name;
   const value = target.value;

   this.setState({
     [name]: value
   });
 }

  linkEdit = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button
        onClick={() => {
          this.onEditChanged(row);
        }}
      >
        Edit
      </Button>
    );
  };

  async get_session_info(event) {
    if (event) {
      event.preventDefault();
    }
    await axios.get(
      'https://cqakerxfi7.execute-api.us-west-2.amazonaws.com/prod/manageSessions/',
      { params: { reqType: 'session_info', time_ts: this.state.selected_session_ts} }
    ).then((response) => {
  console.log("response data", response.data);
  this.setState({['all_data_from_db'] : response.data});
}, (error) => {
  console.log(error);
});
  }

  async getSessions(event) {
    if (event) {
      event.preventDefault();
    }
    await axios.get(
      'https://cqakerxfi7.execute-api.us-west-2.amazonaws.com/prod/manageSessions/',
      { params: { reqType: 'summary' } }
    ).then((response) => {
  console.log(response);
  this.setState({['all_data_from_db'] : response.data});
}, (error) => {
  console.log(error);
});
  }

  componentDidMount(event) {
    this.getSessions();
  }

  render() {
    return (
      <Container>
      <h2 className="title">Upcoming Group Virtual Sessions</h2>
      <hr className="hr-title-line"/>
      <BootstrapTable
        keyField="id"
        data={this.state.all_data_from_db}
        columns={this.state.columns}
      />

      <Modal show={this.state.show_edit_form} onHide={e => this.handleClose(e)}>
        <Modal.Header closeButton>
          <Modal.Title>Event details</Modal.Title>
        </Modal.Header>
        <Form.Group controlId="description">
          <Form.Label>Event description</Form.Label>
          <Form.Control
            type="text"
            value={this.state.description}
            name="description"
            placeholder=""
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="participants">
          <Form.Label>List of participants</Form.Label>
          <Form.Control
            type="text"
            value={this.state.participants}
            name="participants"
            placeholder=""
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>
        <Form.Group>
           <Button
           variant="primary"
           type="button"
           onClick={e => this.onRegisterFormSubmit(e)}
           block>
             Save
           </Button>
        </Form.Group>
      </Modal>

      </Container>
      );
    }
  }
