import React from 'react';

const Header = (props) => {

    const style = {
        display: {
            backgroundColor: 'black',
            width: 'auto',
            height: '100px',
            
        },
        text: {
            color: 'white',
            marginTop: '0px'
        }
    }

    

    return (
        <div style={style.display}>
            <h1 style={style.text}>FX rates</h1>
        </div>
    )
}

export default Header