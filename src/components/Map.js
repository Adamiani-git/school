import React, { Component, useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Card } from 'react-bootstrap';
import { MdOutlineLocationOn } from 'react-icons/md';

const SchoolLocation = ({ name, info }) => (
  <div>
    <Card style={{ width: "150px", left: "40px" }}>
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Body>
        {info}
      </Card.Body>
    </Card>
    <MdOutlineLocationOn size={40} color="red" />
  </div>
);
const MyLocation = ({ name, info }) => (
  <div>
    <Card style={{ width: "100px", left: "40px" }}>
      <Card.Header>
        {name}
      </Card.Header>

    </Card>
    <MdOutlineLocationOn size={40} color="red" />
  </div>
);



function SimpleMap(props) {




  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBX4_Aom7ecCURuMS58fbsyUmO-2tTu7BU' }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
      // options={function (maps) { return { mapTypeId: "satellite" } }}
      >
        <SchoolLocation
          lat={props.coord.latitude}
          lng={props.coord.longitude}
          name={props.coord.name}
          info={props.coord.contact}
        />
        <MyLocation
          lat={props.curLat}
          lng={props.curLong}
          name="აქ ვარ"
        />
      </GoogleMapReact>
    </div>
  );

}

export default SimpleMap;