
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
function App() {
  return (
    <div className="login-form">
      <h1 className="text-center">Login Form</h1>
      <Container>
        <Row className="justify-content-md-center" md={3}>
         <Col>    
      <Form className="form-container">
  <Form.Group controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out " />
  </Form.Group>
  <Button variant="primary" className="btn btn-primary btn-block" type="submit">
    Log in 
  </Button>
</Form>
</Col>
</Row>
</Container>

      
    </div>
  );
}

export default App;
