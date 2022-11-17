import { NextPage } from 'next';
import {Button, Card, Col, Row, Typography} from "antd";

const SpotLightExplorePage: NextPage = () => {

    return (
        <div className="explore-page">
            <img src = "https://mojapp.in/assets/svg/monetization-optin-1.svg" alt="spotlight" className="spotlight-banner"/>
            <Row align="middle" justify="center" style={{textAlign: "center",width: "100%"}}>
                <p className="spotlight-title"> Welcome to Moj SpotLight</p>
                <p className="spotlight-subtitle">Join this platform that connects brands category with talents like you and helps you make it big in the creator world.</p>
            </Row>
            <img src = "https://mojapp.in/assets/svg/monetization-optin-2.svg" alt="spotlight" className="spotlight-banner"/>
            <Row align="middle" justify="center" style={{width: "100%"}}>
                <p className="spotlight-title">What’s in it for you?</p>
                <p className="spotlight-subtitle">Collaborate with India’s biggest brands categories, increase your content’s reach and earn more..</p>
            </Row>
            <p className="spotlight-title"> Who can apply? </p>
            <Row>
                <Col span={12}>
                    <img src = "https://mojapp.in/assets/svg/monetization-optin-3.svg" alt="spotlight" className="spotlight-banner"/>
                    <p className="spotlight-subtitle">Creators who have a minimum of 10000 followers</p>
                </Col>
                <Col span={12}>
                    <img src="https://mojapp.in/assets/svg/monetization-optin-4.svg" alt="spotlight" className="spotlight-banner"/>
                    <p className="spotlight-subtitle">Creators who have a minimum of 25000 likes</p>
                </Col>
            </Row>
            <Row align="middle" justify="center">
                <Button>Apply Now</Button>
            </Row>
            <Row className="spotlight-disclaimer">
                <p style={{marginLeft: "4px"}}>Disclaimer</p>
                <ol style={{fontSize: "14px"}}>
                    <li>You must meet all community guidelines to be eligible for Moj Spot Light</li>
                    <li>All information that you provide must be correct</li>
                </ol>
            </Row>
        </div>
    );
};

export default SpotLightExplorePage;
