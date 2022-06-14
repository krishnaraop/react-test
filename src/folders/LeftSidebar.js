import { Row, Col, Tab, Nav } from "react-bootstrap";
import ComponentRoot from "./Components";
import Dashboard from "./Dashboard";
import System from "./System";

function LeftSidebar() {
  return (
    <>
      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="dashboard"> Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="system">System</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="components"> Components</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="dashboard">
                  <Dashboard />
                </Tab.Pane>
                <Tab.Pane eventKey="system">
                  <System />
                </Tab.Pane>
                <Tab.Pane eventKey="components">
                  <ComponentRoot />
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
