import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import NavBar from './NavBar';
import Table from 'react-bootstrap/Table';

function App() {
  return (
    <div >
      <NavBar/>

      <div className="container">
  <div className="row">
    <div className="col-md-6">
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
    <div className="col-md-6">
      
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
    </div>
  </div>
</div>  

      <br />
      <br />
      <br />
      <br />

      <button type="button" class="btn btn-primary">
      Primary</button>
      <button type="button" class="btn btn-secondary">
      Secondary</button>
      <button type="button" class="btn btn-success">
      Success</button>
      <button type="button" class="btn btn-danger">
      Danger</button>
      <button type="button" class="btn btn-warning">
      Warning</button>
      <button type="button" class="btn btn-info">
      Info</button>
      <button type="button" class="btn btn-light">
      Light</button>
      <button type="button" class="btn btn-dark">
      Dark</button>

      <button type="button" class="btn btn-link">
      Link</button>

    </div>
  );
}

export default App;
