import React, { Component } from 'react'

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
    const rows  = props.chartData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.date}</td>
                <td>{row.oxygen}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const { chartData } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody chartData={ chartData }/>
            </table>
        )

    }
}

export default Table