import React from 'react';


const Faucet = () => {
    return (
        <>
          <section className="mt-5 d-flex justify-content-center" style={{width:'60%',margin:'auto'}}>

                <div className="contenedor">
                    <h1 className="display-6 text-center">Faucet</h1>
                    <p>Con la banca Virtual nunca fue tan facil realizar depósitos</p>

                    <div className="mb-3 celeste ">
                        <label htmlFor="form1" className="form-label">Cuenta a donde Mandar Fondos</label>
                        <input type="number" className="form-control" id="form1" placeholder="570-98016946-070"/>
                    </div>

                    <div className="mb-3 celeste ">
                        <label htmlFor="form1" className="form-label">Monto</label>
                        <input type="number" className="form-control" id="form1" placeholder="S/.1000"/>
                    </div>

                    <div className="d-flex justify-content-center">
                        <a className="btn btn-primary mt-4 solicitar" href="#" role="button">Enviar</a>
                    </div>

                </div>

         </section>

        </>
    )
}

export default Faucet
