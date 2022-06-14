import { useState, useEffect } from "react";
import axios from "axios";

import AsForms from "./Asforms";
import SystemItem from "./SystemItem";
import DeleteAllButton from "./DeleteAllButton";

const SData = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios.get("http://13.233.253.109:8080/systems").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <div className="container">
          {/* <div class="modal-body">
            <AsForms />
          </div> */}
        </div>
        <div className="mt-3">
          <table class="table table-bordered table-dark table-striped">
            <thead>
              <tr>
                <div className="container ">
                  <div className="row">
                    <div className="col">
                      <h4>System</h4>
                    </div>
                    {/* <div className="col text-center">
                      <DeleteAllButton />
                    </div> */}
                  </div>
                </div>
              </tr>
            </thead>
            <tbody>
              <tr>
                {data.map((d, index) => {
                  return (
                    <SystemItem
                      name={d.name}
                      description={d.description}
                      id={d.id}
                    />
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SData;
