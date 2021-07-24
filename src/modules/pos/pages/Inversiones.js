import React from "react";
import "./../css/Inversiones.css";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import logoblancosinnombre from "./../img/LogoBlanco-sinNombre.png";
import nasdaq from "./../img/nasdaq-logo.png";
import bolsa from "./../img/Bolsa_de_Valores_de_Lima_logo.png";
import BotonModal from "../components/BotonModal";

const Inversiones = () => {
  return (
    <div>
      <Container fluid>
        <Row className="mb-5">
          <Col lg={true}>
            <h1 className="celeste flex justify-content-center text-center mt-4">
              INVERSIONES
            </h1>
            <h6 className=" celeste flex justify-content-center text-center">
              Genera una rentabilidad sobre tus ahorros invirtiendo en algunos
              de nuestros fondos. A tan solo un simple paso
            </h6>
          </Col>
        </Row>

        <Row className="p-3 mb-2 fondo ">
          <Col
            lg={true}
            className=" flex alig-items-center justify-content-center mt-5 mb-5 text-center"
          >
            <h2 className="profile-title-2 d-flex text-center justify-content-center mb-4">
              FONDO HOGAR
            </h2>
            <h4 className="text-center mt-2 mb-4">
              Este fondo es invertido como parte del capital de la cooperativa
              para proveer credito a los socios
            </h4>
            <BotonModal />
          </Col>

          <Col
            lg={true}
            className=" flex alig-items-center justify-content-center text-center"
          >
            <img
              className="profile-img mt-3"
              src={logoblancosinnombre}
              alt="logo cooperativa hogar"
            />
          </Col>
        </Row>

        <Row className="p-3 mb-2">
          <Col
            lg={true}
            className=" flex alig-items-center justify-content-center text-center"
          >
            <img
              className="profile-img mt-3"
              src={bolsa}
              alt="logo cooperativa hogar"
            />
          </Col>

          <Col
            lg={true}
            className=" flex alig-items-center justify-content-center mt-5 mb-5 text-center"
          >
            <h2 className="profile-title-2 d-flex text-center justify-content-center mb-4">
              FONDO HOGAR
            </h2>
            <h4 className="text-center mt-2 mb-4">
              Este fondo es invertido en la bolsa de valores de Lima
            </h4>
            <BotonModal />
          </Col>
        </Row>

        <Row className="p-3 mb-2 fondo ">
          <Col
            lg={true}
            className=" flex alig-items-center justify-content-center mt-5 mb-5 text-center"
          >
            <h2 className="profile-title-2 d-flex text-center justify-content-center mb-4">
              FONDO HOGAR
            </h2>
            <h4 className="text-center mt-2 mb-4">
              Este fondo es invertido como parte del capital de la cooperativa
              para proveer credito a los socios
            </h4>
            <BotonModal />
          </Col>

          <Col
            lg={true}
            className=" flex align-items-center justify-content-center text-center "
          >
            <div className=" flex align-items-center justify-content-center text-center">
              <img
                className="profile-img mt-5"
                src={nasdaq}
                alt="logo cooperativa hogar"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Inversiones;
