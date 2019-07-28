import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header'
import Graph from './components/Graph';
import DataTable from './components/DataTable'
import SpreadSheet from './components/SpreadSheet'
import { fetchData } from './services/api'
import * as actions from './actions'

export const App = (props) => {

  const dailyData = 'FX_DAILY'

  const layout = {
    table: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    grid: {
      display: 'flex',
      justifyContent: 'center',
    }
  }

  const handleDataFetch = () => {
    fetchData(dailyData, 'EUR', 'USD')
      .then(data => props.getData(data))
  }

  useEffect(() => {
    handleDataFetch()
  }, []) 

  return (
    <div >
      <Header />
      <div style={layout.table}>
        <DataTable />
        <Graph />
      </div>
      <div style={layout.grid}>
        <SpreadSheet />
      </div>
    </div>
  );
}

export default connect(null, actions)(App);
