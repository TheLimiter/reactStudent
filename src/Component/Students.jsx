import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Student from './Student';
import {connect} from 'react-redux'
import {getStudents} from '../store/actions/studentAction'


class Students extends Component {  
  constructor(props){
      super(props)
  }
  componentDidMount(){
    this.props.getStudents()
  }
  render() { 
    const { students } = this.props; 
    return (              
      <React.Fragment>
        {students.map((student, index) => 
          <div>
            <Student
              key = {student.id}
              student = {student}          
            />
          </div>
        )
        }
      </React.Fragment>              
    )
  }}

// Students.propTypes = {
  // student: PropTypes.object.isRequired,
// }

const mapStateToProps = (state) => ({
  students: state.student.students
})
 

export default connect(mapStateToProps, {getStudents})(Students)