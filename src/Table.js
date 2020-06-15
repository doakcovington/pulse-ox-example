import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Date:</th>
                <th>Oxygen:</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows  = props.readingData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.date}</td>
                <td>{row.oxygen}</td>
                <td><button onClick={() => props.removeReading(index)}>Delete</button></td>
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
            </Table>
        )
}

export default InfoTable;