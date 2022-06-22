import axios from "axios";
import {
  TableWithBrowserPagination,
  Column,
  MenuItem,
} from "react-rainbow-components";
// import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DisplaySystem = ({ data, url }) => {
  let navigate = useNavigate();
  const delSystem = (id) => {
    axios.delete(`${url}/${id}`);
  };
  // const displayComp = (_id) => {
  //   return(
  //     <>
  //      <Link to=`system/${_id}`/>
  //     </>

  //   )

  // };
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
          {" "}
          <Column header=" System Name" field="name" />
          <Column header="Description" field="description" />
          <Column type="action">
            <MenuItem
              label="View"
              onClick={(event, data) =>
                navigate(`/system/${data.id}/components`)
              }
            />
            <MenuItem
              label="Edit"
              onClick={(event, data) => navigate(`/system/${data.id}`)}
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
