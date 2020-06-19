import React from 'react'
import { Row, Col } from 'antd';
import sceneSea from './image/photo-1517384084767-6bc118943770.jpg'
import sceneSky from './image/photo-1553649084-3e42773ff0e3.jpg'
import swim from './image/photo-1467632499275-7a693a761056.jpg'
import skirt from './image/photo-1584998316204-3b1e3b1895ae.jpg'
import hat from './image/photo-1532347922424-c652d9b7208e.jpg'
import { IndexWrapper } from './Styled'

const Fade = require('react-reveal/Fade');
const LightSpeed = require('react-reveal/LightSpeed');

const Home = () => {
    
    return (
        <IndexWrapper>
            <Row gutter={[0, 56]} align='middle' style={{ background: '#fff' }}>
            <Col span={6} offset={5}>
                <LightSpeed left cascade>
                <div className='days'>
                    <span>Days </span>
                    <span>of Summer</span>
                </div>
                </LightSpeed>
            </Col>
            <Col span={10}>
                <Fade right>
                    <img src={sceneSky} alt='Summer Sky' style={{ width: '80%' }} />
                </Fade>
            </Col>
            <Col span={12} offset={6}>
                <Fade left cascade delay={2000}>
                <div>
                <div className='collection'>
                    <span>COLLECTION</span>
                </div>
                <div className='june'>
                    <span>/20SS </span>
                    <span>JUNE</span>
                </div>
                <img src={skirt} alt='Summer Sky' style={{ width: '28em'}} />
                </div>
                </Fade>
            </Col>
            <Col span={24}>
                <div className='sea'>
                <img src={sceneSea} alt='sea' style={{ width: '100%' }} />  
                </div>  
            </Col>
            </Row>
            <Row gutter={[0, 56]} style={{ background: '#fff', margin: '30em 0 0 0', padding: '7em 0'}}>
                <Col span={6} offset={4}>
                    <Fade>
                    <img src={swim} alt='Summer' style={{ width: '28em'}} />
                    </Fade>
                </Col>
                <Col span={10}>
                    <Fade right cascade>
                    <div>
                    <span className='sunshine'>SUNSHINE</span>
                    <img src={hat} alt='Summer' style={{ width: '40%', position: 'absolute', bottom: '6em', right: '2em' }} />
                    </div>
                    </Fade>
                </Col>
            </Row>
        </IndexWrapper>
    )
}

export default Home