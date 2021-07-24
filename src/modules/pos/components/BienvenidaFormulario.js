import React from 'react';

const BienvenidaFormulario = () => {
    return (
        <>
           
                    <form action="" className="formulario" style = {{background:'#8a7a799a',
                                                                    width:'400px',
                                                                    height: '300px',
                                                                    padding: '20px',
                                                                    }}
                                            >
                        <h3 style={{ fontSize: '18px'}}>Tenemos la cuenta ideal para ti</h3>
                        <p style={{color: '#fff', fontSize:'14px'}}>Ingresa tus datos y abre tu cuenta al instante</p>
                    <div className="input">
                        <input className="inputDNI" type="text" placeholder="Número de DNI" maxlength="8"  />
                        <input className="inputCel" type="text" placeholder="Celular" maxlength="9" />
                        <input className="inputCor" type="text" placeholder="Correo electrónico"  />
                    </div>
                        <a className="boton" href='#' >DESCÚBRELA</a>
                    </form>
             
        </>
    )
}

export default BienvenidaFormulario
