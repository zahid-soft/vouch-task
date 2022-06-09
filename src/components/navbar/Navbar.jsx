import React from 'react';
import Buttons from '../button/Button'
import {Col, Row } from 'antd';

const Navbar = () => {
  return (
    <div className='navbar'>
     <Row>
      <Col span={16} style={{fontWeight:'bold',fontSize:'1.2rem'}}>ATools<span style={{color:'orange'}}>.</span></Col>
      <Row>
      <Col span={11} style={{justifyContent:'center',textAlign:'center',marginRight:'20px'}}><Buttons color={'#023047'} text={"Start Free Trial"}/></Col>
      <Col span={1} style={{justifyContent:'center',textAlign:'center'}} ><Buttons color={'#FB8500'} text={'Login'}/></Col>
      </Row>
    </Row>
    </div>
  )
}

export default Navbar

