import React from "react";
import axios from "axios";


class Mainpage extends React.Component {
    
    deliver = e =>{
        this.props.nextStep("home")    
    }

    checkup = e =>{
        this.props.nextStep("home")    
    }
    render() {  
        const {values, handleChange} = this.props;
        return (
            <div className="col-sm-4" >
                <div>

                <div class="jumbotron text-center">
                    <h3>Resquest Contract .. </h3>
                    <p>Get your depts resolved ...</p> 
                    <button className = "btn btn-primary" type="button" onClick= {this.checkup}>Request Checkup</button>
                </div>


                </div>
            </div>
        )
    }
}

export default Mainpage;