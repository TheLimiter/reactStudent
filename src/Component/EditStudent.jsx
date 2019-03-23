import React, { Component } from 'react';
import {Consumer} from '../Context'
import TextInputGroup from './layout/TextInputGroup'
import uuid from 'uuid';
import axios from 'axios';

class EditStudent extends Component {
   constructor(props) {
       super(props);
       this.state = {
           id   : '',
           name : '',
           email : '',
           phone : '',
           errors : {}
         }
   }

   onSubmit = (dispatch, e) => {
       e.preventDefault();       
       const {name, email, phone} = this.state

       if(name === ''){
         this.setState({errors:{ name:"Name is Required" }})
         return;
       }

       if(email === ''){
        this.setState({errors:{ email:"Email is Required" }})
        return;
      }

      if(phone === ''){
        this.setState({errors:{ phone:"Phone is Required" }})
        return;
      }

       const newStudent = {           
           name,email,phone
       }

       axios
        .put(`https://jsonplaceholder.typicode.com/users/${this.state.id}`,newStudent)
        .then(res => 
            dispatch({type:'UPDATE_STUDENT', payload:res.data}))
        .catch(err => console.log(err))       

      // Clear State
       this.setState(
         {
          name:'',
          email:'',
          phone:'',
         }
       )       

       this.props.history.push('/')
   }

   componentDidMount(){
       this.getParams();
   }

   getParams(){
       const {match} = this.props;
       this.setState({
           id : match.params.id
       })   

    axios
    .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
    .then(
        res => {
            const student = res.data
            this.setState({
                name: student.name,
                email: student.email,
                phone: student.phone
            })
        }
    )
    .catch(err => console.log(err))   
   }


   onChange = e => this.setState({
       [e.target.name] : e.target.value
   })

   render() {
       const {name, email, phone, errors} = this.state
       return (           
               value=>{
                   const {dispatch} = value
                   return (
                       <div>
                           <div>Edit Student</div>
                           <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                               <TextInputGroup 
                                label ="Name"
                                type ="text"
                                name ="name"
                                value ={name}
                                placeholder ="Enter Name"
                                onChange ={this.onChange}
                                errors = {errors.name}
                               />   
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
                                label ="Phone"
                                type ="text"
                                name ="phone"
                                value ={phone}
                                placeholder ="Enter Phone"
                                onChange ={this.onChange}
                                errors = {errors.phone}
                               />                                
                               <input type='submit' value='Edit' />
                           </form>
                       </div>
                   )
               }           
       )
   }
}

export default EditStudent;