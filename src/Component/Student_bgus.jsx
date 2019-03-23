import React, { Component } from 'react';
import { Card, List, Icon } from 'antd';

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      onShowClick: false,
      onDeleteClick: false,
     }
  }

  showClick = () => {
    this.setState({ onShowClick: !this.state.onShowClick });
  }



  render() {        
    console.log(this.props)
    const { student : {name, email, phone},deleteHandler } = this.props;    
    const { onShowClick } = this.state;
    return (        
      <div style={{background: '#ECECEC', padding:'16px'}}>
        <Card 
          bordered
          style={{ width: '100%' }}
        >
          <List>
            <div  style={{display: 'flex', direction: 'row', alignItems: 'center'}}>
              <h1>{name}</h1>
              <Icon onClick={this.showClick} style={{fontSize: '2em'}}  type={ onShowClick ? "up" : "down"} />
              <Icon onClick={deleteHandler} style={{fontSize: '2em',color:'red'}}  type="delete" />
            </div>            

            { 
                this.state.onShowClick ? 
                <div>
                <li>{email}</li>
                <li>{phone}</li>
                </div>          
                :
                null
            }              
          </List>
        </Card>
      </div>
    )   
  }
}
 
export default Student;