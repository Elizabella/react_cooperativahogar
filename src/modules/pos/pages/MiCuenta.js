import React from "react";
import MCmovimientos from "../components/MCmovimientos";
import MCsaldo from "../components/MCsaldo";
import "./../css/MiCuenta.css";

const MiCuenta = () => {
    return (
        <>
                <section className="section">
        
                    <h1>CUENTA EN SOLES</h1>
                    <div className="circulo">
                        <MCsaldo/>
                    </div>
                    <div className="cuenta">
                        <p>Numero de cuenta</p>
                        <b>100-4567839849-4-23</b>
                    </div>
                    <div className="cabecera-tabla" style={{width:'80%', margin: 'auto'}}>
                        <b>Ultimos movimientos</b>
                    </div>
                    <table className="table" style={{width: '80%', 
                                                    borderCollapse:'collapse', 
                                                    margin:'auto',
                                                    marginBottom:'100px'}}>
                            <tbody className="cuerpo-tabla">
                            <tr style={{background:'rgba(0,0,0,0.1)'}}>
                                <th>Fecha</th>
                                <th>IN/OUT</th>
                                <th>Monto</th>
                            </tr>
                                <MCmovimientos/>
                                <MCmovimientos/>
                                <MCmovimientos/>
                                <MCmovimientos/>
                            </tbody>
                    </table> 
                </section>
        </>
    )
}



export default MiCuenta;
