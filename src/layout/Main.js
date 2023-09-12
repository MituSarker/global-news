import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNave from '../pages/Shared/RightSideNave/RightSideNave';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
      <div>
          <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                      <RightSideNave></RightSideNave>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
      </div>
    );
};

export default Main;