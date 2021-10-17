import React from "react";
import { Tab, Card, ListGroup, Alert } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Popover } from "react-bootstrap";
import Register from "./Register";
class StudentLayout extends React.Component {



    render() {

        const {values, handleChange} = this.props;


        return (
           <div className="row" style={{  padding:"1em" }}>
{/*                             
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Launch demo modal
                    </button> */}


                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Edit Profile</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <Register values={this.props.values} handleChange={this.props.handleChange} />
                    </div>
                    <div class="modal-footer">
                    <Button variant="outline-info" id="inputGroup-sizing-default" data-dismiss="modal" onClick={this.register}>Close</Button>{' '}
                    <Button variant="outline-info" id="inputGroup-sizing-default" data-dismiss="modal" onClick={this.register}>Save</Button>{' '}
                        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                    </div>
                    </div>
                </div>
                </div>
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
                            <Button variant="outline-primary"data-toggle="modal" data-target="#exampleModalCenter" >Edit Profile</Button>

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
                    <Card.Title>Apply For Contruct ..</Card.Title>
                    <ListGroupItem>Get personalised contract</ListGroupItem>
                    <ListGroupItem>Flexables payement options</ListGroupItem>
                    {/* <ListGroupItem>Cost : </ListGroupItem> */}
                    </ListGroup>
                    <Button variant="outline-info">Apply</Button>{' '}
                </Card>
    </div>

        )
    }
}

export default StudentLayout;