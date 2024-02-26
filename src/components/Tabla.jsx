import React, {useState} from "react";
import Style from './../styles/tabla.module.css'
import Modal from '@mui/material/Modal';
import AgregarCliente from './AgregarCliente'
import AgregarCuenta from './AgregarCuenta'

export default function Tabla() {

    const [open, setOpen] = useState(false);
    const [openCuenta, setOpenCuenta] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenCuenta = () => {
        setOpenCuenta(true);
    };

    const handleCloseCuenta = () => {
        setOpenCuenta(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 300,
        border: 'none',
        bgcolor: '#fff',
        boxShadow: 24,
        p: 4,
    };

    const clientes = [
        { 
            nombre: 'Juan', 
            apellidoPaterno: 'Pérez', 
            apellidoMaterno: 'Gómez', 
            edad: 30, 
            sexo: 'Masculino', 
            correo: 'juan@example.com', 
            curp: 'PERJ900101HCMLNS01' 
        },
        { 
            nombre: 'Juan', 
            apellidoPaterno: 'Pérez', 
            apellidoMaterno: 'Gómez', 
            edad: 30, 
            sexo: 'Masculino', 
            correo: 'juan@example.com', 
            curp: 'PERJ900101HCMLNS01' 
        },
        { 
            nombre: 'Juan', 
            apellidoPaterno: 'Pérez', 
            apellidoMaterno: 'Gómez', 
            edad: 30, 
            sexo: 'Masculino', 
            correo: 'juan@example.com', 
            curp: 'PERJ900101HCMLNS01' 
        },
    ];
      
    return (
        <div className={Style.clientes}>

            <div className={Style.tittle}>
                <h2>Clientes</h2>
                <button className={Style.cliente} onClick={handleOpen}>Agregar Cliente</button>

                <Modal

                    open={open}
                    onClose={handleClose}
                    sx={style}
                >
                    <div className={Style.modalContent}>
                        <AgregarCliente/>
                        <button className={Style.closeButton} onClick={handleClose}>X</button>
                    </div>
                </Modal>
                
                {/* ************ CUENTA ************ */}
                <button className={Style.cuenta} onClick={handleOpenCuenta}>Agregar Cuenta</button>

                <Modal

                    open={openCuenta}
                    onClose={handleCloseCuenta}
                    sx={style}
                    >
                    <div className={Style.modalContent}>
                        <AgregarCuenta/>
                        <button className={Style.closeButton} onClick={handleCloseCuenta}>X</button>
                    </div>
                </Modal>
            </div>

            {/* ************* TABLA ************* */}

            <table className={Style.table}>
                <thead className={Style.campos}>
                    <tr>
                        <th>Nombre(s)</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Edad</th>
                        <th>Sexo</th>
                        <th>Email</th>
                        <th>CURP</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente, index) => (
                        <tr key={index}>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellidoPaterno}</td>
                            <td>{cliente.apellidoMaterno}</td>
                            <td>{cliente.edad}</td>
                            <td>{cliente.sexo}</td>
                            <td>{cliente.correo}</td>
                            <td>{cliente.curp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}