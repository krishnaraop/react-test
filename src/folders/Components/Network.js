import { FormGroup, Label, Col, Input } from "reactstrap";
import { Formik, Form, Field } from "formik";

function Network() {
  return (
    <>
      <div className="container">
        <h4 className="text-center"> Network</h4>
        <Formik
          initialValues={{}}
          onSubmit={async (values) => {
            // await new Promise((r) => setTimeout(r, 1000));
            // console.log(values);
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>
                API End Point
              </Label>
              <Col sm={9}>
                <Field id="exampleEmail" name="apiendpoint" type="text" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={3}>
                Credentials
              </Label>
              <Col sm={9}>
                <Field id="examplePassword" name="credentials" type="text" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>
                Success Response
              </Label>
              <Col sm={9}>
                <Field id="exampleEmail" name="successresponse" type="text" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>
                Error Response
              </Label>
              <Col sm={9}>
                <Field id="exampleEmail" name="errorresponse" type="text" />
              </Col>
            </FormGroup>
            <button className="btn btn-outline-secondary ">
              submit Network
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Network;
