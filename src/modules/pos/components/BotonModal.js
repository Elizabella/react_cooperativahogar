import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  Modal,
  Container,
  Col,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import logocelestesinnombre from "./../img/LogoCeleste-sinNombre.png";
import "./../css/Inversiones.css";

const BotonModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" size="lg" onClick={handleShow}>
        INVERTIR
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="flex justify-content-center text-center"
      >
        <Container fluid className=" text-center flex justify-content-center">
          <Row>
            <Col className="flex-start justify-content-center text-center">
              <img
                className="logo_pop"
                src={logocelestesinnombre}
                alt="logo cooperativa hogar"
              />
              <h2 className="celeste">FONDO HOGAR</h2>
            </Col>
          </Row>
          <Row>
            <Col className="flex-start justify-content-center text-center">
              <h6>
                Este fondo es invertido como parte del capital de la cooperativa
                para proveer credito a los socios
              </h6>
            </Col>
          </Row>

          <Row className="text-center mt-2">
            <Col lg={true}>Apr</Col>
            <Col lg={true}>8%</Col>
          </Row>
          <Row className="text-center">
            <Col lg={true}>Total de Fondo</Col>
            <Col lg={true}>S/.1'000'245.24</Col>
          </Row>
          <Row className="text-center mt-4">
            <Col lg={true} className="celeste">
              <h5>TOTAL DE FONDO</h5>
            </Col>
            <Col lg={true}>
              <h5>S/. 1'897.00</h5>
            </Col>
          </Row>
          <Row className="text-center">
            <Col lg={true} className="celeste">
              <h5>GANANCIA</h5>
            </Col>
            <Col lg={true}>
              <h5>S/. 23.87</h5>
            </Col>
          </Row>
          <Row>
            <Col className="mr-5 ml-5">
              <InputGroup className="mb-3 mt-4">
                <FormControl
                  aria-label="Dollar amount (with dot and two decimal places)"
                  placeholder="S/.500.00"
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            INVERTIR
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BotonModal;
