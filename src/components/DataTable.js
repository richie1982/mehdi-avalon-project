import React, { useState } from 'react';
import { connect } from 'react-redux'
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import { AddBox, ArrowUpward } from "@material-ui/icons";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export const DataTable = (props) => {

  const [state, setState] = useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardContent>
            <MaterialTable
                title="Editable Example"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        const data = [...state.data];
                        data.push(newData);
                        setState({ ...state, data });
                        }, 600);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        const data = [...state.data];
                        data[data.indexOf(oldData)] = newData;
                        setState({ ...state, data });
                        }, 600);
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        const data = [...state.data];
                        data.splice(data.indexOf(oldData), 1);
                        setState({ ...state, data });
                        }, 600);
                    }),
                }}
            />
        </CardContent>
    </Card>
  );
}

const mapStateToProps = (state) => ({
    data: state.data
})

export default connect(mapStateToProps)(DataTable)