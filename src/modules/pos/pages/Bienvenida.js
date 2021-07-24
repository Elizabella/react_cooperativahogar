import React from 'react';
import './../css/Bienvenida.css';
import logo from'./../img/logo_col.png'
import BienvenidaAcuerdos from './../components/BienvenidaAcuerdos'
import BienvenidaFormulario from './../components/BienvenidaFormulario';
import BienvenidaFooter from './../components/BienvenidaFooter';
import BienHeader from '../components/BienHeader';
import Encuentranos from './Encuentranos';
import BienCarrusel from '../components/BienCarrusel';

const Bienvenida = () => {

    return (
        <>
            <section className="body" >
                <BienHeader/>
                <div className="container">
                    <div className="bienvenida">  
                        <img src={logo} alt="" className="logo" />
                        <h1 className='h1'>BIENVENIDO</h1>
                        <p className="pBienvenida">Lorem ipsus at iure quas, quia dolores ea praesentium velit repellendus totam odit qui inventore, nemo beatae. Deleniti.</p>
                    </div>    
                <BienvenidaFormulario />
                </div>
            </section>
            <h1>Nuestros Productos</h1>
            <section style= {{position:'relative', zIndex:'-100'}}>
                <BienCarrusel/>
            </section>

            <Encuentranos/>
            <section className="acuerdos" style={{padding:'20px 0'}}>
                <BienvenidaAcuerdos/>
                <BienvenidaAcuerdos/>
            </section>


            <BienvenidaFooter/>  
        </>
    )
}

export default Bienvenida
