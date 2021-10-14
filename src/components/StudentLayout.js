import React from "react";
import { Tab, Card, ListGroup, Alert } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Popover } from "react-bootstrap";
class StudentLayout extends React.Component {

    popover = e =>(
        <Popover id={`popover-positioned-bottom`}>
          <Popover.Header as="h3">Popover right</Popover.Header>
          <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Body>
        </Popover>
    );

    render() {

        const {values, handleChange} = this.props;

    let popover = e =>(
        <Popover id={`popover-positioned-bottom`}>
          <Popover.Header as="h3">Popover right</Popover.Header>
          <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Body>
        </Popover>
    );
        return (
           <div className="row" style={{  padding:"1em" }}>
               <Card style={{ width: '28em', padding:"2em" }}>
      <Card.Img variant="top" src="noprofile.jpg" style={{width:"100% ",height:"18em "} }/>
      <Card.Body>
        <Card.Title>{this.props.values.firstname} {this.props.values.lastname}</Card.Title>
        </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroupItem>Role : {this.props.values.role}</ListGroupItem>
                <ListGroupItem>Email : {this.props.values.email}</ListGroupItem>
                <ListGroupItem>Cell  : {this.props.values.cell}</ListGroupItem>
                <ListGroupItem>Date of Birth : {this.props.values.dob}</ListGroupItem>
                <ListGroupItem>Address : {this.props.values.address}</ListGroupItem>
                <ListGroupItem>City : {this.props.values.city}</ListGroupItem>
            
            <ListGroupItem>Address : {this.props.values.address}</ListGroupItem>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="outline-primary" >Edit Profile</Button>
            </OverlayTrigger>
            </ListGroup>
        <Card.Body>
        </Card.Body>
    </Card>
    
    <Card style={{ width: '28rem' , padding:"2em"}}>
      <Card.Img variant="top" src="depts.jpg" style={{width:"100% ",height:"18em "} }/>
      <Card.Body>
        <Card.Title><h5>Depts Summary ..</h5></Card.Title>
        
            <ListGroup className="list-group-flush">
            <ListGroupItem><h7>Balance : $ 45.00</h7><ProgressBar animated now={45} variant="info"  label="40%"/></ListGroupItem>
                <ListGroupItem><h7>Payed: $ 55.00</h7><ProgressBar animated now={55} /></ListGroupItem>
                <ListGroupItem> <h7>Months left : </h7><ProgressBar animated now={20} variant="danger" label="20%" /></ListGroupItem>
    
    
                <Button variant="outline-warning">More Detailed </Button>{' '}
            </ListGroup>
        
        </Card.Body>
    </Card>
    <Card style={{ width: '28rem', padding:"2em" }}>
    <ListGroup>
        <Card.Img variant="top" src="academic.jpg" style={{width:"100% ",height:"18em "} } />
        <Card.Title>Current Course ..</Card.Title>
        <ListGroupItem><p>Course Name : </p></ListGroupItem>
        <ListGroupItem>Year Started :</ListGroupItem>
        <ListGroupItem>Cost : </ListGroupItem>
        </ListGroup>
        <Button variant="outline-info">Change</Button>{' '}
    </Card>
    </div>

        )
    }
}

export default StudentLayout;