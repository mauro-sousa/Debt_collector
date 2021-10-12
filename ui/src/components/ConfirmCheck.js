import React from "react";
import axios from "axios";


const baseURL = "http://wytenomore.herokuapp.com/api/aut/";


class ConfirmCheck extends React.Component {
    
    next= e =>{

        this.props.nextStep("main")
    }




    render() {
        const {values, handleChange} = this.props;
        return (
            <div className="col-sm-4">
                
                <div class="jumbotron text-center">
                <h3>Sms Confirmation sent</h3>
            
                <p>Once we medication ready, we'll notify ... </p>
      
                </div>
                <div class="jumbotron text-center">

                <br  />
                Be delivered    soon .!<br />
                <button className = "btn btn-primary" type="button" onClick= {this.next}> Home.!!</button>
                </div>
            </div>
        )
    }
}

export default ConfirmCheck;