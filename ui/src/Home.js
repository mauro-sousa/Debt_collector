import React, { Component } from 'react'
import axios from 'axios';
import Checkup from './components/Checkup';
import Register from './components/Register';
import Header from './components/Header';

import Login from './components/Login';
import Mainpage from './components/Mainpage';
import ConfirmCheck from './components/ConfirmCheck';

var step = 1;
export class Home extends Component {
  
    state = {
      
        step : "login",
        firstname: "",
        lastname: "",
        username :"",
        dob: "",
        email: "",
        student_no:"",
        id: "",
        cell: "",
        gender: "",
        address: "",
        city:"",
        region:"",
        country:"",
        course:"",
        role:"",
        password:"",
        password2:""
    }
    mssge = ""

    instance = axios

    setToken = (token)  =>{
      
      this.instance.defaults.headers.common["Authorization"] = token
    }

    
  
    // Procceed to the next step
    nextStep = (e) => {
      const {step} = this.state;
      this.setState({
        step: e
      });
    }

    // Go to prev step
    prevStep = () => {

      const {step} = this.state;
      this.setState({
        step: step - 1
      });
    }

    handleChange = input => event =>{
      this.setState({[input]: event.target.value });  
    }

    getState =()=>{
      return this.state
    }
  statusmssg = e =>{
    this.mssge  = e
  }
  loginHandler = e => {
    // e.preventDefault()
      axios.post('http://localhost:8080/login', {email : this.state.email}, {
        headers: {
          'Content-Type': 'application/json'
        }
        }).then(resp => {

        this.setState( resp.data)
        
  })
}
  render() {
    const {step} = this.state;
    const {firstname,
      lastname,
      username,
      dob,
      email,
      student_no,
      id,
      cell,
      gender,
      address,
      city,
      region,
      country,
      course,
      role
    } = this.state;
      
    const values = {firstname,
      lastname,
      username,
      dob,
      email,
      student_no,
      id,
      cell,
      gender,
      address,
      city,
      region,
      country,
      course,
      role}
    switch (step) {
        case "main":
            return (<Mainpage
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            values = {values}/>)
        case "login":
        return(
            <Login 
            state = {this.getState}
            mssge = {this.mssge} 
            statusmssg = {this.statusmssg}
            instance = {this.instance}
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            values = {values}
            />
        )
        case "checkup":
        return(
            
        <Checkup 
        nextStep = {this.nextStep}
        handleChange = {this.handleChange}
        values = {values}
        />
        )
      case "register":
        return(
          <Register

          state = {this.getState}
          mssge = {this.mssge} 
          statusmssg = {this.statusmssg}
          instance = {this.instance}
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )

        case "home":
        return(
          <Mainpage
          state = {this.state}
          mssge = {this.mssge} 
          statusmssg = {this.statusmssg}
          instance = {this.instance}
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )

        case "confirmedcheck":
        return(
          <ConfirmCheck  
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )
        case "confirmeddelivery":
        return(
          <ConfirmCheck  
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )
      default:
      break;
    }
  }
}

export default Home;