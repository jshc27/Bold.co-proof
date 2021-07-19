import React, { Fragment, useState } from 'react';
import Information from '../../assets/img/informacion.png';
import Filtrar from '../../assets/img/filtrar.png';
import { Modal } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import './Main.css';
import { BrowserRouter as Router, Link } from "react-router-dom";




const useStyles = makeStyles((theme) =>({   // Estilos para cada elementos que compone el modal.

    modal:{
        position: 'absolute',
        width: 200,
        backgroundColor: 'white',
        border: '1px solid transparent',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
        top: '51%',
        left: '85%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        color: '#111e6c'
    },
    button1: {
        marginLeft: '195px',
        border: 'transparent',
        cursor: 'pointer'
    },
    button2: {

        width: '120px',
        height: '40px',
        backgroundColor: 'rgb(191,59,85)',
        border: 'transparent',
        borderRadius: '15px',
        cursor: 'pointer',
        color: 'white'
    },
    checkbox: {
        display: 'flex',
        alignItems: 'center'
    }
}))

const Main = () =>{

    const styles=useStyles();

    const [modal, setModal] = useState(false);   // Eventos y estados para la creacion del modal

    const OpenAndCloseModal = () => {
        setModal(!modal);
    }

    const body=(

        <div className={styles.modal}>
            <button className={styles.button1} onClick={()=>OpenAndCloseModal()}>x</button>
            <div className={styles.checkbox}>
                <input type="checkbox"></input> 
                <p>Cobro con datafono</p>
            </div>
            <div className={styles.checkbox}>
                <input type="checkbox"></input> 
                <p>Cobros con link de pago</p>
            </div>
            <div className={styles.checkbox}>
                <input type="checkbox"></input>     
                <p>Ver todos</p>
            </div>
            <div align="center">
                <button className={styles.button2}>Aplicar</button>
            </div>
        </div>
    )

    return (
        <Router>        
            <Fragment>
                <main className="Main">
                    <div className="Main-card">
                        <div className="Main-title">
                        <h3 className="Main-card__text">Total de ventas de Septiembre</h3>
                        <img className="Main-card__icon" src={Information} alt="Icon-information" />
                        </div>
                        <ul className="Main-card__dates">
                            <li className="Main-card__cash">$1'560.000</li>
                            <p className="Main-card__date">Septiembre 2020</p>
                        </ul>
                    </div>
                    <div className="Main-buttons">
                        <div className="Main-buttons__list">
                            <Link to="/hoy">
                                <button>Hoy</button>
                            </Link>
                            <Link to="/semana">
                                <button>Esta semana</button>
                            </Link>
                            <Link to="/">
                                <button>Septiembre</button>
                            </Link>
                        </div>
                        <div className="Main-buttons__filter">
                            <button onClick={()=>OpenAndCloseModal()}> Filtrar
                            <img className="filter" src={Filtrar} alt="Icon-filtrar" />
                            </button>
                        </div>
                    </div>
                    <Modal                    //Modal utilzado como Tooltip con opciones.
                        open={modal}
                        onClose={OpenAndCloseModal}>
                        {body}
                    </Modal>
                </main>
            </Fragment>
        </Router>
);
}

export default Main;