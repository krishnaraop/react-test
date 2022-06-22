import { FormGroup, Label, Col, Input } from "reactstrap";
import { Formik, Field, Form } from "formik";

const Logs = () => {
  return (
    <>
      <h4 className="text-center">Logs</h4>
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

          <button type="submit" className="btn btn-outline-secondary">
            Submit Logs
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Logs;
