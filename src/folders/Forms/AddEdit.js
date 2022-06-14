import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function AddEdit() {
  // form validation rules
  const validationSchema = Yup.object().shape({
    numberOfInstances: Yup.string().required("Number of Instances is required"),
    tickets: Yup.array().of(
      Yup.object().shape({
        serverName: Yup.string().required(" server Name is required"),
        serverIp: Yup.string().email("Ip is Invalid"),
      })
    ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // functions to build form returned by useForm() and useFieldArray() hooks
  const { register, control, handleSubmit, reset, formState, watch } =
    useForm(formOptions);
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({
    name: "serverName",
    name: "serverIp",
    control,
  });

  // watch to enable re-render when ticket number is changed
  const numberOfTickets = watch("numberOfTickets");

  useEffect(() => {
    // update field array when ticket number changed
    const newVal = parseInt(numberOfTickets || 0);
    const oldVal = fields.length;
    if (newVal > oldVal) {
      // append tickets to field array
      for (let i = oldVal; i < newVal; i++) {
        append({
          serverName: "",
          serverIp: "",
        });
      }
    } else {
      // remove tickets from field array
      for (let i = oldVal; i > newVal; i--) {
        remove(i - 1);
      }
    }
  }, [numberOfTickets]);

  function onSubmit(data) {
    // display form data on success
    console.log(data);
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
  }
  // const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card m-3">
        <h5 className="card-header">Create New Instances</h5>
        <div className="card-body border-bottom">
          <div className="form-row">
            <div className="form-group">
              <label>Select Instances Required</label>
              <select
                name="numberOfTickets"
                {...register("numberOfTickets")}
                className={`form-control ${
                  errors.numberOfTickets ? "is-invalid" : ""
                }`}
              >
                {["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <div className="invalid-feedback">
                {errors.numberOfTickets?.message}
              </div>
            </div>
          </div>
        </div>
        {fields.map((item, i) => (
          <div key={i} className="list-group list-group-flush">
            <div className="list-group-item">
              <h5 className="card-title">Instance {i + 1}</h5>
              <div className="row">
                <div className="col-6">
                  <div className="form-group ">
                    <label className="m-2">Server Name:</label>
                    <input
                      type="text"
                      name="serverName"
                      placeholder="Server Name"
                    />
                    {/* <div className="invalid-feedback">
                      {errors.tickets?.[i]?.name?.message}
                    </div> */}
                  </div>
                </div>
                <div className="col-6">
                  {" "}
                  <div className="form-group ">
                    <label className="m-2">Server IP:</label>
                    <input
                      type="text"
                      name="serverIp"
                      // pattern="^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$"
                      placeholder="xxx.xxx.xxx.xxx"
                    ></input>

                    {/* <div className="invalid-feedback">
                      {errors.tickets?.[i]?.email?.message}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="card-footer text-center border-top-0">
          <button type="submit" className="btn btn-outline-secondary mx-2">
            Load Instances
          </button>
          <button
            onClick={() => reset()}
            type="button"
            className="btn btn-outline-secondary mx-2"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}

export { AddEdit };
