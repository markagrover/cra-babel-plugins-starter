import React from 'react';
import {Col, Row, Container} from 'mdbreact';
export const Thumbnail = (props) => {

    const {url, imageDetails} = props;
    return <Container>
        <Row>
            <Col sm={'4'}>8 units</Col>
            <Col sm={'8'}>left over</Col>
        </Row>
    </Container>
}
