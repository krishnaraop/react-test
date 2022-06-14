import { FormGroup, Label, Col, Input } from "reactstrap";
import { Formik, Field, Form } from "formik";

function Heartbeat() {
  return (
    <>
      <div className="container">
        <h4 className="text-center"> Heartbeat</h4>
        {/* <Form>
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
          <button className="btn btn-outline-secondary ">
            submit Heartbeat
          </button>
        </Form> */}

        <Formik
          initialValues={{}}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            console.log(values);
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>
                API End Point
              </Label>
              <Col sm={9}>
                <Field id="firstName" name="API-endpoint" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={3}>
                Credentials
              </Label>
              <Col sm={9}>
                <Field id="lastName" name="credentials" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>
                Error Response
              </Label>
              <Col sm={9}>
                <Field id="email" name="error" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>
                Success Response
              </Label>
              <Col sm={9}>
                <Field id="email" name="success" />
              </Col>
            </FormGroup>

            {/* <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            /> */}
            <button type="submit" className="btn btn-outline-secondary">
              Submit Heartbeat
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Heartbeat;
