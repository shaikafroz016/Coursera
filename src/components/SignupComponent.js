import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignupUser } from '../redux/ActionCreators';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Signup extends Component {


constructor(props) {
   super(props);
   this.state ={
      firstname:'',
      lastname:'',
       username:'',
       email:'',
       password:''
   }
   this.handleChange = this.handleChange.bind(this);
   this.handleSignup = this.handleSignup.bind(this);
 }
 handleChange=(e)=>{
    this.setState({
       [e.target.id]: e.target.value
 })
}

 //signup
 handleSignup(values){
     var firstname= document.getElementById("firstname").value;
     var lastname= document.getElementById("lastname").value;
     var email= document.getElementById("email").value;
     var username= document.getElementById("username").value;
     var password= document.getElementById("password").value;
     console.log(firstname,lastname,email,username,password)
     if (firstname === "" & lastname==="" & username==="" & password===""){
         alert("Please fill all the detailes")
     }
     else if (firstname===null || firstname===""){  
        alert("Firstname can't be blank");  
        return false;  
      }else if(lastname===null || lastname===""){  
        alert("last name can't be blank");  
        return false;  
        }else if(username===null || username===""){  
            alert("User name must be atleast 6 charecter");  
            return false;  
            }
      else if(password.length<6){  
        alert("Password must be at least 6 characters long.");  
        return false;  
        }  
        else{
    this.props.SignUpUser(firstname,lastname,email,username,password);
        }
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

        <Form onSubmit={(values) => this.handleSignup(values)}>
                    <FormGroup>
                        <Label htmlFor="firstname">firstname</Label>
                        <Input type="text" id="firstname" name="firstname"
                             />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="lastname">lastname</Label>
                        <Input type="lastname" id="lastname" name="lastname" 
                             />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="username">username</Label>
                        <Input type="username" id="username" name="username" 
                             />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">email</Label>
                        <Input type="email" id="email" name="email" 
                             />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">password</Label>
                        <Input type="password" id="password" name="password" 
                              />
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">Sign up</Button>
                    <a href="/login"> Have Acccount</a>
                </Form>
            </div>
        );
    }
}

const actionCreators = {
    SignUpUser: SignupUser,
}

export default connect(null, actionCreators) (Signup);