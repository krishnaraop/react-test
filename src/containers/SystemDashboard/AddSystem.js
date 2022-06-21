import { useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";

const AddSystem = ({ url }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          description: "",
        }}
        onSubmit={async (values) => {
          await axios.post(url, values);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="row mt-2">
          <div className="col-3">
            <label htmlFor="ServerName" class="form-label ">
              ServerName:
            </label>
            <Field
              id="ServerName"
              className="form-control"
              name="name"
              placeholder="Yoga server"
            />
          </div>
          <div className="col-4">
            {" "}
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <Field
              id="description"
              className="form-control"
              name="description"
              placeholder="Venice server is available across globe"
            />
          </div>
          <div className="col-3 mt-4">
            <button type="submit" className="btn btn-secondary">
              Add System{" "}
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddSystem;
