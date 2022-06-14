import { useState, useEffect } from "react";
import axios from "axios";
import { TbServerOff } from "react-icons/tb";

function DisplayInstance({ url }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  const delServer = (e) => {
    axios.delete(`${url}/${e}`);
  };
  return (
    <>
      <div className="container border border-secondary m-2">
        <h5 className="text-center">Available Instances</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">SNo</th>
              <th scope="col">Server Name</th>
              <th scope="col">Server IP</th>
              <th scope="col">Remove Server</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => {
              return (
                <tr key={d.id}>
                  <td>{index + 1}</td>
                  <td>{d.serverName}</td>
                  <td>{d.serverIp}</td>
                  <td>
                    <button
                      onClick={(e) => delServer(d.id)}
                      className="btn btn-outline-success"
                      style={{ border: "none" }}
                    >
                      {" "}
                      <TbServerOff />
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

export default DisplayInstance;
