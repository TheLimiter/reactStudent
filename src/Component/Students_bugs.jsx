import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Student from './Student';
import {Consumer} from '../context'

class Students extends Component {

  onDeleteStudent = (studentId) => {    
    const { students } = this.state;
    const newStudents = students.filter(student => student.id !== studentId)

    this.setState({ students:newStudents })
  }

  render() { 
    return( 
      <Consumer>
        {value => {
          console.log(value)
          const {students} = value;      
          return students.map(val =>             
                <div>                  
                  <Student
                    key = {val.id}
                    student = {val}
                    onDelete = {this.onDeleteStudent.bind(this,val.id)}
                  />
                </div>              
          )}                      
        }
      </Consumer>        
    )
  }
}

Students.propTypes = {
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired
}
 
export default Students;