import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import FormFile from 'react-bootstrap/FormFile'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_notes: [],
      note: '',
      open: false,
    };
  }
  render() {
    return (
      <Container>
      {/* Navbar */}

      <nav className="navbar navbar-expand-lg navbar-light ">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item active">
              <a className="nav-link" href="index.html" id="active-link">HOME<span className="sr-only">(current)</span></a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="contact.html">CONTACT US</a>
            </li>

          </ul>
        </div>

        <nav className="navbar">
          <a href="#">
            <img src="user-icon.svg"  width="30" height="30" alt="user login" loading="lazy"/>
          </a>
        </nav>
      </nav>

      {/*End of Navbar */}


      {/* ************************ HEADLINE ************************* */}
      <div className="row top-container">
        <div className="headline-container col-lg-5">
          <div className="headline">
            <h1>Amotions</h1>
            <p>A platform for sharing and improving
              emotional and mental health and EQ</p>
            <button type="button" className="login-button btn btn-dark">SIGN UP / LOG IN</button>
          </div>
        </div>

        <div className="top-image col-lg-7">
          <img src="bg.png" className="top-image" style={{"width": "103%"}} alt="plants image"/>
        </div>

      </div>

      {/*<!-- ************************  HOW DOES IT WORK  ************************* -->*/}
      <h2 className="title">How Does It Work</h2>
      <hr className="hr-title-line"/>

      <div className="row" style={{"margin-top":"30px"}}>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">A Platform For Sharing and Helping Each Other</h4>
              <p className="card-text gray-text">You can join virtual sessions to connect and share with each other what's going on in your life and in your mind, and improve emotional intelligence and wellness and mental health.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Practice Empathetic Listening</h4>
              <p className="card-text gray-text">Sessions often start with a loving kindness meditation to cultivate a compassionate environment. You can even volunteer to receive trainings and become a moderator.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Improve emotional and mental health and Emotional Intelligence</h4>
              <p className="card-text gray-text">Through sharing and listening, you and other users will help each other improve mental and emotional wellbeing and emotional intelligence. We will also provide you with tips on how to stay calm. Long term we
                will
                provide you with artificial intelligence powered real time advice for you to reduce stress, based on understanding your facial expressions, voice, tones, and body languages.</p>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- ************************  Group Virtual Sessions  ************************* -->*/}

      <h2 className="title">Group Virtual Sessions</h2>
      <hr className="hr-title-line"/>


      <div className="register-block">
        <div className="register-info">
          <h4 className="card-text">Next virtual group session</h4>
          <p className="card-subtext">1 hr | $6.99</p>
        </div>

        <div className="register-btn-holder">
          <a href="#" className="btn btn-primary register-button" style={{"margin-top":"0"}}>REGISTER</a>
        </div>


      </div>




      {/*<!-- ************************  Testimonials  ************************* -->*/}

      <h2 className="title">Testimonials</h2>
      <hr className="hr-title-line"/>

      <div className="testimonial-card">
        <h5>Kim M.</h5>
        <p className="gray-text">“I have been really challenged to live in the present these two weeks. What I found through the session today is my body is more relaxed through our session, and I feel more present to my physical body, and this is very
          helpful for me, because I feel more balanced, and I probably make better decisions when I feel more balanced.”</p>
      </div>


      <div className="testimonial-card">
        <h5>Ben T.</h5>
        <p className="gray-text">“Through this event, it allows me to understand myself better. Every person has different perspectives and different emotions, happy or not happy, or anger, hear different perspectives will help us to learn and see a bigger
          picture. I would like to get myself better at listening because I believe listening is an important skill for me to connect with myself and others. Everyone is very kind and open up to share their emotions, and allows me to understand all the
          people better.”</p>
      </div>


      <div className="testimonial-card">
        <h5>Yakubu A.</h5>
        <p className="gray-text">“There are a lot of things I have gotten out of this and that was unexpected. I really like how everyone in this group is different. What I think that brings us all together, despite of everyone is different, there’s a trust
          layer. So I can be honest, and I don’t need to say everything is great. I felt really good, I felt heard, everyone was actually listening. Also the benefit of listening to other people, heard similar experiences from other people.”</p>
      </div>



      {/*<!-- ************ Footer *********** -->*/}
      <hr />
      <div className="footer">
        <h6 className="footer-brand">Amotions Inc</h6>
        <p className="copyright-text gray-text">Copyright © 2020 Amotions Inc - All Rights Reserved.</p>
      </div>

      </Container>
      );
    }
  }
