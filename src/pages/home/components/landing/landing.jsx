import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TextTransition, { presets } from "react-text-transition";

import './landing.css';

function Landing() {
    const [index, setIndex] = React.useState(0);
    const LANDING_TITLES = [
        "Connect your school with Educave",
        "Stay up-to-date with your classes",
        "Stay up-to-date with your meetings and practices",
        "Automatically connect with your classmates",

    ]

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3500
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <Row>
            <Col lg={5}>
                <div>
                    <h1 id='landing-title'>
                        <TextTransition
                            text={LANDING_TITLES[index % LANDING_TITLES.length]}
                            springConfig={presets.wobbly}
                        />
                    </h1>
                </div>

            </Col>

        </Row>

    );
}

export default Landing;