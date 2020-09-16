import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";


class Organizationcard extends Component {
    render() {
        return (
            <div>

<div className="container">
<Card style={{width: '18rem',height:'20em',marginTop:"-15%"}}>
<Card.Img variant="top" src={require("./4.jpeg")} />
<Card.Body style={{color:'black'}}>
<Card.Title style={{marginTop:'-0.3%'}}>Search cases Registered, Unresolved, Pending</Card.Title>
<Card.Text style={{ textColor:0x000000	 }}>

</Card.Text>
<Button variant="primary" style={{ marginLeft: '0.5%',marginTop:"-140%", width:"100%" }}>Search Cases</Button>
</Card.Body>
</Card>
</div>

<div className="container">
<Card style={{ width: '18rem',height:'20em',marginLeft:"25%",marginRight:"100%",marginTop:"-41.5%"}}>
<Card.Img variant="top" src={require("./7.jpeg")} />
<Card.Body style={{color:'black'}}>
<Card.Title style={{marginTop:'-0.01%'}}>Contact with Missing Person family for details about case</Card.Title>
<Card.Text style={{ textColor:0x000000	 }}>

</Card.Text>
<Button variant="primary" style={{ marginLeft: '0.5%',marginTop:"-140%", width:"100%" }}>Contact Family</Button>
</Card.Body>
</Card>
</div>

<div className="container">
<Card style={{ width: '18rem',height:'20em',marginLeft:"50%",marginRight:"200%",marginTop:"-41.5%"}}>
<Card.Img variant="top" src={require("./6.jpeg")} />
<Card.Body style={{color:'black'}}>
<Card.Title style={{marginTop:'-0.01%'}}>Share with other hospitals, generate posters</Card.Title>
<Card.Text style={{ textColor:0x000000	 }}>

</Card.Text>
<Button variant="primary" style={{ marginLeft: '0.5%',marginTop:"-140%", width:"100%" }}>Share To Aware</Button>
</Card.Body>
</Card>
</div>

<div className="container">
<Card style={{ width: '18rem',height:'20em',marginLeft:"75%",marginRight:"200%",marginTop:"-41.5%"}}>
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
<Card style={{ width: '18rem',height:'20em',marginLeft:"100%",marginRight:"200%",marginTop:"-41.5%"}}>
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

export default Organizationcard;