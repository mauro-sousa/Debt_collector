import React from "react";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
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
            this.props.nextStep("student")

    }

    next (){
        if (localStorage.getItem("logged")!=null){
            this.props.nextStep("student")
        }
        // this.props.nextStep("login")
        
    }

    nextpage = e =>{
        localStorage.setItem("logged", "loger")
        // this.props.nextStep("student")
        if (localStorage.getItem("logged")!=null){
            console.log(localStorage.getItem("state"))
            this.props.nextStep("student")
        }
    }


    emailValidation(){
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!this.state.email || regex.test(this.state.email) === false){
            this.setState({
                error: "Email is not valid"
            });
            return false;
        }
        return true;
    }

    render() {
        const {values, handleChange} = this.props;
        return (
       
                
 
                <div className="container px-5">
                    {this.next()}
                <InputGroup className="row gx-5">
                    <div className="col">
                        <InputGroup.Text type="email" id="inputGroup-sizing-default" onChange={this.props.handleChange('email')}>Email</InputGroup.Text>
                            <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        <InputGroup.Text type="email" id="inputGroup-sizing-default" onChange={this.props.handleChange('password')}>Password</InputGroup.Text>
                        <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        />
                    <Button variant="outline-info" onClick={this.nextpage}>Login</Button>{' '}
                    <Button variant="outline-success"   onClick={this.nextpage}>Register</Button>{' '}
                    </div>
                </InputGroup>
                <InputGroup className="container px-4">
                 
                </InputGroup>
                </div>
         
        )
    }
}

export default Login;