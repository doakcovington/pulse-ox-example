import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Date:</th>
                <th>Oxygen:</th>
                <th>Delete:</th>
            </tr>
        </thead>
    )
}

//inline ternary operator to line 24
const TableBody = props => {
    const rows  = props.readingData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.date}</td>
                <td>{row.oxygen}</td> 
                <td><Button variant="danger" onClick={() => props.removeReading(index)}>Delete</Button></td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const InfoTable = (props) => {
    const { readingData, removeReading } = props;
        return (
            <Table bordered hover>
                <TableHeader />
                <TableBody readingData={ readingData } removeReading={removeReading} />
                <Alert variant="danger">This is an error alert — check it out!</Alert>
            </Table>
        )
}

export default InfoTable;