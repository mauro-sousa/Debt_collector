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
           <div className="row" style={{ width:"100%",padding:"1em", float:"center" }}>

    
    <Card >
      <Card.Img variant="top" src="depts.jpg" style={{height:"18em "} }/>
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
    <Card>
    <ListGroup.Item>Amount</ListGroup.Item>
  <ListGroup.Item variant="primary">$</ListGroup.Item>
  <ListGroup.Item action variant="secondary">
    $
  </ListGroup.Item>
  <ListGroup.Item action variant="primary">
    $
  </ListGroup.Item>
  <ListGroup.Item action variant="secondary">
    $
  </ListGroup.Item>
      </Card>


    

    <Card>

<ListGroup>
  {/* <ListGroup.Item>Owed Modules</ListGroup.Item> */}

    


  <div className="row">
    <div class="col-6">
      <ListGroup.Item>Amount</ListGroup.Item>
  <ListGroup.Item variant="primary">$</ListGroup.Item>
  <ListGroup.Item action variant="secondary">
    $
  </ListGroup.Item>
  <ListGroup.Item action variant="primary">
    $
  </ListGroup.Item>
  <ListGroup.Item action variant="secondary">
    $
  </ListGroup.Item>
    </div>
    <div class="col-6">
    <ListGroup.Item>Date of payment</ListGroup.Item>

      <ListGroup.Item variant="primary">-</ListGroup.Item>
  <ListGroup.Item action variant="secondary">
    - 
  </ListGroup.Item>
  <ListGroup.Item action variant="primary">
    -
  </ListGroup.Item>
  <ListGroup.Item action variant="secondary">
    -
  </ListGroup.Item>
  
    </div>
    <div class="col-6">
      <ListGroup.Item>Statu</ListGroup.Item>

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
    </div>
    <div class="col-6">

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
    </div>
  </div>

  </ListGroup>
  </Card>
    </div>

    )
    }
}

export default StudentDeptReview;