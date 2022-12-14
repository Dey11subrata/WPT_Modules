// create a registration form

import { Component } from "react";

export class RegistrationForm extends Component{

    constructor(){
        super();
        this.state={
            name:'',
            password:'',
            phone:'',
            email:''

        }
        
    }
    // handleNameChange=(event)=>{
    //     console.log('user has typed something in the name field');
    //     this.setState({name:event.target.value});
    // }
    // handlePasswordChange=(event)=>{
    //     this.setState({password:event.target.value});
    // }

    // now let's work on a single function to handel all events
handleChange=(event)=>{
    console.log(event.target.name,event.target.value);
    this.setState({[event.target.name]:event.target.value});
}


    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="enter name"  name='name' onChange={this.handleChange}></input>
                    <br></br> <br></br>
                    <input type="password" placeholder="enter password"  name='password' onChange={this.handleChange}></input>
                    <br></br> <br></br>
                    <input type="number" placeholder="enter phone" name='phone' onChange={this.handleChange}></input>
                    <br></br> <br></br>
                    <input type="email" placeholder="enter email" name='email' onChange={this.handleChange}></input>
                    <br></br> <br></br>
                    <input type="submit" value="Register"></input>
                </form>
            </div>
        )
    }
}
// onChange event - whenever user start typing in the provided field an event got trigerred
// in react js when  a function is invoked by any event the functuin got access of that event object