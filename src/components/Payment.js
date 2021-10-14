import React from "react";
import { Tab, Card, ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import PaymentForm from "./CardPayments";
class Payment extends React.Component {



    render() {
        const {values, handleChange} = this.props;
        return (
           <div className="row" style={{  padding:"1em" }}>
               <Card style={{ width: '28em', padding:"2em" }}>
      <Card.Img variant="top" src="track_your_finances.jpg" style={{width:"100% ",height:"18em "} }/>
      <Card.Body>
        <Card.Title>{this.props.values.firstname} {this.props.values.lastname}'s Dept Journal</Card.Title>
        </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroupItem>Role : {this.props.values.role}</ListGroupItem>
                <ListGroupItem>Email : {this.props.values.email}</ListGroupItem>
                <ListGroupItem>Account No. : {this.props.values.email}</ListGroupItem>
                <ListGroup>
  <ListGroup.Item>Study History</ListGroup.Item>
  <ListGroup.Item variant="primary">Primary</ListGroup.Item>
  <ListGroup.Item action variant="secondary">
    Secondary
  </ListGroup.Item>
  <ListGroup.Item action variant="success">
    Success
  </ListGroup.Item>
  <ListGroup.Item action variant="danger">
    Danger
  </ListGroup.Item>
  <ListGroup.Item action variant="warning">
    Warning
  </ListGroup.Item>
  <ListGroup.Item action variant="info">
    Info
  </ListGroup.Item>
  <ListGroup.Item action variant="light">
    Light
  </ListGroup.Item>

  <ListGroup.Item action variant="dark">
    Dark
  </ListGroup.Item>
</ListGroup>
            <Button variant="outline-primary">Edit Profile</Button>{' '}
            </ListGroup>
        <Card.Body>
        </Card.Body>
    </Card>
    <Card style={{ width: '28em', padding:"2em" }}>

    <PaymentForm />

    </Card>
    

    </div>

        )
    }
}

export default Payment;