import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  Row,
  Col,
  TabPane,
  Card,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

function Relationships() {
  return (
    <>
      <h4 className="text-center">Relationships</h4>
      <div className="container row">
        <div className="col-4">
          <div className="col">
            <select name="component1" id="1">
              <option value="1">ComponentA</option>
            </select>
            <br /> -to- <br />
            <select name="component2" id="2">
              <option value="2-1">ComponentB</option>
              <option value="2-2">ComponentC</option>
              <option value="2-3">ComponentD</option>
              <option value="2-4">ComponentE</option>
            </select>
          </div>
        </div>
        <div className="col-8">
          {" "}
          <Card body color="secondary" outline>
            <CardTitle tag="h4">Description</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eaque quaerat temporibus, sed numquam facere debitis voluptatem.
              Aperiam, mollitia. Quod, atque! Minima, alias incidunt dolorem
              autem nostrum dicta enim deserunt molestiae.
            </CardText>
          </Card>{" "}
          <br />
          <button className="btn btn-outline-secondary ">
            submit Relationships
          </button>
        </div>
      </div>
    </>
  );
}

export default Relationships;
