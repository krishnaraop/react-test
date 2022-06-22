import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AddComponent from "./AddComponent";
import Heartbeat from "./Heartbeat";
import Logs from "./Logs";
import Metrics from "./Metrics";
import Network from "./Network";
import Relationships from "./Relationships";

function ControlledTabsExample() {
  const [key, setKey] = useState("Relationships");

  return (
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
          <AddComponent />
        </Tab>
      </Tabs>
    </div>
  );
}

export default ControlledTabsExample;
