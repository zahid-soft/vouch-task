import React from 'react'
import { Col, Row } from 'antd';
import ImageSide from '../../pages/ImageSide';
import LoginForm from '../../pages/LoginForm';
const Home = () => {
  return (
    <div className='home'>
     <Row>
      <Col span={9}><LoginForm /></Col>
      <Col span={15} style={{background:'#023047',width:'100%'}}><ImageSide /></Col>
    </Row>
    </div>
  )
}

export default Home


{/* <Row>
<Col span={10}><LoginForm /></Col>
<Col span={12} style={{background:'#023047',width:'100%',margin:}}><ImageSide /></Col>
</Row> */}