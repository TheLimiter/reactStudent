import React, { Component } from 'react';
import { Card, List, Icon } from 'antd';
import axios from 'axios';

import {Link} from 'react-router-dom';

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      onShowClick: false,
    }
  }

  showClick = () => {
    const { onShowClick } = this.state;
    
    this.setState({ onShowClick: !onShowClick });
  }

  onDelete = (id, dispatch) => {    
    axios
    .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => dispatch({type:'DELETE_STUDENT', payload: id}))
    .catch(err => console.log(err))
  }

  onEdit = (id, dispatch) => {    
    // axios
    // .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    // .then(res => dispatch({type:'GET_STUDENT', payload: res.data}))
    // .catch(err => console.log(err))
  }

  render() {     
    const { student: { name, email, phone, id } } = this.props;
    const { onShowClick } = this.state;
    return (              
              <div style={{background: '#ECECEC', padding:'16px'}} >
                <Card 
                  bordered
                  style={{ width: '100%' }}
                >
                  <List>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                      <h1 style={{margin: 0}}>{name}</h1>
                      &nbsp;
                      &nbsp;
                      <Icon onClick={this.showClick} style={{fontSize: 24, color: 'black'}} type="down" />                      
                      <Link to={`student/edit/${id}`}>
                        <Icon onClick={this.onEdit.bind(this, id)} style={{fontSize: 24, color: 'blue', textAlign: 'right'}} type="edit" />
                      </Link>
                      <Icon onClick={this.onDelete.bind(this, id)} style={{fontSize: 24, color: 'red', textAlign: 'right'}} type="close" />
                    </div>
                    { onShowClick ?
                      <div>
                        <li>{email}</li>
                        <li>{phone}</li>
                      </div>
                      : null
                    }
                    
                  </List>
                </Card>
              </div>                                                      
    )
  }
}
 
export default Student;