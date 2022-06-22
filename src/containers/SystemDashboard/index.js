import { Container, Row, Col } from "reactstrap";
import { Card, Avatar, Chart, Dataset } from "react-rainbow-components";
import { RiDashboardFill } from "react-icons/ri";

import { RiComputerFill, RiComputerLine } from "react-icons/ri";

import DisplaySystem from "./DisplaySystem";
import AddSystem from "./AddSystem";
import axios from "axios";
import { useEffect, useState } from "react";

const DashboardContainer = () => {
  const [system, setSystem] = useState([]);

  const systemURL =
    "http://ec2-13-233-253-109.ap-south-1.compute.amazonaws.com:8080/systems";
  useEffect(() => {
    axios.get(systemURL).then((res) => setSystem(res.data));
  }, [systemURL]);
  return (
    <>
      <Container className="dashboardContainer">
        <Row className="mt-3">
          <Card
            icon={<Avatar icon={<RiDashboardFill size={22} />} />}
            title="System Dashboard"
          />
          <Row className="mt-3">
            <Card
              icon={<Avatar icon={<RiComputerFill size={22} />} />}
              title="Add systems"
            />
            <AddSystem url={systemURL} />
          </Row>

          <Row className="mt-5">
            <Card
              icon={<Avatar icon={<RiComputerLine size={22} />} />}
              title="Display systems"
            />
            <DisplaySystem data={system} url={systemURL} />
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default DashboardContainer;
