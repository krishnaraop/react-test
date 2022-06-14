import { useState } from "react";
import axios from "axios";

const Asforms = () => {
  const url = "http://13.233.253.109:8080/systems";
  // const [exampleInputEmail1, setExampleInputEmail1] = useState('');
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(url, {
        name: e.target.name.value,
        description: e.target.description.value,
      });
      setName("");
      setDescription("");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="Name" className="form-label">
            Enter Name
          </label>
          <input type="name" className="form-control" name="name" id="name" />
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">
            Enter description
          </label>
          <textarea
            class="form-control"
            id="description"
            name="description"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Asforms;
