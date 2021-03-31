import React from 'react';
import { Spinner, Col, Row } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center mt-5' style={{ height: '100vh', color:"#09bdb7"}}>
            <Row>
                <Col>
                    <Spinner
                        className='spinner-border  spinner-border-lg'
                        role='status'
                        style={{ height: '5vh', width: '5vh' }}
                    >
                    </Spinner>
                </Col>
            </Row>
            <Row >
                <Col>
                    <div className='mx-3' style = {{fontSize: "25px"}} > Fetching Pokemon...</div>
                </Col>
            </Row>
        </div>
    )
}

export default Loading;