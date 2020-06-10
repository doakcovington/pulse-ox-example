import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
    render () {
        const chart = [
            {
                date: '6/7/2020',
                oxygen: 98,
            },
            {
                date: '6/8/2020',
                oxygen: 97,
            },
            {
                date: '6/9/2020',
                oxygen: 96,
            },
            {
                date: '6/10/2020',
                oxygen: 92,
            },
        ]

      return (
        <div className="container">
          <Table  chartData={chart}/>
        </div>
      )
    }
}

export default App