import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CharCard from "../component/charCard.js";
import PlanetCard from "../component/planetCard.js";
import ShipCard from "../component/shipCard.js";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="heading">Characters</h2>
        </Col>
      </Row>
      <Row className="mb-5">
        <div className="d-flex justify-content-between overFlow">
          {store.people
            ? store.people.map((elem, index) => (
                <CharCard key={index} id={++index} character={elem} />
              ))
            : ""}
        </div>
      </Row>
      <Row>
        <Col>
          <h2 className="heading">Planets</h2>
        </Col>
      </Row>
      <Row Row className="mb-5">
        <div className="d-flex justify-content-between overFlow">
          {store.planets
            ? store.planets.map((elem, index) => (
                <PlanetCard key={index} id={++index} planet={elem} />
              ))
            : ""}
        </div>
      </Row>
      <Row>
        <Col>
          <h2 className="heading">Start Ships</h2>
        </Col>
      </Row>
      <Row Row className="mb-5">
        <div className="d-flex justify-content-between overFlow">
          {store.starShips
            ? store.starShips.map((elem, index) => (
                <ShipCard key={index} id={++index} ship={elem} />
              ))
            : ""}
        </div>
      </Row>
    </Container>
  );
};
