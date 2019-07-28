import React, { useState } from 'react';
import ReactDataGrid from 'react-data-grid';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'count', name: 'Count' } 
];

const rows = [
    { id: 0, title: 'row1', count: 20 }, 
    { id: 1, title: 'row1', count: 40 }, 
    { id: 2, title: 'row1', count: 60 },
];

const style = {
    card: {
        padding: '0px',
    },
    grid: {
        width: '100%',
        height: '100%',
    },
}

export const SpreadSheet = (props) => {
  return (
      <div style={{width: '90%',}}>
        <Card >
            <CardContent style={style.card}>
                <ReactDataGrid
                    style={style.grid}
                    columns={columns}
                    rowGetter={i => rows[i]}
                    rowsCount={3}
                    minHeight={150} 
                />
            </CardContent>
        </Card>
      </div>
  );
}

const mapStateToProps = (state) => ({
    data: state.data
})

export default connect(mapStateToProps)(SpreadSheet)