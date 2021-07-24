import React from 'react';
import hucha from './../img/hucha.svg';


const BienHeader = () => {
    return (
        <>
            <nav className="navbar">
                    <div className="navbar-a">
                        <div className="navbar-a-b">
                        <b className="boton1">COOPERATIVA HOGAR</b>
                        <a className="boton2" href='#' >PERSONAS</a>
                        <a className="boton2" href='#' >EMPRESAS</a>
                        </div>
                        <div className="navbar-a-c">
                        <a className="boton3" href='#' ><img className="img-chancho" src={hucha}/>Crea una cuenta</a>
                        <a className="boton4"  href='/login' >Banca por Internet</a>
                        </div>                   
                    </div>
                </nav>
        </>
    )
}

export default BienHeader
