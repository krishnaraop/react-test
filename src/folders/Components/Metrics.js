import { Form, FormGroup, Label, Col, Input } from "reactstrap";

function Metrics() {
  return (
    <>
      <div className="container">
        <h4 className="text-center"> Metrics</h4>
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={3}>
              API End Point
            </Label>
            <Col sm={9}>
              <Input id="exampleEmail" name="email" type="text" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={3}>
              Credentials
            </Label>
            <Col sm={9}>
              <Input id="examplePassword" name="password" type="text" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={3}>
              Success Response
            </Label>
            <Col sm={9}>
              <Input id="exampleEmail" name="email" type="text" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={3}>
              Error Response
            </Label>
            <Col sm={9}>
              <Input id="exampleEmail" name="email" type="text" />
            </Col>
          </FormGroup>
          <button className="btn btn-outline-secondary ">submit Metrics</button>
        </Form>
      </div>
    </>
  );
}

export default Metrics;
