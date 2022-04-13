import React, { Component, useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Card } from 'react-bootstrap';
import { MdOutlineLocationOn } from 'react-icons/md';

const SchoolLocation = ({ name, address, phone, mail }) => (
  <div>
    <Card style={{ width: "300px", left: "40px" }}>
      <Card.Header>
        <div className="fw-bold">
          {name}
        </div>
      </Card.Header>
      <Card.Body>
        <div className="address col-12 text-center">
          {address}
        </div>
        <hr />
        <div className="phone text-center col-12">
          ტელეფონი:  {phone} | mail: {mail}
        </div>

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
  console.log(props.center);



  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBX4_Aom7ecCURuMS58fbsyUmO-2tTu7BU' }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
        options={function (maps) { return { mapTypeControl: true, fullscreenControl: false } }}
      // position=
      >

        <SchoolLocation
          lat={props.coord.lat}
          lng={props.coord.long}
          name={props.coord.name}
          address={props.coord.address}
          phone={props.coord.phone}
          mail={props.coord.mail}
        />
        <MyLocation
          lat={props.curLat}
          lng={props.curLong}
          name="აქ ვარ"
        />
      </GoogleMapReact>
    </div >
  );

}

export default SimpleMap;