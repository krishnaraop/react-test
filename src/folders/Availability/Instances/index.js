// import { Formik, Field, Form } from "formik";
// import { useEffect, useState } from "react";
// import { AddEdit } from "../../Forms/AddEdit";

import DisplayInstance from "./DisplayInstance";
import AddInstance from "./AddInstance";

function Instances() {
  const url =
    "http://13.233.253.109:8080/systems/fa40fbda-ac95-493d-907d-79e6679eaabb/components/59187f15-8e2d-4eb0-a37a-034a0b7d85c3/availability/793e19ee-fc9c-4d29-b96f-58a74d5ccc98/instances";
  return (
    <>
      <div className="container">
        <AddInstance url={url} />
        <br />
        <DisplayInstance url={url} />
      </div>
    </>
  );
}

export default Instances;
