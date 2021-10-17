
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
import StudentLayout from "./AdminLayout";
import StudentDeptReview from "./StudentDeptReview";
import Payment from "../Payment";
// import { ProgressBar } from "react-bootstrap";
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
class Admin extends Component {
    // const [key, setKey] = useState('home');
    
    
    
    
    render(){
    let key = "review"
    
    function setKey  (e){
        key =e
    }
    return (
        
            <Tabs  defaultActiveKey="profile"
    id="controlled-tab-example"
    activeKey={this.key}
    onSelect={(k) => setKey(k)}
    className="mb-2"
    >
        
    <Tab eventKey="profile" title="Profile">
        {/* <p>Profile here</p> */}
        <StudentLayout  values = {this.props.values} handleChange={this.props.handleChange}/>
    </Tab>

    
    <Tab eventKey="contracts" title="Contract Applications">
        <StudentDeptReview values = {this.props.values} />
        
    </Tab>
        <Tab eventKey="payments" title="Payments info">

         <Payment values = {this.props.values} />
        </Tab>
    </Tabs>)
    }

}
export default   Admin;