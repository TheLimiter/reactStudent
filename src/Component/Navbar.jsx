import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import {authLogout} from '../store/actions/authAction'

import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
const { Header } = Layout;

const Navbar = (props) => {
  const { isAuth } = props.auth
  const { authLogout} = props
    return ( 
        <Layout className="layout">
        <Header>          
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >          
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>            
            <Menu.Item key="2"><Link to="/student/add" >Add Student</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/about" >About</Link></Menu.Item>
            <Menu.Item onClick={ isAuth ? () => authLogout() : () => {}} key="4"><Link to={isAuth ? "/login" : "/login"}>{ isAuth ? "Logout" : "Login" }</Link></Menu.Item>
          </Menu>
        </Header>      
      </Layout>
     );
}


 

const mapStateToProps = state => ({
  auth: state.authStudent.authStudent
})

export default connect(mapStateToProps, {authLogout})(Navbar);