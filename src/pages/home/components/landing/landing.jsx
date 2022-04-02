import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import TextTransition, { presets } from "react-text-transition";

import './landing.css';

function Landing() {
    const [index, setIndex] = React.useState(0);
    const LANDING_TITLES = [
        "Connect your school with Educave",
        "Stay up-to-date with your classes",
        "Automatically connect with your classmates",
        "Stay up-to-date with your clubs and teams",
    ]

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            4000
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <section id='landing'>
            <Row className={'justify-content-center'}>
                <Col md={7} lg={6} className='text-center'>
                    <h1 id='landing-title'>
                        <TextTransition
                            text={LANDING_TITLES[index % LANDING_TITLES.length]}
                            springConfig={presets.slow}
                        />
                    </h1>
                    <Button variant='outline-light' href='https://forms.gle/ko1hFB4FadnuCwbn6'>Product survey</Button>
                </Col>
            </Row>
        </section>
    );
}

export default Landing;