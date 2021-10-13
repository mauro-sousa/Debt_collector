import React from "react";
import axios from "axios";


class Student extends React.Component {
    
    edit = e =>{
        this.props.nextStep("editStudentProfile")    
    }
    passreset = e =>{
        this.props.nextStep("passReset")    
    }
    render() {  
        const {values, handleChange} = this.props;
        return (
            <div className="col-sm-4" >
                <div>

                <div className="jumbotron text-center">
                    <h3>student details .. </h3>
                    <p>firstName:{this.props.values.firstName}</p>
                    <p>lastName:{this.props.values.lastName}</p>
                    <p>{this.props.values.dob}</p>
                    <p>{this.props.values.email}</p>
                    <p>{this.props.values.Student}</p>
                    <p>{this.props.values.id}</p>
                    <p>{this.props.values.cell}</p>
                    <p>{this.props.values.gender}</p>
                    <p>{this.props.values.address}</p>
                    <p>{this.props.values.city}</p>
                    <p>{this.props.values.region}</p>
                    <p>{this.props.values.country}</p>
                    <p>{this.props.values.course}</p>
                    <p>Get your depts resolved ...</p> 
                    <button className = "btn btn-primary" type="button" onClick= {this.edit}>Edit profile</button> <br/><br/>
                    <button className = "btn btn-primary" type="button" onClick= {this.passreset}>Password reset</button>
                </div>

                <div className="jumbotron text-center">
                    <h3>Make Payment</h3>
                    <p>Current standing account details</p> 
                    <button className = "btn btn-primary" type="button" onClick= {this.checkup}>Request Checkup</button>
                </div>

                <div className="jumbotron text-center">
                    <h3>Make Payment</h3>
                    <p>Current standing account details</p> 
                    <button className = "btn btn-primary" type="button" onClick= {this.checkup}>Edit profile</button>
                </div>
                </div>

            </div>
        )
    }
}

export default Student;