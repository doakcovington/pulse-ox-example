import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Info = props => {
    return (
        <Jumbotron>
            <p>The number in the right column shows the percentage of oxygen in your blood.
                Any number above 92% is good. If your most recent number is below 92% you should
                call your physician right away.
            </p>
            <Button variant="link">
                <a href="https://www.lung.org/lung-health-diseases/lung-procedures-and-tests/pulse-oximetry">
                Visit the American Lung Association to Learn More
                </a>
            </Button>
        </Jumbotron>
    )
}

export default Info;