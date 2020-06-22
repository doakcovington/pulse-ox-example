import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class UserForm extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            date: '',
            oxygen: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target
      
        this.setState({
          [name]: value,
        })
      }

    onFormSubmit = (event) => {
        event.preventDefault(); //prevents page refresh

        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { date, oxygen } = this.state;

        return (
            <Form onSubmit={this.onFormSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter the Date Below:</Form.Label>
                    <Form.Control size="lg" type="date" name="date" id="date" value={date} onChange={this.handleChange} /> 
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter the Oxygen % Below:</Form.Label>
                    <Form.Control size="lg" type="number" name="oxygen" id="oxygen" value={oxygen} onChange={this.handleChange} /> 
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}

export default UserForm;