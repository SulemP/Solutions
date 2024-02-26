import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Style from './../styles/agregarCliente.module.css'
 
export default function AgregarCliente(){

    const [age, setAge] = React.useState('');

    const inputStyle = {
        color: '#062554',
        width: '190px'
    };

    const labelStyle = {
        color: 'white',
    };

    const focusedLabelStyle = {
        '&.MuiInputLabel-shrink': {
            color: 'white !important', // Forzar el color blanco para el label en estado "shrink" (cuando tiene el foco)
        },
    };

    const underlineStyle = {
        '&:before': {
            borderBottomColor: 'white', // Color de la línea antes de escribir
        },
        '&:after': {
            borderBottomColor: 'white', // Color de la línea después de escribir
        },
    };

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return(
        
        <div className={Style.agregar}>
            <div>

                <TextField 
                    id="standard-basic" 
                    label="N Cuenta" 
                    variant="standard" 
                    width='20px'
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: inputStyle,
                        sx: underlineStyle
                    }}
                />

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

            </div>

            <div className={Style.crear}>
                <button>Crear</button>
            </div>

        </div>
    )
}