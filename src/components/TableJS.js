import { useState, useEffect } from 'react';

import { Card, Table, Button, Form } from "react-bootstrap";
import DataS from "./DataS";
console.log(DataS);


function TableJS({ setcoordinates, curLat, curLong }) {

  const [filterSchool, setfilterSchool] = useState([])
  const [kmNumber, setkmNumber] = useState(0)

  const filterNear = (e) => {
    e.preventDefault()
    setfilterSchool(DataS.filter(s => Math.abs(curLat - s.latitude) <= Number(kmNumber) / 100).map(s => {

      console.log(s);
    }))
  }

  console.log(filterSchool);
  return (
    <div>
      <div className="row">
        <Form className="col-8 row p-0" onSubmit={filterNear}>
          <Form.Group className="col-6">
            <Form.Label>დაშორება</Form.Label>
            <Form.Control type='number' onChange={e => setkmNumber(e.target.value)} />
          </Form.Group>
          <Button variant="success" type="submit" className="col-5 mt-4">ახლოს</Button>
        </Form>
        <Button variant="warning" className="col-4 mt-4" >ყველა</Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {DataS.map((d, i) => (
            <tr key={i}>
              <td>

                <Card onClick={() => setcoordinates(d)} style={{ cursor: "pointer" }}>
                  <Card.Body>{d.name}</Card.Body>
                </Card>

              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableJS;
