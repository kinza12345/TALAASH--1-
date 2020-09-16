import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


class Usercard extends Component {
    render() {
        return (
            <div>
            <div className="container">
                <Card style={{ width: '18rem',height:'20em',marginTop:"-15%"}}>
  <Card.Img variant="top" src={require("./3.jpeg")} />
  <Card.Body style={{color:'black'}}>
    <Card.Title>Add Report for Missing Person in few seconds</Card.Title>
    <Card.Text style={{ textColor:0x000000	 }}>
   
    </Card.Text>
    <Link to="/Report"> 
 <Button variant="primary" style={{ marginLeft: '0.5%',marginTop:"-150%", width:"100%" }}>File Report</Button>
 </Link>
  </Card.Body>
</Card>
            </div>

<div className="container">
<Card style={{ width: '18rem',height:'20em',marginLeft:"30%",marginRight:"100%",marginTop:"-41.5%"}}>
<Card.Img variant="top" src={require("./1.jpeg")} />
<Card.Body style={{color:'black'}}>
<Card.Title style={{marginTop:'-0.3%'}}>Add Your Family Member, Friends whom you trust for Life</Card.Title>
<Card.Text style={{ textColor:0x000000	 }}>

</Card.Text>
<Button variant="primary" style={{ marginLeft: '0.5%',marginTop:"-140%", width:"100%" }}>Add Trustee</Button>
</Card.Body>
</Card>
</div>

<div className="container">
<Card style={{ width: '18rem',height:'20em',marginLeft:"60%",marginRight:"200%",marginTop:"-41.5%"}}>
<Card.Img variant="top" src={require("./2.jpeg")} />
<Card.Body style={{color:'black'}}>
<Card.Title style={{marginTop:'-0.01%'}}>Add picture of anybody found identical to Missing Person</Card.Title>
<Card.Text style={{ textColor:0x000000	 }}>

</Card.Text>
<Button variant="primary" style={{ marginLeft: '0.5%',marginTop:"-140%", width:"100%" }}>Search By Image</Button>
</Card.Body>
</Card>
</div>

<div className="container">
<Card style={{ width: '18rem',height:'20em',marginLeft:"90%",marginRight:"200%",marginTop:"-41.5%"}}>
<Card.Img variant="top" src={require("./8.jpeg")} />
<Card.Body style={{color:'black'}}>
<Card.Title style={{marginTop:'-0.01%'}}>All Missing Cases</Card.Title>
<Card.Text style={{ textColor:0x000000	 }}>

</Card.Text>
<Button variant="primary" style={{ marginLeft: '0.5%',marginTop:"-140%", width:"100%" }}>Missing Hall</Button>
</Card.Body>
</Card>
</div>
</div>
        );
        }
}

export default Usercard;