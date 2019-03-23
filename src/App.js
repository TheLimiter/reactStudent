import React, { Component } from 'react';
import "antd/dist/antd.css";
import './App.css';
import Students from './Component/Students';
import AddStudents from './Component/AddStudent';
import EditStudents from './Component/EditStudent';
import About from './Component/pages/About';
import Login from './Component/Auth/login';
import NotFound from './Component/pages/NotFound';
import NavBar from './Component/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store/store'

class App extends Component {
  render() {


    return (        
      <Provider store={store}>
            <Router>
              <div>
                <NavBar tittle = "student list"/>
                <Switch>
                  <Route 
                    exact path='/' component={Students}
                  />                  
                  <Route 
                    exact path='/student/add' component={AddStudents}
                  />                         
                  <Route 
                    exact path='/student/edit/:id' component={EditStudents}
                  />                           
                  <Route 
                    exact path='/about' component={About}
                  />     
                  <Route 
                    exact path='/login' component={Login}
                  />                             
                  <Route component={NotFound}/>
                </Switch>                
              </div>
            </Router>   
        </Provider>         
    );
  }
}

export default App;
