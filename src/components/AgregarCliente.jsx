import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Style from './../styles/agregarCliente.module.css'
 
export default function AgregarCliente(){

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

    return(
        
        <div className={Style.agregar}>
            <div>

                <TextField 
                    id="standard-basic" 
                    label="Nombre(s)" 
                    variant="standard" 
                    width='20px'
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: inputStyle,
                        sx: underlineStyle
                    }}
                />

                <TextField 
                    id="standard-basic" 
                    label="Apellido Paterno" 
                    variant="standard" 
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: inputStyle,
                        sx: underlineStyle
                    }}
                />

            </div>

            <div>

                <TextField 
                    id="standard-basic" 
                    label="Apellido Materno" 
                    variant="standard" 
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: inputStyle,
                        sx: underlineStyle
                    }}
                />

                <TextField 
                    id="standard-basic" 
                    label="Edad" 
                    variant="standard" 
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: inputStyle,
                        sx: underlineStyle
                    }}
                />

            </div>

            <div>

                <TextField 
                    id="standard-basic" 
                    label="Sexo" 
                    variant="standard" 
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: inputStyle,
                        sx: underlineStyle
                    }}
                />

                <TextField 
                    id="standard-basic" 
                    label="Email" 
                    variant="standard" 
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: inputStyle,
                        sx: underlineStyle
                    }}
                />

            </div>

            <div>

                <TextField 
                    id="standard-basic" 
                    label="CURP" 
                    variant="standard" 
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: inputStyle,
                        sx: underlineStyle
                    }}
                />
            </div>

            <div className={Style.crear}>
                <button>Crear</button>
            </div>

        </div>
    )
}