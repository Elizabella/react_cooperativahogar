import React, {useState} from "react";
import "./../css/Creditos.css";
import { Form,Button, Container,Col,Row } from "react-bootstrap";


const Creditos = () => {
  
  const [calc, setCalc] = useState({
    monto: "",
    cuota: ""
  })


  const handleInputChange = (evento) => {
    //console.log(evento.target.value);  //estara al pendiente de lo que escribes
    setCalc({
        ...calc,    //hacemos una copia siempre
        [evento.target.name]: evento.target.value,     //aca relaciones el name del boton form control
      })
    }
    const m = calc.monto;
    const c = calc.cuota;
    const cuotaMensual = m*.03 + m/c ;


  return (
    <>

      <Container fluid className="mt-2 d-flex justify-content-center" >
        <Row>
          <Col>
            <Col>
              <h1>Solicite su crédito</h1>
    
            </Col>
            <Form >
              <Form.Text className="text-muted mb-3">
                Con la banca Virtual nunca fue tan facil pedir un credito
              </Form.Text>
              <Form.Group className="mb-3 celeste" controlId="formBasicEmail">
                <Form.Label>Monto a Desear</Form.Label>
                <Form.Control 
                        name= "monto"      //colocar siempre para relacionar
                        onChange={handleInputChange}  //estara al pendiente de los que introduzcas
                        type="number" 
                        placeholder="S/. 1000.00" />
              </Form.Group>

              <Form.Group 
                className="mb-3 celeste"
                controlId="formBasicPassword"
              >
                <Form.Label>Cuotas Provistas(meses)</Form.Label>
                <Form.Control 
                        name="cuota"         //colocar siempre para relacionar
                        onChange={handleInputChange}  //estara al pendiente de lo que introduzcas 
                        type="number" 
                        placeholder="24" />
              </Form.Group>
              <Form.Group
                className="mb-3 text-center"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="Ver fecha de pago" />
              </Form.Group>

              <Col className="celeste text-center">
                <h5>Resumen</h5>
              </Col>
                <h6 className="mb-3 text-center">Cuota TEM 3%</h6>
            </Form>

            <Col className="text-center">
              <h5 className="celeste mt-4 ">Cuotas mensuales de:</h5>
              <h6>{cuotaMensual}</h6>
            </Col>
            <Col className="text-center">
              <Button 
                    variant="primary" 
                    type="submit" 
                    className="mt-4"  
                    >
                SOLICITAR
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
      <br/>
      <br/>
      <br/>
      <br/>

    </>
  );
};

export default Creditos;
