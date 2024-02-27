import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Style from './../styles/agregarCliente.module.css'
 
export default function AgregarCliente(){

    const inputStyle = {
        color: 'white',
        width: '160px',
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

    const [nombre, setNombre] = useState('')
    const [paterno, setPaterno] = useState('')
    const [materno, setMaterno] = useState('')
    const [edad, setEdad] = useState('')
    const [sexo, setSexo] = React.useState('');
    const [email, setEmail] = useState('')
    const [curp, setCurp] = useState('')

    const handleChange = (event) => {
        setSexo(event.target.value);
      };

    const [error, setError] = useState({
        nombre:'',
        paterno:'',
        materno:'',
        edad:'',
        sexo:'',
        email:'',
        curp:''
    })

    const handleCreate =() => {
        const errores = {}
        let hayErrores = false

        if(!nombre){
            errores.nombre = 'Ingresar nombre'
            hayErrores = true
        }

        if(!paterno){
            errores.paterno = 'Ingresar apellido paterno'
            hayErrores = true
        }

        if(!materno){
            errores.materno = 'Ingresar apellido materno'
            hayErrores = true
        }

        if(!edad){
            errores.edad = 'Ingresar edad'
            hayErrores = true
        } else {
            const numEdad = parseInt(edad)
            if(isNaN(numEdad) || numEdad < 18 || numEdad > 99){
                errores.edad = 'La edad debe ser entre 18 y 99'
                hayErrores = true
            }
        }

        if(!sexo){
            errores.sexo = 'Seleccionar el sexo'
            hayErrores = true
        }

        const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!email){
            errores.email = 'Ingresar email'
            hayErrores = true
        } else if(!validarEmail.test(email)){ //test verifica si su valor coincide con la expresión regular 
            errores.email = 'Formato de correo incorrecto'
            hayErrores = true
        }

        const validarCurp = /^[A-Z]{4}[0-9]{6}[A-Z]{6}[0-9]{2}$/;
        if(!curp || curp.length !== 18){
            errores.curp = 'Ingresar curp'
            hayErrores = true
        } else if(!validarCurp.test(curp)){
            errores.curp = 'Formato de curp incorrecto'
            hayErrores = true
        }

        if(hayErrores) {
            setError(errores)
            return
        }

        console.log("Datos del nuevo cliente:", { nombre, paterno, materno, edad, sexo, email, curp });

        setNombre('')
        setPaterno('')
        setMaterno('')
        setEdad('')
        setSexo('')
        setEmail('')
        setCurp('')
        setError({
            nombre:'',
            paterno:'',
            materno:'',
            edad:'',
            sexo:'',
            email:'',
            curp:''
        })

    }

    return(
        
        <div className={Style.agregar}>
            <div>

                <TextField 
                    id="nombre" 
                    label="Nombre(s)" 
                    variant="standard" 
                    width='20px'
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: inputStyle,
                        sx: underlineStyle
                    }}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    error={error.nombre}
                    helperText={error.nombre}
                />

                <TextField 
                    id="paterno" 
                    label="Apellido Paterno" 
                    variant="standard" 
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: inputStyle,
                        sx: underlineStyle
                    }}
                    value={paterno}
                    onChange={(e) => setPaterno(e.target.value)}
                    error={error.paterno}
                    helperText={error.paterno}
                />

            </div>

            <div>

                <TextField 
                    id="materno" 
                    label="Apellido Materno" 
                    variant="standard" 
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: inputStyle,
                        sx: underlineStyle
                    }}
                    value={materno}
                    onChange={(e) => setMaterno(e.target.value)}
                    error={error.materno}
                    helperText={error.materno}
                />

                <TextField 
                    id="edad" 
                    label="Edad" 
                    variant="standard" 
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: inputStyle,
                        sx: underlineStyle,
                        maxLength: 2,
                        onKeyDown: (e) => {
                            if ((isNaN(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') || e.target.value.length >= 2) {
                                e.preventDefault();
                            }
                        },
                    }}
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    error={error.edad}
                    helperText={error.edad}
                />

            </div>

            <div>

                <FormControl variant="standard">
                    <InputLabel id="demo-simple-select-standard-label" sx={{ color: 'white' }}>Sexo</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="sexo"
                        value={sexo}
                        label="Sexo"
                        sx={{ width: '160px', height: '40px'}}
                        inputProps={{ sx: { color: 'white' } }}

                        onChange={handleChange}
                        helperText={error.sexo}
                        error={error.sexo ? true : false}
                    >
                        <MenuItem value={10}>Femenino</MenuItem>
                        <MenuItem value={20}>Masculino</MenuItem>
                    </Select>
                    {error.sexo && <FormHelperText>{error.sexo}</FormHelperText>}
                </FormControl>

                <TextField 
                    id="email" 
                    label="Email" 
                    variant="standard" 
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: inputStyle,
                        sx: underlineStyle
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error.email}
                    helperText={error.email}
                />

            </div>

            <div>

                <TextField 
                    id="curp" 
                    label="CURP" 
                    variant="standard" 
                    InputLabelProps={{ sx: { ...labelStyle, ...focusedLabelStyle } }}
                    InputProps={{
                        style: {
                            color: 'white',
                            width: '200px',
                        },
                        sx: underlineStyle, 
                        maxLength: 18,
                        onKeyDown: (e) => {
                            const regex = /^[A-Za-z0-9]+$/;
                            if (e.key !== 'Backspace' && (!regex.test(e.key) || e.target.value.length >= 18)) {
                                e.preventDefault();
                            }
                        },
                    }}
                    value={curp}
                    onChange={(e) => setCurp(e.target.value)}
                    error={error.curp}
                    helperText={error.curp}
                />
            </div>

            <div className={Style.crear}>
                <button onClick={handleCreate}>Crear</button>
            </div>

        </div>
    )
}