import React from "react";
import { Tab, Card, ListGroup, Alert } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Popover } from "react-bootstrap";
class CollectorLayout extends React.Component {

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
    


    </div>

        )
    }
}

export default CollectorLayout;