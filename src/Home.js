import React, { Component } from 'react'
import axios from 'axios';
import Register from './components/student/Register';
import Login from './components/Login';
import Mainpage from './components/Mainpage';
import Student from './components/student/Student'
import EditStudentProfile from './components/student/EditStudentProfile';
import PassReset from './components/PassReset'
import PrimarySearchAppBar from './components/PrimarySearchAppBar';

export class Home extends Component {
  
    state = {
      
        step : "login",
        firstname: "Xolani",
        lastname: "Dlangisa",
        username :"",
        dob: "2020-12-11",
        email: "dlangisax@gmail.com",
        student_no:"Zrt123",
        id: "",
        cell: "0787544647",
        gender: "male",
        address: "70 sophia st, ",
        city:"Durban",
        region:"",
        country:"South Africa",
        course:"Accounting",
        role:"Student",
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
      role,}

    const methods = {state :this.getState,
      mssge : this.mssge, 
      statusmssg : this.statusmssg,
      instance : this.instance,
      nextStep : this.nextStep,
      handleChange : this.handleChange,
      values : values
    }
    switch (step) {

        case "login":
        return(
          <PrimarySearchAppBar />,
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

        case "editStudentProfile":
          return(
            <PrimarySearchAppBar />,
              <EditStudentProfile 
              state = {this.getState}
              mssge = {this.mssge} 
              statusmssg = {this.statusmssg}
              instance = {this.instance}
              nextStep = {this.nextStep}
              handleChange = {this.handleChange}
              values = {values}
              />
          )

          case "passReset":
            return(
              <PrimarySearchAppBar />,
                <PassReset 
                state = {this.getState}
                mssge = {this.mssge} 
                statusmssg = {this.statusmssg}
                instance = {this.instance}
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
                />
            )

      case "register":
        return(
          <PrimarySearchAppBar />,
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

        case "student":
          return( 
            <div>
              
            <PrimarySearchAppBar nextStep = {this.nextStep} />
            <Student  
            state = {this.getState}
            mssge = {this.mssge} 
            statusmssg = {this.statusmssg}
            instance = {this.instance}
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            values = {values}
            />
            </div>
          )

        case "home":
        return(
          <PrimarySearchAppBar />,
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
      default:
      break;
    }
  }
}

export default Home;