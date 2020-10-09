import React from 'react'
import { Row, Col } from 'antd'
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
            <Row gutter={[0, 48]} align='middle' justify='center'>
                <Col xs={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 2 }} md={{ span: 8 }} >
                    <LightSpeed left cascade>
                        <div className='days'>
                            <span>Days </span>
                            <span>of Summer</span>
                        </div>
                    </LightSpeed>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 10 }} md={{ span: 10, offset: 1 }} >
                    <Fade right>
                        <img src={sceneSky} alt='Summer Sky' style={{ width: '80%' }} />
                    </Fade>
                </Col>
            </Row>
            <Row gutter={[0, 56]} >
                <Col xs={{ span: 16, offset: 4 }} sm={{ span: 16, offset: 4 }} md={{ span: 12, offset: 6 }}>
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
            <div className='parallax'></div>
            <Row gutter={[0, 48]} align='bottom' className='bottom'>
                <Col
                    xs={{ span: 16, offset: 4 }} sm={{ span: 11, offset: 2 }} md={{ span: 9, offset: 4 }}
                >
                    <Fade>
                        <img src={swim} alt='Summer' style={{ width: '85%' }} />
                    </Fade>
                </Col>
                <Col xs={{ span: 16, offset: 4 }} sm={{ span: 8, offset: 1 }} md={{ span: 6, offset: 1 }}>
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