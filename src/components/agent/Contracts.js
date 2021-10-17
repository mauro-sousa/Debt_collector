


import axios from "axios";
import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button, ButtonGroup } from 'react-bootstrap';
import { ProgressBar } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Tab, Card } from "react-bootstrap";
import { ListGroupItem, ListGroup } from "react-bootstrap";
import { render } from "react-dom";
import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import StudentLayout from "./StudentLayout";
import StudentDeptReview from "./StudentDeptReview";
import Payment from "./Payment";
// import { ProgressBar } from "react-bootstrap";
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
class Stu extends Component {
    // const [key, setKey] = useState('home');
    
    
    
    
    render(){
    let key = "review"
    
    function setKey  (e){
        key =e
    }
    return (<ListGroup  style={{ width:"30rem", height:"10em"}}>
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
        </ListGroup>)
    }

}
export default   Stu;

