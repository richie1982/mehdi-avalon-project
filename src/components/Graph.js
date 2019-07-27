import React, { useState } from 'react';
import Plot from 'react-plotly.js';

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
    })



    return (
        <Plot
          data={data}
          layout={layout}
        />
      );
}

export default Graph