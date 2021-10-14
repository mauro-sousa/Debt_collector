
import React from "react";
import Cards from 'react-credit-cards';
import { Form, Button } from "react-bootstrap";
import 'react-credit-cards/es/styles-compiled.css'
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { example } from "yargs";
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    last:'',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {


    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name + " "+ this.state.last}
          number={this.state.number}
        />

        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail" style={{padding:"2em"}}>

  <Alert key="pgc" variant="danger">
    We will not keep your bank details !
  </Alert>

  <Form.Label>Card Holder</Form.Label>
    <InputGroup className="mb-3">
    <InputGroup.Text>First and last name</InputGroup.Text>
    <FormControl aria-label="First name" type="text" name="name"  onChange={this.handleInputChange}/>
    <FormControl aria-label="Last name" name="last" type="text" onChange={this.handleInputChange} />
    </InputGroup>


    <Form.Label>Card Number</Form.Label>
    <Form.Control type="password" maxLength="16" placeholder="XXXX XXXXX XXXXX XXXXXX"  name="number" onChange={this.handleInputChange}/>
    
    <Form.Label>Expiry</Form.Label>
    <Form.Control type=" number" maxLength="4" placeholder="XX / XX"  name="focus" onChange={this.props.handleInputChange}/>
    
    <Form.Label>CSV</Form.Label>
    <Form.Control type=" number" maxLength="3" placeholder="XXX"  name="csv" onChange={this.props.handleInputChange}/>


    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      {/* <Form.Check type="checkbox" label="Check me out" /> */}
      
    <Button variant="outline-primary" >Change Details</Button>
    </Form.Group>
  </Form.Group>


</Form>
      </div>
    );
  }
}