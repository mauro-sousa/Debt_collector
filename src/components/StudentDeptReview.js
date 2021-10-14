import React from "react";
import { Tab, Card, ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import { Table } from "react-bootstrap";
class StudentDeptReview extends React.Component {



    render() {
        const {values, handleChange} = this.props;
        return (
           <div className="row" style={{  padding:"1em", float:"center" ,width:"100%"}}>

    
    <Card style={{ width:"23rem" }}>
      <Card.Img variant="top" src="depts.jpg" style={{width:"100% ",height:"18em "} }/>
      <Card.Body>
        <Card.Title><h5>Depts Overview ..</h5></Card.Title>
        
            <ListGroup className="list-group-flush">


            <ListGroup.Item>
            <ListGroupItem variant="warning">
                Balance : $ 45.00
                <ProgressBar animated now={45} variant="info"  label="40%"/></ListGroupItem>
            </ListGroup.Item>

            <ListGroup.Item >
            <ListGroupItem  variant="danger">
            Payed: $ 55.00
                <ProgressBar  animated now={55}   label="55%"/></ListGroupItem>
            </ListGroup.Item>


            

            <ListGroup.Item>
            <ListGroupItem variant="success">
                Months left 
                <ProgressBar animated now={20} variant="danger"   label="20%"/></ListGroupItem>
            </ListGroup.Item>





            <ListGroup.Item>
            <ListGroupItem variant="info">
                Interest Rate
                <ProgressBar animated now={3} variant="info"  label="40%"/></ListGroupItem>
            </ListGroup.Item>

    
                <Button variant="outline-warning">Contest This review </Button>{' '}
            </ListGroup>
        
        </Card.Body>
    </Card>




<ListGroup  style={{ width:"30rem", height:"10em"}}>
  <ListGroup.Item>Owed Modules</ListGroup.Item>
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
  {/* <ListGroup.Item action variant="warning">
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
  </ListGroup.Item> */}
</ListGroup>
    </div>

        )
    }
}

export default StudentDeptReview;