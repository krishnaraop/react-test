import { Formik, Field, Form } from "formik";
import axios from "axios";

function AddInstance({ url, title }) {
  return (
    <>
      <div className="container">
        <h5>AddInstance-{title}</h5>
        <Formik
          initialValues={{
            serverName: "",
            serverIp: "",
          }}
          onSubmit={async (values) => {
            await axios.post(url, values);
            console.log(JSON.stringify(values, null, 2));
          }}
        >
          <Form className="row">
            <div className="col-5">
              <label htmlFor="serverName" className="m-2">
                ServerName
              </label>
              <Field
                id="serverName"
                name="serverName"
                values="initialValues.serverName"
                placeholder="Mars server"
              />
            </div>
            <div className="col-5">
              <label htmlFor="serverIp" className="m-2">
                ServerIP
              </label>
              <Field
                id="serverIp"
                name="serverIp"
                values=""
                placeholder="xx.xx.xx.xxx"
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-outline-secondary mx-2">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default AddInstance;
