import React from 'react';
import './Header.sass';
import { Row, Col } from 'antd';

const Header = (props) => {
  return (
    <div>
      {/* <h1 className="header">{props.title}</h1> */}
      <Row>
        <Col xl={{span: 12}}>
          {props.title}
        </Col>
        <Col xl={{span: 12}}>
          Home
        </Col>
      </Row>
      
    </div>
  );
}

Header.defaultProps = {
  title: "Students' list"
}

const styleHeader = {
  color: 'green',
  fontSize: '20px',
}
 
export default Header;