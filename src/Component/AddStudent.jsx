import React, { Component } from 'react';
import TextInputGroup from './layout/TextInputGroup'
import uuid from 'uuid';
import axios from 'axios';
import { connect } from 'react-redux';

class AddStudent extends Component {
   constructor(props) {
       super(props);
       this.state = {
           name : '',
           email : '',
           phone : '',
           errors : {}
         }
   }

   componentWillMount(){
      const {auth,history} = this.props
      if(!auth.isAuth){
        history.push('/login')
      }
   }

   onSubmit = (dispatch, e) => {
       e.preventDefault();       
       const {name, email, phone, errors} = this.state

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
           id:uuid(),
           name,email,phone,
            errors
       }

       axios
        .post(`https://jsonplaceholder.typicode.com/users`, newStudent)
        .then(res => {dispatch({type:'ADD_STUDENT', payload:res.data})})
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


   onChange = e => this.setState({
       [e.target.name] : e.target.value
   })

   render() {
       const {name, email, phone, errors} = this.state
       return (           
               
                       <div>
                           <div>Add Stude</div>
                           <form onSubmit={this.onSubmit.bind(this)}>
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
                               <input type='submit' value='Add' />
                           </form>
                       </div>
                   )           
   }
}

const mapStateToProps = state => ({
    auth: state.authStudent.authStudent
})

export default connect(mapStateToProps, null)(AddStudent);
