import { Tabs, Tab } from "react-bootstrap";
import Heartbeat from "./Heartbeat";
import Metrics from "./Metrics";
import Network from "./Network";
import Relationships from "./Relationships";
import Logs from "./Logs";

function ComponentRoot() {
  return (
    <>
      <h2 className="text-center">Components</h2>
    <div className="container">


      <Tabs
        defaultActiveKey="Heartbeat"
        id="uncontrolled-tab-example"
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
      </Tabs>
    </div>

      <hr />
    </>
  );
}

export default ComponentRoot;
