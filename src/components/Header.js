import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Calendar from './Calendar';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'white',
    display: 'flex',
    flexWrap: 'wrap',
},
formControl: {
    margin: '2px',
    padding: 'none',
    minWidth: 120,
    justifyContent: 'center'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Header = (props) => {

    const classes = useStyles();
    const [values, setValues] = useState({
      age: '',
      name: 'hai',
    });
    
    const inputLabel = React.useRef(null);
    const [ labelWidth, setLabelWidth ] = useState(0);
    
    useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    
    function handleChange(event) {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));
    }

    const style = {
        config: {
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: 'black',
            width: 'auto',
            height: '100px',
            
        },
        text: {
            color: 'white',
            textAlign: 'center',
            marginTop: '0px',
            padding: '5px'
        }
    }

    return (
        <div style={style.config}>
            <h1 style={style.text}>FX rates</h1>
            <form className={classes.root} autoComplete="off">
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel ref={inputLabel} htmlFor="outlined-age-simple" style={{color: 'black', position: 'relative',}}>
                        Currency
                    </InputLabel>
                    <Select
                    value={values.age}
                    onChange={handleChange}
                    input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                        <MenuItem value={10}>USD/JPY</MenuItem>
                        <MenuItem value={20}>GBP/USD</MenuItem>
                        <MenuItem value={30}>EUR/GBP</MenuItem>
                        <MenuItem value={30}>EUR/JPY</MenuItem>
                    </Select>
                </FormControl>
            </form>
            <div>
              <Calendar/>
            </div>
        </div>
    )
}

export default Header