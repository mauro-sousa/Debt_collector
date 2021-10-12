import React from "react";
import axios from "axios";
import { Alert } from "@mui/material";


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
            switch (error.response.status) {
                case 409:
                    alert("You already have an account, loggin....")
                    this.props.nextStep("login")
                    break;
                case 422:
                    alert("Fill in all the fields")
                    this.props.nextStep("register")
                    break;
                case 403:
                    alert("NOT ALLOWED TO CREATE ACCOUNT, TRY LOGGING IN IF YOU HAVE ACCOUNT")
                    this.props.nextStep("login")    
                    break;
                default:
                    this.props.nextStep("register")
                    break;
            }

            console.log('error',error.response.data)});
        

    }
    render() {
        return (
            <div className="container-md" >
                <div class="jumbotron text-center" bgcolor="red">
                <h3>STUDENT REGISTRATION FORM</h3>
            
                </div>
                <div className="jumbotron text-center">
                <p>{this.props.mssge}</p>
                <label  className="w3-label">FIRST NAME</label>
                <input className = "w3-input" type="text" onChange={this.props.handleChange('firstname')} name='firstname' ></input>

                <label  className="w3-label">LAST NAME</label>
                <input className = "w3-input" type="text" onChange={this.props.handleChange('lastname')} name='lastname'></input>

                <label  className="w3-label">EMAIL</label>
                <input className = "w3-input" type="email" onChange={this.props.handleChange('email')} name='email'></input>

                <label  className="w3-label">DATE OF BIRTH</label>
                <input className = "w3-input" type="date" onChange={this.props.handleChange('dof')} name='dof'></input>

                <label  className="w3-label">ID NUMBER</label>
                <input className = "w3-input" type="number" onChange={this.props.handleChange('id')} name='id'></input>
                 

                <label  className="w3-label">COURSE OF STUDY</label>
                <input className = "w3-input" type="text" onChange={this.props.handleChange('course')} name='course'></input>
                
                <label  className="w3-label">MOBILE NUMBER</label>
                <input className = "w3-input" type="number" maxLength="10" onChange={this.props.handleChange('cell')} name='cell'></input>
                
                <label  className="w3-label">ADDRESS</label>
                <input className = "w3-input" type="address" rows="4" cols="30" onChange={this.props.handleChange('address')} name='address'></input>
                
                <label  className="w3-label">CITY</label>
                <input className = "w3-input" type="address"  onChange={this.props.handleChange('city')} name='city'></input>
                 
                <label  className="w3-label">REGION</label>
                <input className = "w3-input" type="address"  onChange={this.props.handleChange('region')} name='cell_number'></input>
                
                <label  className="w3-label">COUNTRY</label>
                <input className = "w3-input" type="address" onChange={this.props.handleChange('country')} name='country'></input>
                



                <label className="w3-label">REGISTER AS</label>
                <select className = "w3-input" type="text"  onChange={this.props.handleChange('role')} name='role'>
                    <option>--</option>
                    <option>student</option>
                    <option>collector</option>
                </select>
                <br />

            
                <label  className="w3-label">ID NUMBER</label>
                <input className = "w3-input" type="number" onChange={this.props.handleChange('id')} name='id'></input>


                <label  className="w3-label">GENDER</label>
                <select className = "w3-input" type="text" onChange={this.props.handleChange('gender')} name='gender'>
                    <option>--</option>
                    <option>female</option>
                    <option>male</option>
                </select>

                <label  className="w3-label">PASSWORD</label>
                <input className = "w3-input" type="text" onChange={this.props.handleChange('password')} name='password'></input>

                <label  className="w3-label">CONFIRM PASSWORD</label>
                <input className = "w3-input" type="text" onChange={this.props.handleChange('password2')} name='password2'></input>

                
                <button className = "btn btn-primary" type="button" onClick= {this.submit}> Register Now.!!</button>
                </div>
            </div>
        )
    }
}

export default Register;