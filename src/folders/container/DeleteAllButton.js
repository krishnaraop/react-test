import axios from "axios";

const DeleteAll = ({ id }) => {
  const delServer = (id) => {
    axios.delete(`http://13.233.253.109:8080/systems/${id}`);
  };
  return (
    <div>
      <button class="btn btn-danger" onClick={delServer(id)}>
        Delete All
      </button>
    </div>
  );
};

export default DeleteAll;
