import { useState, useEffect } from 'react';

import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import TableJS from "./components/TableJS";
import Map from "./components/Map";





function App() {

  const [curLat, setcurLat] = useState(0)
  const [curLong, setcurLong] = useState(0)




  const [coordinates, setcoordinates] = useState(0)

  const [selectedSchool, setselectedSchool] = useState({ lat: 0, lng: 0 })


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setcurLat(position.coords.latitude)
      setcurLong(position.coords.longitude)
    })
  }, [])
  useEffect(() => {
    setselectedSchool({ lat: +coordinates.latitude, lng: +coordinates.longitude })
    MapRender()
  }, [coordinates])


  const MapRender = () => {
    if (selectedSchool.lat > 0 && selectedSchool.lng > 0) {


      return <Map
        center={selectedSchool}
        zoom={15}
        // places={data}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBX4_Aom7ecCURuMS58fbsyUmO-2tTu7BU"
        loadingElement={<div className="col-12 row" />}
        containerElement={<div className="col-12" />}
        mapElement={<div style={{ height: `600px` }} />}
        coord={coordinates}
        curLat={curLat}
        curLong={curLong}
      />
    }
  }


  return (
    <div className="App">
      <Container>
        <Row>
          <Col
            className="school"
            md={4}
            style={{ borderRight: "1px gray solid" }}
          >
            <TableJS setcoordinates={setcoordinates} curLat={curLat} curLong={curLong} />
          </Col>
          <Col md={8}>
            <MapRender />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
