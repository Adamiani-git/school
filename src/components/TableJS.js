import { useState, useEffect } from 'react';

import { Card, Table, Button, Form } from "react-bootstrap";
import DataS from "./DataS";


function TableJS({ setcoordinates, curLat, curLong }) {

  const [filterSchool, setfilterSchool] = useState(DataS)
  const [kmNumber, setkmNumber] = useState(0)


  const filterNear = (e) => {
    e.preventDefault()
    console.log(Math.abs(curLat - DataS[0].lat) <= kmNumber / 100)
    setfilterSchool(DataS.filter(s => Math.abs(curLat - s.lat) <= (Number(kmNumber) / 100) && Math.abs(curLong - s.long) <= (Number(kmNumber) / 100)).map(s => s))
  }


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
        <Button variant="warning" className="col-4 mt-4" onClick={() => setfilterSchool(DataS)}>ყველა</Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filterSchool.map((d, i) => (
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
