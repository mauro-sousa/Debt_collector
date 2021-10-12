import React from "react";
import axios from "axios";


const baseURL = "http://wytenomore.herokuapp.com/api/aut/";


class ConfirmDelivery extends React.Component {
    
    
    submit = e =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "cell_number": this.props.values.cell_number,
        "password": this.props.values.password,
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://wytnomo.herokuapp.com/api/auth", requestOptions)
        .then(response => response.json)
        .then((response) => {
            this.props.nextStep()
        })
        .catch(error => console.log('error', error));

        this.props.nextStep("main")

    }

    register = e =>{

        this.props.nextStep("main")
    }




    render() {
        const {values, handleChange} = this.props;
        return (
            <div className="col-sm-4">
                
                <div class="jumbotron text-center">
                <h3>Sms Confirmation sent.</h3>
                    <p>Once medication ready, we'll notify ...  </p>
                </div>
                <div class="jumbotron text-center">

                <br  />
                <button className = "btn btn-primary" type="button" onClick= {this.register}> Home.!!</button>
                </div>
            </div>
        )
    }
}

export default ConfirmDelivery;