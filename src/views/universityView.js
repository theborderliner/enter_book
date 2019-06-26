import React from 'react';
import "./styles/universityView.css";

import {Col, Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";

class UniversityView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        return (
            <Container fluid={false}>
                <div id="universityView">
                    <Row style={{borderBottom: "2px solid lightgray", paddingBottom: "15px"}}>
                        <Col lg={2} xs={6} sm={4}
                             style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <img className="universityViewLogo" src={this.props.logo} alt="logo"/>
                        </Col>
                        <Col lg={10} xs={6} sm={8} style={{display: "flex", alignItems: "center"}}>
                            <p className="universityViewUniversityTitle">
                                {this.props.title}
                            </p>
                        </Col>
                    </Row>
                    <hr/>
                    <Row >
                        <Col lg={3} xs={12} sm={6} className="universityViewCenteredColumn">
                            <p className="universityViewTitle">Факультеты</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}

UniversityView.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
};


export default UniversityView;