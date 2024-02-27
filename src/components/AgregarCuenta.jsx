import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Style from './../styles/agregarCliente.module.css'
 
export default function AgregarCliente(props){

    const {clientes} = props
    // console.log('clientes', clientes)

    const [cuenta, setCuenta] = useState('')
    const [persona, setPersona] = React.useState('');

    const [error, setError] = useState({
        cuenta: '',
        persona: '',
    })

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
      setPersona(event.target.value);
    };

    const handleCreate = () => {
        const errores = {}
        let hayErrores = false

        if(!cuenta || cuenta.length !== 16 || isNaN(cuenta)) {
            errores.cuenta = 'La cuenta debe tener exactamente 16 dígitos numéricos';
            hayErrores = true;
        }        

        if(!persona){
            errores.persona = 'Seleccionar un cliente'
            hayErrores = true
        }

        if(hayErrores) {
            setError(errores)
            return
        }

        console.log("Datos de la cuenta", {cuenta, persona})

        setCuenta('')
        setPersona('')
        setError({
            cuenta:'',
            persona:''
        })
    }

    return(
        
        <div className={Style.agregar}>
            <div>

                <TextField 
                    id="cuenta" 
                    label="N° Cuenta" 
                    variant="standard" 
                    width='20px'
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: inputStyle,
                        sx: underlineStyle,
                        maxLength: 16,
                        onKeyDown: (e) => {
                            if ((isNaN(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') || e.target.value.length >= 16) {
                                e.preventDefault();
                            }
                        },
                    }}
                    value={cuenta}
                    onChange={(e) => setCuenta(e.target.value)}
                    error={error.cuenta}
                    helperText={error.cuenta}
                />

                <FormControl variant="standard">
                    <InputLabel id="demo-simple-select-standard-label" sx={{ color: 'white' }}>Cliente</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="persona"
                        value={persona}
                        label="persona"
                        sx={{ width: '160px', height: '40px'}}
                        inputProps={{ sx: { color: 'white' } }}
                        onChange={handleChange}
                        helperText={error.persona}
                        error={error.persona ? true : false}
                    >
                        {clientes.map((cliente, index) => (
                            <MenuItem key={index} value={cliente.curp}>
                                {cliente.nombre} {cliente.apellidoPaterno} {cliente.apellidoMaterno}
                            </MenuItem>
                        ))}
                    </Select>
                    {error.persona && <FormHelperText>{error.persona}</FormHelperText>}
                </FormControl>

            </div>

            <div className={Style.crear}>
                <button onClick={handleCreate}>Crear</button>
            </div>

        </div>
    )
}