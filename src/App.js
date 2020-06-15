import React, { Component } from 'react'
import Table from './Table'
import UserForm from './UserForm'
import Info from './Info'
import ls from 'local-storage'
import './index.css'
import Container from 'react-bootstrap/Container';


class App extends Component {
    state = {
        readings: [],
    };

    UNSAFE_componentWillMount(){
        localStorage.getItem('readings') && this.setState({
            readings: JSON.parse(localStorage.getItem('readings')),
            isLoading: false 
        })
    }
    
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('readings', JSON.stringify(nextState.readings));
    }

    removeReading = index => {
        const { readings } = this.state;
    
        this.setState({
            readings: readings.filter((reading, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = reading => {
        this.setState({ readings: [...this.state.readings, reading] })
    }

    //change background color to red if oxygen < 92
    changeColor = () => {
        let color = document.getElementById('root')
    }

    render () {
        const { readings } = this.state
        return (
            <Container className="container">
                <Table  readingData={readings} removeReading={this.removeReading} />
                <UserForm 
                    handleSubmit={this.handleSubmit}
                />
                <Info />
            </Container>
        )
    }
}

export default App

