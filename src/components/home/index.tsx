import React from 'react'
import { Row, Col } from 'antd';
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
            <Row gutter={[0, 56]} align='middle'>
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
            </Row>
            <Row gutter={[0, 56]} align='middle' className='parallax'>
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
                            <img src={skirt} alt='Summer Sky' style={{ width: '85%' }} />
                        </div>
                    </Fade>
                </Col>
            </Row>
            <Row gutter={[0, 56]} align='middle'>
                <Col span={24} className='sea' />
            </Row>
            <Row gutter={[0, 56]} className='bottom'>
                <Col span={12} offset={4}>
                    <Fade>
                        <img src={swim} alt='Summer' style={{ width: '85%' }} />
                    </Fade>
                </Col>
                <Col span={8}>
                    <Fade right cascade>
                        <div>
                            <span className='sunshine'>SUNSHINE</span>
                            <img src={hat} alt='Summer' className='summer-hat' />
                        </div>
                    </Fade>
                </Col>
            </Row>
        </IndexWrapper>
    )
}

export default Home