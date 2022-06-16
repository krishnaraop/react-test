import { Row, Col, Tab, Nav } from "react-bootstrap";
import Instances from "./Availability/Instances";
import LogAnalyzer from "./Availability/LogAnalyzer";
import NetworkMonitor from "./Availability/Network";
import ComponentRoot from "./Components";
import Dashboard from "./Dashboard";
import FunctionsContainer from "./Functions";
import System from "./System";

function LeftSidebar() {
  return (
    <>
      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="instances">
          <Row>
            <Col sm={2}>
              <Nav variant="pills success" className="flex-column secondary">
                {/* <Nav.Item>
                  <Nav.Link eventKey="dashboard"> Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="system">System</Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link eventKey="components"> Components</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="loganalyzer"> Log Analyzer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="instances"> Instances</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="functionaltests">
                    Functional Tests
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="networkmonitor">
                    {" "}
                    Network Monitor
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                {/* <Tab.Pane eventKey="dashboard">
                  <Dashboard />
                </Tab.Pane>
                <Tab.Pane eventKey="system">
                  <System />
                </Tab.Pane> */}
                <Tab.Pane eventKey="components">
                  <ComponentRoot />
                </Tab.Pane>
                <Tab.Pane eventKey="loganalyzer">
                  <LogAnalyzer />
                </Tab.Pane>
                <Tab.Pane eventKey="instances">
                  <Instances />
                </Tab.Pane>
                <Tab.Pane eventKey="functionaltests">
                  <FunctionsContainer />
                </Tab.Pane>
                <Tab.Pane eventKey="networkmonitor">
                  <NetworkMonitor />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>

      {/* <div>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">
              Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/system">
              System
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/components">
              Components
            </a>
          </li>
        </ul>
      </div> */}
    </>
  );
}

export default LeftSidebar;
