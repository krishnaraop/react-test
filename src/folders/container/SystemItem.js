import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";

const SystemItem = ({ name, description, id }) => {
  const delServer = (id) => {
    console.log(id);
    axios.delete(`http://13.233.253.109:8080/systems/${id}`);
  };
  return (
    <div>
      <div className="row" key={id}>
        <div className="col">
          <Link class="text-light" to={`/systems/${id}`}>
            {name}
          </Link>
        </div>
        <div className="col">{description}</div>
        <div className="col">
          <button onClick={(e) => delServer(id)} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemItem;
