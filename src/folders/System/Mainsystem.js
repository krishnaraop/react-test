import { useState, useEffect } from "react";
import axios from "axios";

import { Formik, Field, Form } from "formik";
import { RiDeleteBin2Line } from "react-icons/ri";

function MainSystem() {
  const [system, setSystem] = useState([]);
  const systemUrl = "http://13.233.253.109:8080/systems";
  useEffect(() => {
    axios.get(systemUrl).then((res) => {
      setSystem(res.data);
    });
  }, [system]);
  const delSystem = (id) => {
    console.log(id);
    axios.delete(`${systemUrl}/${id}`);
  };
  return (
    <>
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            description: "",
          }}
          onSubmit={async (values) => {
            await axios.post(systemUrl, values);
            console.log(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <h6>AddSystem</h6>
            <label htmlFor="name" className="m-2">
              {" "}
              Name
            </label>
            <Field id="name" name="name" placeholder="name" />

            <label htmlFor="description" className="m-2">
              Description
            </label>
            <Field
              id="description"
              name="description"
              placeholder="Description"
            />

            <button type="submit" className="btn btn-outline-success m-2">
              Submit
            </button>
          </Form>
        </Formik>
      </div>{" "}
      <br />
      <div className="container  border border-secondary m-3">
        <h5 className="text-center">Available Systems</h5>
        <table class="table">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Delete system</th>
            </tr>
          </thead>
          <tbody>
            {system.map((d, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{d.name}</td>
                  <td>{d.description}</td>
                  <td>
                    {" "}
                    <button
                      onClick={(e) => delSystem(d.id)}
                      className="btn btn-outline-danger text-center"
                    >
                      <RiDeleteBin2Line />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MainSystem;
