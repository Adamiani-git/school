import { Card, Table } from "react-bootstrap";
import DataS from "./DataS";
console.log(DataS);
function TableJS(props) {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {DataS.map((d, i) => (
            <tr key={i}>
              <td>
                <a href={`${d.lat},${d.long}`} >
                <Card>
                  <Card.Body>{d.name}</Card.Body>
                </Card>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableJS;
