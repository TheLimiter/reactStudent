import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import './Register.sass';
import background from '../../Assets/Images/imageBG.jpeg';
import logo from '../../Assets/Images/logo.jpeg';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import { from } from 'rxjs';
import { black } from 'ansi-colors';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    // const { getFieldDecorator } = this.props.form;
    const link = (text) => { return <a href="#" className="link">{text}</a>}
    const terms = <p className="terms">Dengan Melakukan pendaftaran, saya setuju dengan {link('Kebijakan Privasi')} dan {link('Syarat dan Ketentuan')} monggopesan.com </p>
    const word = <p className="word">Sudah punya akun monggo pesan? {link('Klik disini')}</p>

    return ( 
      <div>
        <Row>
          <Col span={14}>
            <img className="imageBG" style={{ width: '100%'}} src={background} alt="background"/>
          </Col>

          <Col span={10}>
            <Row align="top" type="flex" justify="center">
              <Col className="colFlex" span={16}>

              <Row align="top" type="flex" justify="center">
                <img className="logo" src={logo} alt="logo"/>
              </Row>
              <h3 className="daftar">Daftar Sekarang</h3>
              <Form>
                <Form.Item className="inputForm">
                  <Input className="input" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Username" />
                </Form.Item>
                <Form.Item className="inputForm">
                  <Input className="input" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email" />
                </Form.Item>
                <Form.Item className="inputForm">
                  <Input.Password className="input" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                </Form.Item>
                {terms}
                
                <Button className="daftar-button">Daftar</Button>

                <div className='line-bottom'>
                  <div style={{flex: 1, alignSelf: 'center', marginLeft:'8px', marginRight: '8px', backgroundColor: '#d9d9d9', height: '1px'}}></div>
                  <div style={{color: '#888888', alignSelf: 'center'}}>atau daftar dengan</div>
                  <div style={{flex: 1, alignSelf: 'center', marginLeft:'8px', marginRight: '8px', backgroundColor: '#d9d9d9', height: '1px'}}></div>
                </div>

                <Row className="button-sign-row" gutter={8} type="flex">
                  <Col>
                    <Button className="button-sign">
                      <Icon style={{fontSize: 14}} type="google" />
                        Google
                      </Button>
                  </Col>
                  <Col>
                    <Button className="button-sign">
                      <Icon style={{fontSize: 14}} type="facebook"/>
                        Facebook
                      </Button>
                  </Col>
                </Row>
                {word}
              </Form>
             

              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
 
export default Register;