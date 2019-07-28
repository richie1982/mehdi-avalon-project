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

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
},
formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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
        <div style={style.config}>
            <h1 style={style.text}>FX rates</h1>
            <form className={classes.root} autoComplete="off">
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel ref={inputLabel} htmlFor="outlined-age-simple" style={{color: 'white'}}>
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
        </div>
    )
}

export default Header