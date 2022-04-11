import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import TableJS from "./components/TableJS";
import Map from "./components/Map";

const data = [
  {
    id: 1,
    name: "Park Slope",
    latitude: "40.6710729",
    longitude: "-73.9988001"
  },
  {
    id: 2,
    name: "Bushwick",
    latitude: "40.6942861",
    longitude: "-73.9389312"
  },
  {
    id: 3,
    name: "East New York",
    latitude: "40.6577799",
    longitude: "-73.9147716"
  }
];

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col
            className="school"
            md={4}
            style={{ borderRight: "1px gray solid" }}
          >
            <TableJS />
          </Col>
          <Col md={8}>
            <Map
              center={{ lat: 40.64, lng: -73.96 }}
              zoom={12}
              places={data}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key="
              loadingElement={<div className="col-12 row"/>}
              containerElement={<div className="col-12"/>}
              mapElement={<div style={{ height: `600px` }} />}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
