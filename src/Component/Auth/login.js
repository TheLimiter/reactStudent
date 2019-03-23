import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup'
import {authLogin} from '../../store/actions/authAction'

import { connect } from 'react-redux';

class login extends Component {
   constructor(props) {
       super(props);
       this.state = {           
           email : '',           
           password : '',
           errors : {}
         }
   }   

   onSubmit =async () => {

       const {email, password, errors} = this.state

       if(email === ''){
        this.setState({errors:{ email:"Email is Required" }})
         return;
       }

       if(password === ''){
        this.setState({errors:{ email:"Password is Required" }})
        return;
      }

      const paramaters = {        
        email,password        
      }

      
      const auth = await this.props.authLogin(paramaters)

      if(auth){
        this.props.history.push('/student/add')
      }


    
   }

   onChange = e => this.setState({
    [e.target.name] : e.target.value
    })



   render() {
       const {email, password, errors} = this.state
       return (           
               
                       <div>
                           <div>Login Student</div>
                           <form >                               
                           <TextInputGroup 
                                label ="Email"
                                type ="text"
                                name ="email"
                                value ={email}
                                placeholder ="Enter Email"
                                onChange ={this.onChange}
                                errors = {errors.email}
                               />                                     
                              <TextInputGroup 
                                label ="Password"
                                type ="password"
                                name ="password"
                                value ={password}
                                placeholder ="Enter Password"
                                onChange ={this.onChange}
                                errors = {errors.phone}
                               />                                                                                             
                           </form>
                           <button onClick={this.onSubmit.bind(this)}>Login</button>
                       </div>
                   )           
   }
}

export default connect(null, {authLogin})(login);