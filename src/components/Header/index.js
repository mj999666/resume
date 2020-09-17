import { Col, Row } from "antd";
import React from "react";
import myPic from "../../assets/img/me.jpeg";
import "./styles.css";

export default () => {
    return (
        <div className="Headers">
            <Row align="middle">
                <Col xs={{ span: 24, order: 2 }} sm={{ span: 20, order: 1 }}>
                    <Row>
                        <h1>محمد جواد قاسمی</h1>
                    </Row>
                    <Row>
                        <h4>برنامه نویس بک‌اند</h4>
                    </Row>
                    <Row className="social">
                        <a
                            href="https://twitter.com/geeksesi"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a
                            href="https://gitlab.com/geeksesi"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i class="fa fa-gitlab"></i>
                        </a>
                        <a
                            href="https://github.com/geeksesi"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i class="fa fa-github"></i>
                        </a>
                    </Row>
                </Col>
                <Col xs={{ span: 24, order: 1 }} sm={{ span: 4, order: 2 }} className="logo">
                    <center>
                        <img src={myPic} alt="Mohammad Javad Ghasemy" />
                    </center>
                </Col>
            </Row>
        </div>
    );
};