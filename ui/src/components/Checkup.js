import React from "react";
import axios from "axios";
const baseURL = "http://wytenomore.herokuapp.com/api/users";


class Checkup extends React.Component {
    
    state = {
        step : 1,
        cell_number: "",
        password:"",
        date:"",
        time :"",
        vaccine:"",
        address:"",
        additional: "",
        prescreption: "",
        provider : ""
    }

    submit = e =>{

        axios
        .post(baseURL, {
            body: JSON.stringify(this.state)
        })
        .then((response) => {
            console.log(response)
        });
        this.props.nextStep('confirmedcheck')
    }


    render() {
        return (
            <div className="col-sm-4">
                
                <div class="jumbotron text-center">
                    <h4>Health check-up booking!</h4>
                    <p>We partner with passionate indivituals, who care for you.</p>

                </div>
                <div class="jumbotron text-center">
                <label  className="w3-label">Prefered Candidate</label>
                <select className = "w3-input" type="text"  onChange={this.props.handleChange('provider')} name='provider'>
                    <option>--</option>
                    <option>Retired Nurse</option>
                    <option>Medicine Student</option>
                    <option>Any Quilified</option>
                </select>
             
                


                <br />
                <label  className="w3-label">Address</label>
                <input className = "w3-input" type="text" onChange={this.props.handleChange('address')} name='address'></input>
                <br />
                <label  className="w3-label">Date</label>
                <input className = "w3-input" type="date" onChange={this.props.handleChange('time')} name='time'></input>

                <br />
                <label  className="w3-label">Include Vaccine</label>
                <select className = "w3-input" type="text"  onChange={this.props.handleChange('vaccine')} name='vaccine'>
                    <option>--</option>
                    <option>yes</option>
                    <option>no</option>
                </select><br />
                <button className = "btn btn-primary" type="button" onClick= {this.submit}> Submit !!</button>
                </div>
            </div>
        )
    }
}

export default Checkup;