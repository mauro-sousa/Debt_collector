import React from "react";
import axios from "axios";
import { Alert } from "@mui/material";
import { Tabs, Tab } from "react-bootstrap";
import StudentLayout from "./AdminLayout";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";
import { Button } from "react-bootstrap";
class Register extends React.Component {
    

    submit = e=>{

        

        this.props.instance.post("http://localhost:8080/user/register", this.props.state())
        .then(response => response)
        .then((response) => {
            this.props.nextStep("login")
            
            console.log(response.data)
            // this.props.nextStep("register")
        })
        .catch(error =>{ 
            
            // alert(error)
            // switch (error.response.status) {
            //     case 409:
            //         alert("You already have an account, loggin....")
            //         this.props.nextStep("login")
            //         break;
            //     case 422:
            //         alert("Fill in all the fields")
            //         this.props.nextStep("register")
            //         break;
            //     case 403:
            //         alert("NOT ALLOWED TO CREATE ACCOUNT, TRY LOGGING IN IF YOU HAVE ACCOUNT")
            //         this.props.nextStep("login")    
            //         break;
            //     default:
            //         this.props.nextStep("student")
            //         break;
            // }
            this.props.nextStep("student")

            console.log('error')});
        

    }

    register = e =>{
      this.props.nextStep("login")
    }

    render() {
        return (
            <Tabs  id="controlled-tab-example"activeKey="profile">
                  <Tab eventKey="profile" title="">
                        {/* <p>Profile here</p> */}
                        {/* <StudentLayout  values = {this.props.values} /> */}
                    
                <div className="container ">
                <div class="row g-2">

                <InputGroup className="mb-3">
                  <InputGroup.Text>First Name</InputGroup.Text>
                  <FormControl aria-label="First name" onChange={this.props.handleChange('firstname') }/>
                </InputGroup>

                <InputGroup>
                  <InputGroup.Text>Last Name</InputGroup.Text>
                  <FormControl aria-label="Last name" onChange={this.props.handleChange('lastname')} />
                </InputGroup>

                <InputGroup >
                    <InputGroup.Text type="email" id="inputGroup-sizing-default">Email</InputGroup.Text>
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.props.handleChange('email')}/>
               </InputGroup>

               <InputGroup>
                  <InputGroup.Text type="number" id="inputGroup-sizing-default" >Cell</InputGroup.Text>
                  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.props.handleChange('cell')}/>
                </InputGroup>

                <InputGroup >
                  <InputGroup.Text type="date" id="inputGroup-sizing-default" >Date Of Birth</InputGroup.Text>
                  <FormControl  type="date" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.props.handleChange('dof')}/>
                </InputGroup>

                <InputGroup>
                  <InputGroup.Text type="text" id="inputGroup-sizing-default">COURSE</InputGroup.Text>
                  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"  onChange={this.props.handleChange('course')}/>
                </InputGroup>

                <InputGroup >

                <InputGroup.Text type="text" id="inputGroup-sizing-default">City</InputGroup.Text>
                  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"  onChange={this.props.handleChange('city')}/>

                </InputGroup>
                <InputGroup>
                  <InputGroup.Text type="text" id="inputGroup-sizing-default" >Address</InputGroup.Text>
                  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.props.handleChange('addres')}/>
                </InputGroup>

                <InputGroup>
                  <InputGroup.Text type="text" id="inputGroup-sizing-default" >Region</InputGroup.Text>
                  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.props.handleChange('region')}/>
                </InputGroup>
                
                <InputGroup >
                  <InputGroup.Text type="text" id="inputGroup-sizing-default" >Country</InputGroup.Text>
                  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.props.handleChange('country')}/>
                </InputGroup>

                <InputGroup>
                  <InputGroup.Text type="number" id="inputGroup-sizing-default" >Password</InputGroup.Text>
                  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.props.handleChange('password')}/>
                </InputGroup>

                <InputGroup>
  
                  <InputGroup.Text type="number" id="inputGroup-sizing-default">Confirm Password</InputGroup.Text>
                  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"  onChange={this.props.handleChange('password2')}/>

                </InputGroup>
                
{/*                 
                <InputGroup.Text type="number" id="inputGroup-sizing-default" onChange={this.props.handleChange('dof')}>Id Number</InputGroup.Text>
                  <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    /> */}
                </div>


                </div>
               
                </Tab>
            </Tabs>
        )
    }
}

export default Register;