import React from 'react';


const BienCarrusel = () => {

    return (
        <>
				<div className="carousel__lista" style= {{display:'flex', 
                                                            flexDirection:'colum', justifyContent:'space-around',
                                                            width:'90%', margin:'auto'}}>
					<div className="carousel__elemento">
						<img src="https://www.bbva.pe/content/dam/public-web/peru/ab-test/TC.png" alt="Rock and Roll Hall of Fame"/>
						<p> Pide una Tarjeta de Crédito </p>
					</div>
					<div className="carousel__elemento">
						<img src="https://www.bbva.pe/content/dam/public-web/peru/ab-test/Prestamo.png" alt="Constitution Square - Tower I"/>
						<p>Necesito un préstamo</p>
					</div>
					<div className="carousel__elemento">
						<img src="https://www.bbva.pe/content/dam/public-web/peru/ab-test/Abre-Cuenta.png" alt="Empire State Building"/>
						<p>Pide una Cuenta de ahorros</p>
					</div>
					<div className="carousel__elemento">
						<img src="https://www.bbva.pe/content/dam/public-web/peru/ab-test/T-Cambio.png" alt="Harmony Tower"/>
						<p>Quiero cambiar dólares</p>
					</div>
	
					<div className="carousel__elemento">
						<img src="https://www.bbva.pe/content/dam/public-web/peru/ab-test/Seguro_vehicular.png" alt="Empire State Building"/>
						<p>Necesito un seguro vehicular</p>
					</div>
					<div className="carousel__elemento">
						<img src="https://www.bbva.pe/content/dam/public-web/peru/ab-test/Adelanto_sueldo.png" alt="Harmony Tower"/>
						<p>Busco un adelanto de sueldo</p>
					</div>
				
			</div>
        </>
    )
}

export default BienCarrusel
