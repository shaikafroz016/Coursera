import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';


class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
            
        };
        this.handleSignup = this.handleSignup.bind(this);
    }

    
    //signup
    handleSignup(event){
        this.toggleModal();
        this.props.SignUser({firstname:this.firstname.value,lastname:this.lastname.value, username: this.username.value,email:this.email.value, password: this.password.value});
        event.preventDefault();
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h3>Sign up</h3>
                        <hr />
                    </div> 
                </div>
                
                <Form onSubmit={this.handleSignup}>
                            <FormGroup>
                                <Label htmlFor="firstname">firstname</Label>
                                <Input type="text" id="firstname" name="firstname"
                                    innerRef={(input) => this.firstname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastname">lastname</Label>
                                <Input type="lastname" id="lastname" name="lastname"
                                    innerRef={(input) => this.lastname = input}  />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="username">username</Label>
                                <Input type="username" id="username" name="username"
                                    innerRef={(input) => this.username = input}  />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">email</Label>
                                <Input type="email" id="email" name="email"
                                    innerRef={(input) => this.email = input}  />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.email = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Sign up</Button>
                            <a href="/login"> Have Acccount</a>
                        </Form>
                    </div>
        );
            
        
    }
}

export default Signup;