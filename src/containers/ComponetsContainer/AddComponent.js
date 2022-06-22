import { FormGroup, Label, Col, Input } from "reactstrap";
import { Formik, Field, Form } from "formik";

import axios from "axios";

const AddComponent = ({ SysName, SID_url }) => {
  const post_url = `${SID_url}/components`;

  return (
    <>
      <h5 className="text-center">AddComponent to {SysName} System </h5>
      <Formik
        initialValues={{}}
        onSubmit={async (values) => {
          await axios.post(post_url, values);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <FormGroup row>
            <Label for="name" sm={3}>
              name
            </Label>
            <Col sm={9}>
              <Field id="name" name="name" placeholder="master" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="description" sm={3}>
              description
            </Label>
            <Col sm={9}>
              <Field
                id="description"
                name="description"
                placeholder="its a master component"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="direction" sm={3}>
              direction
            </Label>
            <Col sm={9}>
              <Field
                id="direction"
                name="direction"
                placeholder="uni-direction"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="apiEndpoint" sm={3}>
              apiEndpoint
            </Label>
            <Col sm={9}>
              <Field
                id="apiEndpoint"
                name="apiEndpoint"
                placeholder="/api/v2/final.html"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="frequency" sm={3}>
              frequency
            </Label>
            <Col sm={9}>
              <Field id="frequency" name="frequency" placeholder="2" />
            </Col>
          </FormGroup>
          <button type="submit" className="btn btn-outline-secondary">
            Submit Component
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default AddComponent;
