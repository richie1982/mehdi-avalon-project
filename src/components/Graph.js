import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Graph = (props) => {

    const [ data, setData ] = useState(
        [
            {
                x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
                y: [1, 3, 6],
                type: 'scatter'
              },
          ]
    )

    const [ layout, setLayout ] = useState({
        title: 'A Fancy Plot',
        margin: { l: 50, r: 40, t: 50, b: 40 },
    })

    const [ config, setConfig ] = useState({
        style: {
            width: '100%',
            height: '100%',
        }
    })

    return (
        <Card style={{margin: '5px'}}>
            <CardContent>
                <Plot
                data={data}
                layout={layout}
                style={config.style}
                />
            </CardContent>
        </Card>
      );
}

export default Graph