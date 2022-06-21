import axios from "axios";
import {
  TableWithBrowserPagination,
  Column,
  MenuItem,
} from "react-rainbow-components";
// import styled from "styled-components";

const DisplaySystem = ({ data, url }) => {
  const delSystem = (id) => {
    axios.delete(`${url}/${id}`);
  };
  return (
    <>
      {" "}
      <div className="rainbow-m-bottom_xx-large">
        <TableWithBrowserPagination
          showRowNumberColumn
          pageSize={10}
          data={data}
          keyField="id"
        >
          <Column header=" System Name" field="name" />
          <Column header="Description" field="description" />

          <Column type="action">
            <MenuItem
              label="Edit"
              onClick={(event, data) => console.log(`Edit ${event}`)}
            />
            <MenuItem
              label="Delete"
              onClick={(event, data) => delSystem(data.id)}
            />
          </Column>
        </TableWithBrowserPagination>
      </div>
    </>
  );
};

export default DisplaySystem;
