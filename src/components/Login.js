import React from "react";
import axios from "axios";
import Register from "./Register";

const baseURL = "http://wytenomore.herokuapp.com/api/aut/";



class Login extends React.Component {
    
    submit = e =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = {
        email: this.props.values.email,
        password: this.props.values.password,
        };


        this.props.instance.post("http://localhost:8080/user/login", raw)
        .then(response => response)
        .then((response) => {
            console.log(response.data.Token)
            localStorage.setItem("token", response.data.Token)
            this.props.instance.defaults.headers.common["Authorization"] = localStorage.getItem("token")
            this.props.instance.get("http:/localhost:8080/user")
            .then(response => response)
            .then((response) => {
                localStorage.setItem("state", this.props.state())
                this.props.nextStep("home")
            })
            .catch(error => console.log('error', error));
        })
        .catch(error => {
            alert("Invalid Username/Password  ")})

    }

    register = e =>{

        this.props.nextStep("register")
    }




    render() {
        const {values, handleChange} = this.props;
        return (
            <div className="container-md" >
                
                <div class="jumbotron text-center">
                <h3>Welcome back</h3>
                    <p>Signin and enjoy  </p>
                    <p>{this.props.mssge}</p>
                </div>
                <div class="jumbotron text-center">
                <label  className="w3-label">User name</label>
                <input className = "w3-input" type="email" onChange={handleChange('email')} name='email' ></input>


                <label  className="w3-label">Password</label>
                <input className = "w3-input" type="text" onChange={handleChange('password')} name='password'></input>

                <br  />
                <button className = "btn btn-primary" type="button" onClick= {this.submit}> Login.!!</button>
                <button className = "btn btn-primary" type="button" onClick= {this.register}> Register</button>
                </div>
            </div>
        )
    }
}

export default Login;