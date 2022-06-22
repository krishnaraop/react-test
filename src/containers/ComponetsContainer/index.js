import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AddComponent from "./AddComponent";
import Heartbeat from "./Heartbeat";
import Logs from "./Logs";
import Metrics from "./Metrics";
import Network from "./Network";
import Relationships from "./Relationships";

const ComponentsContainer = () => {
  const _id = useParams().id;
  const [system, setSystem] = useState([]);
  const [component, setComponent] = useState([]);
  const [key, setKey] = useState("Relationships");
  const url = `http://ec2-13-233-253-109.ap-south-1.compute.amazonaws.com:8080/systems/${_id}`;
  useEffect(() => {
    axios.get(url).then((res) => setSystem(res.data));
  }, []);
  useEffect(() => {
    axios.get(`${url}/components`).then((res) => setComponent(res.data));
  }, []);
  return (
    <>
      <div className="container">
        <div className="text-end">
          <h4>
            <span>System Name:</span> {system.name},
          </h4>
          <h5>{system.description}</h5>
        </div>

        <h4 className="text-center">Components</h4>
        <div className="container">
          <h6 className="text-center">add components to {system.name}</h6>
          <div className="container">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="Relationships" title="Relationships">
                <Relationships />
              </Tab>
              <Tab eventKey="Metrics" title="Metrics">
                <Metrics />
              </Tab>
              <Tab eventKey="Logs" title="Logs">
                <Logs />
              </Tab>
              <Tab eventKey="Network" title="Network">
                <Network />
              </Tab>
              <Tab eventKey="Heartbeat" title="Heartbeat">
                <Heartbeat />
              </Tab>
              <Tab eventKey="AddComponent" title="AddComponent">
                <AddComponent SID_url={url} SysName={system.name} />
              </Tab>
            </Tabs>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="container">
          <h6 className="text-center">
            available components in {system.name}{" "}
          </h6>

          <table className="table">
            <thead>
              <tr>
                <th>name</th>
                <th>description</th>
                <th>direction</th>
                <th>apiEndpoint</th>
                <th>frequency</th>
                <th>Created at</th>
              </tr>
            </thead>
            <tbody>
              {component.map((d) => {
                return (
                  <tr key={d.id}>
                    <td>{d.name}</td>
                    <td>{d.description} </td>
                    <td>{d.direction} </td>
                    <td>{d.apiEndpoint} </td>
                    <td>{d.frequency} </td>
                    <td>{d.createdAt} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ComponentsContainer;
