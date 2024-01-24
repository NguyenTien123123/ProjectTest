import { Row } from 'antd';
import React from 'react';
function Header() {
    return ( 
        <Row style={{ justifyContent:'center', alignItems:'center',backgroundColor:'#001529',height:'2%',width:'100%' }}>
            <span style={{color:'#fff'}}>This is my project</span>
           
        </Row>
     );
}
export default Header;