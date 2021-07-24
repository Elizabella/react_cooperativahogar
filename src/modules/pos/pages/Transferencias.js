import React from "react";
import "./../css/Transferencias.css";

const Transferencias = () => {
  return (
    <>
      <section className="contenedor">
        <h1>Transferir a otra cuenta de cooperativa Hogar</h1>
        <p>Ingrese los datos para ejecutar la transferencia</p>

        <div className="formulario">
          <form>
            <label className="origen" htmlFor="username">
              Cuenta Origen
            </label>
            <input type="number" placeholder=" 1234-5678-XXXX" />
            <label className="origen" htmlFor="password">
              Cuenta destino
            </label>
            <input type="number" placeholder="4564-5678-XXXX" />

            <div className="transferencia">
              <label htmlFor="password">Monto a transferir</label>
              <input type="text" className="montoTrans" />
            </div>

            <input type="submit" value="Transferir" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Transferencias;
