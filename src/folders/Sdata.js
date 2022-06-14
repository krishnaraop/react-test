import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const Sform = () => {
  const baseURL =
    "http://13.233.253.109:8080/systems/aee04844-febd-47eb-9d13-a3cacce64b85";
  const [post, setPost] = useState([]);
  console.log(post);

  // useEffect(() => {
  //   axios.post(baseURL, { values }).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          description: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          axios.post(baseURL, { values }).then((req) => {
            setPost(req);
          });
          //   alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="name"> Name</label>
          <Field id="name" name="name" />

          <label htmlFor="description">description </label>
          <Field id="description" name="description" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Sform;
