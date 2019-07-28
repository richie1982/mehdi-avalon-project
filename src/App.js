import React from 'react';
import Header from './components/Header'
import Graph from './components/Graph';
import DataTable from './components/DataTable'
import SpreadSheet from './components/SpreadSheet'
// import './App.css';

const App = () => {

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

export default App;
