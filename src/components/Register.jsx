import React from 'react'
import {
    Col,
    Row,
    Modal,
    Form,
    InputGroup,
    FormControl,
    Button,
    Image,
    Alert
  } from "react-bootstrap";



class Register extends React.Component{

    constructor() {
        super();
        this.state = {
            name:'',
            surname:'',
            email:'',
            password:'',
            byear:'',
            street:'',
            city:'',
            postcode:'',
            creditcard:'',

            loading: false,
            err: false
      }
    }


      canBeSubmitted() {
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let passformat =  /[a-z]\d|\d[a-z]/i;
        let numbers = /^[0-9]+$/;
        let cardno = /^(?:5[1-5][0-9]{14})$/;
        const { name, surname, email, password, byear,street, city, postcode, creditcard } = this.state;
        
            return  (
                name.length > 1 && 
                surname.length > 2 &&
                email.match(mailformat) && 
                passformat.test(password) && password.length > 7 &&
                byear > 1910 &&
                street.length > 1 &&
                city.length > 1 &&
                postcode.match(numbers) &&
                creditcard.match(cardno)
            )
                
      }

    submitData = async (e) => {
        if (!this.canBeSubmitted()) {
          e.preventDefault();
          return;
        }
        const { name, surname, email, password, byear,street, city, postcode, creditcard } = this.state;
        alert(`recap`);
    }


    handleNameText = (e) => {
        this.setState({name: e.target.value });
      };

      handleSurNameText = (e) => {
        this.setState({surname: e.target.value });
      };

      handleEmailText = (e) => {        
        this.setState({email: e.target.value });
      };

      handlePasswordText = (e) => {
        this.setState({password: e.target.value });
      };

      handleYearInfo = (e) => {
        this.setState({byear: e.target.value });
      };

      handleStreetAddress = (e) => {
        this.setState({ street: e.target.value });
      };

      handleCityAddress = (e) => {
        this.setState({ city: e.target.value });
      };

      handlePostalCode = (e) => {
        this.setState({ postcode: e.target.value });
      };

      handleCreditCard = (e) => {        
        this.setState({ creditcard: e.target.value });
      };

    render(){
        const isEnabled = this.canBeSubmitted();
    return (
        <div className="text-white">
            <Form onSubmit={this.submitData}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="First-name" 
                        onChange={this.handleNameText}
                        value={this.state.name}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Surname" 
                        onChange={this.handleSurNameText}
                        value={this.state.surname}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        onChange={this.handleEmailText}
                        value={this.state.email}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        onChange={this.handlePasswordText}
                        value={this.state.password}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridYearofbirth">
                    <Form.Label>Year of birth</Form.Label>
                    <Form.Control 
                        type="number"
                        placeholder="" 
                        onChange={this.handleYearInfo}
                        value={this.state.byear}
                    />
                </Form.Group>

                <Form.Group controlId="formGridStreetaddress">
                    <Form.Label>Street Address </Form.Label>
                    <Form.Control 
                        placeholder="Apartment, studio, or floor" 
                        onChange={this.handleStreetAddress}
                        value={this.state.street}
                        />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                        onChange={this.handleCityAddress}
                        value={this.state.city}
                    />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control 
                        onChange={this.handlePostalCode}
                        value={this.state.postcode}
                    />
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridCreditcard">
                    <Form.Label>Credit card</Form.Label>
                    <Form.Control 
                        onChange={this.handleCreditCard}
                        value={this.state.creditcard}
                    />
                    </Form.Group>
                </Form.Row>
                <button disabled={!isEnabled}>Sign up</button>
                
            </Form>
            
        </div>
    )
}
}

export default Register
