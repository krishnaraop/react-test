// import { Row, Col, Tab, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import Instances from "../Availability/Instances";
import axios from "axios";

function System() {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((data) => setComment(data.data));
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>NAME:</th>
            <th>Email:</th>
            <th>Description:</th>
          </tr>{" "}
        </thead>
        <tbody>
          {comment.map((d) => {
            return (
              <tr>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default System;
