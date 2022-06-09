import React from 'react';
import { Button } from 'antd';

const Buttons = ({color,text}) => {
  return (
    <div  style={{width:'180px'}}>
      <Button style={{background:color,color:'white',width:'100%',height:'40px',paddingRight:'30px'}}>{text}</Button> 
    </div>
  )
}

export default Buttons
 